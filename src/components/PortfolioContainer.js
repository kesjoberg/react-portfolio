import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }  
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const styles= {
    bg:{
      background:  '#c3e4f1',
      height: '100%',
    }
  }

  return (
    <div style={styles.bg}>
      
      <Header/> 
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> 
      
      {renderPage()}
      <Footer />
    </div>
  );
}
