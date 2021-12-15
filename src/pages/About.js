import React from 'react';
import Photo from '../assets/image_kes.jpg'

export default function About() {
  const styles={
    heading: {
      paddingLeft: '2%',
    },
    aboutme: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingLeft: '2%',
      paddingRight: '2%',
      width: '100%',
      height: '70%',
    },
   img:{
     display: 'block',
     maxWidth: '162px',
     maxHeight: '378px',
     height: 'auto',
     width: 'auto',
   }
  }
  return (
    <div className="p-2">
      <h2 style={styles.heading}>About Me</h2>
        <div className='row'>
          <div className='col-12 col-md-3'>
              <img style={styles.img} src={Photo} alt="Karna Sjoberg"></img>
          </div> 
          <div className='col-12 col-md-9' >
            <p>My name is Karna Sjoberg and I worked in education for 23 years. I taught middle school math and science as well as 5th grade. In addition to my experience in the classroom, I have been an instructional/content coach. I worked with teams of teachers or school leaders to analyze data to plan instruction or school improvement. </p> <br/>
            <p>I have been interested in technology since my childhood when my father taught me how to write Basic code. I was inspired to look into a career in web development by using a variety of educational websites and applications while my students and I were doing distance learning in 2020. I would love to continue to support education in the future through educational technology. </p> <br/>
            <p>I recently completed a Full-Stack coding bootcamp through the University of Minnesota and look forward to applying these new skills to a career in Web Development. I enjoy learning new ways to write code and am excited to continue to learn as technologies change in the future.</p> 
            
              
          </div>
        </div>  
    </div>

  );
}