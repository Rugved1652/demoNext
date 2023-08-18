import Image from 'next/image'
import React from 'react'

type Props = {}

const MovieSection = (props: Props) => {
    const externalImageUrl = "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/05/2-home-v2-bg-new-1.jpg"
    return (

        <div className='h-[500px] flex justify-start items-center ' style={{ backgroundImage: `url('${externalImageUrl}')` }}>
            <div className='container'>
                <div className='w-[50%] px-[38px] text-white flex flex-col items-start gap-5'>
                    <Image src={"https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/05/4-home-v2-featured-logo-new1-1.png"} alt="" width={180} height={200} />
                    <h3 className='font-mont font-bold text-4xl'>Delta Bravo</h3>
                    <p className='text-[#b4bbc0] w-[80%]'>strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.</p>
                    <div className='w-fit flex gap-3'>
                        <button className='px-7 py-3 font-bold text-lg bg-[#24baef] rounded-sm'>Watch Now</button>
                        <button className='px-7 py-3 border rounded-sm text-lg font-bold'> + Play Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieSection