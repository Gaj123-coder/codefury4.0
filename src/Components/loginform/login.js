import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import {Auth_actions} from "../store/store";
import FS from "./login.module.css";
import Gen from "../gencss/gen.css";
import Button from "../UI/Button/Button";
import H2 from "../UI/H2/H2";
import {Login_actions} from "../store/store";
import React from "react";
import app from "../../firebase";
const Login=()=>{
    const dispatch=useDispatch();
    const email=useSelector(state=>state.Auth.email);
    const pswrd=useSelector(state=>state.Auth.pswrd);
    const [email_tou,setEmailTou]=useState(false);
    const [pswrd_tou,setPswrdTou]=useState(false);
    const emailVal=email && email.trim().includes("@");
    const pswrdVal=pswrd && pswrd.trim().length>6;
    const [err,setErr]=useState("");
    const emailChangeHandler=(event)=>{
        const email=event.target.value;
        dispatch(Auth_actions.settingEmail({email:email}));
        setEmailTou(true);
    }
    const passwordChangeHandler=(event)=>{
        const pswrd=event.target.value;
        dispatch(Auth_actions.settingPswrd({pswrd:pswrd}));
        setPswrdTou(true);
    }
    const emailWasTouched=()=>{
        setEmailTou(true);
    }
    const pswrdWasTouched=()=>{
        setPswrdTou(true);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        localStorage.setItem("cf_email",email);
        localStorage.setItem("cf_pswrd",pswrd);
        dispatch(Login_actions.login());
    }
    return (<form className={FS["form"]} onSubmit={submitHandler}>
        <H2>Login Portal</H2>
        {err && <p className={FS["err"]}>{err}</p>}
        {email_tou && email==="" && <p className={FS["err"]}>Enter the proper email adress!</p>}
        {!emailVal && email_tou && email && <p className={FS["err"]}>Your email should include the character "@"!</p>} 
        <p className={FS["para"]}>Email:</p>
        <input className={Gen["focus"]} style={{display:"block"}} onBlur={emailWasTouched} onChange={emailChangeHandler} type="email"/>
        <hr></hr>
        {pswrd_tou && pswrd==="" && <p className={FS["err"]}>Enter the proper password!</p>}
        {!pswrdVal && pswrd_tou && pswrd && <p className={FS["err"]}>Your password should  be atleast 7 characters long!</p>}
        <p className={FS["para"]}>password:</p>
        <input className={Gen["focus"]} style={{display:"block"}} onBlur={pswrdWasTouched} onChange={passwordChangeHandler} type="password"/>
        <hr></hr>
        <Button className={FS['pos']}type="submit" title="login" disable={!(emailVal && pswrdVal)}/>
    </form>);
}

export default React.memo(Login);