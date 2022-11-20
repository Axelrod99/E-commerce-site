import React, { useState } from 'react'
import sneakers from '../assets/images/sneakers.png'
import star from '../assets/icons/star.png'
import { useParams } from 'react-router-dom'
import { products } from '../utils/data'
 

const Details = () => {
    const {product_id} = useParams();

    const [count, setCount] = useState(1)

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    console.log("gfgfgffg: ",product_id);

    const productResult = products.find( product =>  Number(product.id)===Number(product_id));



    return (
        <div>
            <div className='h-60 w-full'>
                <img className='w-full h-60' src={productResult.image} />
            </div>

            <div className='flex flex-col items-center border-b-2 border-black justify-center p-4'>
                <p className='text-2xl font-bold'>{productResult.name}</p>

                <div className='flex gap-3 items-center'>
                    <p className='bg-blue-400 p-1 w-fit rounded-lg'>{productResult.number_sold} sold</p>
                    
                    <div className='flex items'>
                        <img className='w-5 h-5 flex items-center' src={star} />
                        <p>{productResult.rating}</p>
                    </div>

                    <p>(176 reviews)</p>
                </div>
            </div>

            <div>
                <p>Description</p>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>

            {/* <div className='py-5 w-full flex justify-around'>

                <div className='flex w-full'>
                    <p>Size: </p>
                    <div>
                        <div className='flex gap-2'>
                            <div className=' border-200 border-sky-200'>S</div>
                            <div>M</div>
                            <div>L</div>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <p>Size: </p>
                    <div className='flex gap-2'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                    </div>
                </div>
            </div> */}

            <div className='flex justify-center py-5 gap-3'>
                <p className='text-xl font-bold'>Quantity </p>
                <div className='p-1 bg-gray-400 rounded-xl w-fit flex gap-3 px-3'>
                    <>
                        <button onClick={decrementCount}>-</button>
                        <span>{count}</span>
                        <button onClick={incrementCount}>+</button>
                    </>
                </div>
            </div>

            <div className='flex justify-around'>
                <div>
                    <p className='text-xs'>Total Price</p>
                    <p className='text-2xl font-bold'>{productResult.price}</p>
                </div>
                
                <button className='p-2 bg-black text-white'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Details
