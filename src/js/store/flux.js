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
			loadPeopleData: async (store) => {
				try { 
					// Fetch: descarga los personajes del servidor
					const response = await fetch(store.url.people); 
					const data = await response.json(); 

					// Verifica si data no está vacío antes de actualizar el estado 
					if (Array.isArray(data.results) && data.results.length > 0) { 
						setStore({ people: data.results }); 
					} 
				} catch (error) { 
					console.error("Error al descargar los personajes:", error); 
				} 
			},
			loadPlanetsData: async (store) => {
				try { 
					// Fetch: descarga los planetas del servidor
					const response = await fetch(store.url.planets); 
					const data = await response.json(); 

					// Verifica si data no está vacío antes de actualizar el estado 
					if (Array.isArray(data.results) && data.results.length > 0) { 
						setStore({ planets: data.results }); 
					} 
				} catch (error) { 
					console.error("Error al descargar los planetas:", error); 
				} 
			},
			loadVehiclesData: async (store) => {
				try { 
					// Fetch: descarga los vehiculos del servidor
					const response = await fetch(store.url.vehicles); 
					const data = await response.json(); 

					// Verifica si data no está vacío antes de actualizar el estado 
					if (Array.isArray(data.results) && data.results.length > 0) { 
						setStore({ vehicles: data.results }); 
					} 
				} catch (error) { 
					console.error("Error al descargar los vehiculos:", error); 
				} 
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
