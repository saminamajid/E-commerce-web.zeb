import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.IMG_96} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p>Zeb is an Online store based in Alghanistan which offers high quality and premium Afghan made products in order to support and grow the domestic products of afghanistan in Addition we import the finest and hand picked products based on the current trends and day to day products update worldwido.</p>
             <p>Zeb is more than just a brand it's a celebration of individuality and self expression.
                   We believe that everyone deserve to feel confident and beautiful that's why we provide
                   products both stylish and affordable.
                   No matter who you are you'll find something that brings out the best in you.</p>
             <b className='text-gray-800'>Our Mission</b>
             <p>Step Into Style
                   Experience the most trendy And stylish yet comfortable products with Zeb</p>
          </div>
       </div>

        <div className='text-xl py-4'>
           <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Quality Assurance:</b>
           <p className='text-gray-600'>Our embroidery streetwear
                Focuses on quality and design to give you the best experience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Convenience:</b>
           <p className='text-gray-600'>Our collections are launching
                For both Ladies and Gentlemen
                Vintage spm
                and pastel colors aro tha signature of this collection.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
           <b>Exceptional Customer Service:</b>
           <p className='text-gray-600'>Premium Afghanistan handcrafted jewellery.
                 We accept custom orders at best possible prices.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About