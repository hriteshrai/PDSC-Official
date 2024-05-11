import './Navbar.css'
import logo from '../../assets/images/Alt.png'

export default function Navbar() {

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
      <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li><a href="#section1">Home</a></li>
          <li className="has-submenu">
            <a href="#section2">About Us</a>
            <ul className="sub-menu">
              <li><a href="#section2">Who we are?</a></li>
              <li><a onClick={() => scrollToSection('section6')}>Become Member</a></li>
              <li><a href="#">Our Team</a></li>
            </ul>
          </li>
          <li><a href="#section4">Programs</a></li>
          {/* <!-- <li><a href="#section5">Video</a></li> --> */}
          <li><a href="#section6">Contact</a></li>
          {/* <!--<li><a href="http://blog.pdscorg.com">Blogs</a></li>--> */}
        </ul>
      </nav>
    </header>
  )
}