// import logo from './logo.svg';
import React, {Component} from 'react';
import CountryGame from './CountryGame';
import './App.css';

class App extends Component{
	render(){
		
		const url = "https://product-image.juniqe-production.juniqe.com/media/catalog/product/cache/x386/55/128/55-128-203L-Gold-NM.jpg";
		
		return(
			<div className="flag-app">
				<header
					className="title-header"
					style={{backgroundImage: `url(${url})`}}
				>
				<h1 className="title-text">Guess The Flag</h1>
				</header>
				<CountryGame />
			</div>
		)
	}
}

export default App;
