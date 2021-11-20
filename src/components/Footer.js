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
            <li> <a style={style.a} href="https://github.com/kesjoberg" rel="noreferrer noopener"><i style={style.img} class="fab fa-github-square"></i></a></li>
            <li><a style={style.a} href="https://www.linkedin.com/in/karna-sjoberg-1a9092213/" rel="noreferrer noopener"><i style={style.img} class="fab fa-linkedin"></i></a></li>
            <li><a style={style.a} href="https://stackoverflow.com/users/16662050/karna-sjoberg" rel="noreferrer noopener"><i style={style.img} class="fab fa-stack-overflow"></i></a></li>
        </ul>    
     </nav>     
 </footer>

  )
}  

export default Footer;