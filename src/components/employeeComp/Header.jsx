import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LCWU from '../../assets/images/LogoLCWU.png';
import Avatar from '../../assets/images/avatar.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuLinks = ['Profile', 'Settings', 'Logout'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menuItem) => {
    if(menuItem === 'Logout'){
      navigate("/");
    } 
    toggleDropdown()
  };

  return (
    <header className='w-full h-[10vh] flex bg-gray-100 rounded-b-[1vw]'>
      <div className='w-[10%] h-full p-[1vw] flex justify-center items-center'>
        <img
          src={LCWU}
          alt=''
          className='w-[8vw] h-[4vw]'
        />
      </div>
      <div className='w-[70%] h-full flex flexcol justify-center items-center gap-x-[1vw]'>
        <p className='text-[1.4vw]'>
        Lahore College for women, University</p>
          <p className='text-[1vw] bg-blue-900 text-white p-[0.5vw] rounded-[0.5vw]'>
          <span className='font-semibold'>LMS - </span> 
          Student Dashboard</p>
      </div>
      <div className='w-[20%] h-full flex justify-center items-center'>
        <div className="flex flex-col items-end justify-center">
          <div className="text-[1vw] text-base font-semibold">Abdul Hannan</div>
          <div className="font-normal text-gray-500">hannan786@gmail.com</div>
        </div>
        <div className='relative flex items-start justify-center'>
          <img
            className="w-[10vh] h-[10vh] p-[0.5vw] hover:p-[0.3vw] cursor-pointer animate rounded-full"
            src={Avatar}
            alt=""
            onClick={toggleDropdown}
          />
        </div>
        {isOpen && (
            <div className={`z-10 absolute right-[2vw] top-[10vh] w-[16vw] mt-[0.1vh] text-black bg-gray-100 rounded-lg shadow-2xl shadow-black animate ${isOpen ? "scale-100" : "scale-0"}`}>
              <ul className='p-[0.5vw] divide-y divide-slate-400'>
                {menuLinks.map((menuItem, index) => (
                  <li
                    key={index}
                    className='p-2 cursor-pointer hover:bg-gray-200 hover:text-blue-600 hover:underline'
                    onClick={() => handleMenuClick(menuItem)}
                  >
                    {menuItem}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;
