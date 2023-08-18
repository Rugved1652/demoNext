import Image from 'next/image';
import React from 'react'
import { FaSearch } from 'react-icons/fa';

type Props = {
    placeHolder: string;
}

const SearchBox = ({ placeHolder }: Props) => {
    return (
        <div className='h-[38px] rounded-full border m-auto flex items-center'><input placeholder={placeHolder} className='px-4 outline-none border-none rounded-full' type='text' /><div className='px-3'><Image className='w-5 h-5' src={"./images/search.svg"} alt="uploadf" width={10} height={10} /></div></div>
    )
}

export default SearchBox