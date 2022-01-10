import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import "./Charts.css";

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
            <ResponsiveContainer width="100%" height={168}>
                <RadialBarChart innerRadius={50} outerRadius={200} barSize={10} data={data}>
                    <PolarAngleAxis type="number" domain={[0, 100]}/>
                    <RadialBar minAngle={50}
                        label={{ position: 'center', fill: '#000' }}
                        clockWise={true}
                        dataKey='score'
                    >
                    </RadialBar>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}