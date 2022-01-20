import React from "react";
import './Time.css';
const Time = () => {
    const mon = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayset = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dateObj = new Date()
    let date = dateObj.getDate();
    let day = dayset[dateObj.getDay()];
    let month = mon[dateObj.getMonth()];
    let hour = dateObj.getHours()
    let minute = dateObj.getMinutes()
    let second = dateObj.getSeconds();
    return (
        <div className="Date">
            <h1 className="Day">{month} {date} {day} </h1>
            {/* <h5 className="Minute">{hour} : {minute} : {second}</h5> */}

            
        </div>
    )
}
export default Time;