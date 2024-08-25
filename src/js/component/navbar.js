import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<button className="btn border-0 navbar-brand text-white fw-bold mb-0 h1">Branden Reilly | Web Developer</button>
			</Link>
			<div className="ml-auto">
				<Link to="/about">
					<button className="btn border-0 text-white 1h-1 fw-bold">About</button>
				</Link>
				<Link to="/contact">
					<button className="btn border-0 text-white 1h-1 fw-bold">Contact</button>
				</Link>
			</div>
		</nav>
	);
};
