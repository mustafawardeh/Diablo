import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAll_Info, setPosition } from '../redux/ReducerSlice/DiabloSlice'
import { data } from '../Data/data'

const Footer = () => {
  const { all_info } = useSelector(state => state.Diablo)
  const position = useSelector(state => state.Diablo.position)
  const dispatch = useDispatch()

  

  const lefthandler = () => {
    const newPosition = position === 0 ? 3 : position - 1;
    dispatch(setPosition(newPosition));
    dispatch(
      setAll_Info({
        season: data[newPosition].season,
        title: data[newPosition].title,
        details: data[newPosition].details,
        image: data[newPosition].image,
      })
    );
  }

  const righthandler = () => {
    const newPosition = position === 3 ? 0 : position + 1;
    dispatch(setPosition(newPosition));
    dispatch(
      setAll_Info({
        season: data[newPosition].season,
        title: data[newPosition].title,
        details: data[newPosition].details,
        image: data[newPosition].image,
      })
    );

  }

  return (
    <div className='flex w-full justify-between'>
      <div className='flex w-1/4  flex-col uppercase font-[100] text-[18px] text-[gray] pt-6'>
        <div className='flex gap-2'>
          <p><i className="fa-brands fa-xbox"></i> xboxone</p>
          <p><i className="fa-brands fa-xbox"></i> xboxoneseries</p>
        </div>
        <div className='flex gap-2'>
          <p><i className="fa-brands fa-playstation"></i> ps4</p>
          <p><i className="fa-brands fa-playstation"></i> ps5</p>
        </div>
        <p><i className="fa-brands fa-windows"></i> windows11</p>
      </div>
      <div className='w-3/4 flex items-center gap-[100px] justify-end text-[20px]'>
        <div className='btn flex gap-4 '>
          <div className='cursor-pointer flex items-center border border-[#ededed] justify-center w-[60px] h-[60px] rounded-full bg-[rgb(0,0,0,0.2)]' onClick={() => lefthandler()}>
            <i className="fa-solid fa-angle-left text-[#ededed]"></i>
          </div>
          <div className='cursor-pointer flex items-center justify-center border border-[#ededed] w-[60px] h-[60px] rounded-full bg-[rgb(0,0,0,0.2)]' onClick={() => righthandler()}>
            <i className="fa-solid fa-angle-right text-[ededed]" ></i>
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='w-[500px] h-1 bg-[rgb(0,0,0,0.5)] rounded-xl '></div>
          <h1  className=' w-[100px] text-[50px]'>{all_info.season}</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer