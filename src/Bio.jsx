import React from "react";
import { Link } from "react-router-dom";
import "./Bio.css"; // Import the CSS file

function Bio() {
  return (
    <>
  <nav>
        <div class="nav-content">
          <div class="logo">
            LancerForProfit
          </div>
          <div class="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Contact</Link>
            
          </div>
        </div>
      </nav>
    
      <header class="about-header">
        <h1>About Theirry R.Z. Gittens</h1>
        <p>Transforming Ideas into Digital Reality</p>
      </header>
    
      <main class="about-content">
        <div class="contact-details">
          <p><strong>Location:</strong> Friendship Terrace, St. Michael, Barbados</p>
          <p><strong>Phone:</strong> (246) 624-8181 (Home) | (246) 269-5025 (Cell)</p>
          <p><strong>Email:</strong> <a href="mailto:theirrygittensmouri@gmail.com">theirrygittensmouri@gmail.com</a></p>
        </div>
    
        <section>
          <h2 class="section-title">Who I Am</h2>
          <p>I am a dedicated professional in <strong>Software, Website, and Application Development</strong> with a passion for creating tailored solutions that meet unique challenges. With a strong foundation in <strong>problem-solving</strong> and <strong>program customization</strong>, I thrive on transforming ideas into functional, user-friendly systems that empower individuals and businesses.</p>
        </section>
    
        <section>
          <h2 class="section-title">What I Offer</h2>
          <div class="services-grid">
            <div class="service-card">
              <h3>Custom Software Development</h3>
              <p>Bringing your vision to life with personalized software solutions.</p>
            </div>
            <div class="service-card">
              <h3>Website Design & Development</h3>
              <p>Crafting responsive, visually appealing, and high-performance websites.</p>
            </div>
            <div class="service-card">
              <h3>Application Development</h3>
              <p>Building scalable mobile and desktop applications to meet your specific needs.</p>
            </div>
            <div class="service-card">
              <h3>Problem-Solving Expertise</h3>
              <p>Tackling complex challenges with innovative, efficient approaches.</p>
            </div>
          </div>
        </section>
    
        <section>
          <h2 class="section-title">Why Choose Me</h2>
          <p>With a relentless focus on <strong>quality</strong> and a commitment to <strong>excellence</strong>, I work closely with clients to ensure their goals are not just met but exceeded. My solutions are designed to align with your objectives while staying adaptable for future growth.</p>
          <p>Let's collaborate to create solutions that make a difference.</p>
        </section>
      </main>
    
      <footer>
        <h2>Ready to Start Your Project?</h2>
        <p>Let's create something amazing together</p>
        <div class="contact-info">
          <p>Email: lancerforprofit246@gmail.com</p>
          <p>Phone: (246) 269-5025</p>
        </div>
      </footer>  
  
    </>
  );
}

export default Bio;
