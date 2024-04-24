import Iform from "../forms/iform"
import React from "react"
import { useState } from "react";
import Ibutton from "../buttons/ibutton";
import Itextbox from "../textboxs/itextbox";
import { userinfoContext } from "../contexts";
import './signin.css';

const Sign=({statusChanged1,statusChanged2,submitted,closing}) =>{
      return(
            <>
            <Iform theme='light' handleSubmit={submitted} handleClose={closing} isX = {true}>
                  <div className="content">
                        <h2 className="title">Sign in to X</h2>
                        <Ibutton icon='./asset/icons/google.png' caption='Sign in with Google' styles={{backgroundColor: "transparent",width:"50%",height:"auto",borderColor:"#96c777",borderStyle:"solid",borderWidth:"2px"}} font={{fontWeight:"normal",color:"#4d4d4d"}}/>
                        <Ibutton icon='./asset/icons/apple.png' caption='Sign in with Apple' styles={{backgroundColor: "transparent",width:"50%",height:"auto",borderColor:"#96c777",borderStyle:"solid",borderWidth:"2px"}} font={{fontWeight:"bold",color:"black"}}/>
                        <div class="hr-divider">
                              <span class="hr-divider-text">or</span>
                        </div>

                        <Itextbox placeholder="Phone, email, or username" styles={{backgroundColor: "transparent",width:"50%",height:"auto",borderColor:""}} />
                        <Ibutton icon='' caption='Next' styles={{backgroundColor: "black",width:"50%",height:"auto",borderColor:"#96c777",borderStyle:"solid",borderWidth:"2px"}} font={{fontWeight:"bold",color:"white"}} handleClick={statusChanged1}/>
                        <Ibutton icon='' caption='Forgot password?' styles={{backgroundColor: "transparent",width:"50%",height:"auto",borderColor:"#96c777",borderStyle:"solid",borderWidth:"2px"}} font={{fontWeight:"bold",color:"black"}}  handleClick={statusChanged2}/>
                        <div className="text-link">
                              <h2>Don't have an account?<a href="/signup">Sign up</a></h2>
                        </div>
                  </div>
            </Iform>
            </>
      )
}

const Resetpwd =({statusChanged3,submitted,closing})=>{
      return(
            <>
            <Iform theme='light' handleSubmit={submitted} handleClose={closing} isX = {true}>
                  <div className="content">
                        <div style={{position: "relative",width: "80%"}}>
                              <h2 className="title2">Find your X account</h2>
                              <p>Enter the email, phone number, or username associated with <br />your account to change your password.</p>

                              <Itextbox placeholder="Email, phone number, or username" styles={{backgroundColor: "transparent",width:"100%",height:"auto",borderColor:""}} />
                        </div>
                        <Ibutton icon='' caption='Next' styles={{backgroundColor: "#444",width:"80%",height:"auto",borderColor:"#96c777",borderStyle:"solid",borderWidth:"2px"}} font={{fontWeight:"bold",color:"white"}} handleClick={statusChanged3}/>
                  </div>
            </Iform>
            </>
      )
}

const Join =({statusChanged1,statusChanged2,submitted,closing})=>{
      return(
            <>
            <Iform theme='light' handleSubmit={submitted} handleClose={closing} isX = {true}>
                  <div className="content">
                        <h2 className="title">Join FLiK today</h2>
                        <Ibutton icon='./asset/icons/google.png' caption='Sign in with Google' styles={{backgroundColor: "transparent",width:"50%",height:"auto",borderColor:"#96c777",borderStyle:"solid",borderWidth:"2px"}} font={{fontWeight:"normal",color:"#4d4d4d"}}/>
                        <Ibutton icon='./asset/icons/apple.png' caption='Sign in with Apple' styles={{backgroundColor: "transparent",width:"50%",height:"auto",borderColor:"#96c777",borderStyle:"solid",borderWidth:"2px"}} font={{fontWeight:"bold",color:"black"}}/>
                        <div class="hr-divider">
                              <span class="hr-divider-text">or</span>
                        </div>

                        <Ibutton icon='' caption='Create account' styles={{backgroundColor: "black",width:"50%",height:"auto",borderColor:"#96c777",borderStyle:"solid",borderWidth:"2px"}} font={{fontWeight:"bold",color:"white"}} handleClick={statusChanged1}/>
                        
                        <div className="text-link">
                              <h3>By signing up,you agree to the <a href="/terms">Terms of Service</a>and <a href="/policy">Privacy Policy</a>, including <a href="/cookie">Cookie Use</a>.</h3>
                        </div>

                        <div className="text-link">
                              <h2>Have an account already?<a href="/login">Log in</a></h2>
                        </div>
                  </div>
            </Iform>
            </>
      )
}

const Signin =() =>{
      const submitted=() => {

      }

      const closing =() =>{

      }

      const handleClicked =() =>{

      }

      const statusChanged1=()=>{
            setStatus(2);
      }

      const statusChanged2=()=>{
            setStatus(1);
      }
      const[status,setStatus] = useState(0);
      
      // const [userinfo,setUserinfo] = useState({kind:0,content:''});
      return (
            <>
            {status ==0 && <Sign statusChanged1 ={statusChanged1} statusChanged2 ={statusChanged2}/>}
            {status ==1 && <Resetpwd statusChanged3 ={statusChanged1} submitted ={submitted} closing={closing}/>}
            {status ==2 && <Join statusChanged ={setStatus}/>}

            {/* <userinfoContext.Provider value={{ userinfo, setUserinfo }}> */}
                  
            {/* </userinfoContext.Provider> */}
            </>
      );
}
export default Signin;