import React, { useState } from 'react';


// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'text') {
      setMessage(inputValue);
    }
  };
  const checkEmail = () =>{
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
  }
}

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    checkEmail();
    
    

    // If successful, we want to clear out the input after registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
    alert(`Hello ${name}, thank you for reaching out!`);
  };



  return (
    <div>
      <h3 className='row mb-2 ml-5 mr-5'>Please complete this form to contact me with questions or other inquiries.</h3>
      <form className="form d-block">
        <div className='row mb-2 ml-5 mr-5'>
          <label>Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            onBlur={() => {name? setErrorMessage(''): setErrorMessage('Name is required!') }}
          />
        </div>
        <div className='row mb-2 ml-5 mr-5' >
          <label>Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            id="emailInput"
            onBlur={() => {setErrorMessage(''); email?  checkEmail(): setErrorMessage('Email is required!') }}
          />
        </div>
        <div className='row mb-2 ml-5 mr-5'>
          <label>Message:</label>
          <textarea
            value={message}
            name="text"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            onBlur={() => {message? setErrorMessage(''): setErrorMessage('Message is required!') }}
          />
         </div>
        
        <button className="ml-5 mb-2" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="ml-5 text-danger">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
