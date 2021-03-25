const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			characters: [],
			favs: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			loadPlanetInfo: () => {
				const url = "https://www.swapi.tech/api/planets";
				const requestOption = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(url, requestOption)
					.then(res => {
						return res.json();
					})
					.then(data => {
						// buscar en la api la propiedad de los planetas
						setStore({ planets: data });
					})
					.catch(error => console.log("error" + error));
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
