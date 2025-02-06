import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
const Portfolio = () => {
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
            <Link to="/bio">Contact</Link>
            </div>
            </div>

      </nav>
    
      <header class="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Discover our latest projects and success stories</p>
      </header>
    
      <main class="portfolio-grid">
        <article class="portfolio-card">
          <div class="portfolio-image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <rect x="20" y="20" width="60" height="60" stroke="white" stroke-width="4"/>
              <circle cx="50" cy="50" r="20" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="portfolio-content">
            <h3>E-Commerce Platform</h3>
            <p>A sophisticated online shopping platform with real-time inventory management, secure payment processing, and seamless user experience.</p>
            <div class="tech-stack">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MongoDB</span>
              <span class="tech-tag">Stripe</span>
            </div>
            <a href="https://lancerforprofit.com/project/ecommerce" class="view-project">View Project</a>
          </div>
        </article>
    
        <article class="portfolio-card">
          <div class="portfolio-image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path d="M20,50 Q50,20 80,50 Q50,80 20,50" stroke="white" stroke-width="4" fill="none"/>
              <circle cx="50" cy="50" r="15" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="portfolio-content">
            <h3>Healthcare Management System</h3>
            <p>An integrated healthcare platform enabling patient management, appointment scheduling, and medical record keeping.</p>
            <div class="tech-stack">
              <span class="tech-tag">React Native</span>
              <span class="tech-tag">Firebase</span>
              <span class="tech-tag">Express</span>
              <span class="tech-tag">AWS</span>
            </div>
            <a href="https://lancerforprofit.com/project/healthcare" class="view-project">View Project</a>
          </div>
        </article>
    
        <article class="portfolio-card">
          <div class="portfolio-image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <polygon points="50,20 80,40 80,70 50,90 20,70 20,40" stroke="white" stroke-width="4" fill="none"/>
              <line x1="50" y1="20" x2="50" y2="90" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="portfolio-content">
            <h3>Real Estate Platform</h3>
            <p>A comprehensive real estate solution featuring virtual tours, property management, and automated lead generation.</p>
            <div class="tech-stack">
              <span class="tech-tag">Next.js</span>
              <span class="tech-tag">Three.js</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">Docker</span>
            </div>
            <a href="https://lancerforprofit.com/project/realestate" class="view-project">View Project</a>
          </div>
        </article>
    
        <article class="portfolio-card">
          <div class="portfolio-image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path d="M20,50 C20,20 80,20 80,50 C80,80 20,80 20,50" stroke="white" stroke-width="4" fill="none"/>
              <circle cx="50" cy="50" r="10" stroke="white" stroke-width="4"/>
              <path d="M35,65 L65,65" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="portfolio-content">
            <h3>Local Artisans Link Up</h3>
            <p>A marketplace platform connecting local artists and craftsmen with customers, featuring secure payments and detailed product showcases.</p>
            <div class="tech-stack">
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">Stripe</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">MongoDB</span>
            </div>
            <a href="https://lancerforprofit.com/project/artisans" class="view-project">View Project</a>
          </div>
        </article>
    
        <article class="portfolio-card">
          <div class="portfolio-image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <rect x="25" y="25" width="50" height="50" stroke="white" stroke-width="4" rx="10"/>
              <circle cx="50" cy="40" r="8" stroke="white" stroke-width="4"/>
              <path d="M35,60 H65" stroke="white" stroke-width="4"/>
              <path d="M35,70 H55" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="portfolio-content">
            <h3>MechanicForU</h3>
            <p>A professional portfolio website template for automotive businesses, featuring service listings, team profiles, and customer testimonials.</p>
            <div class="tech-stack">
              <span class="tech-tag">React</span>
              <span class="tech-tag">Tailwind</span>
              <span class="tech-tag">Firebase</span>
              <span class="tech-tag">Google Maps API</span>
            </div>
            <a href="https://lancerforprofit.com/project/mechanicforu" class="view-project">View Project</a>
          </div>
        </article>
    
        <article class="portfolio-card">
          <div class="portfolio-image">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="30" stroke="white" stroke-width="4"/>
              <path d="M50,30 L50,50 L65,65" stroke="white" stroke-width="4"/>
              <circle cx="50" cy="50" r="5" stroke="white" stroke-width="4"/>
            </svg>
          </div>
          <div class="portfolio-content">
            <h3>Online Appointment Booking System</h3>
            <p>A versatile appointment scheduling platform with calendar integration, automated reminders, and service management features.</p>
            <div class="tech-stack">
              <span class="tech-tag">Angular</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">PostgreSQL</span>
              <span class="tech-tag">Twilio API</span>
            </div>
            <a href="https://lancerforprofit.com/project/appointments" class="view-project">View Project</a>
          </div>
        </article>
      </main>
    
      <footer>
        <h2>Ready to Start Your Project?</h2>
        <p>Let's create something amazing together</p>
        <div class="contact-info">
          <p>Email: lancerforprofit246@gmail.com</p>
          <p>Phone: (246) 269-5025 </p>
        </div>
      </footer>
  </>
  )
}

export default Portfolio
