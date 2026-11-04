import React,{useEffect,useState} from "react";

function Counter({end,start}){

    const [count,setCount]=useState('');
    useEffect(()=>{
        if (!start) return;
        let started=0;
        const duration=5000;
        const steptime=20;
        const increment=end/(duration/steptime);

        const timer= setInterval(()=>{
            started += increment;

        if (started>=end){
            setCount(end);
            clearInterval(timer);
        }
        else{
            setCount(Math.floor(started));
        }
        },steptime);
        return ()=> clearInterval(timer);
    },[start,end]);
    return(
        <><h3 style={{color:"white",marginLeft:"28px"}}>{count}+</h3></>
    )
}export default Counter;