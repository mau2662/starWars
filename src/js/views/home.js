import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/Card";
export const Home = () => {
	return (
		<div className="container">
			<p className="h2 text-danger">Characters</p>
			<div className="scrolling-wrapper-flexbox">
				{/* aqui va el map de planetas */}
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
			</div>

			<p className="h2 text-danger mt-2">Planets</p>
			<div className="scrolling-wrapper-flexbox">
				{/* aqui va el map de los personajes */}
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
				<Card> </Card>
			</div>
		</div>
	);
};
