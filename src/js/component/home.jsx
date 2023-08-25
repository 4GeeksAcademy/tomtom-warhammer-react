import React from "react";

//include images into your bundle

import CardDeckBuilder from "./cardgenerator";
import ChessClock from "./ChessClock";
//create your first component
const Home = () => {
	return <div className="container">
				
				<ChessClock></ChessClock>
				<div className="top box">
					<h1>defender</h1>
					<CardDeckBuilder></CardDeckBuilder>
					</div>
				<div className="bottom box">
					<h1>attacker</h1>
					<CardDeckBuilder></CardDeckBuilder>
					</div>
			</div>
};

export default Home;
