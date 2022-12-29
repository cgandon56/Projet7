import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className ="nav-header">
            <Link to="/" className = "nav-header-link-home">Accueil</Link>
            <Link to="/Propos" className = "nav-header-link-about" >A propos</Link>
        </nav>
    )
}

export default Nav