import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [registerEmailError, setRegisterEmailError] = useState('');
    const [confirmEmailError, setConfirmEmailError] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [wantsSpam, setWantsSpam] = useState(true);

    const handleCheckboxChange = () => {
    setWantsSpam((prevValue) => !prevValue);
    };

    const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    };

    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
    setMessage(event.target.value);
    };


    const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    };


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFirstNameError(event.target.value ? '' : 'This field is required');
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setLastNameError(event.target.value ? '' : 'This field is required');
  };

  const handleRegisterEmailChange = (event) => {
    setRegisterEmail(event.target.value);
    setRegisterEmailError(event.target.value ? '' : 'Email is required');
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
    setConfirmEmailError(
      event.target.value === registerEmail
        ? ''
        : event.target.value
        ? 'Emails do not match'
        : 'Confirmation is required'
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !registerEmail || !confirmEmail || confirmEmail !== registerEmail) {
      setFirstNameError(firstName ? '' : 'This field is required');
      setLastNameError(lastName ? '' : 'This field is required');
      setRegisterEmailError(registerEmail ? '' : 'Email is required');
      setConfirmEmailError(
        confirmEmail
          ? 'Emails do not match'
          : registerEmail
          ? 'Confirmation is required'
          : ''
      );
    } 
  };

  return (
    <form className="form__form" action="/register" method="post" autoComplete="on" onSubmit={handleSubmit}>
      <div className="container">
        <p className="container__p">
          Please fill in this form to contact us. <span className="required__label">*</span> indicates required.
        </p>
        <hr />
        <div className="container__container">
          {/* ... other form fields ... */}
          <div className="register-first__name">
            <label className="flex__container">
              <div className="flex__itemleft">
                <span className="first__name">First Name (required)</span>
                <span className="required__label">*</span>
                <span className="first-name__error">{firstNameError}</span>
              </div>
              <input
                name="name"
                className={`input-first__name ${firstNameError && 'register-first-name--invalid'}`}
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </label>
          </div>
          <div className="register-last__name">
            <label className="flex__container">
                <div className="flex__itemleft">
                    <span className="last__name">Last Name (required)</span>
                    <span className="required__label">*</span>
                    <span className="first-name__error">{lastNameError}</span>
                </div>
                <input
                    name="name"
                    className={`input-last__name ${lastNameError && 'register-last-name--invalid'}`}
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
          </div>
          <div className="register__email">
            <label className="flex__container">
              <div className="flex__itemleft">
                <span className="email__name">Email (required)</span>
                <span className="required__label">*</span>
                <span className="register-email__error">{registerEmailError}</span>
              </div>
              <input
                name="email"
                className={`register-email__input ${registerEmailError && 'register-email--invalid'}`}
                type="text"
                placeholder="Enter Email"
                value={registerEmail}
                onChange={handleRegisterEmailChange}
              />
            </label>
          </div>
          <div className="register__confirm">
            <label className="flex__container">
              <div className="flex__itemleft">
                <span className="confirm__name">Confirm Email (required)</span>
                <span className="required__label">*</span>
                <span className="register-confirm__error">{confirmEmailError}</span>
              </div>
              <input
                name="confirm"
                className={`register-confirm__input ${confirmEmailError && 'register-confirm--invalid'}`}
                type="text"
                placeholder="Enter Email"
                value={confirmEmail}
                onChange={handleConfirmEmailChange}
              />
            </label>
          </div>
          <div className="register-phone__number">
            <label className="flex__container">
              <div className="flex__itemleft">
                <span className="phone__number">Phone Number</span>
              </div>
              <input
                name="phone"
                className={`input-phone__number`}
                type="text"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={handlePhoneChange}
              />
            </label>
          </div>
          <div className="register-phone__message">
            <label className="flex__container">
              <div className="flex__itemleft">
                <span className="message">Write A Message</span>
              </div>
              <textarea
                name="message"
                className="input__message"
                type="text"
                placeholder="Write A Message"
                value={message}
                onChange={handleMessageChange}
              />
            </label>
          </div>
          <div className="form__group">
            <label className="flex__container">
              <div className="flex__itemleft">
                <span className="label__name">How did you hear about us?</span>
              </div>
              <select name="tier" value={selectedOption} onChange={handleSelectChange}>
                <option value="" disabled>Please select</option>
                <option value="1">Google</option>
                <option value="2">Facebook</option>
                <option value="3">Magazine</option>
              </select>
            </label>
          </div>
          <div className="form__group">
            <label>
              <span className="label__name">
                By submitting this form you agree to our <a href="privacy.html">Terms & Privacy Policy</a>
              </span>
              <input name="wants-spam" type="checkbox" checked={wantsSpam} onChange={handleCheckboxChange} />
            </label>
          </div>
        </div>
        <hr />
        <button type="submit" className="contactbtn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
