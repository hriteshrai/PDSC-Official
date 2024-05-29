import './Navbar.css'
import logo from '../../assets/images/Alt.png'
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isActive,setIsActive] = useState(true);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if(window.innerWidth > 950 && changed === true){
    setIsActive(true);
    setChanged(false);
    }
    if(window.innerWidth < 950 && changed === false){
      setIsActive(false);
      setChanged(true);
    }
  },[])

  window.addEventListener('resize', () => {
    if(window.innerWidth > 950 && changed === true){
      setIsActive(true);
      setChanged(false);
    }
    if(window.innerWidth < 950 && changed === false){
      setIsActive(false);
      setChanged(true);
    }
  })
  
  

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
          <li><a style={{color:'white',cursor:'pointer'}} onClick={()=>scrollToSection('section1')}>Home</a></li>
          <li className="has-submenu">
            <a onClick={()=>scrollToSection('section2')}>About Us</a>
            <ul className="sub-menu">
              <li><a style={{color:'white',cursor:'pointer'}} onClick={()=>scrollToSection('section2')}>Who we are?</a></li>
              <li><a style={{color:'white',cursor:'pointer'}} onClick={() => scrollToSection('section3')}>Become Member</a></li>
              <li><a style={{color:'white',cursor:'pointer'}} onClick={()=>scrollToSection('team')}>Our Team</a></li>
            </ul>
          </li>
          <li><a style={{color:'white',cursor:'pointer'}} onClick={()=>scrollToSection('section5')}>Programs</a></li>
          <li><a style={{color:'white',cursor:'pointer'}} onClick={()=>scrollToSection('section6')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}