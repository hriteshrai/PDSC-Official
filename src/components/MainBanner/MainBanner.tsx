import './MainBanner.css'
import introVideo from '../../assets/images/pdsc_intro.mp4'

const scrollToSection = (sectionDataAttribute:string) => {
  const element = document.querySelector(`[data-section="${sectionDataAttribute}"]`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function MainBanner() {
    return (
         <section className="section main-banner" id="top" data-section="section1">
      <video autoPlay muted loop id="bg-video">
        <source src={introVideo} type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
        <div className="caption">
          <h2>
            <em>Plan, Design<br />Solve & Create</em>
          </h2>
          <div className="main-button">
            <div className="scroll-to-section">
              <a style={{color:'white',cursor:'pointer'}} onClick={()=>scrollToSection('section2')}>Discover more</a>
              <a style={{color:'white',cursor:'pointer'}} onClick={()=>scrollToSection('section3')}>Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}