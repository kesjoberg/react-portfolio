import React from 'react';

function Footer() {
  const style = {
    nav: {
      background:'#3f87a6',
      width: '100%',
      height: '10%',
      display: 'flex',
      justifyContent: 'center',
      // padding: '1%',
      alignContent: 'center', 
      listStyleType: 'none',
      marginTop: '0px'
    },
    a: {
      color: 'white',
      fontSize: '30px',
      marginLeft: '30px',
      marginRight: '30px'
    },
    
  }

  return (
  <footer>
   
    <nav>
        <ul style={style.nav}>
            <li> <a style={style.a} href="https://github.com/kesjoberg" rel="noreferrer noopener"><i style={style.img} class="fab fa-github"></i></a></li>
            <li><a style={style.a} href="https://www.linkedin.com/in/karna-sjoberg-1a9092213/" rel="noreferrer noopener"><i style={style.img} class="fab fa-linkedin"></i></a></li>
            <li><a style={style.a} href="mailto:kesjoberg@gmail.com" rel="noreferrer noopener"><i style={style.img} class="fas fa-envelope-square"></i></a></li>
        </ul>    
     </nav>     
 </footer>

  )
}  

export default Footer;