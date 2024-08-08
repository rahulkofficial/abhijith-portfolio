"use client";

import { useState } from "react";
import { Works } from "./works";
import { WORKS } from "./works";
import Image from "next/image";


export default function WorksF({type}:{type:string}){
    const[id,setId]=useState<null|number>(null)
    const handleClick=(id:number)=>{
        setId(id);
        if(typeof window!=="undefined"&&window.localStorage){
            localStorage.setItem('hide',"false")
        }
    }
    const array:WORKS[]=Works.filter((item)=>item.type===type);
    return(
        <>
            <div className=" relative">
                <div className=" mb-14 sm:mb-6
                 flex items-center justify-between z-0 px-32 xl:px-8 lg:block ">
                        {array.map((item:WORKS)=>{
                                return(
                                    <div key={item.id} onClick={()=>{handleClick(item.id)}} className=" lg:m-auto lg:mb-10 mb-1 block w-[400px] xm:w-[300px] 2xm:w-[200px] 5xm:w-[100px] border-4 p-4 3xm:p-2 border-yellow-400 rounded-[30px] animate-shadow hover:cursor-pointer hover:animate-none hover:shadow-xl hover:shadow-yellow-500 hover:-mt-4">
                                        <h4 className=" text-[19px] underline underline-offset-2 mb-4 text-yellow-100">{item.title}</h4>
                                        <Image className=" m-auto rounded-[40px]" src={item.image} alt={item.image} width={500} height={500} />
                                        <p className=" mt-2 text-[16px] sm:text-[14px] 3xm:text-[10px]">{item.description}</p>
                                    </div>
                                )                               
                            })}
                </div>
                <div  className=" absolute top-0 right-0 left-0 z-10 lg:top-32">
                    {id!==null?(<div className=" w-[100%] relative h-[100%] bg-black bg-opacity-60">     
                    <div onClick={()=>setId(null)} className=" z-0 absolute block w-[100%] h-[100%] opacity-0 cursor-pointer">Cancel event</div>
                        {
                         Works.map((item:WORKS)=>(
                            item.id===id?(<div className="inline-block relative z-10 mb-4 mt-4 p-4 3xm:p-1 border-2  rounded-[40px] bg-yellow-300 " key={item.id}>
                                <div className=" flex items-center justify-between px-16 sm:px-8 3xm:px-4">
                                    <h4 className=" text-[24px] sm:text-[20px] 3xm:text-[16px] underline underline-offset-2 text-black">{item.title} Image</h4>
                                    <h2 onClick={()=>setId(null)} className=" inline-block rounded-[50%] hover:cursor-pointer"><Image     className=" bg-white p-1 border-2 rounded-[50%] border-red-600 sm:w-[30px] sm:h-[30px] 3xmm:w-[20px] 3xmm:h-[20px]" src="/assets/images/cancel.svg" alt="cance" width={40} height={40}/></h2>
                                </div>
                                <Image className=" m-auto mt-4 rounded-[40px] xl:w-[90%] xl:h-[60%] " src={item.image} alt={item.image} width={800} height={800} />
                            </div>):(<div key={item.id}></div>)
                        ))
                    }
                    </div>):(<div></div>)}
                </div>
            </div>
        </>
    )
}