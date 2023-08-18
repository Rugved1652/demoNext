import SearchBox from '@/components/SearchBox'
import Image from 'next/image'
import React from 'react'
import { FaArrowCircleDown, FaArrowDown, FaUserCircle } from 'react-icons/fa'
import PiUserCircle, { PiArrowElbowDownRight, PiUserCircleBold } from "react-icons/pi"

type Props = {}
const GradientSVG = () => {
    return (
        <svg version="1.1" width="103" height="40px">
            <defs>
                <linearGradient id="vodi-gr" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#2A4999" }}></stop>
                    <stop offset="100%" style={{ stopColor: "#2C9CD4" }}></stop>
                </linearGradient>
            </defs>
            <g fill="url(#vodi-gr)">
                <path className="vodi-svg0" d="M72.8,12.7c0-2.7,0-1.8,0-4.4c0-0.9,0-1.8,0-2.8C73,3,74.7,1.4,77,1.4c2.3,0,4.1,1.8,4.2,4.2c0,1,0,2.1,0,3.1
		c0,6.5,0,9.4,0,15.9c0,4.7-1.7,8.8-5.6,11.5c-4.5,3.1-9.3,3.5-14.1,0.9c-4.7-2.5-7.1-6.7-7-12.1c0.1-7.8,6.3-13.6,14.1-13.2
		c0.7,0,1.4,0.2,2.1,0.3C71.3,12.2,72,12.4,72.8,12.7z M67.8,19.8c-2.9,0-5.2,2.2-5.2,5c0,2.9,2.3,5.3,5.2,5.3
		c2.8,0,5.2-2.4,5.2-5.2C73,22.2,70.6,19.8,67.8,19.8z
		M39.9,38.6c-7.3,0-13.3-6.1-13.3-13.5c0-7.5,5.9-13.4,13.4-13.4c7.5,0,13.4,6,13.4,13.5
			C53.4,32.6,47.4,38.6,39.9,38.6z M39.9,30.6c3.2,0,5.6-2.3,5.6-5.6c0-3.2-2.3-5.5-5.5-5.5c-3.2,0-5.6,2.2-5.6,5.4
			C34.4,28.2,36.7,30.6,39.9,30.6z
	M14.6,27c0.6-1.4,1.1-2.6,1.6-3.8c1.2-2.9,2.5-5.8,3.7-8.8c0.7-1.7,2-2.8,4-2.7c3,0,4.9,2.6,3.8,5.4
		c-0.5,1.3-1.2,2.6-1.8,3.9c-2.4,5-4.9,10-7.3,15c-0.8,1.6-2,2.6-3.9,2.6c-2,0-3.3-0.8-4.2-2.6c-2.7-5.6-5.3-11.1-8-16.7
		c-0.3-0.7-0.6-1.3-0.9-2c-0.8-1.8-0.3-3.7,1.1-4.8c1.5-1.2,4-1.3,5.3,0c0.7,0.6,1.2,1.5,1.6,2.3C11.3,18.8,12.9,22.7,14.6,27z
	M90.9,25.1c0,3.1,0,6.2,0,9.4c0,1.9-1.2,3.4-2.9,4c-1.7,0.5-3.5,0-4.5-1.6c-0.5-0.8-0.8-1.8-0.8-2.6
		c-0.1-6.1-0.1-11.3,0-17.5c0-2.2,1.5-3.9,3.5-4.2c2.1-0.3,4.1,0.9,4.7,2.9c0.1,0.5,0.2,1.1,0.2,1.6C90.9,20,90.9,22.1,90.9,25.1
		C90.9,25.1,90.9,25.1,90.9,25.1z
	M90.2,4.7L86,2.3c-1.3-0.8-3,0.2-3,1.7v4.8c0,1.5,1.7,2.5,3,1.7l4.2-2.4C91.5,7.4,91.5,5.5,90.2,4.7z"></path>
            </g>
        </svg>
    );
};



const Navbar = (props: Props) => {
    return (
        <nav className='flex px-[38px] items-center container justify-between h-[82px]'>
            <div className='flex items-center gap-3'>
                <div className='flex items-center'>
                    <div className='flex flex-col gap-1 p-[18px]  my-2 rounded-md'>
                        {
                            [0, 1, 2].map((i, j) => (
                                <span className='w-4    bg-black h-[2px] '></span>
                            ))
                        }
                    </div>
                    <div className='text-[#0f9ed1]'><GradientSVG /></div>
                </div>
                <div className='px-[45px]'>
                    <ul className='flex gap-3 font-mont text-[#121A21]'>
                        {
                            ["Browse",
                                "Home",
                                "Movies",
                                " TV Shows",
                                "Blog"].map((i, j) => (
                                    <li className='flex gap-3 justify-center items-center'>
                                        <span>
                                            {i}
                                        </span>
                                        <span><Image className='w-[16px] h-[16px]' src={"./images/down.svg"} alt={"s"} width={10} height={10} /></span>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div><SearchBox placeHolder={"Search..."} /></div>
                <div className='flex gap-4'>
                    <Image className='w-8 h-6' src={"./images/upload.svg"} alt="uploadf" width={10} height={10} />
                    <span>
                        Upload
                    </span>
                </div>
                <div className=''><Image className='w-10 h-10' src={"./images/user.svg"} width={20} height={20} alt="" /></div>
            </div>
        </nav>
    )
}

export default Navbar