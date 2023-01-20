import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className = "message_Error">
            <h1 className = "error_Number">404</h1>
            <h2 className = "errorText">Oups! La page que vous demandez n'existe pas.</h2>
            <div className = "return">  
                <Link ClassName ="link_Home" to={`/`}>Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
  }
  
  export default ErrorPage