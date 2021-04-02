import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const CardCharacters = props => {
	const favbutton = evento => {
		if ((status = false)) {
			return "&#x2661";
		} else {
			return "&#x2665";
		}
	};
	return (
		<div className="card mr-5 mb-3 w-25">
			<img
				src="https://rock95.com/wp-content/uploads/2017/01/14137284401_4f06e9f8c6_z-400x200.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<Link to={"/learnmorecharacters/" + props.uid}>
					<button type="button" className="btn btn-outline-primary">
						Learn More
					</button>
				</Link>
				<button type="button" className="btn btn-outline-warning float-right">
					&#x2661;
				</button>
			</div>
		</div>
	);
};

CardCharacters.propTypes = {
	title: PropTypes.string,
	uid: PropTypes.number
};
export default CardCharacters;
