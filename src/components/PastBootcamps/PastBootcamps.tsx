import './PastBootcamps.css'
import pythonLogo from '../../assets/images/Python_logo.png'


export default function PastBootcamps() {
    return(
            <section className="section video" data-section="section5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="left-content">
              <span>our presentation is for you</span>
              <h4>
                Watch the records of past <em>Bootcamps organized </em> by PDSC
              </h4>
              <p>
                Wondering about the workshops we did?. Click on the link below
                and watch it in our official YouTube channel..
              </p>
              <div className="main-button">
                <a
                  rel="nofollow"
                  href="https://www.youtube.com/channel/UCtBAL5IGsN6Hyk_deE2BQOw"
                  target="_parent"
                  >Go to Youtube</a
                >
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <article className="video-item">
              <div className="video-caption">
                <h4>Python Basics| PDSC Bootcamp Highlight</h4>
              </div>
              <figure>
                <a
                  href="https://www.youtube.com/watch?v=Y-PGgjsdpLs"
                  className="play"
                  ><img src={pythonLogo}
                /></a>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
    )
}