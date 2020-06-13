import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import Search from './components/search-field/search';

class App extends Component {
	constructor() {
		super();

		this.state = {
			characters: [],
			searchField: ''
		};
	}

	async componentDidMount() {
		const response = await fetch('http://hp-api.herokuapp.com/api/characters');
		const jsonResponse = await response.json();
		this.setState({ characters: jsonResponse });
	}

	handleSearch = (e) => {
		const searchStr = e.target.value;
		this.setState({ searchField: searchStr });
	};

	render() {
		const { characters, searchField } = this.state;
		const filteredCharacters = characters.filter((character) => {
			return character.name.toLowerCase().includes(searchField.toLocaleLowerCase());
		});

		console.log(filteredCharacters);

		return (
			<div className="App">
				<h1>Harry Potter</h1>
				<Search placeholder="Search Characters" searchHandler={this.handleSearch} />
				<CardList characters={filteredCharacters} />
			</div>
		);
	}
}

export default App;
