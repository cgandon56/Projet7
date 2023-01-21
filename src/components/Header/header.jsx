
import Nav from '../Nav/nav';
import logo from '../../images/LOGO.png';
import { Link } from 'react-router-dom' ;
 
function Header() {
	return (
		<header className="headerWrap">
			<Link to="/">
			<img className="logoHeader" src={logo} alt="logo de l'agence kasa" />
			</Link>
			<Nav className="nav_Header" />
		</header>
	);
}

export default Header