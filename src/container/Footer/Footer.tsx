import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlus, FaVimeo, FaRss } from 'react-icons/fa';

type SocialMediaIcon = {
    name: string;
    icon: React.ReactElement;
};

const socialMediaIcons: SocialMediaIcon[] = [
    {
        name: 'Facebook',
        icon: <FaFacebook />
    },
    {
        name: 'Twitter',
        icon: <FaTwitter />
    },
    {
        name: 'Google+',
        icon: <FaGooglePlus />
    },
    {
        name: 'Vimeo',
        icon: <FaVimeo />
    },
    {
        name: 'RSS',
        icon: <FaRss />
    }
];

type Props = {}

const Footer = (props: Props) => {
    const genres: string[] = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Romance"
    ];

    const categories: string[] = [
        "Valentine Day",
        "Underrated Comedies",
        "Scary TV Series",
        "Best 2018 Documentaries",
        "Classic Shows",
        "Big TV Premieres",
        "Reality TV Shows",
        "Original Shows",
        "Surprise of the Year Shows"
    ];

    const menuItems: string[] = [
        "My Account",
        "FAQ",
        "Watch on TV",
        "Help Center",
        "Contact"
    ];


    return (
        <>
            <div className='bg-[#0A0D14]'>

                <div className='container  px-[38px] text-[#949cb0]'>
                    <div className='border-b pt-10 pb-5 border-[#2f2f33] bg-[0A0D14] text-white flex justify-between'>
                        <svg version="1.1" fill='#fff' width="103" height="40px">

                            <g className="vodi-gr">
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
                        <div className='flex items-center gap-3 text-base'>{
                            socialMediaIcons.map((i) => (
                                <>
                                    {i.icon}
                                    <span>{i.name}</span>
                                </>
                            ))
                        }</div>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-10 border-r border-[#2f2f33] my-6 grid grid-cols-10'>
                            <div className='col-span-5'>
                                <h3 className='font-mont text-white text-lg font-medium py-5'>Movie Categories</h3>
                                <ul className='grid grid-cols-12 font-osans'>
                                    {
                                        genres.map((i) => (

                                            <li className='col-span-6 py-1'>{i}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='col-span-5'>
                                <h3 className='font-mont text-white text-lg font-medium py-5'>TV Series</h3>
                                <ul className='grid grid-cols-12 font-osans'>
                                    {
                                        categories.map((i) => (

                                            <li className='col-span-6 py-1'>{i}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <ul className='grid grid-cols-6 px-4 my-6'>
                                <h3 className='font-mont text-white text-lg font-medium py-5'>Support</h3>
                                {
                                    menuItems.map((i) => (

                                        <li className='col-span-6 py-1'>{i}</li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className='bg-[#06090F]'>

                <div className='container px-[38px] flex justify-between text-white py-4 text-sm bg-[#06090F]'>

                    <span>Copyright © 2019, Vodi. All Rights Reserved</span>
                    <span>Privacy policy</span>
                </div>
            </div>
        </>
    )
}

export default Footer