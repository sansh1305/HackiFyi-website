import React from 'react'
import useScrollReveal from '../hooks/scroll'

function Hero() {

    const containerRef = useScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 1000,
        delay: 200,
        easing: 'ease',
    });
    
    return (
        <section ref={containerRef} className="w-full flex flex-col lg:flex-row  justify-center self-center items-center px-10">
            <div  className=" hero flex flex-col justify-center">
                <h3  className="font-medium  text-7xl lg:text-9xl text-[#dc143ccb] ">Hacki<span className="text-[#f0f8ff] mx-1">Fyi</span></h3>
                <h4  className="text-sm self-start text-[1rem] lg:text-xl lg:w-[80%] mt-5">Unlock the Code: Tamil Nadu's Largest Hackathon in collaboration with VIT Chennai and Fraternity of Young Innovators</h4>
            </div>
            <div className="animation mt-10 mr-10 hidden lg:block">
                <div className="view">
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