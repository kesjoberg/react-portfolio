import React from 'react';

function Header() {
  const style={
    header: {
      background:'#3f87a6',
      width: '100%',
      height: '10%',
      display: 'flex',
      justifyContent: 'center',
      padding: '1%',
      alignContent: 'center', 
      color: 'white',
    }
    
  }

  return (
    <header style={style.header}>
     <h1>Karna Sjoberg</h1>
    </header>

  )
}  

export default Header;