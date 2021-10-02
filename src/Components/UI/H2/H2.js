import H2S from "./H2.module.css";
const H2=(props)=>{
    return (<h2 className={H2S["sh2"]}>{props.children}</h2>);
}

export default H2;