import React from 'react';
import { AiOutlineSearch,AiFillHome,AiOutlineWallet } from 'react-icons/ai';
import { MdOndemandVideo} from 'react-icons/md';
import { FaPlusCircle, FaRegFlag,FaUser, FaBell, FaFacebookMessenger} from 'react-icons/fa';
import './Facebook.css'
import logo2 from './logo2.png'
function Facebook() {
  return (
    <div className='Main'>
    <div className='head'>
      <div className='top-left'>
        <div className='logo'>
      <img src={logo2} alt="logo" width="40px" height="45px"/>
      </div>
      <div className='search'>
      <AiOutlineSearch style={{height:'4rem'}}/>
      <input type="Search" placeholder="Search Facebook"/>
      </div>
      <div className='middle'>
        <div className='icon'>
      <AiFillHome fontSize="1.8rem" color="#1077f2"/>
      </div>
      <div className='icon'>
      <FaRegFlag fontSize="1.5rem"/>
      </div>
      <div className='icon'>
      <MdOndemandVideo fontSize="1.5rem"/>
      </div>
      <div className='icon'>
      <FaUser fontSize="1.5rem"/>
      </div>
      <div className='icon'>
      <AiOutlineWallet fontSize="1.5rem"/>
      </div>
      </div>
      <div className='top-right'>
      <FaPlusCircle fontSize="1.5rem"/>
      <FaFacebookMessenger fontSize="1.5rem"/>
      <FaBell fontSize="1.5rem"/>
      </div>
      </div>
    </div>
    <div className='content'>
        
    </div>
  </div>
  );
}

export default Facebook;