import React from 'react';
import './card.styles.css';

const Card = (props) => {
	return (
		<div className="card-container">
			<img src={props.character.image} alt={props.character.name} />
			<h2>{props.character.name}</h2>
			<p>{props.character.house}</p>
		</div>
	);
};

export default Card;
