import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className ="nav_header">
            
            <Link to="/" className = "nav_header_link_home">Accueil</Link>
            <Link to="/Propos" className = "nav_header_link_about" >A propos</Link>
            
        </nav>
    )
}

export default Nav