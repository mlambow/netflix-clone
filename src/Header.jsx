import React, { useEffect, useState } from 'react';
import './Header.css';



function Header() {
  const [show, handleShow] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
          handleShow(true);
        } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll", handleShow(false));
      };
    }, []);

  return (
    <div className={`header ${show && "header_black"}`}>
      <img className='header_image' 
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
      alt='netflix-logo' />
    </div>
  )
}

export default Header