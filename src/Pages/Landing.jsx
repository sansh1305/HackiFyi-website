import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function Landing() {
    return (
        <div className="font-Clash w-screen text-[#f0f8ff] flex justify-center flex-col">
            <div className="bg-hero"></div>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Landing