import './JoinUs.css'
import img1 from '../../assets/images/choose-us-image-01.png'
import img2 from '../../assets/images/choose-us-image-02.png'
import img3 from '../../assets/images/choose-us-image-03.png'
import { useState } from 'react'

export default function JoinUs() {
    const [focusedTab, setFocusedTab] = useState(1);
    return (
    <>
    <section className="section why-us" data-section="section2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Who we are and what we do</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div id="tabs">
              <ul>
                <li className={focusedTab===1 ? "ui-tabs-active ui-state-active" : ''}><a onClick={()=>setFocusedTab(1)}>Non profit organisation</a></li>
                <li className={focusedTab===2 ? "ui-tabs-active ui-state-active" : ''}><a onClick={()=>setFocusedTab(2)}>Technology Trainer</a></li>
                <li className={focusedTab===3 ? "ui-tabs-active ui-state-active" : ''}><a onClick={()=>setFocusedTab(3)}>Quality Learning platform</a></li>
              </ul>
              <section className="tabs-content">
                { focusedTab === 1 &&
                <article id="tabs-1">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={img1} alt="" />
                    </div>
                    <div className="col-md-6">
                      <h4>Non profit organisation</h4>
                      <p>
                        We are an organization aiming to bring real-world
                        experience to the plates of students; trying to bridge
                        the gap between college and the market through the means
                        of events such as workshops, hack-a-thons, and much
                        more.<br />Excited to be a part of it?<br />We are too,
                        to take you in on a ride filled with opportunities from
                        developing leadership to other skills.
                      </p>
                    </div>
                  </div>
                </article>
                }
                { focusedTab === 2 &&
                <article id="tabs-2">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={img2} alt="" />
                    </div>
                    <div className="col-md-6">
                      <h4>Technology Trainer</h4>
                      <p>
                        Technical skills being crucial in this era, we are
                        focused on providing quality IT workshops for all
                        students across the country and the globe.
                      </p>
                      <p>
                        We believe workshops, bootcamps, not only improves
                        skills but also develops strength on students to believe
                        in change and team works.
                      </p>
                    </div>
                  </div>
                </article>
                }
                { focusedTab === 3 &&
                <article id="tabs-3">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={img3} alt="" />
                    </div>
                    <div className="col-md-6">
                      <h4>Quality Learning platform</h4>
                      <p>
                        With the aim of making industrial based education
                        accessible to everyone, we are fully dedicated on
                        organizing workshops, events, bringing on real projects.
                        This makes PDSC a quality learning platform for everyone
                        everywhere.
                        <a rel="nofollow" href="#" target="_parent"
                          >Checkout for workshops</a
                        >
                        being attempted soon.
                      </p>
                    </div>
                  </div>
                </article>
                }
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}