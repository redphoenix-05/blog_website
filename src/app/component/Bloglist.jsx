import { blog_data } from '@/asset/assets'
import Blogitem from './Blogitem'
import React from 'react'

const Bloglist = () => {
  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button className='hover:bg-black hover:text-white py-1 px-4 rounded-sm'>
          All
        </button>
        <button className='hover:bg-black hover:text-white py-1 px-4 rounded-sm'>
          Technology
        </button>
        <button className='hover:bg-black hover:text-white py-1 px-4 rounded-sm'>
          Startup
        </button>
        <button className='hover:bg-black hover:text-white py-1 px-4 rounded-sm'>
          Lifestyle
        </button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 '>
        {blog_data.map((item, index) => {
          return <Blogitem key={index} image={item.image} title={item.title} description={item.description} category={item.category}/>
        })}
      </div>
    </div>
  )
}
export default Bloglist