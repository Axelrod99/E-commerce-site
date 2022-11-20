import React from 'react'
import { useState } from 'react'
import filter from '../../assets/icons/filter.png'

const Header = ({onClick,onSignin}) => {
  return (
    <div className='h-14 flex items-center justify-between px-10 bg-white'>
        <p className='text-xl font-bold text-black flex items-center'>Big-Buy</p>

        <div className='hidden sm:flex bg-white border-2 border-blue-300 rounded-lg xl:w-[450px] lg:w-[370px] h-10 justify-center'>
            <input className='bg-white xl:w-[400px] lg:w-[350px] rounded-lg flex items-center'/>
            <img className='hover:bg-blue-300' src={filter} />
        </div>

        <div className='flex gap-5 text-sm'>
            <button onClick={onClick} className='bg-white border-2 border-blue-300 rounded-lg p-1'>Login</button>
            <button onClick={onSignin} className='bg-white border-2 border-blue-300 rounded-lg p-1'>Sign up</button>
        </div>
    </div>
  )
}



export default Header
