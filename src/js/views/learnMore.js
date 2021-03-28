import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const LearnMore = () => {
	const params = useParams();
	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src="..." alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">hi</h5>
						<p className="card-text">El id es {params.uid}</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
