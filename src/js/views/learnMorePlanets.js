import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const LearnMorePlanets = () => {
	const params = useParams();
	const [planet, setPlanet] = useState({});
	const [loading, setLoading] = useState(true);
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
										<h5 className="card-title text-center">{planet.result.properties.name}</h5>
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
								<th scope="col">Diameter</th>
								<th scope="col">Terrain</th>
								<th scope="col">Created</th>
								<th scope="col">Climate</th>
								<th scope="col">Population</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{planet.result.properties.name}</td>
								<td>{planet.result.properties.diameter}</td>
								<td>{planet.result.properties.terrain}</td>
								<td>{planet.result.properties.created}</td>
								<td>{planet.result.properties.climate}</td>
								<td>{planet.result.properties.population}</td>
							</tr>
						</tbody>
					</table>
				</div>
			);
		} else {
			<div> Its loading</div>;
		}
	};

	const loadPlanet = async () => {
		const url = "https://www.swapi.tech/api/planets/" + params.uid;
		const requestOption = {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		};
		let response = await fetch(url, requestOption);
		let data = await response.json();
		console.log(data);
		setPlanet(data);
		setLoading(false);
	};
	useEffect(() => {
		loadPlanet();
	}, []);

	return <div> {showData()} </div>;
};

export default LearnMorePlanets;
