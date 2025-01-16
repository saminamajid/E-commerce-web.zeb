import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import WhatsAppLink from './WhatsAppLink'


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
         <div>
            <img src={assets.logo_icon} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            - Flow with the trendy products. <br />
            - Swift and reliable shopping. <br />
            - Go confident with Zeb. 
            </p>
         </div>

         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
         </div>

         <div>
            <p className='text-xl font-medium mb-5'>GET IN TUOCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
               <li>+93 74 868 3826</li>
               <li>contact@zebonlinshop.com</li>
               {/* <li style={{ width: '35px', height: '35px'}}><NavLink to='https://www.instagram.com/zeb.afg?igsh=MXMyZWtjZWRwa2Ru'> <img src={assets.insta_icon} className='insta' alt='' /></NavLink></li>
               <li style={{  width: '35px', height: '35px'}}><NavLink to=''><img src={assets.whatsapp_icon} alt="" /></NavLink></li> */}
                 <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}> <br /> <br /> <br />
           <a href="" target="_blank" rel="">
           <NavLink to='https://www.instagram.com/zeb.afg?igsh=MXMyZWtjZWRwa2Ru'>
            <img src={assets.insta_icon} alt="" style={{ width: '30px', height: '30px'}}/></NavLink>
           </a>

           <a href="" target="_blank" rel="">
           {/* <NavLink to=''>
            <img src={assets.whatsapp_icon} alt="" style={{ width: '30px', height: '30px'}}/></NavLink> */}
            <WhatsAppLink/>
           </a>

           <a href="" target="_blank" rel="">
           <NavLink to='https://www.facebook.com/share/15XVYpMk8D/'>
            <img src={assets.face_icon} alt="" style={{ width: '30px', height: '30px'}}/></NavLink>
           </a>

           <a href="" target="_blank" rel="">
           <NavLink to='https://www.tiktok.com/@zeb.afg?_t=ZS-8sqEm899vaa&_r=1'>
            <img src={assets.tiktok_icon} alt="" style={{ width: '30px', height: '30px'}}/></NavLink>
           </a>
         </div>
            </ul>
         </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ zeb.afg follow me on {" "} 
         <a
           href="https://www.instagram.com/samina.developer?igsh=NzVvcXBlazQ1azNj&utm_source=qr"
           target="_blank"
           rel="noopener noreferre"
           style={{ textDecoration: "none", color: "#0077b6"}}
         >Instagram</a>
         - Develop by Samina & Negina Majid.</p>
      </div>

    </div>
  )
}

export default Footer