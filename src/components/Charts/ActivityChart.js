import { useState, useEffect } from "react";
import { getActivityData } from "../../services/dataManager";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Charts.css";

export default function ActivityChart(props) {

    const [activity, setActivity] = useState("loading")
    useEffect(async () => {
        if (activity !== "loading") return;
        setActivity(await getActivityData(props.id))
    })

    return (
        activity === "loading" ? "loading" :
            <div id="activity__chart">
                <div id="legend__bloc">
                    <p>
                        Activité quotidienne
                    </p>
                    <div id="legend">
                        <p id="weight">
                            <span id="red__dot"></span>
                            Poids (kg)
                        </p>
                        <p id="calories">
                            <span id="black__dot"></span>
                            Calories brûlées (kCal)
                        </p>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="70%">
                    <BarChart data={activity.data.sessions}>
                        
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} />
                        <Bar dataKey="kilogram" fill="#000" barSize={10} radius={[10, 10, 0, 0]} />
                        <XAxis dataKey="day" />
                        <YAxis type="number" domain={[0, 100]} />
                        <Tooltip />
                    </BarChart>
                </ResponsiveContainer>
            </div>
    )
}