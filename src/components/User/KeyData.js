import IconCalories from "../../images/iconCalories.png";
import IconProteins from "../../images/iconProteins.png";
import IconCarbs from "../../images/iconCarbs.png";
import IconFat from "../../images/iconFat.png";
import "./KeyData.css"

/**
 * Create divs which contains user infos about alimentation
 *
 * @param   {Object}  props
 * @param   {Number}  keyData
 * @param   {Number}  keyData.calorieCount
 * @param   {Number}  keyData.proteinCount
 * @param   {Number}  keyData.carbohydrateCount
 * @param   {Number}  keyData.lipidCount
 * 
 * @return  {HTMLElement}
 */
export default function KeyData(props) {
    let keyData = props.keyData

    return (
        <div id="keyData">
            <div className="keyDataValue">
                <img className="keyDataImage" src={IconCalories} alt={IconCalories} />
                <p>
                    <b>{keyData.calorieCount}kCal</b> <br />
                    Calories
                </p>
            </div>

            <div className="keyDataValue">
                <img className="keyDataImage" src={IconProteins} alt={IconProteins} />
                <p>
                    <b>{keyData.proteinCount}g</b> <br />
                    Protéines
                </p>
            </div>

            <div className="keyDataValue">
                <img className="keyDataImage" src={IconCarbs} alt={IconCarbs} />
                <p>
                    <b>{keyData.carbohydrateCount}g</b> <br />
                    Glucides
                </p>
            </div>

            <div className="keyDataValue">
                <img className="keyDataImage" src={IconFat} alt={IconFat} />
                <p>
                    <b>{keyData.lipidCount}g</b> <br />
                    Lipides
                </p>
            </div>
        </div>
    )
}