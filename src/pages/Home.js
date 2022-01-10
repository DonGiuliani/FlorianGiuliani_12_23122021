import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {

    return (
        <div id="home">
            <h1>Home</h1>

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