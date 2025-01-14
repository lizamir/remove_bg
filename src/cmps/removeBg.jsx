import { useState } from 'react';
import './removeBg.css';
import close from '../assets/images/close.png';

const RemoveBg = () => {
  return (
    <div className="remove_bg_main">
      <div className="header_container">
        <img src={close} alt="close" className="close" />
        <h1 className="title">העלאת תמונה להסרת הרקע</h1>
      </div>
      <button className="add_img">העלאת תמונה</button>
    </div>
  );
};
export default RemoveBg;
