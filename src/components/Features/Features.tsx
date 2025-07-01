import './Features.css'
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import $ from 'jquery'

export default function Features() {
    const [isHovered, setIsHovered] = useState(0);
    const navigator = useNavigate();
    const locator = useLocation();
//      useEffect(() => {
//         $("div.features-post").hover(
//     function () {
//       $(this).find("div.content-hide").slideToggle("medium");
//     },
//     function () {
//       $(this).find("div.content-hide").slideToggle("medium");
//     }
//   );
//     }, []);
    const scrollToSection = (sectionDataAttribute:string) => {
      if (locator.pathname !== '/') {
        navigator('/');
        return;
      }
      const element = document.querySelector(`[data-section="${sectionDataAttribute}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return (
        <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="features-post" 
                onMouseEnter={() => setIsHovered(1)}
                onMouseLeave={() => setIsHovered(0)}>
              <div className="features-content">
                <div className="content-show">
                  <h4><i className="fa fa-pencil"></i>All Courses</h4>
                </div>
                <div className={isHovered===1 ? "slide-2":'content-hide-2'}>
                  <p>
                    As we assure plan , design, solve and create in our name. We
                    are offering various courses, bootcamps and workshops free
                  </p>
                  <p className="hidden-sm">
                    we just not help peoples on Python, JavaScript, Django, Data
                    Science, Machine Learning, Designing, but also on other
                    related topics..
                  </p>
                  <div className="scroll-to-section">
                    <a onClick={()=>scrollToSection('section2')}>More Info.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="features-post second-features"
                onMouseEnter={() => setIsHovered(2)}
                onMouseLeave={() => setIsHovered(0)}>
              <div className="features-content">
                <div className="content-show">
                  <h4><i className="fa fa-graduation-cap"></i>tutorials</h4>
                </div>
                <div className={isHovered===2 ? 'slide-2':'content-hide-2'}>
                  <p>
                    Soon we are going to post out tutorials on different topics
                    for now you can checkout our youtube tutorials
                  </p>
                  <p className="hidden-sm">
                    we will be publishing and making tutorails in every common
                    factors as possible.
                  </p>
                  <div className="scroll-to-section">
                    <a onClick={()=>scrollToSection('section5')}>Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="features-post third-features"
                onMouseEnter={() => setIsHovered(3)}
                onMouseLeave={() => setIsHovered(0)}>
              <div className="features-content">
                <div className="content-show">
                  <h4><i className="fa fa-book"></i>Motivations</h4>
                </div>
                <div className={isHovered===3 ? 'slide-2': 'content-hide-2'}>
                  <p>
                    Success is the sum of small efforts repeated. Try using your
                    effort..we are here to support you.
                  </p>
                  <p className="hidden-sm">
                    Stay motivated, stay Learning. We are being expert soon
                  </p>
                  <div className="scroll-to-section">
                    <a onClick={()=>scrollToSection('section5')}>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}