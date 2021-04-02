import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const LearnMoreCharacter = () => {
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
								<div className="col-md-3">
									<img
										src="https://rock95.com/wp-content/uploads/2017/01/14137284401_4f06e9f8c6_z-400x200.jpg"
										alt="..."
										className="rounded float-left img-thumbnail"
									/>
								</div>
								<div className="col-md-9">
									<div className="card-body float-right">
										<h5 className="card-title text-center">{character.result.properties.name}</h5>
										<p className="card-text text-center">
											It is a long established fact that a reader will be distracted by the
											readable content of a page when looking at its layout. The point of using
											Lorem Ipsum is that it has a more-or-less normal distribution of letters.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<table className="table table-borderless text-danger">
						<thead>
							<tr>
								<th scope="col text-danger">Name</th>
								<th scope="col">Birth Year</th>
								<th scope="col">Gender</th>
								<th scope="col">Height</th>
								<th scope="col">Skin Color</th>
								<th scope="col">Eye Color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{character.result.properties.name}</td>
								<td>{character.result.properties.birth_year}</td>
								<td>{character.result.properties.gender}</td>
								<td>{character.result.properties.height}</td>
								<td>{character.result.properties.skin_color}</td>
								<td>{character.result.properties.eye_color}</td>
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

export default LearnMoreCharacter;
