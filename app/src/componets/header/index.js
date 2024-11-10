import Image from 'next/image'
import React from 'react'
import charan from '../../assets/charan.svg'

function Header() {
    return (
        <div className='fixed top-0 left-0 right-0 z-50 flex justify-between px-10 md:pt-2 items-center'>
            <div>
                <Image src={charan} alt="test" />
            </div>

            <div className='hidden md:flex ' id='navbar-default' >
                <ul className='md:flex justify-between items-center md:text-xl font-bold'>
                    <li className='text-center p-4 hover:bg-stone-900 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-tael-400 '><a >Home</a></li>
                    <li className='text-center p-4 hover:bg-stone-900 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-tael-400 '><a>ABOUT DADAJI</a></li>
                    <li className='text-center p-4 hover:bg-stone-900 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-tael-400 '><a>EVENTS</a></li>
                    <li className='text-center p-4 hover:bg-stone-900 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-tael-400 '><a>CONTACT</a></li>
                </ul>
            </div>
            <div className="hidden md:block">
                <Image src={charan} alt="test" />
            </div>
            <button data-collapse-toggle="navbar-default" type="button" className=" inline-flex items-center  w-14 h-full justify-center text-sm text-gray-500  md:hidden focus:outline-none  dark:text-gray-400 " aria-controls="navbar-default" aria-expanded="false" >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
        </div>
    )
}

export default Header

/*
<ul className='flex items-center text-xl font-bold text-gray-200'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About Panditji</li>
                <li className='p-4'>Events</li>
                <li className='p-4'>Contact</li>
            </ul>
*/