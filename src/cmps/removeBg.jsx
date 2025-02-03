import { useState } from 'react';
import './removeBg.css';
import close from '../assets/images/close.png';
import logo from '../assets/images/logo.png';
import banner from '../assets/images/banner.png';
import RightDiv from './rightDiv';
import LeftDiv from './leftDiv';
import { Upload } from 'lucide-react';

const RemoveBg = () => {
  return (
    <div className="remove_bg_main">
      <div className="header_container">
        <img src={close} alt="close" className="close" />
        <h1 className="title">העלאת תמונה להסרת הרקע</h1>
        <div className="add_img_container">
          <button className="add_img">
            <Upload className="upload" size={18} />
            העלאת תמונה
          </button>
          <div className="header_text">פורמטים נתמכים png , jpeg </div>
        </div>
      </div>

      <div className="middle_cont">
        <RightDiv></RightDiv>

        <LeftDiv></LeftDiv>
      </div>

      <div className="footer_cont">
        <img className="logo" src={logo} alt="logo" />
        <img className="banner" src={banner} alt="banner" />
      </div>
    </div>
  );
};
export default RemoveBg;
