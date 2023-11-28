import React from 'react';
import Logo from '../../../assets/images/atsLogo.png';

const Header = () => {

  return (
    <header className='w-full h-[10vh] flex bg-blue-300 rounded-b-[1vw]'>
      <div className='w-[10%] h-full p-[1vw] flex justify-center items-center'>
        <img
          src={Logo}
          alt=''
          className='w-[5vw] h-[3vw]'
        />
      </div>
      <div className='w-[90%] h-full flex justify-center items-center'>
        <p className='text-[2vw]'>Lahore college for Women, Univeristy</p>
      </div>
    </header>
  );
};

export default Header;