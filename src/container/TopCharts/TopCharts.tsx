"use client"
import { topMovies } from '@/utils/data'
import Image from 'next/image';
import React from 'react'
import TopChartCarousel from './TopChartCarousel';

type Props = {}

const TopCharts = (props: Props) => {
    type Movie = {
        year: number;
        title: string;
        genres: string[];
        imageUrl: string;
    };

    const movies: Movie[] = [
        {
            year: 2017,
            title: 'Delta Bravo',
            genres: ['Action'],
            imageUrl: 'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg'
        },
        {
            year: 2016,
            title: 'Mad',
            genres: ['Drama'],
            imageUrl: 'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/43-only-lovers-left-alive-300x450.jpg'
        },
        {
            year: 2018,
            title: 'Oh Lucy',
            genres: ['Action', 'Comedy'],
            imageUrl: 'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/33-a-woman-under-the-influence-300x450.jpg'
        },
        {
            year: 2018,
            title: 'Euphoria',
            genres: ['Action', 'Adventure'],
            imageUrl: 'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/23-300x450.jpg'
        },
        {
            year: 2018,
            title: 'Black Mirror',
            genres: ['Action', 'Mystery'],
            imageUrl: 'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg'
        },
        {
            year: 2016,
            title: 'The Convenient Groom',
            genres: ['Action', 'Adventure', 'Romance'],
            imageUrl: 'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/1-300x450.jpg'
        },
        {
            year: 2017,
            title: 'Paradigm Lost',
            genres: ['Action', 'Documentary'],
            imageUrl: 'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg'
        },
        {
            year: 2018,
            title: 'Pacific Rim: Uprising',
            genres: ['Action', 'Sci-Fi'],
            imageUrl: 'https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg'
        }
        // ... other movies
    ];

    return (
        <div className='bg-[#131722] '>

            <div className='container text-white bg-[#131722] px-[48px] pt-[33px] pb-[66px] '>
                <div className='flex gap-3 items-baseline text-xs text-[#b4bbco]'>
                    <span className='font-semibold text-sm text-[#0f9ed1]'>Today</span>
                    <span>This week</span>
                    <span>Last 30 days</span>
                </div>
                <div><TopChartCarousel /></div>
                <div className='grid grid-cols-12 gap-8'>
                    <div className='col-span-4 px-[38px] bg-[#1C212E]'>
                        <div className='flex justify-between items-baseline pt-[34px] pb-[17px] border-b border-[#2f2f33]'>

                            <h3 className='text-2xl font-medium font-mont'>Top 9 this week</h3>
                            <div className='flex gap-2'>
                                <span className='text-[#0f9ed1] font-bold'>TV Series</span>
                                <span>Movies</span>
                            </div>
                        </div>
                        <ul className=' py-4'>
                            {
                                topMovies.map((i, index) => (
                                    <li className=' flex justify-start gap-8  items-center border-b border-[#2f2f33]'>
                                        <span className='text-4xl font-bold w-4  font-mont'>{index + 1}</span>
                                        <span className='flex flex-col text-xs items-start my-[15px]  '>

                                            <span className='col-span-6 font-osans text-[#0f9ed1] '>{i.year}</span>
                                            <span className='col-span-6 font-mont text-sm font-bold'>{i.title}</span>
                                            <span className='col-span-6 font-osans text-[#0f9ed1]'>{i.genre.map((i) => <>{i}</>)}</span>
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='col-span-8'>
                        <div className='flex items-center justify-between pt-[34px] pb-[17px] border-b border-[#2f2f33]'>
                            <h3 className='text-2xl font-medium font-mont'>Newest Movies</h3>
                            <div className='flex gap-3 items-baseline text-xs text-[#b4bbco]'>
                                <span className='font-semibold text-sm text-[#0f9ed1]'>Today</span>
                                <span>This week</span>
                                <span>Last 30 days</span>
                            </div>
                        </div>
                        <div>
                            <div className='col-span-6 flex gap-4 mx-4 py-[12px] border-b border-[#2f2f33]'>
                                <Image src={"https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/31-300x450.jpg"} alt={""} width={150} height={225} />
                                <div className='flex flex-col gap-3 '>

                                    <span className='col-span-6 font-osans text-[#0f9ed1] '>2018</span>
                                    <span className='col-span-6 font-mont text-sm font-bold'>
                                        The Last Witness</span>
                                    <span className='col-span-6 font-osans text-[#949cb0]'>In 1892, a legendary Army captain reluctantly agrees to escort a Cheyenne chief and his family through dangerous territory.</span>
                                    <div className='w-fit flex gap-3'>

                                        <button className='px-7 py-3 font-bold text-lg bg-[#24baef] rounded-sm'>Watch Now</button>
                                        <button className='px-7 py-3 border rounded-sm text-lg font-bold'> + Play Now</button>
                                    </div>
                                </div>
                            </div>
                            <ul className='grid grid-cols-12'>
                                {
                                    movies.map((i) => (
                                        <>
                                            <div className='col-span-6 flex gap-4 mx-4 py-[12px] border-b border-[#2f2f33]'>
                                                <Image src={i.imageUrl} alt={i.title} width={66} height={99} />
                                                <div className='flex flex-col text-xs '>

                                                    <span className='col-span-6 font-osans text-[#0f9ed1] '>{i.year}</span>
                                                    <span className='col-span-6 font-mont text-sm font-bold'>{i.title}</span>
                                                    <span className='col-span-6 font-osans py-4 text-[#0f9ed1]'>{i.genres.map((i) => <>{i} </>)}</span>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopCharts

