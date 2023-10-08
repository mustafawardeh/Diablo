import React, { useEffect } from 'react'
import { data } from '../Data/data'
import { useDispatch, useSelector } from 'react-redux'
const Slider = () => {
  const { position } = useSelector(state => state.Diablo)
  const dispatch = useDispatch()


  return (
    <div className='flex w-2/4 items-center h-[400px] ml-[100px] h-full mb-[50px] overflow-hidden px-[260px]'>
      <div className={`flex gap-6 mx-12`} style={{ transform: `translateX(-${position * 200}px)` }}>
        {
          data.map(info => {
            return (
              <div key={info.id} className={`${info.id === position ? `scale-150 rounded shadow-2xl` : ''} h-full w-[200px] h-[250px] rounded-xl`} >
                <img src={info.logo} className=' w-full h-full object-cover rounded-xl' alt={info.season} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Slider