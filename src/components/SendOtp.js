import React, { useState } from "react";
//import SendSMS from 'react-native-sms';

const SendOtp = () => {
    const [pin, setPin] = useState([576,196,415,764]);
    const [number, setNumber] = useState("");

    const onChange = (e) => {
        setNumber(e.target.value);
    }

    const submit = () => {
        let i=Math.floor(Math.random()*4);
        /*if(number.length===10 && parseInt(number)!==NaN)
        SendSMS.send({
            body: `OTP: ${pin[i]}`,
            recipients: [number],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {
            alert('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
        });*/
    }
    return (
        <div className="app">
            <input type="text" placeholder="enter mobile number" onChange={onChange} required></input>
            <br></br>
            <button onClick={submit}>SEND OTP</button>
        </div>
    );
}
export default SendOtp;