import React from "react";
import Nav from '../Nav/nav';
import logo from '../../images/LOGO.png';

 
function Header() {
	return (
		<header className="headerWrap">
			<div className ="header_logo">
				<img className="logoHeader" src={logo} alt="logo de l'agence kasa" />
				</div>
			<Nav className="nav-header" />
		</header>
	);
}

export default Header