import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<p className="h2 text-danger">Characters</p>
			<div className="scrolling-wrapper-flexbox">
				{store.characters.map((characters, index) => {
					return (
						<Card key={index} title={characters.name} uid={characters.uid}>
							{" "}
						</Card>
					);
				})}
			</div>

			<p className="h2 text-danger mt-2">Planets</p>
			<div className="scrolling-wrapper-flexbox">
				<div className="scrolling-wrapper-flexbox">
					{store.planets.map((planets, index) => {
						return (
							<Card key={index} title={planets.name}>
								{" "}
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
};
