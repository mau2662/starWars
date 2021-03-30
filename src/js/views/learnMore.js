import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const LearnMore = () => {
	const params = useParams();
	const [character, setCharacter] = useState({});
	//Se crea el hook para ver el estado de la pagina, se inicia en true porque se esta cargando
	const [loading, setLoading] = useState(true);
	//se crea esta funcion para que el data se muestre en el return de abajo
	const showData = () => {
		if (!loading) {
			return (
				<div className="container">
					<div className="container">
						<div className="card mb-3">
							<div className="row no-gutters">
								<div className="col-md-4">
									<img src="..." alt="..." />
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">{character.result.properties.name}</h5>
										<p className="card-text">El id es {params.uid}</p>
										<p className="card-text">
											<small className="text-muted">Last updated 3 mins ago</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<table className="table table-borderless">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">First</th>
								<th scope="col">Last</th>
								<th scope="col">Handle</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
								<td>@fat</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td colSpan="2">Larry the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
				</div>
			);
		} else {
			<div> Its loading</div>;
		}
	};

	const loadCharacter = async () => {
		const url = "https://www.swapi.tech/api/people/" + params.uid;
		const requestOption = {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		};
		let response = await fetch(url, requestOption);
		let data = await response.json();
		console.log(data);
		setCharacter(data);
		//se pone en falso porque ya la info (el fetch) se cargo en mi app y se cambia el estado
		setLoading(false);
	};
	//el use effect se ejecuta luego de que se monta el componente en la pagina, por lo tanto crea un error ya que llega indefinido
	useEffect(() => {
		loadCharacter();
	}, []);

	return <div> {showData()} </div>;
};

export default LearnMore;
