import React from "react";

const Card = () => {
	return (
		<div className="card mr-5 mb-3 w-25">
			<img
				src="https://rock95.com/wp-content/uploads/2017/01/14137284401_4f06e9f8c6_z-400x200.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<button type="button" className="btn btn-outline-primary">
					Learn More
				</button>

				<button type="button" className="btn btn-outline-warning float-right">
					&#x2661;
				</button>
			</div>
		</div>
	);
};

export default Card;
