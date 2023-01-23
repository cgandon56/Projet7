import React from 'react';
import { BrowserRouter } from "react-router-dom"; // pour enveleopper le contenu
import './styles/index.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Propos from './pages/Propos';
import Header from './components/Header/header';
import Logement from './pages/Logement';
import Footer from './components/Footer/footer';
import Error from './pages/Error';


//Fonction pour définir les routes accessibles
function App() {
	return ( 
		<BrowserRouter> 
			<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/propos" element={<Propos />} />
						<Route path="/logement/:id" element={<Logement />} />
						<Route path="*" element={<Error />} />
						<Route path ="/error" element={<Error />}/>	
					</Routes>
				</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;



