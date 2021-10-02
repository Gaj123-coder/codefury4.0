import CouD from "./Cd.module.css";
const Cd=(props)=>{
    const hr_s=props.hr.toString();
    const min_s=props.min.toString();
    const sec_s=props.sec.toString();
    let hr1="0";
    let hr2="0";
    let min1="0";
    let min2="0";
    let sec1="0";
    let sec2="0";
    if(hr_s.length===1){
        hr2=hr_s;
    }else{
        hr1=hr_s.slice(0,1);
        hr2=hr_s.slice(1,2);
    }
    if(min_s.length===1){
        min2=min_s;
    }else{
        min1=min_s.slice(0,1);
        min2=min_s.slice(1,2);
    }
    if(sec_s.length===1){
        sec2=sec_s;
    }else{
        sec1=sec_s.slice(0,1);
        sec2=sec_s.slice(1,2);
    }
    return (<div className={`${props.className} ${CouD["c-div"]}`}>
        <div className={CouD["sep-cou"]}>
            <div><p>{hr1}</p></div>
            <div><p>{hr2}</p></div>
        </div>
        <div className={CouD["sep-cou"]}>
            <div><p>{min1}</p></div>
            <div><p>{min2}</p></div>
        </div>
        <div className={CouD["sep-cou"]}>
            <div><p>{sec1}</p></div>
            <div><p>{sec2}</p></div>
        </div>
    </div>);
}
export default Cd;