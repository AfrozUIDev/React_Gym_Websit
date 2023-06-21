import React from 'react'
import Header from '../../components/Header';
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import "./about.css"

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, 
      id voluptatum ab natus blanditiis aperiam magnam dicta praesentium 
      reiciendis nobis?
    </Header>
    <section className="about__story">
      <div className='container about__story-container'>
        <div className="about__section-image">
          <img src={StoryImage} alt="Our_Story_Image"/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorum?
            Numquam non sed vero, reprehenderit nihil perspiciatis ex commodi neque voluptate
            error corporis id dignissimos placeat. Animi culpa eum mollitia!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro exercitationem, 
            iste harum ipsa ut quod suscipit deleniti eum facilis?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, ipsam.
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className='container about__vision-container'>
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorum?
            Numquam non sed vero, reprehenderit nihil perspiciatis ex commodi neque voluptate
            error corporis id dignissimos placeat. Animi culpa eum mollitia!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro exercitationem, 
            iste harum ipsa ut quod suscipit deleniti eum facilis?
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our_Vision_Image"/>
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className='container about__mission-container'>
        <div className="about__section-image">
          <img src={MissionImage} alt="Our_Mission_Image"/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorum?
            Numquam non sed vero, reprehenderit nihil perspiciatis ex commodi neque voluptate
            error corporis id dignissimos placeat. Animi culpa eum mollitia!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro exercitationem, 
            iste harum ipsa ut quod suscipit deleniti eum facilis?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, ipsam.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About;