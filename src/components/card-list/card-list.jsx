import React from 'react';
import './card-list.styles.css';
import Card from '../card/card';

const CardList = (props) => {
	return (
		<div className="card-list">
			{props.characters.map((character, index) => {
				return <Card key={index} character={character} />;
			})}
		</div>
	);
};

export default CardList;
