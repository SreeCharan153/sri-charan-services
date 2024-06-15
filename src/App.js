import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="bg-gradient">
        <h1 className="header-title">Sri Charan</h1>
        <p className="header-subtitle">Custom GitHub Profiles, Portfolio Websites, Resumes, and Project Reports</p>
      </header>
      <main className="container">
        <section id="intro">
          <p className="section-content">
            Looking to enhance your online presence with a stunning GitHub profile or a professional portfolio website? Need a standout resume or a well-crafted project report? Sri Charan is here to help!
            Whether you want to customize your GitHub profile with dynamic elements, create an eye-catching README, develop a personalized portfolio website to showcase your projects and skills, build a compelling resume, or prepare a detailed project report, I can bring your vision to life.
          </p>
          <h4>Contact for more details!</h4>
        </section>
        <section id="services">
          <h2 className="section-title">Services Offered</h2>
          <ul className="list-disc section-content">
            <li>Custom GitHub Profiles</li>
            <li>Portfolio Websites</li>
            <li>Resume Building</li>
            <li>Project Report Creation</li>
          </ul>
        </section>
        <section id="contact">
          <h2 className="section-title">Contact Sri Charan</h2>
          <p className="contact-info">
            <strong>Email:</strong> <a href="mailto:sreecharan750@gmail.com" className="contact-link">sreecharan750@gmail.com</a><br />
            <strong>Mobile:</strong> +91 9390891684<br />
            <strong>GitHub:</strong> <a href="https://github.com/SreeCharan153" target="_blank" rel="noopener noreferrer" className="contact-link">@SreeCharan153</a><br />
            <strong>Portfolio:</strong> <a href="https://sreecharan153.github.io/myportfolio/" target="_blank" rel="noopener noreferrer" className="contact-link">Sri Charan's Portfolio</a>
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Sri Charan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
