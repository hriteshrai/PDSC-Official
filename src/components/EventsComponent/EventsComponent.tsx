import './EventsComponent.css'
import { useState } from 'react'

const EventsComponent = () => {
    const [activeCarousel, setActiveCarousel] = useState(0);
    return (
        <section className="section coming-soon" data-section="section3" style={{paddingBottom: "10vh"}}>
      <div className="section-heading">
        <h2>Register Now for our <span style= {{color: "#44aa70"}}>Events</span></h2>
      </div>
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            {activeCarousel === 0 && 
            <div className="carousel-item">
                <iframe
                    src="https://lu.ma/embed-checkout/evt-HqAa6QTmvEBABaB"
                    width="1080"
                    height="450"
                    frameBorder={0}
                    style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                ></iframe>
            </div>
            }
        </div>
        <a className="carousel-control-prev" onClick={()=>setActiveCarousel((p)=>(p-1)>=0?p-1:p)} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" onClick={()=>setActiveCarousel((p)=>(p+1)>=1?p:p+1)} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
      </div>
    </section>
    );
};

export default EventsComponent;