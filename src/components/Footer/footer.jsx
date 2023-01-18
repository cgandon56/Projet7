import React from "react";
import logo from '../../images/LOGOfooter.png';

function Footer() {
	return (
		<footer className="footer">
			
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
				<div className = "footer_Content">
				
				<p className="footer_Text">© 2023 Kasa. All rights reserved</p>
				</div>
				
			
		</footer>
	);
}

export default Footer