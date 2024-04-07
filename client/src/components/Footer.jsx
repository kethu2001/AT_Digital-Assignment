import React from 'react';
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className='w-1/3'>
        <img src={logo} alt='' className="" />
        <p className='mt-4'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div> 
        <div className=''>
          <p className='text-xl' >Our Technologies</p>
          <p className='mt-1'>ReactJS</p>
          <p  className='mt-1'>Gatsby</p>
          <p href="#" className="hover:underline mt-1">NextJS</p>
          <p href="#" className="hover:underline mt-1 ">NodeJs</p>
        
        </div>
        
        <div>
          <p className='text-xl' >Our Services</p>
          <p className='mt-5'>Social Media Marketing</p>
          <p  className='mt-3'>Web & Mobile App Development</p>
          <p  className='mt-3'>Data Analytics</p>

        </div>
        
      </div>
      <div className='flex flex-col items-center'>
        <br/>
      <hr className='border-t-1 border-white w-1/2 my-4 ' />
      </div>
      <div className='flex flex-col items-center'>
                <span className='text-white flex flex-auto items-center'>Privacy Policy  |  Terms & Conditions</span>
            </div>
    </footer>
  );
};

export default Footer;