import { FormEvent, useRef, useState } from 'react';
import './GeneralMembersForm.css'

export default function GeneralMembersForm() {  
  const formRef = useRef<HTMLFormElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setIsDisabled(true);
    const formData = new FormData(formRef.current);
    const keyValuePairs = [];
    for (const pair of formData.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }
    const formDataString = keyValuePairs.join("&");
    // Send a POST request to PDSC Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbxlpPVYhDZoA87MksiCPu6GWD9CDIbk_m_6gvXhLPSFQuNkL-eZLky8HHNAhJ2emz3ZyQ/exec",
      {
        redirect: "follow",
        method: "POST",
        body: formDataString,
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      }
    )
      .then(function (response) {
        if (response) {
          formRef.current?.reset();
          return response;
        } else {
          alert('Failed to submit the form');
        }
      })
      .then(function () {
        // Display a success message
        setShowSuccessMsg(true);
        setIsDisabled(false);
      });
  }

    return (
        <section className="section coming-soon" data-section="section3">
      <div className="section-heading">
        <h2>Join our Enthusiastic Team</h2>
      </div>
      <div className="continer centerIt">
        <div>
          <h4 style= {{textAlign: "center", paddingLeft: "16px", paddingRight: "16px"}}>
            Wanna be a part of it?<em style={{color: "#44aa70"}}>
              Apply when application is open</em
            >
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="right-content">
              <div className="top-content">
                <h6>
                  Register and be a part of<em style= {{color: "#44aa70"}}>
                    &nbsp;the journey&nbsp; </em
                  >
                  where you learn leadership & other skills
                </h6>
              </div>
              <form
              ref={formRef}
              onSubmit={(e)=>handleSubmit(e)}
              style={{position: 'relative'}}
              >
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                    <fieldset>
                      <input
                        name="Name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        name="Email"
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <input
                        name="Phone Number"
                        type="text"
                        className="form-control"
                        id="phone-number"
                        placeholder="Your Phone Number"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                    <fieldset>
                      <select
                        id="choice1"
                        name="Department Choice 1"
                        style={{
                            width: '100%',
                            height: '40px',
                            backgroundColor: 'rgba(250, 250, 250, 0.1)',
                            borderRadius: '7px',
                            border: 'none',
                            outline: 'none',
                            color: '#fff',
                            fontSize: '13px',
                            marginBottom: '20px',
                            letterSpacing: '0.5px',
                            }}
                          required
                      >
                        <option value="choice_first" style={{color: "#00080c"}}>
                          Department Choice First
                        </option>
                        <option
                          value="Human Resource Team"
                          style= {{color: "#00080c"}}
                        >
                          Human Resource Team
                        </option>
                        <option value="Creative Team" style={{color: "#00080c"}}>
                          Creative Team
                        </option>
                        <option
                          value="Event Management Team"
                          style={{color: "#00080c"}}
                        >
                          Event Management Team
                        </option>

                        <option value="Innovation Team" style={{color: "#00080c"}}>
                          Innovation Team
                        </option>
                        <option
                          value="Social Media and Marketing Team"
                          style={{color: "#00080c"}}
                        >
                          Social Media and Marketing Team
                        </option>
                      </select>
                    </fieldset>
                    <fieldset>
                      <select
                        id="choice2"
                        name="Department Choice 2"
                        style={{
                            width: '100%',
                            height: '40px',
                            backgroundColor: 'rgba(250, 250, 250, 0.1)',
                            borderRadius: '7px',
                            border: 'none',
                            outline: 'none',
                            color: '#fff',
                            fontSize: '13px',
                            marginBottom: '20px',
                            letterSpacing: '0.5px',
                        }}
                        required
                      >
                        <option value="choice_second" style={{color: "#00080c"}}>
                          Department Choice Second
                        </option>
                        <option
                          value="Human Resource Team"
                          style={{color: "#00080c"}}
                        >
                          Human Resource Team
                        </option>
                        <option value="Creative Team" style={{color: "#00080c"}}>
                          Creative Team
                        </option>
                        <option
                          value="Event Management Team"
                          style={{color: "#00080c"}}
                        >
                          Event Management Team
                        </option>

                        <option value="Innovation Team" style={{color: "#00080c"}}>
                          Innovation Team
                        </option>
                        <option
                          value="Social Media and Marketing Team"
                          style={{color: "#00080c"}}
                        >
                          Social Media and Marketing Team
                        </option>
                      </select>
                    </fieldset>
                    <fieldset>
                      <select
                        id="choice3"
                        name="Department Choice 3"
                        style={{
                            width: '100%',
                            height: '40px',
                            backgroundColor: 'rgba(250, 250, 250, 0.1)',
                            borderRadius: '7px',
                            border: 'none',
                            outline: 'none',
                            color: '#fff',
                            fontSize: '13px',
                            marginBottom: '20px',
                            letterSpacing: '0.5px',
                        }}
                        required
                      >
                        <option value="" style={{color: "#00080c"}}>
                          Department Choice Third
                        </option>
                        <option
                          value="Human Resource Team"
                          style={{color: "#00080c"}}
                        >
                          Human Resource Team
                        </option>
                        <option value="Creative Team" style={{color: "#00080c"}}>
                          Creative Team
                        </option>
                        <option
                          value="Event Management Team"
                          style={{color: "#00080c"}}
                        >
                          Event Management Team
                        </option>

                        <option value="Innovation Team" style={{color: "#00080c"}}>
                          Innovation Team
                        </option>
                        <option
                          value="Social Media and Marketing Team"
                          style={{color: "#00080c"}}
                        >
                          Social Media and Marketing Team
                        </option>
                      </select>
                    </fieldset>
                  </div>
                </div>
                <div className="row mt">
                  <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                    <fieldset>
                      <input
                        name="College"
                        type="text"
                        className="form-control"
                        id="college"
                        placeholder="College Name"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                    <fieldset>
                      <select
                        id="year"
                        name="Year"
                        style={ {
                            width: '100%',
                            height: '40px',
                            backgroundColor: 'rgba(250, 250, 250, 0.1)',
                            borderRadius: '7px',
                            border: 'none',
                            outline: 'none',
                            color: '#fff',
                            fontSize: '13px',
                            marginBottom: '20px',
                            letterSpacing: '0.5px',
                            }}
                        required
                      >
                        <option value="" style={{color: "#00080c"}}>
                          Choose your Year
                        </option>
                        <option value="1st Year" style={{color: "#00080c"}}>
                          1st Year
                        </option>
                        <option value="2nd year" style={{color: "#00080c"}}>
                          2nd Year
                        </option>
                      </select>
                    </fieldset>
                  </div>
                </div>
                <div className="row mt">
                  <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <fieldset>
                      <textarea
                        rows={3}
                        name="Why Join Us?"
                        className="form-control"
                        id="why-join-us"
                        placeholder="Why Join Us?"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <fieldset className="form__submit__contents">
                      <strong style={{color: "white", textAlign: "center"}}>
                        Application for the year 2023-2024 has been
                        closed</strong>
                      <button disabled={isDisabled} type="submit" id="form-submit" className="button">
                        {isDisabled ? 'Submitting' : 'Submit'}
                      </button>
                    </fieldset>
                    {
                      showSuccessMsg &&
                    <div id="success-message" className="alert alert-success">
                      Your form has been submitted successfully!
                    </div>
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}