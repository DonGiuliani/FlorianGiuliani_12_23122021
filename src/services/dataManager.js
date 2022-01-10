import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "./data"

const server           = "http://localhost:3000/user/";
const tradPerformances = {
    1    : 'Cardio',
    2    : 'Energie',
    3 : 'Endurance',
    4  : 'Force',
    5     : 'Vitesse',
    6 : 'Intensité'
};
const useMockedData    = false;

let data = null;

function extractUserData(source, userId){
    for(let user of source){
        if (user.userId === userId) {
            return user;
        }
    }
}

async function getPersonalUsersData(userId){
    if (useMockedData) return extractUserData(USER_MAIN_DATA, userId);
    const answer = await fetch(server+userId);
    data = await answer.json();
    return data;
}

async function getActivityData(userId){
    if (useMockedData) return extractUserData(USER_ACTIVITY, userId);
    const answer = await fetch(server+userId+"/activity");
    data = await answer.json();
    return data;
}

async function getSessionData(userId){
    if (useMockedData) return extractUserData(USER_AVERAGE_SESSIONS, userId);
    const answer = await fetch(server+userId+"/average-sessions");
    data = await answer.json();
    return data;
}

async function getPerformanceData(userId){
    if (useMockedData) return getPerformances(extractUserData(USER_PERFORMANCE, userId));
    const answer = await fetch(server+userId+"/performance");
    data = await answer.json();
    return getPerformances(data.data.data);
}

function getPerformances(data){
    const answer = [];
    for(let donnee of data) {
        answer.push ({
            value   : donnee.value,
            kind    : tradPerformances[donnee.kind]
        });
    }
    return answer;
}

export {
    getPersonalUsersData,
    getActivityData,
    getSessionData,
    getPerformanceData
}