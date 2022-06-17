import React from "react";

const Card = () => {
	return (
		<div className="card">
			<div className="card-body">
				<blockquote className="blockquote mb-0">
					<p>Gracias por la paciencia Marcos</p>
					<footer className="blockquote-footer">
						Vamos a convertirnos en{"Full Stack Dev"}
					</footer>
				</blockquote>
				<button type="button" className="btn btn-primary btn-lg">
					button
				</button>
			</div>
		</div>
	);
};

export default Card;
