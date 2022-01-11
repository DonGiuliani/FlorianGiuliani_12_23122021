import { useState, useEffect } from "react";
import { getPerformanceData } from "../../services/dataManager";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import "./Charts.css";

/**
 * Create the Performance Chart with Recharts
 *
 * @param   {Object}  props
 *
 * @return  {HTMLElement}
 */
export default function PerformanceChart(props) {

    const [performance, setPerformance] = useState("loading")
    useEffect(async () => {
        if (performance !== "loading") return;
        setPerformance(await getPerformanceData(props.id))
    })

    return (
        performance === "loading" ? "loading" :
            <div id="performance__chart">
                <ResponsiveContainer height={204}>
                    <RadarChart outerRadius="70%" data={performance}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="kind" stroke="#FFF" style={{fontSize:8}} />
                        <Radar dataKey="value" fill="#FF0101B2" />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
    )
}