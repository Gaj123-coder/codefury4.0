import {useState,useEffect} from "react";
const useCounter=(props)=>{
    const [sec,setSec]=useState(props["sec"]);
    const [min,setMin]=useState(props["min"]);
    const [hr,setHr]=useState(props["hr"]);
    if((hr===0)&&(min===0)&&(sec===0)){
        setHr(props["hr"]);
        setSec(props["sec"]);
        setMin(props["min"]);
    }
    else if((min===0)&&(sec===0)){  
        setHr((prev)=>{return prev-1});
        setMin(59);
        setSec(59);
    }
    else if(sec===0){
        setSec(59);
        setMin((prev)=>{return prev-1})
    }
    useEffect(()=>{
        const my_int=setInterval(()=>{
            setSec((prev)=>{return prev-1});
        },1000);
        return ()=>{
            clearInterval(my_int);
        }
    },[]);
    return {hr,min,sec};
}

export default useCounter;
