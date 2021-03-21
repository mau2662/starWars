import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 ">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1" />
					<h1 className="float-left">
						<i className="fab fa-jedi-order" />
					</h1>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
							<span className="badge badge-light">0</span>
						</button>

						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item">
								Grogu <i className="fas fa-trash float-right" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
