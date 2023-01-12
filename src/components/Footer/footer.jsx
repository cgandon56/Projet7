import React from "react";
import logo from '../../images/LOGOfooter.png';

function Footer() {
	return (
		<footer className="footer">
			
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
				
				
				<p className="textFooter">© 2023 Kasa. All rights reserved</p>
				
				
			
		</footer>
	);
}

export default Footer