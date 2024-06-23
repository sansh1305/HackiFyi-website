import React from 'react'
import Animation from "../hooks/scroll"

function Hero() {

    
    return (
        <section  className="w-full flex flex-col lg:flex-row  justify-center self-center items-center px-10">
            <div  className=" hero flex flex-col justify-center lg:ml-6">
                <h3 ref={Animation("top","30px",1000,200)} className="font-medium  text-7xl lg:text-9xl text-[#dc143ccb] ">Hacki<span className="text-[#f0f8ff] mx-1">Fyi</span></h3>
                <h4 ref={Animation("left","40px",1000,600)} className="text-sm self-start text-[1rem] lg:text-xl lg:w-[80%] mt-5">Unlock the Code: Tamil Nadu's Largest Hackathon in collaboration with VIT Chennai and Fraternity of Young Innovators</h4>
            </div>
            <div className="animation mt-10 mr-10 hidden lg:block">
                <div ref={Animation("top","30px",1000,200)} className="view">
                    <div className="plane main">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero