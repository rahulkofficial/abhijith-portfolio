"use client";

import { useState } from "react";
import WorksF from "../_components/worksfunction"
import { WORKS } from "../_components/works";


export default function Works(){
    const [type,setType]=useState<WORKS["type"]>("exterior")

    const handleTab=(tab:WORKS["type"])=>{
        if(tab==type){
            return " w-[32%] sm:w-[28%] 3xm:w-[32%] sm:p-2 xm:text-[10px] xm:p-0 2xm:text[8px] 3xm:text-[4px] 5xm:text-[2px]  text-yellow-400  shadow-inner shadow-yellow-300 p-1"
        }
        else{
            return "shadow-white transition-all xm:text-[10px] 2xm:text[8px]  sm:p-2 xm:p-0 duration-200 hover:shadow-yellow-300 hover:text-yellow-300 shadow w-[32%] sm:w-[28%] 3xm:w-[32%] 3xm:text-[4px] 5xm:text-[2px]  cursor-pointer p-1"
        }
    }

    return(
            <div id="works" className="  px-8 3xm:px-2">
                    <h2 className=" underline underline-offset-4 mb-10 3xm:mb-5 3xm:mt-3 mt-6 text-yellow-200 ">WORKS</h2>
                    <div className=" flex items-center justify-between px-16 2xm:px-0 mb-4">
                        <h3 title="Exterior" className={handleTab("exterior")} onClick={()=>setType("exterior")}>EXTERIOR</h3>
                        <h3 title="Interior" className={handleTab("interior")} onClick={()=>setType("interior")}>INTERIOR</h3>
                        <h3 title="Plan" className={handleTab("plan")} onClick={()=>setType("plan")}>PLAN</h3>
                    </div>
                    <WorksF type={type} />
            </div>
    )
}