import {Link} from "react-router-dom";
import "./Error404.css"

export default function Error404() {
    
    return (
        <div id="error404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link style={{textDecoration: "none"}} to="/">
                <p>Retourner sur la page d'accueil</p>
            </Link>
        </div>
    )
}