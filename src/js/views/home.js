import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/Card";
export const Home = () => {
	return (
		<div className="container">
			<p className="h2">Characters</p>
			<div className="scrolling-wrapper-flexbox">
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
