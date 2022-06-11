import React from "react";
import PropTypes from "prop-types";

const Cuerpo = (props) => {
	return (
		<div className={props.title}>
			<div className="card-group">
				<div className="card">
					<img
						src={props.imageUrl}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.text}</p>
					</div>
				</div>
				<div className="card">
					<img
						src={props.imageUrl}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.text}.</p>
					</div>
				</div>
				<div className="card">
					<img
						src={props.imageUrl}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Cuerpo.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	text: PropTypes.string,
};

export default Cuerpo;
