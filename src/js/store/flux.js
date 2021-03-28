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

			loadPlanetInfo: async () => {
				const url = "https://www.swapi.tech/api/planets";
				const requestOption = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				let response = await fetch(url, requestOption);
				let data = await response.json();
				setStore({ planets: data.results });

				// .then(res => {
				// 	return res.json();
				// })
				// .then(data => {
				// 	setStore({ planets: data.results });
				// })
				// .catch(error => console.log("error" + error)) ;
			},

			loadCharacterInfo: async () => {
				const url = "https://www.swapi.tech/api/people";
				const requestOption = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				};
				let response = await fetch(url, requestOption);
				let data = await response.json();
				setStore({ characters: data.results });
				// 		.then(res => {
				// 			return res.json();
				// 		})
				// 		.then(data => {
				// 			setStore({ characters: data.results });
				// 		})
				// 		.catch(error => console.log("error" + error));
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
