import React, { useState } from 'react'
import cross from "/public/images/cross.gif"
function Navbar() {

    const [visible, setvisible] = useState(false)

    return (
        <nav className="w-screen box-border p-2 lg:p-8 flex items-center justify-between mb-10 overflow-x-hidden">
            <div className="logo leading-5 uppercase">
                <h3 className="font-medium text-lg lg:text-2xl text-[#dc143ccb]">Hacki<span className="text-[#f0f8ff] mx-1">Fyi</span></h3>
            </div>
            <div className="hamburger z-20" >
                <img onClick={(e) => setvisible(!visible)} src={`${!visible ? "/images/hamburger.svg" : cross}`} alt="Close" className="h-12 w-auto block lg:hidden" />
            </div>
            <div className="links hidden lg:flex ">
                <div className="flex gap-8 items-center justify-around w-full ">
                    <a href="#prizes" className="flex flex-col after:h-[1px] after:w-0 after:bg-[#f0f8ff] after:transition-all after:hover:w-full ">
                        Prize
                    </a>
                    <a href="#sponsors" className="flex flex-col after:h-[1px] after:w-0 after:bg-[#f0f8ff] after:transition-all after:hover:w-full ">
                        Sponsors
                    </a>
                    <a href="#faq_and_rules" className="flex flex-col after:h-[1px] after:w-0 after:bg-[#f0f8ff] after:transition-all after:hover:w-full ">
                        Rules & FAQ's
                    </a>
                    <a href="#" className="flex flex-col after:h-[1px] after:w-0 after:bg-[#f0f8ff] after:transition-all after:hover:w-full ">Contact</a>
                    <a href="#" className="py-4 px-6  font-semibold rounded-md bg-[#f0f8ff] text-black hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">Register Now</a>
                    <a href="sponsorship.html" className="py-4 px-6 font-semibold rounded-md bg-[#f0f8ff] text-black hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">Sponsor Us</a>
                </div>
            </div>

            {visible ? <div className="z-10 text-2xl absolute flex flex-col lg:hidden w-full top-0 left-0 h-full bg-white ">
                <div className="flex flex-col  items-center gap-8 m-auto ">
                    <a onClick={(e) => setvisible(!visible)} href="#prizes" className="text-[#dc143c] ">
                        Prize
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="#sponsors" className="text-[#dc143c]  ">
                        Sponsors
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="#faq_and_rules" className="text-[#dc143c] ">
                        Rules & FAQ's
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="#" className="after:h-[1px] after:w-0 after:bg-[#f0f8ff] after:transition-all after:hover:w-full ">
                        Contact
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="#" className="py-4 px-6 text-base font-semibold rounded-md bg-black text-[#f0f8ff] hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">
                        Register Now
                    </a>
                    <a onClick={(e) => setvisible(!visible)} href="sponsorship.html" className="py-4 px-6 text-base font-semibold rounded-md bg-black text-[#f0f8ff] hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">
                        Sponsor Us
                    </a>
                </div>
            </div> : ""}
        </nav>

    )
}

export default Navbar