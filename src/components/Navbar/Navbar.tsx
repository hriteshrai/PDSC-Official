import './Navbar.css'
import logo from '../../assets/images/Alt.png'
import { useState } from 'react';

export default function Navbar() {

  const [isActive,setIsActive] = useState(false);

const scrollToSection = (sectionDataAttribute:string) => {
  const element = document.querySelector(`[data-section="${sectionDataAttribute}"]`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
  return (
    <header className="main-header clearfix" role="header">
      <div className="logo">
        <img src={logo} alt="logo" width="110" height="35" />
      </div>
      <a href="#menu" className= {`menu-link ${isActive ? 'active': ''}`} onClick={()=>setIsActive((p)=>!p)}><i className="fa fa-bars"></i></a>
      <nav id="menu" className={`main-nav ${isActive ? 'active': 'not-active'}`} role="navigation">
        <ul className="main-menu">
          <li><a onClick={()=>scrollToSection('section1')}>Home</a></li>
          <li className="has-submenu">
            <a onClick={()=>scrollToSection('section2')}>About Us</a>
            <ul className="sub-menu">
              <li><a onClick={()=>scrollToSection('section2')}>Who we are?</a></li>
              <li><a onClick={() => scrollToSection('section3')}>Become Member</a></li>
              <li><a onClick={()=>scrollToSection('team')}>Our Team</a></li>
            </ul>
          </li>
          <li><a onClick={()=>scrollToSection('section5')}>Programs</a></li>
          <li><a onClick={()=>scrollToSection('section6')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}