import Iform from "../forms/iform"
import React from "react"
import { useState } from "react";
import Ibutton from "../buttons/ibutton";
import Itextbox from "../textboxs/itextbox";
import Idatetime from "../datetimes/idatetime";
import { userinfoContext } from "../contexts";
import './signup.css';

const Input =({Onsubmit,closing}) =>{
    const [mode,setMode] = useState('email');
    return(
        <>
            <Iform theme='light' handleSubmit={Onsubmit} handleClose={closing} isX = {true}>
                <div className="content">
                    <h2 className="title">Create your account</h2>
                    <Itextbox placeholder="Name" styles={{backgroundColor: "transparent",width:"calc(50% + 125px)",height:"auto",borderColor:"#1304b8"}} />
                    
                    {mode == 'email' && <Itextbox placeholder="Email" styles={{backgroundColor: "transparent",width:"calc(50% + 125px)",height:"auto",borderColor:"#6c757d"}} /> }
                    {mode == 'phone' && <Itextbox placeholder="Phone" styles={{backgroundColor: "transparent",width:"calc(50% + 125px)",height:"auto",borderColor:"#6c757d"}} /> }  
                    <span style={{width:"calc(50% + 125px)",cursor:"pointer"}} onClick={()=> {if(mode == 'email'){setMode('phone');}else if(mode=='phone'){setMode('email');}}}>Use {mode} instead</span>
                    <div style={{width:"calc(50% + 125px)"}}>
                        <h3>Date of birth</h3>
                        <p>This will not be shown publicly.Confirm your own age, even if This<br/>
                            account is for a business, a pet, or something else.
                        </p>
                    <Idatetime styles={{backgroundColor: "transparent",width:"calc(50%+125px)",height:"auto"}}/>
                    </div>
                    <Ibutton icon='' caption='Next' styles={{backgroundColor: "#6c757d",width:"calc(50% + 125px)",marginTop:"30px",height:"auto",borderColor:"#96c777",borderStyle:"solid",borderWidth:"2px"}} font={{fontWeight:"bold",color:"white"}} handleClick={Onsubmit}/>
                </div>
            </Iform>
        </>
    )
}

const Verification =(Onsubmit,closing,submitted) =>{
    return(
        <>
            <Iform theme='light' handleSubmit={submitted} handleClose={closing}  isX = {true}>
                <div className="content">
                    <img src='./asset/icons/shield.png' className="mark" alt=""/>
                    <h2 className="verified">Authenticate your account</h2>
                    <span style={{textAlign:"center"}}>We need to make sure that you're a real person.</span>
                    <Ibutton icon='' caption='Authenticate' styles={{backgroundColor: "black",color:"white",width:"calc(50% + 125px)",marginTop:"30px",height:"auto"}} font={{fontWeight:"bold",color:"white"}} handleClick={Onsubmit}/>
                    <span style={{textAlign:"center"}}>57317c002368ba19.2960124401</span>
                    <div style={{marginLeft:"auto",marginRight:"auto"}}>
                        <img src='./asset/icons/audio.gif' className="mark" alt=""/>
                        <span style={{display:"block",textAlign:"left"}}>Audio</span>
                    </div>
                    
                </div>
            </Iform>
        </>
    )
}

const Signup =() =>{
    const submitted=() => {
        setVerified(1);
    }

    const verificated=() => {
        
    }
    const closing =() =>{

    }

    const [username,setUsername] = useState('');
    const [verified,setVerified] = useState(0);
    
    return(
        <>
            {verified == 0 && <Input Onsubmit={submitted} closing ={closing}/>}
            {verified == 1 && <Verification Onsubmit={verificated}  closing ={closing} submitted ={submitted}/>}
        </>
    )
}
export default Signup;