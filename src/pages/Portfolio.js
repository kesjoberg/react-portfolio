import React from 'react';
import Bookstore from '../assets/bookstore.jpg';
import Meal from '../assets/meal-planning.jpg';
import Employee from '../assets/employee_tracker.jpg';
import Tech from '../assets/tech-blog.jpg';

export default function Portfolio() {
  const styles={
    img: {
      width: '100%',
      height: '50%',
    },
    card: {
      width: '18rem'
    }
  }
  return (
    <>
      <div className="col-12 d-flex">
        <h2>Examples of My Work</h2>
      </div> 
      <div className="d-flex flex-wrap align-contents-center justify-space-between p-2 m-2">
        <div className="card" style={styles.card}>
          <img src={Meal} className="card-img-top" alt="credit Kara Eads on Unsplash"/>
          <div className="card-body">
            <h5 className="card-title">Meal Planning App</h5>
            <p className="card-text">First group project. Tech Used: </p>
          </div>
          <div className="card-body">
            <a href="https://kembo001.github/mealPlan/" target="_blank" rel="noreferrer noopener" className="card-link">Github Repo</a>
            <a href="https://kembo001.github.io/mealPlan/" target="_blank" rel="noreferrer noopener" className="card-link">Deployed Code</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <img src={Tech} className="card-img-top" alt="screenshot of deployed code"/>
          <div className="card-body">
            <h5 className="card-title">Tech Blog App</h5>
            <p className="card-text"> Tech Used: </p>
          </div>
          <div className="card-body">
            <a href="https://github.com/kesjoberg/tech-blog" target="_blank" rel="noreferrer noopener" className="card-link">Github Repo</a>
            <a href="https://kesjoberg-tech-blog.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="card-link">Deployed Code</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <img src={Bookstore} className="card-img-top" alt="screenshot of deployed code"/>
          <div className="card-body">
            <h5 className="card-title">Bookstore App</h5>
            <p className="card-text"> Tech Used: </p>
          </div>
          <div className="card-body">
            <a href="https://github.com/kesjoberg/book-store" target="_blank" rel="noreferrer noopener" className="card-link">Github Repo</a>
            <a href="https://kesjoberg-bookstore.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="card-link">Deployed Code</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <img src={Employee} className="card-img-top" alt="screenshot of deployed code"/>
          <div className="card-body">
            <h5 className="card-title">Employee Management System</h5>
            <p className="card-text"> Tech Used: Node</p>
          </div>
          <div className="card-body">
            <a href="https://github.com/kesjoberg/employee-tracker" target="_blank" rel="noreferrer noopener" className="card-link">Github Repo</a>
            
          </div>
      </div>
      </div>
    </>

  );
}