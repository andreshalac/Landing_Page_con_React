import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<NavBar />

				<Jumbotron />

				<div className="row">
					<div className="col-12 col-lg-3">
						<Card></Card>
					</div>
					<div className="col-12 col-lg-3">
						<Card></Card>
					</div>
					<div className="col-12 col-lg-3">
						<Card></Card>
					</div>
					<div className="col-12 col-lg-3">
						<Card></Card>
					</div>
				</div>

				<div className="row">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Home;
