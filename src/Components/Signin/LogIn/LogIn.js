import { useState } from 'react';
import shujaa from '../../../Pictures/shujaa.png';
import './LogIn.css';

const LogIn = ({ onRouteChange, setUserID, setUserName }) =>{
    const [passwordView, setpasswordView] = useState("password");
    const [eyeColor, seteyeColor] = useState("white");
    const [loginID, setLoginID] = useState("");
    const [loginPassword, setLoginPassword] = useState("")



    const onInputChange = (event) =>{
        let inputPlace = event.target.placeholder;
        if(inputPlace === "ID"){
            setLoginID(event.target.value);
        }else{
            setLoginPassword(event.target.value);
        }
    }

    // console.log(loginID, loginPassword);
    
    
    const viewPassword = () =>{
        if(passwordView === "password"){
            setpasswordView("text");
            seteyeColor("#256D85");
        }else{
            setpasswordView("password");
            seteyeColor("white");
        }
    }

    const onLogInSignIn = () =>{
        console.log("Sending login information");
        fetch('http://mashujaa-oss.herokuapp.com/api/auth/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}, 
            body: JSON.stringify({
                password: loginPassword,
                unique_identifier: loginID
            })
        })
        .then(reponse => reponse.json())
        .then(data => {
            console.log(data);
            alert(data.message);
            if(data.message === " authenticated successfully"){
                setUserID(loginID);
                setUserName(data.data[0].first_name, data.data[0].last_name);
                if(loginID[0] === "S"){
                    onRouteChange("studentdash");
                }else if(loginID[0] === "L"){
                    onRouteChange("lecturerdash");
                }

            }
        }).catch(error =>{
          console.log("Login", error);
        })
    }
    return(
        <div className='logInContainer'>
            <div className='logIn'>
                <img className='logInImage' src={shujaa} alt="logo" />
                <h2>Log-in</h2>
                <input onChange={onInputChange} className='logInEmailInput' type="text" placeholder='ID' />
                <div className='logInPasswordInput'>
                    <input onChange={onInputChange} type={passwordView} placeholder='Password'/>
                    <svg onClick={viewPassword} style={{background: eyeColor}} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5203 5.73096C8.95171 5.73096 7.6722 7.2397 7.6722 9.09809C7.6722 10.9517 8.94746 12.4652 10.5203 12.4652C12.0889 12.4652 13.3684 10.9565 13.3684 9.09809C13.3684 7.24449 12.0889 5.73096 10.5203 5.73096V5.73096Z" fill="#47B5FF"/>
                    <path d="M10.5203 14.4192C7.99526 14.4192 5.93783 12.0339 5.93783 9.09787C5.93783 6.16181 7.99526 3.77656 10.5203 3.77656C13.0453 3.77656 15.1027 6.16181 15.1027 9.09787C15.1027 12.0339 13.0453 14.4192 10.5203 14.4192V14.4192ZM20.9902 8.58058C18.2781 3.67597 14.6224 0.974609 10.7073 0.974609C6.79226 0.974609 3.1365 3.67597 0.424431 8.58058C0.250145 8.8967 0.250145 9.29903 0.424431 9.61515C3.1365 14.5198 6.79226 17.2211 10.7073 17.2211C14.6224 17.2211 18.2739 14.5198 20.9902 9.61515C21.1645 9.29903 21.1645 8.8967 20.9902 8.58058Z" fill="#06283D"/>
                    </svg>
                </div>
                <div className='logInCenter'>
                    <button onClick={onLogInSignIn} className='logInSignIn'>Sign In</button>
                    <p className='logInForgotPassword' onClick={() => onRouteChange("signinhome")}>Back</p>
                </div>
            </div>
        </div>
    )   
}

export default LogIn;