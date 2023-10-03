import React from "react";
//  import "./../styles/index.css"
//include images into your bundle

import CardDeckBuilder from "./cardgenerator";
  import ChessClock from "./ChessClock";
import CardDeckguilder from "./cardbenerator";
//create your first component
const Home = () => {
	return <div className="bigbox">
		
		<ChessClock></ChessClock> 
		
		<div className="primary"><CardDeckguilder></CardDeckguilder></div>
		<div className="container">
				
			
				<div className="top box">
					<h1 className="text text-with-borders">defender</h1>
					<CardDeckBuilder></CardDeckBuilder>
					</div>
				
				<div className="bottom box">
					<h1 className="text text-with-borders">attacker</h1>
					
					<CardDeckBuilder></CardDeckBuilder>
				
					</div>
					
			</div>
	</div>
};

export default Home;
