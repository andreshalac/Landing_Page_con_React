import React from "react";
import NavBar from "./navbar.jsx";
import Card from "./card.jsx";
import Cuerpo from "./cuerpo.jsx";

//create your first component
const Home = () => {
	return (
		<div className="conteiner">
			<NavBar />
			<Card />
			<Cuerpo
				title="Ya empezamos con ReactJs"
				text="Estamos cada vez más cerca de ser full stack software developers"
				imageUrl="https://motor.elpais.com/wp-content/uploads/2018/11/tesla-roadster-000_1920x1600c-1800x728.jpg"
			/>
		</div>
	);
};

export default Home;
