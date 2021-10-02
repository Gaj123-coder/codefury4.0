import HS from "./Div.module.css";
const Div=(props)=>{
    return (<div className={HS["grd"]}>{props.children}</div>);
}

export default Div;