import { useRef, useState } from 'react';
import './GeneralMembersForm.css'
import formJson from './formData.json'
import DropdownInput from '../../sub_components/FormComponents/DropDown';
import LongAnswerInput from '../../sub_components/FormComponents/LongAnswer';
import ShortAnswerInput from '../../sub_components/FormComponents/ShortAnswer';
import {GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import { GoogleForm } from 'react-google-forms-hooks';
import { FieldValues } from 'react-hook-form';

export default function GeneralMembersForm() {
  const formElement = useRef<HTMLFormElement | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const form = formJson as GoogleForm
  const methods = useGoogleForm({form})
  const onSubmitt = (data: FieldValues) => {
    setIsDisabled(true)
    methods.submitToGoogleForms(data as FormData).then(() => {
      setIsDisabled(false)
      setShowSuccessMsg(true)
      formElement.current?.reset();
    }).catch(()=>{
      setIsDisabled(false)
      alert('Form submission failed!')
    })
  }
  
    return (
        <section className="section coming-soon" data-section="section3">
      <div className="section-heading">
        <h2>Join our Enthusiastic Team</h2>
      </div>
      <div className="continer centerIt">
        <div>
          <h4 style= {{textAlign: "center", paddingLeft: "16px", paddingRight: "16px"}}>
            Wanna be a part of it?<em style={{color: "#44aa70"}}>&nbsp;
              Application for the year 2024-2025 is open!</em
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
              <GoogleFormProvider {...methods}>
              <form
              onSubmit={methods.handleSubmit(onSubmitt)}
              style={{position: 'relative'}}
              ref={formElement}
              >
                <div className="row">
                  <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                    {form.fields.slice(0,3).map((field) => {
                    const { id } = field

                    let questionInput = null
                    switch (field.type) {
                      case 'SHORT_ANSWER':
                        questionInput = <ShortAnswerInput id={id} key={id} placeholder={field.label}/>
                        break
                      case 'LONG_ANSWER':
                        questionInput = <LongAnswerInput id={id} key={id} placeholder = {field.label} />
                        break
                      case 'DROPDOWN':
                        questionInput = <DropdownInput id={id} key={id} placeholder = {field.label} />
                        break
                    }
                    return questionInput;
                  })}
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                    {form.fields.slice(3,6).map((field) => {
                    const { id } = field

                    let questionInput = null
                    switch (field.type) {
                      case 'SHORT_ANSWER':
                        questionInput = <ShortAnswerInput id={id} key={id} placeholder = {field.label} />
                        break
                      case 'LONG_ANSWER':
                        questionInput = <LongAnswerInput id={id} key={id} placeholder = {field.label} />
                        break
                      case 'DROPDOWN':
                        questionInput = <DropdownInput id={id} key={id} placeholder = {field.label} />
                        break
                    }
                    return questionInput;
                  })}
                  </div>
                </div>
                <div className="row mt">
                  <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                    {form.fields.slice(6,7).map((field) => {
                    const { id } = field

                    let questionInput = null
                    switch (field.type) {
                      case 'SHORT_ANSWER':
                        questionInput = <ShortAnswerInput id={id} key={id} placeholder = {field.label} />
                        break
                      case 'LONG_ANSWER':
                        questionInput = <LongAnswerInput id={id} key={id} placeholder = {field.label} />
                        break
                      case 'DROPDOWN':
                        questionInput = <DropdownInput id={id} key={id} placeholder = {field.label} />
                        break
                    }
                    return questionInput;
                  })}
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12">
                    {form.fields.slice(7,8).map((field) => {
                    const { id } = field

                    let questionInput = null
                    switch (field.type) {
                      case 'SHORT_ANSWER':
                        questionInput = <ShortAnswerInput id={id} key={id} placeholder = {field.label} />
                        break
                      case 'LONG_ANSWER':
                        questionInput = <LongAnswerInput id={id} key={id} placeholder = {field.label} />
                        break
                      case 'DROPDOWN':
                        questionInput = <DropdownInput id={id} key={id} placeholder = {field.label} />
                        break
                    }
                    return questionInput;
                  })}
                  </div> 
                </div>
                <div className="row mt">
                  <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    {form.fields.slice(8,9).map((field) => {
                    const { id } = field

                    let questionInput = null
                    switch (field.type) {
                      case 'SHORT_ANSWER':
                        questionInput = <ShortAnswerInput id={id} key={id} placeholder = {field.label} />
                        break
                      case 'LONG_ANSWER':
                        questionInput = <LongAnswerInput id={id} key={id} placeholder = {field.label} />
                        break
                      case 'DROPDOWN':
                        questionInput = <DropdownInput id={id} key={id} placeholder = {field.label} />
                        break
                    }
                    return questionInput;
                  })}
                  </div>
                  <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <fieldset className="form__submit__contents">
                      <strong style={{color: "white", textAlign: "center"}}>
                        Application for the year 2024-2025 is Open!</strong>
                      <button disabled={isDisabled} type="submit" id="form-submit" className={`button ${isDisabled && "submitting"}`}>
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
              </GoogleFormProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}