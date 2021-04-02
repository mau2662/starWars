import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/Card";
import CardPlanets from "../component/CardPlanets";
import { Context } from "../store/appContext";
import CardCharacters from "../component/Card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<p className="h2 text-danger">Characters</p>
			<div className="scrolling-wrapper-flexbox">
				{store.characters.map((characters, index) => {
					return (
						<CardCharacters key={index} title={characters.name} uid={characters.uid}>
							{" "}
						</CardCharacters>
					);
				})}
			</div>

			<p className="h2 text-danger mt-2">Planets</p>
			<div className="scrolling-wrapper-flexbox">
				<div className="scrolling-wrapper-flexbox">
					{store.planets.map((planets, index) => {
						return (
							<CardPlanets key={index} title={planets.name} uid={planets.uid}>
								{" "}
							</CardPlanets>
						);
					})}
				</div>
			</div>
		</div>
	);
};
