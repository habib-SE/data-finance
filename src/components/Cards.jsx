import React from 'react'
import Single from './assets/single.png';
import Double from './assets/double.png';
import Triple from './assets/triple.png';

function Cards() {
  return (
    <div className='w-full bg-white py-16'>
      <div className='max-w-[1240px] grid md:grid-cols-3 gap-8'>
        <div className='flex flex-col w-full shadow-xl p-4 my-4 rounded-lg  hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Single} alt="/" />
          <h1 className='text-2xl font-bold text-center py-8'>Single user</h1>
          <h1 className='text-center  text-4xl font-bold'>$149</h1>
          <div className='text-center font-medium py-8'>
            <p className='py-2 border-b mx-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            <div>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px]  my-6 px-6 py-3'>Start Trail</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full shadow-xl p-4 my-4 rounded-lg  hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Double} alt="/" />
          <h1 className='text-2xl font-bold text-center py-8'>Double user</h1>
          <h1 className='text-center  text-4xl font-bold'>$249</h1>
          <div className='text-center font-medium py-8'>
            <p className='py-2 border-b mx-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>2 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 3 GB</p>
            <div>
            <button className='text-[#00df9a] bg-black rounded-md font-medium w-[200px]  my-6 px-6 py-3'>Start Trail</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full shadow-xl p-4 my-4 rounded-lg  hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Triple} alt="/" />
          <h1 className='text-2xl font-bold text-center py-8'>Triple user</h1>
          <h1 className='text-center  text-4xl font-bold'>$349</h1>
          <div className='text-center font-medium py-8'>
            <p className='py-2 border-b mx-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>3 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
            <div>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px]  my-6 px-6 py-3'>Start Trail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards;