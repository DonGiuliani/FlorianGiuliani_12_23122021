import IconZen from "../../images/iconZen.svg";
import IconSwim from "../../images/iconSwim.svg";
import IconBike from "../../images/iconBike.svg";
import IconStrength from "../../images/iconStrength.svg";
import "./Vertical.css";

export default function Vertical() {

    return (
        <div id="vertical">
            <div id="icons">
                <img className="icon" src={IconZen} alt={IconZen} />
                <img className="icon" src={IconSwim} alt={IconSwim} />
                <img className="icon" src={IconBike} alt={IconBike} />
                <img className="icon" src={IconStrength} alt={IconStrength} />
            </div>
            <p id="copyright">
                Copyright, SportSee 2020
            </p>
        </div>
    )
}