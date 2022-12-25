import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.jpg'

const Header = () => {

  const [searching, setSearching] = useState(false);

  return (
    <nav className='sticky z-10 w-full bg-secondary text-gray-100'>
      <div className='px-2  bg-secondary text-white flex justify-between items-center'>
        <div>
          <img className='h-8 py-1' src={logo} alt="" />
        </div>
        <div onClick={()=>setSearching(!searching)} className='text-2xl'><i className="fa-solid fa-bars"></i></div>
      </div>
      <div className={`${searching? 'block' : 'hidden'}`}>
        <div className='my-1 mx-2'>
          <input className='form-control' type="search" placeholder='Search' />
        </div>
        <div className='md:flex justify-around mx-2 py-1'>
          <div className='flex gap-2'>
            Price:
            <div >$</div>
            <div className='text-primary'>$$</div>
            <div>$$$</div>
            <div>$$$$</div>
          </div>
          <div className='flex'>
            <div>
              Qualification
            </div>

            <div className='ml-2 text-primary'><i className="fa-solid fa-star"></i></div>
            <div className='ml-px text-primary '><i className="fa-solid fa-star"></i></div>
            <div className='ml-px text-primary'><i className="fa-solid fa-star"></i></div>
            <div className='ml-px text-primary'><i className="fa-solid fa-star"></i></div>
            <div className='ml-px'><i className="fa-regular fa-star"></i></div>
          </div>
          <div>
            <button className=' block py-1 px-4 rounded shadow-xl hover:shadow-none hover:bg-gray-700 hover:text-white bg-gray-500'>Filter</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;