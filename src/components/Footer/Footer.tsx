import './Footer.css'

export default function Footer() {
    return (
         <footer>
      <div className="container">
        <ul className="social-menu p-3">
          <li>
            <a href="https://www.facebook.com/pdscorg"
              ><i className="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://github.com/pdscorg"
              ><i className="fab fa-github"></i
            ></a>
          </li>
          {/* There isn't any official X account of PDSC as of 6/26/2025*/}
         {/* <li> */}
            {/* <a href="https://twitter.com/NepalPdsc" */}
              {/* ><i className="fab fa-twitter"></i */}
            {/* ></a> */}
          {/* </li> */}
          <li>
            <a href="https://www.instagram.com/pdscorg/"
              ><i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCtBAL5IGsN6Hyk_deE2BQOw"
              ><i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>

        <div className="row">
          <div className="col-md-12">
            <p>
              <i className="fa fa-copyright"></i> 2025 PDSC Nepal. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    )
}