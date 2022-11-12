import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import OutsideClickHandler from 'react-outside-click-handler';
import { BiSearchAlt2 } from "react-icons/bi";
import logo from '../../../Assect/logo.png'

const Navbar = () => {

    // For Menu
    const ref = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [countries, setCountries] = useState(false)
    const [features, setFeatures] = useState(false)
    const [price, setPrice] = useState(false)
    const [learn, setLearn] = useState(false)
    const [scroll, setScroll] = useState(false)



    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])



    // Navbar Style
    function resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const shrinkOn = 10;

        if (distanceY > shrinkOn) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', resizeHeaderOnScroll);



    return (
        <div className=' bg-white z-50 sticky top-0  '>
            <nav className="max-w-7xl mx-auto px-4 md:px-3 lg:px-6">
                <div className={`${scroll ? ' h-10 md:h-14 xl:h-26' : ' h-16 md:h-18 xl:h-20'}   flex justify-between items-center  transition-all duration-300 ease-in-out  `}>
                    <div className={`transition-all duration-300 ease-in-out`}>
                        <NavLink to={'/'}>
                            <img className=' w-24' src={logo} alt="logo" />
                        </NavLink>
                    </div>

                    {/* For Mobile */}
                    <div className="flex h-full items-center justify-between md:hidden">
                        {/* cancle button */}
                        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 md:mr-4 rounded-md md:hidden text-dark-purple">
                            <svg fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>


                    {/* website */}
                    <div className='w-full hidden md:flex items-center justify-around '>
                        <div className="hidden ml-auto md:block  w-full ">
                            <div className=' flex w-full  justify-between items-center pl-10 xl:pl-52'>
                                <div className="h-full flex md:gap-x-6 lg:gap-x-8 xl:gap-x-10 justify-between items-center relative" >
                                    <NavLink
                                        onClick={() => setCountries(!countries)}
                                        to={'countries'}
                                        className={({ isActive }) => (`  text-[13px] hover:text-purple-500 font-semibold ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                    >Countries
                                    </NavLink>

                                    <NavLink
                                        onClick={() => setFeatures(!features)}
                                        to={'features'}
                                        className={({ isActive }) => (` rounded-md text-[13px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                    >Features
                                    </NavLink>

                                    <NavLink
                                        onClick={() => setPrice(!price)}
                                        to={'prices'}
                                        className={({ isActive }) => (` rounded-md text-[13px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                    >Prices
                                    </NavLink>

                                    <NavLink
                                        onClick={() => setLearn(!learn)}
                                        to={'learn'}
                                        className={({ isActive }) => (` rounded-md text-[13px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                    >Learn
                                    </NavLink>

                                    <NavLink
                                        to={'dashboard'}
                                        className={({ isActive }) => (`rounded-md text-[13px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                    >Dashboard
                                    </NavLink>


                                </div>

                                <div className='flex items-center  '>
                                    <div className='  rounded-full relative'>
                                        <input className=' py-1.5 px-4 xl:w-72 lg:w-52 w-[20vw] placeholder-purple-700 placeholder-opacity-50 text-sm font-medium rounded-full border border-gray-300 focus:outline-none focus:border-purple-300 focus:border ' type="text" placeholder='loocking for...' />
                                        <div className=' absolute right-[1px] top-[1px] text-xl w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center'>
                                            <BiSearchAlt2 />
                                        </div>
                                    </div>

                                    <NavLink
                                        to={'signup'}
                                        className=" lg:ml-8 ml-4 relative inline-flex items-center justify-center px-5 py-1.5 overflow-hidden font-mono font-medium tracking-tighter text-black border border-gray-200  rounded-full group transition-all duration-700 ease-out"
                                    >
                                        <span class="absolute w-0 h-0 transition-all duration-700 ease-out bg-purple-300 rounded-full group-hover:w-60 group-hover:h-56"></span>
                                        <span class="absolute inset-0 w-full h-full  rounded-full opacity-30 transition-all duration-700 ease-out"></span>
                                        <span class="relative text-[13px] font-semibold">Sign Up</span>

                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Mobile */}
                    <div className={`w-full absolute md:hidden transition-all duration-300 ease-in-out top-0 bottom-0 left-0 right-0 bg-black opacity-40 z-10 ${isMenuOpen ? 'block' : 'hidden'}`}></div>
                    <div ref={ref} className={`${isMenuOpen ? 'left-0 bottom-0 top-0 z-20 ' : '-left-96 bottom-0 top-0'} transition-all duration-300 ease-in-out fixed md:hidden  flex flex-col w-1/2 sm:bg-red-200  max-w-sm py-6 px-6 bg-white border-r overflow-y-auto`}>

                        <div className="h-full  flex flex-col md:gap-x-6 lg:gap-x-8 xl:gap-x-10  items-start pl-1" >

                            <div className=' flex justify-end items-end w-full'>
                                <button onClick={() => setIsMenuOpen(false)}>
                                    <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <NavLink
                                to={'dashboard'}
                                className={({ isActive }) => (`py-2 px-8 rounded-full border border-[#844FFA] text-white font-semibold bg-[#844FFA]  hover:bg-[#6621DF]  text-[14px]   ${isActive ? 'text-white' : 'text-white'}`)}
                            >Ship Now
                            </NavLink>

                            <div className=' flex flex-col gap-10 mt-8 text-left'>


                                <NavLink
                                    to={'register'}
                                    className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Register
                                </NavLink>

                                <NavLink
                                    to={'signIn'}
                                    className={({ isActive }) => (`rounded-md text-[14px] font-semibold text-[#6211cb] hover:text-[#844ffa]  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Sign In
                                </NavLink>



                                <NavLink
                                    onClick={() => setCountries(!countries)}
                                    to={'countries'}
                                    className={({ isActive }) => (`  text-[13px] hover:text-purple-500 font-semibold ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Countries
                                </NavLink>

                                <NavLink
                                    onClick={() => setFeatures(!features)}
                                    to={'features'}
                                    className={({ isActive }) => (` rounded-md text-[13px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Features
                                </NavLink>

                                <NavLink
                                    onClick={() => setPrice(!price)}
                                    to={'prices'}
                                    className={({ isActive }) => (` rounded-md text-[13px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Prices
                                </NavLink>

                                <NavLink
                                    onClick={() => setLearn(!learn)}
                                    to={'learn'}
                                    className={({ isActive }) => (` rounded-md text-[13px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Learn
                                </NavLink>

                                <NavLink
                                    to={'dashboard'}
                                    className={({ isActive }) => (`rounded-md text-[13px] hover:text-purple-500 font-semibold  ${isActive ? 'text-purple-500' : 'text-black'}`)}
                                >Dashboard
                                </NavLink>

                            </div>


                        </div>
                    </div>


                </div>
            </nav>
        </div>
    );
};

export default Navbar;