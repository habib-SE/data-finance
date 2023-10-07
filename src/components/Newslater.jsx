import React from 'react'


const Newslater = () => {
    return (
        <div className='text-white py-16 w-full'>
            <div className='max-w-[1240px] mx-auto  grid lg:grid-cols'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2 '> Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 rounded-md flex w-full text-black' type="text" placeholder='Enter your email' />

                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify me</button>

                    </div>
                    <p>
                        We care bout the protection of your data. Read our{' '}
                        <span className='text-[#00df9a]'>Privacy Policy.</span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Newslater;