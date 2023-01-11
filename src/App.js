import React from 'react';

import './styles/index.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Propos from './pages/Propos';
import Header from './components/Header/header';
import Logement from './pages/Logement';
import Footer from './components/Footer/footer';
import Error from './pages/Error';


 
function App() {
	return (
		<div className="App">
			
			<body>
			
			
				<main>
				
					<Routes>
					
						<Route path="/" element={<Home />} />
						<Route path="/Propos" element={<Propos />} />
						<Route path="/Logement/:id" element={<Logement />} />
						<Route path="*" element={<Error />} />
				</Routes>
				
				</main>
				
				
				
				</body>
		</div>
	);
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

