import React from 'react';
import './search.styles.css';

const Search = (props) => {
	return (
		<div>
			<input
				className="search-box"
				type="search"
				placeholder={props.placeholder}
				onChange={props.searchHandler}
			/>
		</div>
	);
};

export default Search;
