const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			main_url: "https://www.swapi.tech/api",
			url: {
				people: "",
				planets: "",
				vehicles: ""
			},
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			storeEndpoints: () => {
				const store = getStore();
				store.url.people = store.main_url + "/people";
				store.url.planets = store.main_url + "/planets"
				store.url.vehicles = store.main_url + "/vehicles"
				console.log("People: " + store.url.people);
				console.log("Planets: " + store.url.planets);
				console.log("Vehicles: " + store.url.vehicles);
			},
			loadData: async () => {
				const store = getStore();
				const actions = getActions();
				try {
					await actions.loadPeopleData(store); 
					await actions.loadPlanetsData(store); 
					await actions.loadVehiclesData(store); 
					console.log(store); // muestra los datos descargados
				} catch (error) {
					console.error("Error al descargar los datos:", error); 
				}
			},
			loadEntityData: async (url, entityKey) => {
                try {
                    // Fetch: descarga los datos del servidor
                    const response = await fetch(url);
                    const data = await response.json();

                    // Verifica si data no está vacío antes de actualizar el estado
                    if (Array.isArray(data.results) && data.results.length > 0) {
                        // Mapea las URLs de las entidades y realiza fetch en paralelo
                        const entityData = await Promise.all(
                            data.results.map(async (entity) => {
                                const entityResponse = await fetch(entity.url);
                                const entityData = await entityResponse.json();
                                return entityData.result.properties;
                            })
                        );

                        setStore({ [entityKey]: entityData });
                        console.log(entityData);
                    }
                } catch (error) {
                    console.error(`Error al descargar los ${entityKey}:`, error);
                }
            },
            loadPeopleData: async (store) => {
                const actions = getActions();
                await actions.loadEntityData(store.url.people, "people");
            },
            loadPlanetsData: async (store) => {
                const actions = getActions();
                await actions.loadEntityData(store.url.planets, "planets");
            },
            loadVehiclesData: async (store) => {
                const actions = getActions();
                await actions.loadEntityData(store.url.vehicles, "vehicles");
            },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
