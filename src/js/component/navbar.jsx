import React from "react";
import "../../styles/NavBar.css";

const NavBar = () => {
	return (
		<>
			<div classNameName="row">
				<nav className="navbar navbar-light bg-light">
					<div className="container-fluid">
						<div classNameName="col-8">
							<h5>Welcome</h5>
						</div>

						<div classNameName="col-4">
							<div classNameName="container-enlaces-navbar">
								<a className="navbar-brand" href="#">
									Home
								</a>
								<a className="navbar-brand" href="#">
									About
								</a>
								<a className="navbar-brand" href="#">
									Services
								</a>
								<a className="navbar-brand" href="#">
									Contact
								</a>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
