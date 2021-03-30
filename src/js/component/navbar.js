import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleDelete = item => {
		actions.deleteFav(item);
	};

	const favorites = () => {
		return store.favs.map((item, index) => {
			return (
				<a className="dropdown-item" key={index}>
					{item}
					<button
						className="btn float-right"
						onClick={evento => {
							handleDelete(item);
						}}>
						{" "}
						<i className="fas fa-trash" />{" "}
					</button>
				</a>
			);
		});
	};
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
							<span className="badge badge-light">{store.favs.length}</span>
						</button>

						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{favorites()}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
