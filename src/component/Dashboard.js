import React from 'react'
import { Link } from 'react-router-dom'
import A_Header from './A_Header'
import star from '../assets/icons/star.png'
import icon from '../assets/icons/icon.png'
import jewelry from '../assets/icons/jewelry.png'
import clothes from '../assets/icons/clothes.png'
import electronics from '../assets/icons/electronics.png'
import bags from '../assets/icons/bags.png'
import kitchen from '../assets/icons/kitchen.png'
import toys from '../assets/icons/toys.png'
import watches from '../assets/icons/watches.png'
import shoes from '../assets/icons/shoes.png'
import deals from '../assets/images/deals.png'
import x from '../assets/icons/x.png'
import dash from '../assets/icons/dash.png'
import { products} from '../utils/data'

const Dashboard = () => {


    return (
        <div>
            <A_Header />

            <section className='text-blue-100' id='aaa'>

                <div className='bg-blue w-full flex justify-center my-7'>
                    <img className='w-[50%]' src={deals} />
                </div>

                <div className='flex justify-center gap-2 relative bottom-4'>
                    <img className='' src={dash} />

                    <div className='h-2 w-2 bg-blue-500 rounded'></div>
                    <div className='h-2 w-2 bg-blue-500 rounded'></div>
                    <div className='h-2 w-2 bg-blue-500 rounded'></div>
                </div>

                <div className='grid gap-3 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 bx:grid-cols-3 justify-items-center md:text-sm text-xs'>


                    {products.map(product =>


                        <Link to={`/Details/${product.id}`} key={product.name} className='bg-white xl:h-[270px] xl:w-60 lg:h-60 lg:w-52 md:w-44 w-40 p-1 relative rounded-lg flex flex-col items-center'>
                            <img className='xl:w-60 xl:h-48 lg:w-48 lg:h-40 h-32' src={product.image} />
                            <img className='absolute top-3 right-5' src={icon} />

                            <div className='text-black flex flex-col'>
                                <p>{product.name}</p>
                                <div className='flex w-full flex-col'>
                                    <div className='flex justify-center gap-3'>
                                        <div className='flex'>
                                            <img className='w-5' src={star} />
                                            <p>{product.rating}</p>
                                        </div>

                                        <div className='bg-blue-100 rounded-lg'>
                                            <p className='px-2'>{product.number_sold} sold</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p>{product.price}</p>
                                    </div>

                                </div>

                            </div>
                        </Link>

                    )}


                </div>

            </section>


            <div className='flex text-black text-xs p-5 xl:gap-24 lg:gap-20 md:gap-14 sm:gap-10 bx:gap-3 justify-center'>
                <div>
                    <img className='' src={bags} />
                    <p>Bags</p>
                </div>
                <div>
                    <img className='' src={clothes} />
                    <p>Clothes</p>
                </div>
                <div>
                    <img className='' src={electronics} />
                    <p>Electronics</p>
                </div>
                <div>
                    <img className='' src={jewelry} />
                    <p>Jewelry</p>
                </div>
                <div>
                    <img className='' src={kitchen} />
                    <p>Kitchen</p>
                </div>
                <div>
                    <img className='' src={toys} />
                    <p>Toys</p>
                </div>
                <div>
                    <img className='' src={watches} />
                    <p>Watches</p>
                </div>
                <div>
                    <img className='' src={shoes} />
                    <p>Shoes</p>
                </div>


            </div>

            <div className='text-white'>
                <div className='flex justify-between px-10'>
                    <p className='font-semibold bg-blue-200 p-1 rounded'>Popular</p>
                    <p className='font-semibold bg-blue-200 p-1 rounded'>See all</p>
                </div>
            </div>




        </div>
    )
}

export default Dashboard