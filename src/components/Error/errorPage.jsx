import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className = "messageError">
            <h1 className = "errorNumber">404</h1>
            <h2 className = "errorText">Oups! La page que vous demandez n'existe pas.</h2>
            <div className = "return">  
            <Link ClassName ="linkHome" to={`/`}>Retourner sur la page d'accueil</Link>
        </div>
        </div>
    )
  }
  
  export default ErrorPage