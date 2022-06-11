import React from "react";

const Card = () => {
	return (
		<div className="card text-center">
			<div className="card-header">Primer Proyecto con React</div>
			<div className="card-body">
				<h5 className="card-title">Se pone guapo</h5>
				<p className="card-text">Estamos a mitad de camino</p>
				<a href="#" className="btn btn-primary">
					Vamonos
				</a>
			</div>
			<div className="card-footer text-muted">333 días atras</div>
		</div>
	);
};

export default Card;
