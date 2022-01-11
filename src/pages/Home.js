import { Link } from "react-router-dom";
import "./Home.css";

/**
 * Create Home Page to select user profile
 *
 * @return  {HTMLElement}
 */
export default function Home() {

    return (
        <div id="home">
            <h1>Bienvenue sur Sportsee</h1>

            <Link to="/user/12">
                <p>
                    Voir le profil de l'utilisateur 12
                </p>
            </Link>

            <Link to="/user/18">
                <p>
                    Voir le profil de l'utilisateur 18
                </p>
            </Link>
        </div>
    )
}