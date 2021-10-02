import React from "react";
//import HS from "./Home.module.css";
import Pro from "../Programming/Programming";
import Stat from "../Statistics/stat";
const Home=()=>{
    
    return (
           <React.Fragment>
               <Pro/>
               <Stat/>
           </React.Fragment>

    );
}


export default React.memo(Home);