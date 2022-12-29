import React from "react";
import Nav from '../Nav/nav';
import logo from '../../images/LOGO.png';

 
function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</figure>
			<Nav className="nav-header" />
		</header>
	);
}

export default Header