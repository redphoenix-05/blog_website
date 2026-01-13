import React from 'react'
import Image from 'next/image'
import { assets } from '@/asset/assets'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image
                src={assets.logo}
                alt="Logo"
                width={180}
                className='w-32.5 sm:w-auto'
            />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                Get Started
                <Image
                    src={assets.arrow}
                    alt="Arrow Right"
                    width={20}
                    height={20}
                />
            </button>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-185 m-auto text-xs sm:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sapiente est omnis alias. Id, laboriosam maiores pariatur eligendi omnis quas. Voluptatum eaque consectetur tenetur porro perferendis praesentium facilis quasi dolores!
            </p>
            <form className='mt-10 flex justify-between max-w-125 scale-75 sm:scale-100 mx-auto border border-black shadow-[-7px_7px_0px_#000000]'>
                <input 
                    type="email" 
                    placeholder='Enter your email address' 
                    className='pl-4 outline-none'
                />
                <button type="submit" className='border-l border-black px-4 py-4 sm:px-8 active:bg-gray-600 active:text-white'>
                    Subscribe
                </button>
            </form>
                 

        </div>
      
    </div>
  )
}

export default Header
