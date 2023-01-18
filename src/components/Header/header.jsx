import React from "react";
import Nav from '../Nav/nav';
import logo from '../../images/LOGO.png';

 
function Header() {
	return (
		<header className="headerWrap">
			
				<img className="logoHeader" src={logo} alt="logo de l'agence kasa" />
				
			<Nav className="nav-header" />
		</header>
	);
}

export default Header