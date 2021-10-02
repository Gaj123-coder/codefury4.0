import { useState } from "react";
import H2 from "../UI/H2/H2";
import Gen from "../gencss/gen.css";
import SS from "./sign.module.css";
import Button from "../UI/Button/Button";
import FS from "./sign.module.css";
import {useDispatch} from "react-redux";
import {Login_actions} from "../store/store";
import React from "react";
import app from "../../firebase";
const Signup=()=>{
    const [email,setEmail]=useState("");
    const dispatch=useDispatch();
    const [err,setErr]=useState("");
    const [pswrd,setPswrd]=useState("");
    const [email_tou,setEmailTou]=useState(false);
    const [pswrd_tou,setPswrdTou]=useState(false);
    const emailVal=email && email.trim().includes("@");
    const pswrdVal=pswrd && pswrd.trim().length>6;
    const emailChangeHandler=(event)=>{
        const email=event.target.value;
        setEmail(email);
        setEmailTou(true);
    }
    const passwordChangeHandler=(event)=>{
        const pswrd=event.target.value;
        setPswrd(pswrd);
        setPswrdTou(true);
    }
    const emailWasTouched=()=>{
        setEmailTou(true);
    }
    const pswrdWasTouched=()=>{
        setPswrdTou(true);
    }
    const submitHandler=(event)=>{
        app.auth().createUserWithEmailAndPassword(email,pswrd).then(
            (userCred)=>{var user=userCred.user}
        ).catch((error)=>{setErr("enter valid email id and password")});
        dispatch(Login_actions.login());
    }
    return (
        <React.Fragment>
        <form className={SS["form"]} onSubmit={submitHandler}>
        <H2>Sign Up Portal</H2>
        {email_tou && email==="" && <p className={SS["err"]}>Enter the proper email adress!</p>}
        {!emailVal && email_tou && email && <p className={SS["err"]}>Your email should include the character "@"!</p>} 
        <p className={SS["para"]}>Email:</p>
        <input className={Gen["focus"]} style={{display:"block"}} onBlur={emailWasTouched} onChange={emailChangeHandler} type="email"/>
        <hr></hr>
        {pswrd_tou && pswrd==="" && <p className={SS["err"]}>Enter the proper password!</p>}
        {!pswrdVal && pswrd_tou && pswrd && <p className={SS["err"]}>Your password should  be atleast 7 characters long!</p>}
        <p className={SS["para"]}>password:</p>
        <input className={Gen["focus"]} style={{display:"block"}} onBlur={pswrdWasTouched} onChange={passwordChangeHandler} type="password"/>
        <hr></hr>
        <Button className={FS['pos']}type="submit" title="Sign in" disable={!(emailVal && pswrdVal)}/>
    </form>
    </React.Fragment>
    );
}

export default Signup;