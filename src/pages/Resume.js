import React from 'react';


export default function Resume() {
  const styles={
    heading: {
      paddingLeft: '2%',
    },
    aboutme: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '2%',
      width: '100%',
      height: '50%',
    },
    col3:{ 
      display: 'flex',
      width: '33%',
    },
    col9:{ 
      width: '66%',
      marginLeft: '35%',
    },
  }
  return (
    <div className="p-2">
      <h2 style={styles.heading}>Resume</h2>
        <div className='row'>
          <div className='col-4'>
             
          </div> 
          <div className='col-8' >
            <p>My name is Karna Sjoberg and I have worked in education for 23 years. I spent the majority of my years teaching middle school math and science. My last 3 year I was a 5th grade classroom teacher. In addition to my experience in the classroom, I have been an instructional/content coach. I worked with teams of teachers or school leaders to analyze data to plan instruction or school improvement. </p>
              
            <p>I have been interested in technology since my childhood when my father taught me how to write Basic code. I was inspired to look into a career in web development by using a variety of educational websites and applications while my students and I were doing distance learning in 2020. I would love to continue to support education in the future through educational technology. </p>
          </div>
        </div>  
    </div>

  );
}