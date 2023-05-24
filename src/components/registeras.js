import React from 'react';
import "./registeras.css"

function CoursesSection() {
  return (
    <section className="courses">
      <h2 className="headingh2">Our Popular Courses</h2>
      <div className="container courses__container">
        <article className="course">
          <div className="course__image">
            <img src="./images/3.jpg" alt="Course 1" />
          </div>
          <div className="course__info">
            <h4>Data Sc 1</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam deserunt eaque quos iure ad debitis.
            </p>
            <a href="course.html" className="btn btn-primary">Learn More</a>
          </div>
        </article>

        <article className="course">
          <div className="course__image">
            <img src="./images/3.jpg" alt="Course 2" />
          </div>
          <div className="course__info">
            <h4>Data Sc 2</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam deserunt eaque quos iure ad debitis.
            </p>
            <a href="course.html" className="btn btn-primary">Learn More</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CoursesSection;
