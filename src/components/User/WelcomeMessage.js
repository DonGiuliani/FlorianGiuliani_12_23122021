import "./WelcomeMessage.css"

export default function WelcomeMessage(props) {
    return (
        <div id="welcome">
            <p id="welcome--message">
                Bonjour 
                <span id="user__name">
                    {props.name}
                </span>
            </p>
            <p>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
    )
}