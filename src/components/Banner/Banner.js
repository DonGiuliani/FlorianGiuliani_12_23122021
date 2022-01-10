import logo from "../../images/logo.png"
import { Link } from "react-router-dom"
import "./Banner.css"

export default function Banner() {
    return (
        <div id="banner">
            <img id="logo" src={logo} alt={logo} />
            <Link style={{textDecoration: "none"}} to="/">
                <p className="banner__button">
                    Accueil
                </p>
            </Link>
            <p className="banner__button">
                Profil
            </p>
            <p className="banner__button">
                Réglage
            </p>
            <p className="banner__button">
                Communauté
            </p>
        </div>
    )
}