import React from 'react'

const Bloglist = () => {
  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button className='bg-black text-white py-1 px-4 rounded-sm'>
          All
        </button>
        <button>
          Technology
        </button>
        <button>
          Startup
        </button>
        <button>
          Lifestyle
        </button>

      </div>
    </div>
  )
}
export default Bloglist