import React from 'react'
import location from '../../assets/icons/location.png'
import filter from '../../assets/icons/filter.png'
import iccon from '../../assets/icons/iccon.png'
import notification from '../../assets/icons/notification.png'

const A_Header = () => {
  return (
        <div className='h-14 flex items-center justify-between px-10 bg-white'>
            <p className='text-xl font-bold text-black flex items-center'>Big-Buy</p>

            <div className='hidden sm:flex bg-white border-2 border-blue-300 rounded-lg xl:w-[450px] lg:w-[370px] h-10 justify-center'>
                <input className='bg-white xl:w-[400px] lg:w-[350px] rounded-lg flex items-center'/>
                <img className='hover:bg-blue-300' src={filter} />
            </div>

            <div className='flex items-center gap-2'>
                <div className='border-2 border-blue-100 rounded-lg hidden md:flex w-20 items-center h-10'>
                    <img className='h-5' src={location} />
                    <p className='text-xs'>Delivery to Lagos</p>
                </div>

                <div className='bg-blue-300 p-1 rounded-md md:hidden'>
                    <img className='h-5' src={location} />
                </div>

                <img className='' src={notification} />

                <img className='' src={iccon} />
            </div>


        </div>
    )
}

export default A_Header
