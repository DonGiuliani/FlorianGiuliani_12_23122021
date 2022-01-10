import { useState, useEffect } from "react";
import { getSessionData } from "../../services/dataManager";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Charts.css";

export default function SessionChart(props) {

    const [session, setSession] = useState("loading")
    useEffect(async () => {
        if (session !== "loading") return;
        setSession(await getSessionData(props.id))
    })

    return (
        session === "loading" ? "loading" :
            <div id="session__chart">
                <p id="session__chart--title">
                    Durée moyenne des sessions
                </p>
                <ResponsiveContainer height={145}>
                    <LineChart data={session.data.sessions}>
                        <XAxis dataKey="day" stroke="#FFF"/>
                        <Line type="monotone" dataKey="sessionLength" stroke="#FFF" dot={false} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
    )
}