"use client"
import Footer from '@/app/component/Footer';
import { assets, blog_data } from '@/asset/assets';
import Image from 'next/image'
import React, { useState, useEffect  } from 'react'

const Page = ({params}) => {
    const unwrappedParams = React.use(params);
  
    const [data,setdata] = useState(null);
    const fetchBlogdata = () => {
        for(let i=0;i<blog_data.length;i++){
            if(blog_data[i].id === Number(unwrappedParams.id)){
                setdata(blog_data[i]);
                console.log(blog_data[i]);
                break;
                
            }
        }
    }

    useEffect(() => {
        fetchBlogdata();
    }, []);

    return( data ? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image
                src={assets.logo}
                alt="Logo"
                width={180}
                className='w-32.5 sm:w-auto'
            />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] hover:shadow-none bg-white'>
                Get Started
                <Image
                    src={assets.arrow}
                    alt="Arrow Right"
                    width={12}
                    height={12}
                />
            </button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-175 mx-auto'>{data.title}</h1>
            <Image
                src={data.author_img}
                alt="Author Image"
                width={60}
                height={60}
                className='mx-auto mt-6 border border-black rounded-full'
            />
            <p className='mt-1 pb-2 text-lg max-w-185 mx-auto'>
                By {data.author}
            </p>
        </div>
    </div>
    <div className='mx-5 max-w-200 md:mx-auto -mt-25 mb-10'>
        <Image
            src={data.image}
            alt="Blog Image"
            width={800}
            height={400}
            className='border-4 border-black'
        />
        <h1 className='my-8 text-[26px] font-semibold'>
            Introduction:
        </h1>
        <p>
            {data.description}
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>
            Step 1: Research and Planning
        </h3>
        <p className='my-3'>
            We begin by conducting thorough research on the topic to ensure accuracy and depth. Planning the structure of the blog post is crucial to maintain a logical flow of information.
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>
            Step 2: Writing the Content
        </h3>
        <p className='my-3'>
            With the research and plan in place, we proceed to write the content. This involves crafting engaging and informative paragraphs that resonate with the target audience.
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>
            Step 3: Editing and Proofreading
        </h3>
        <p className='my-3'>
            After the initial draft is complete, we meticulously edit and proofread the content to eliminate any grammatical errors and enhance readability.
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>
            Conclusion:
        </h3>
        <p className='my-3'>
            Finally, we conclude the blog post by summarizing the key points and providing a call-to-action for readers to engage further with the content.
        </p>
        <div className='my-24'>
            <p className='text-black font font-semibold my-4 justify-center items-center text-center'>
            Share this article on Social Media
            </p>
            <div className='flex justify-center items-center'>
                <Image
                    src={assets.facebook_icon}
                    alt="Facebook"
                    width={40}
                    height={40}
                    className='mr-4'
                />
                <Image
                    src={assets.twitter_icon}
                    alt="Twitter"
                    width={40}
                    height={40}
                    className='mr-4'
                />
                <Image
                    src={assets.googleplus_icon}
                    alt="Google Plus"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    </div>
    <Footer />
  </>:<div className='justify-center items-center'>Loading...</div>
  )
}

export default Page
