import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import "./Charts.css";

/**
 * Create the Score Chart with Recharts
 *
 * @param   {Object}  props   
 * @param   {Number}  props.score
 *
 * @return  {HTMLElement}
 */
export default function ScoreChart(props) {

    let data = [{
        score: props.score * 100,
        fill: "red"
    }]

    return (
        <div id="score__chart">
            <p id="score">
                Score
            </p>
            <ResponsiveContainer width="100%" height={150}>
                <RadialBarChart innerRadius={69} outerRadius={200} barSize={10} data={data}>
                    <PolarAngleAxis type="number" domain={[0, 100]} />
                    <RadialBar minAngle={50}
                        label={{ position: 'center', fill: '#000' }}
                        clockWise={true}
                        dataKey='score'
                    >
                    </RadialBar>
                </RadialBarChart>

            </ResponsiveContainer>
            <div className="container">
                <p className='radialBarText'>
                    <strong>{data[0].score}%</strong> <br />
                    de votre objectif
                </p>
            </div>
        </div>
    )
}