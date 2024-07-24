import './EventsComponent.css'
// import { useState } from 'react'

const EventsComponent = () => {
    // const [activeCarousel, setActiveCarousel] = useState(0);
    return (
        <section className="section events" data-section="section4">
            <div className="section-heading">
            <h2>Our Events</h2>
            </div>

        <div className="container py-2 mt-4 mb-4">
        <div className="row no-gutters">
            <div className="col-sm"> {" "} </div>
            <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-success border border-success custom-badge">&nbsp;</span>
            </h5>
            <div className="row h-50">
                <div className="col border-right border-success custom-border">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            </div>
            <div className="col-sm py-2">
            <div className="card">
                <div className="card-body">
                {/* <div className="float-right text-muted small">Jan 9th 2019 7:00 AM</div> */}
                <h4 className="card-title">Autocad</h4>
                <p className="card-text">Completed an 8-day in-person AutoCAD workshop, primarily focused on Civil Engineering students. It was a highly successful event with many participants.</p>
                </div>
            </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-sm py-2">
            <div className="card">
                <div className="card-body">
                {/* <div className="float-right small text-muted">Jan 10th 2019 8:30 AM</div> */}
                <h4 className="card-title">Python For Automation</h4>
                <p className="card-text">Completed a 5-day online Python for Automation workshop, featuring hands-on learning led by expert mentors.</p>
                </div>
            </div>
            </div>
            <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col border-right border-success custom-border">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-success border border-success custom-badge">&nbsp;</span>
            </h5>
            <div className="row h-50">
                <div className="col border-right border-success custom-border">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            </div>
            <div className="col-sm"> {" "} </div>
        </div>
        <div className="row no-gutters">
            <div className="col-sm"> {" "} </div>
            <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col border-right border-success custom-border">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-success border border-success custom-badge">&nbsp;</span>
            </h5>
            <div className="row h-50">
                <div className="col border-right border-success custom-border">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            </div>
            <div className="col-sm py-2">
            <div className="card">
                <div className="card-body">
                {/* <div className="float-right text-muted small">Jan 11th 2019 8:30 AM</div> */}
                <h4 className="card-title">Blockchain</h4>
                <p>Completed a 5-day blockchain workshop with expert mentors, featuring hands-on learning and a company visit.</p>
                </div>
            </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-sm py-2">
            <div className="card">
                <div className="card-body">
                {/* <div className="float-right text-muted small">Jan 12th 2019 11:30 AM</div> */}
                <h4 className="card-title">Coming Up</h4>
                <p>Something special coming soon...</p>
                </div>
            </div>
            </div>
            <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col border-right border-success custom-border">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-light border border-success custom-badge">&nbsp;</span>
            </h5>
            <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            </div>
            <div className="col-sm"> {" "} </div>
        </div>
        </div>

        </section>
    );
};

export default EventsComponent;