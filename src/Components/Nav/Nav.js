import NS from "./Nav.module.css";
import React from "react";
import H1 from "../UI/H1/H1";
import { Login_actions } from "../store/store";
import { useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
const Nav = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem("cf_email");
    localStorage.removeItem("cf_pswrd");
    dispatch(Login_actions.logout());
  };
  return (
    <React.Fragment>
      <H1 className={NS["h1s"]}>V-Learning</H1>
      <img
        className={NS["img"]}
        src="https://media1.thehungryjpeg.com/thumbs2/ori_3809140_pmtaf7gvznsbkb7bvqj4oe4o0nekm41eh670o2j6_monogram-vl-logo-design.jpg"
        alt="err"
      />
      <div className={NS["pose"]}>
        <div className={NS["hr"]}></div>
        <div className={NS["bar"]}>
          <Link className={NS["link"]} to="/home">
            <div>home</div>
          </Link>
          <Link className={NS["link"]} to="/content1">
            <div>contenta</div>
          </Link>
          <Link className={NS["link"]} to="/content2">
            <div>contentb</div>
          </Link>
          <Link className={NS["link"]} to="/content3">
            <div>contentc</div>
          </Link>
        </div>
      </div>
      <Button
        font="10px"
        height="20px"
        width="100px"
        className={NS["posi"]}
        onClick={logoutHandler}
        type="submit"
        title="log out"
      />
    </React.Fragment>
  );
};

export default React.memo(Nav);
