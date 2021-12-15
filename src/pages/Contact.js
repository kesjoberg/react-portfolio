import React from 'react';


// Here we import a helper function that will check if the email is valid
// import { validateEmail } from '../utils/helpers';

function Contact() {
  const style = {
    a: {
      color: 'black',
      fontSize: '30px',
      marginLeft: '30px',
      marginRight: '30px',
      listStyle: 'none'
    },
    
  }
//   // Create state variables for the fields in the form
//   // We are also setting their initial values to an empty string
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');

  

//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;


//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else if (inputType === 'text') {
//       setMessage(inputValue);
//     }
//   };
//   const checkEmail = () =>{
//     if (!validateEmail(email)) {
//       setErrorMessage('Email is invalid');
//       return;
//   }
// }

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     checkEmail();
    
    

//     // If successful, we want to clear out the input after registration.
//     setName('');
//     setEmail('');
//     setMessage('');
//     setErrorMessage('');
//     alert(`Hello ${name}, thank you for reaching out!`);
//   };



  return (
    <div>
      <h3 className='row mb-2 ml-5 mr-5'>To Contact Me, please send me an email or check out my Linkedin and Github pages.</h3>
      <ul >
        <li><a style={style.a} href="mailto:kesjoberg@gmail.com" rel="noreferrer noopener">Email</a></li>
        <li> <a style={style.a} href="https://github.com/kesjoberg" rel="noreferrer noopener">Github</a></li>
        <li><a style={style.a} href="https://www.linkedin.com/in/karna-sjoberg-1a9092213/" rel="noreferrer noopener">Linkedin</a></li>
            
       </ul>    
     
    </div>
  );
}

export default Contact;
