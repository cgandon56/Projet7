import React from 'react';
//import Banner from './components/Banner/banner';
import './styles/index.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Propos from './pages/Propos';
import Header from './components/Header/header';
import Logement from './pages/Logement';
//import Error from './components/Error/error';

 
function App() {
	return (
		<div className="App">
			<Header />
        
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Propos" element={<Propos />} />
						<Route path="/Logement/:id" element={<Logement />} />
				</Routes>
				
				</main>
		</div>
	);
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

