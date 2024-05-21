import React, { useState,useContext } from 'react'
import classes from "./signUp.module.css"
import amazonLogo from "../../assets/images/amazon-Logo.png"
import { Link } from 'react-router-dom'

import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {DataContext} from "../../Components/DataProvider/DataProvider"
import { Type } from '../../Utility/action.type'



const Auth = () => {

  // ` Hold the form(user) info in state
  // * using state in the from is called controlled and using ref is called unControlled

     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")

    //`  to hold the error
     const [error,setError] = useState("")
    
// * we will provide the user to other component by context
    const [{user}, dispatch] = useContext(DataContext)
    console.log(user); //` it's initially null from reducer.js then after some action applied from dispatch it'll have some value

// console.log(email,password);

// ` function for sign in and sign up

const authHandler =  async(e)=>{
  // ` to prevent page reload
     e.preventDefault()
  // console.log(e.target.name); //* when signIn button clicked the name will be signIn
  if(e.target.name === "signIn"){
    // ` to sign in from firebase auth
    signInWithEmailAndPassword(auth,email,password)
    .then((userInfo)=>{
      // console.log(userInfo);
      // ` dispatch
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user  
      })

    }).catch((err)=>{
      console.log(err);
    })

  }else{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userInfo)=>{
      // console.log(userInfo);
      // ` dispatch
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user  
      })

    }
    ).catch((err)=>{
      console.log(err);
    })

  }

}


  return (
    <section className={classes.logIn}>
      {/* amazon Logo */}
      <Link >
          <img src={amazonLogo} alt="" />
      </Link>

      {/* form */}
      <div className={classes.logIn_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
          <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email" placeholder="Email" id='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
             type="password" placeholder="Password" id='password' />
          </div>
          
          
          <button 
          name='signIn'
          onClick={authHandler}
          type="submit" className={classes.logIn_signInButton}>Sign In</button>
        </form>
        {/* agreement */}
        <p>
          By signing in you agree to AMAZON FAKE CLONE conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice  
        </p>

        {/* sign up button */}
          <button 
           name='signUp'
          onClick={authHandler}
          className=
          {classes.logIn_registerButton}>Create your Amazon Account</button>
      </div>
      

    </section>
  )
}

export default Auth