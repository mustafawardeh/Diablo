import React from 'react'
import { useSelector } from 'react-redux'

const Main = () => {
    const { all_info } = useSelector(state => state.Diablo)
    return (
        <div className='w-1/4 flex flex-col gap-6'>
            <h1 className='text-[3rem] font-[600]'>Season {all_info.season}</h1>
            <p1 className='text-[1rem] font-[400] w-[100%] h-[150px] text-[rgb(f,f,0)]'>{all_info.details}</p1>
            <div className='flex gap-8 items-center'>
                <button type='button' className='bg-[crimson] text-white text-center h-[50px] w-[160px] text-[1.5rem] rounded'>Buy Now</button>
                <p className='text-[1.2rem]  border-b-[2px] text-center text-line'>Read More</p>
            </div>

        </div>
    )
}

export default Main