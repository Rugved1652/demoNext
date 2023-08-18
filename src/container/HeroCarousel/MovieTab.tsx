import Image from 'next/image'
import React from 'react'

type Props = {}

const Movietab = (props: Props) => {
    const imageLinks = [
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/18-baby-blue.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/17-1.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/16-1.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-1.jpg",
        "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/14-1.jpg"
    ];
    const externalImageUrl = "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/ep-bg.jpg"
    return (
        <div className='  p-[38px] h-[500px]' style={{ backgroundImage: `url('${externalImageUrl}')` }}>
            <div className='container'>


                <h3 className='text-[50px] font-bold font-mont text-white flex items-center justify-center py-4'>Vikings</h3>
                <p className='text-2xl text-center font-mont text-white py-2'>New Season 5 just flow in.<br /> Watch and Debate</p>
                <div>
                    <ul className='flex justify-center items-center gap-3 text-lg  py-3'>
                        {
                            [1, 2, 3, 4, 5].map((i, j) => (

                                <li className={`  text-white flex ${i === 4 ? "text-[#24baef] text-xl font-bold" : "font-semibold"}`}>Season {i}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='flex gap-4 container'>
                {
                    imageLinks.map((i) => (
                        <div className='flex flex-col gap-2'>
                            <Image src={i} alt={""} width={300} height={300} />
                            <div className='flex flex-col'>
                                <span className='text-xs text-[#949cb0]'>S02E01</span>
                                <span className='text-sm font-mont font-bold text-white'>Thirsty Birds</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Movietab