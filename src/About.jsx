import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // Import the CSS file

function About() {
  return (
   <>
   <nav>
        <div class="nav-content">
          <div class="logo">
           
            LancerForProfit
          </div>
          <div class="nav-links">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/bio">Contact</Link>
          </div>
        </div>
      </nav>
    
      <header class="about-header">
        <h1>About LFP</h1>
        <p>Building Digital Excellence Since 2025</p>
      </header>
    
      <main class="about-content">
        <section class="intro">
          <h2>What is LFP?</h2>
          <p>Lancer For Profit is a premium web and app development company dedicated to transforming businesses through innovative digital solutions. Specializing in creating custom websites and applications that drive growth and enhance user experience.</p>
        </section>
    
        <section class="mission-vision">
          <div class="mission-card">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="40" stroke="var(--primary-blue)" stroke-width="4"/>
                <path d="M30,50 L45,65 L70,35" stroke="var(--primary-blue)" stroke-width="4"/>
              </svg>
            </div>
            <h3>Mission</h3>
            <p>To empower businesses with cutting-edge digital solutions that drive growth and success in the modern marketplace.</p>
          </div>
          <div class="vision-card">
            <div class="card-icon">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                <path d="M20,50 Q50,20 80,50" stroke="var(--primary-blue)" stroke-width="4" fill="none"/>
                <circle cx="50" cy="50" r="20" stroke="var(--primary-blue)" stroke-width="4"/>
              </svg>
            </div>
            <h3>Vision</h3>
            <p>To be the leading force in digital transformation, setting new standards in web and app development excellence.</p>
          </div>
        </section>
    
        <section class="team-section">
          <h2>Creative Leadership</h2>
          <div class="team-grid">
           
            <div class="team-member">
              <div class="member-avatar">
                <svg viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="35" r="25" stroke="var(--primary-blue)" stroke-width="4"/>
                  <path d="M20,100 Q50,60 80,100" stroke="var(--primary-blue)" stroke-width="4" fill="none"/>
                </svg>
              </div>
              <h3>Theirry Gitens</h3>
              <p class="role">CEO & Technical Director</p>
              <a href="bio.html" class="tech-tag">About Me</a>
           
            </div>

            
          </div>
        </section>
    
        <section class="stats-section">
          <div class="stats-grid">
            <div class="stat-item">
              <h3>200+</h3>
              <p>Projects Completed</p>
            </div>
            <div class="stat-item">
              <h3>150+</h3>
              <p>Happy Clients</p>
            </div>
            <div class="stat-item">
              <h3>3+</h3>
              <p>Services Provided</p>
            </div>
            <div class="stat-item">
              <h3>Set Up</h3>
              <p>Support Available</p>
            </div>
          </div>
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

export default About;
