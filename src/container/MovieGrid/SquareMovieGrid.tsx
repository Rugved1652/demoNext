import Image from 'next/image'
import React from 'react'

type Props = {
    movieData: any[],
    isDarker: boolean,
    isLight: boolean,
}

const SquareMovieGrid = ({ movieData, isDarker, isLight }: Props) => {
    return (

        <div className='bg-white'>

            <div className='grid gap-5 grid-cols-6 pb-[66px] pt-[33px] container px-[38px]'>
                <div className='col-span-2 text-[#131722] flex flex-col justify-center text-3xl font-mont font-bold items-start'>
                    <h3 className='w-[70%]'>Popular Movies
                        to Watch Now</h3>
                    <p className='text-lg font-mont font-medium'>Most watched movies by days</p>
                </div>
                {
                    movieData.map((url) => (
                        <div >
                            <Image src={url} alt="s" width={225} height={325} />
                            <div className='flex flex-col py-1'>
                                <span className='text-xs text-[#949cb0]'>S02E01</span>
                                <span className={`text-sm font-mont font-bold text-[#131722]`}>Thirsty Birds</span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default SquareMovieGrid