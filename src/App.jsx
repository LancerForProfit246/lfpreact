import React from 'react';
import './App.css'; // Add your custom styles
function Nav() {
  return (
    <nav>
      <div className="nav-content">
        <div className="logo">
          LancerForProfit
        </div>
        <div className="nav-links">
          <a href="about.html">About</a>
          <a href="portfolio.html">Portfolio</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Creating Digital Excellence</h1>
        <p>By craft stunning websites and powerful applications that drive business growth</p>
        <a href="https://calendly.com/lancerforprofit246/30min" className="cta-button">Schedule a Consultation</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <h2>About</h2>
      <p>Lancer For Profit is a premium web development agency specializing in creating exceptional websites and applications. We combine cutting-edge technology with stunning design to deliver solutions that exceed expectations.</p>
      <p>Expert development and design done with maximum effort to ensure each project is crafted to perfection, focusing on both aesthetics and functionality.</p>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio">
        <div className="portfolio-item">
          <div className="portfolio-content">
            <h3>E-Commerce Platform</h3>
            <p>A fully responsive e-commerce solution with integrated payment processing and inventory management.</p>
            <div className="technologies">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-content">
            <h3>Healthcare App</h3>
            <p>Mobile application for patient management and appointment scheduling.</p>
            <div className="technologies">
              <span className="tech-tag">React Native</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">Express</span>
            </div>
          </div>
        </div>

        <div className="portfolio-item">
          <div className="portfolio-content">
            <h3>Corporate Website</h3>
            <p>Modern, responsive website with content management system and analytics integration.</p>
            <div className="technologies">
              <span className="tech-tag">WordPress</span>
              <span className="tech-tag">PHP</span>
              <span className="tech-tag">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <h2>Let's Work Together</h2>
      <p>Contact us to discuss your next project</p>
      <p>Email: lancerforprofit246@gmail.com</p>
      <p>Phone: (246) 269-5025</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;