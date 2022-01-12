import "./WelcomeMessage.css"

/**
 * Create a personalised welcome message for each user
 *
 * @param   {Object}  props
 * @param   {String}  props.name
 *
 * @return  {HTMLElement}
 */
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