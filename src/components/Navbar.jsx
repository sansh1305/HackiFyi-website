import React from 'react'

function Navbar() {
    return (
        <nav className="w-screen box-border p-8 flex items-center justify-between mb-10 overflow-x-hidden text-lg">
            <div className="logo leading-5 uppercase">
                <h3 className="font-medium text-lg lg:text-2xl text-[#dc143ccb]">Hacki<span className="text-[#f0f8ff] mx-1">Fyi</span></h3>
            </div>
            <div className="hamburger">
                <img src="\public\images\hamburger.svg" alt="" className="h-12 w-auto block lg:hidden" />
            </div>
            <div className="links hidden lg:block">
                <img src="/images/close.svg" alt="" className="h-12 hidden close-btn" />
                <div className="link-container flex gap-12 items-center justify-around w-full">
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
                    <a href="#" className="py-4 px-6 text-base font-semibold rounded-md bg-[#f0f8ff] text-black hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">Register Now</a>
                    <a href="sponsorship.html" className="py-4 px-6 text-base font-semibold rounded-md bg-[#f0f8ff] text-black hover:bg-[#dc143ccb] hover:text-[#f0f8ff]">Sponsor Us</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar