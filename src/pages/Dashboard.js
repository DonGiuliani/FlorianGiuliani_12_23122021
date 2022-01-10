import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPersonalUsersData } from "../services/dataManager";
import WelcomeMessage from "../components/User/WelcomeMessage";
import KeyData from "../components/User/KeyData";
import ActivityChart from "../components/Charts/ActivityChart";
import SessionChart from "../components/Charts/SessionChart";
import PerformanceChart from "../components/Charts/PerformanceChart";
import ScoreChart from "../components/Charts/ScoreChart";
import "./Dashboard.css"

export default function Dashboard() {

    const { id } = useParams();
    const [users, setUsers] = useState("loading");
    useEffect(async () => {
        if (users !== "loading") return;
        setUsers(await getPersonalUsersData(id));
    });

    console.log(users);
    
    return (
        users === "loading" ? "loading" :
            <div id="dashboard">
                <div id="charts">
                    <div id="charts__bloc">
                        <WelcomeMessage name={users.data.userInfos.firstName} />
                        <ActivityChart id={id} />
                    </div>
                    <div id="chart__line">
                        <SessionChart id={id} />
                        <PerformanceChart id={id} />
                        <ScoreChart score={users.data.todayScore} />
                    </div>
                </div>
                <KeyData keyData={users.data.keyData} />
            </div>
    )
}