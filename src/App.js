import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../src/App.css'
import Header from './component/Header/index';
import laptop from './assets/images/laptop.png'
import star from './assets/icons/star.png'
import icon from './assets/icons/icon.png'
import bag from './assets/images/bag.png'
import jewelry from './assets/icons/jewelry.png'
import clothes from './assets/icons/clothes.png'
import electronics from './assets/icons/electronics.png'
import bags from './assets/icons/bags.png'
import kitchen from './assets/icons/kitchen.png'
import toys from './assets/icons/toys.png'
import watches from './assets/icons/watches.png'
import shoes from './assets/icons/shoes.png'
import deals from './assets/images/deals.png'
import sneakers from './assets/images/sneakers.png'
import heels from './assets/images/heels.png'
import suit from './assets/images/suit.png'
import x from './assets/icons/x.png'
import dash from './assets/icons/dash.png'
import { useNavigate } from 'react-router'


function App() {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('bottles');
    navigate(
      `/Dashboard` 
    )

  }

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);


  return (
    <div className="App">
      <Header
        onClick={()=>setShowLoginModal(true)}  
        onSignin={()=>setShowSigninModal(true)}
      />
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
          <div className='bg-white xl:h-[270px] xl:w-60 lg:h-60 lg:w-52 md:w-44 w-40 p-1 relative rounded-lg flex flex-col items-center'>
              <img className='xl:w-60 xl:h-48 lg:w-48 lg:h-40 h-32' src={laptop} />
              <img className='absolute top-3 right-5' src={icon} />

              <div className='text-black flex flex-col'>
                <p>MacBook Pro 2016</p>
                <div className='flex w-full flex-col'>
                  <div className='flex justify-center gap-3'>
                    <div className='flex'>
                      <img className='w-5' src={star} />
                      <p>4.5</p>
                    </div>

                    <div className='bg-blue-100 rounded-lg'>
                      <p className='px-2'>287 sold</p>
                    </div>
                  </div>

                  <div>
                    <p>$785.00</p>
                  </div>

                </div>

              </div>
            </div>


              <div className='bg-white xl:h-[270px] xl:w-60 lg:h-60 lg:w-52 md:w-44 w-40 p-1 relative rounded-lg flex flex-col items-center'>
                <img className='xl:w-60 xl:h-48 lg:w-48 lg:h-40' src={bag} />
                <img className='absolute top-3 right-5' src={icon} />

                <div className='text-black flex flex-col'>
                  <p>FLower bag</p>
                  <div className='flex w-full flex-col'>
                    <div className='flex justify-center gap-3'>
                      <div className='flex'>
                        <img className='w-5' src={star} />
                        <p>4.5</p>
                      </div>

                      <div className='bg-blue-100 rounded-lg'>
                        <p className='px-2'>287 sold</p>
                      </div>
                    </div>

                    <div>
                      <p>$785.00</p>
                    </div>

                  </div>

                </div>
              </div>

              
              <div className='bg-white xl:h-[270px] xl:w-60 lg:h-60 lg:w-52 md:w-44 w-40 p-1 relative rounded-lg flex flex-col items-center'>
                <img className='xl:w-60 xl:h-48 lg:w-48 lg:h-40' src={suit} />
                <img className='absolute top-3 right-5' src={icon} />

                <div className='text-black flex flex-col'>
                  <p>Sneakers</p>
                  <div className='flex w-full flex-col'>
                    <div className='flex justify-center gap-3'>
                      <div className='flex'>
                        <img className='w-5' src={star} />
                        <p>4.5</p>
                      </div>

                      <div className='bg-blue-100 rounded-lg'>
                        <p className='px-2'>287 sold</p>
                      </div>
                    </div>

                    <div>
                      <p>$785.00</p>
                    </div>

                  </div>

                </div>
              </div>


              
              <div className='bg-white xl:h-[270px] xl:w-60 lg:h-60 lg:w-52 md:w-44 w-40 p-1 relative rounded-lg flex flex-col items-center'>
                <img className='xl:w-60 xl:h-48 lg:w-48 lg:h-40' src={sneakers} />
                <img className='absolute top-3 right-5' src={icon} />

                <div className='text-black flex flex-col'>
                  <p>FLower bag</p>
                  <div className='flex w-full flex-col'>
                    <div className='flex justify-center gap-3'>
                      <div className='flex'>
                        <img className='w-5' src={star} />
                        <p>4.5</p>
                      </div>

                      <div className='bg-blue-100 rounded-lg'>
                        <p className='px-2'>287 sold</p>
                      </div>
                    </div>

                    <div>
                      <p>$785.00</p>
                    </div>

                  </div>

                </div>
              </div>
            
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

      {showSigninModal && <>
        <form className='w-80 h-96 bg-white rounded-xl border-2 border-blue-600 fixed m-auto top-0 bottom-0 right-0 left-0 z-[999]'>

          <button
            onClick={()=>setShowSigninModal(false)}
            className='flex justify-end p-2 w-fit'>
            <img className='flex' src={x} />
          </button>

          <div className='flex justify-center'>
            <p className='text-3xl font-bold my-2'>Signup</p>
          </div>

          <div className='w-full flex flex-col items-center gap-2'>
            <input placeholder='Email' className='border-2 w-[85%] h-11 rounded-md border-blue-500'></input>
            <input placeholder='Password' type={'password'} className='border-2 border-blue-500 w-[85%] h-11 rounded-md'></input>
            <input placeholder='Confirm Password' type={'password'} className='border-2 border-blue-500 w-[85%] h-11 rounded-md'></input>
          </div>

          <div className='flex justify-center py-1'>
            <button className='border-2 border-blue-300 text-sm font-bold text-[blue] bg-transparent p-1 rounded-md px-4'>Signup</button>
          </div>

        </form>

        <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
      </>}


      {showLoginModal && <>
        <form onSubmit={handlesubmit} className='w-80 h-72 bg-white rounded-xl border-2 border-blue-600 fixed m-auto top-0 bottom-0 right-0 left-0 z-[999]'>

          <button
            onClick={()=>setShowLoginModal(false)}
            className='flex justify-end p-2 w-fit'>
            <img className='flex' src={x} />
          </button>

          <div className='flex justify-center'>
            <p className='text-3xl font-bold my-2'>Login</p>
          </div>

          <div className='w-full flex flex-col items-center gap-2'>
            <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' value={email} type={'email'} className='border-2 w-[85%] h-11 rounded-md border-blue-500'></input>
            <input onChange={(e) => setPass(e.target.value)} placeholder='Password' value={pass} type={'password'} className='border-2 border-blue-500 w-[85%] h-11 rounded-md'></input>
          </div>

          <div className='w-full'>
            <p className='px-7 text-slate-400'>Forgot Password?</p>
          </div>

          <div className='flex justify-center'>
            <button type='submit' className='border-2 border-blue-300 text-sm font-bold text-[blue] bg-transparent p-1 rounded-md px-4'>Login</button>
          </div>

        </form>

        <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
      </>} 


    </div>
  );
}

export default App;
