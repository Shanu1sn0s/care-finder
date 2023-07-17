import React from 'react';
import '../Styles/Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Find the Nearest Hospital</h1>
        <h2 className="hero-subtitle">
          Your Comprehensive Healthcare Solution
        </h2>
        <p className="hero-description">
          Welcome to Care Finder, your go-to resource for finding the nearest
          hospitals in your area. Our app/site is designed to help you easily
          locate healthcare facilities in your vicinity, ensuring quick access
          to medical services whenever you need them.
        </p>
        <p className="hero-description">
          We understand the importance of timely medical care, especially during
          emergencies. With our user-friendly search feature, you can instantly
          discover hospitals, clinics, and medical centers near your location.
          Whether you require urgent care or specialized treatment, our platform
          provides you with the necessary information to make informed decisions
          about your healthcare needs.
        </p>
        <p className="hero-description">
          Our database includes a wide network of healthcare providers, ensuring
          that you can find the right facility for your specific requirements.
          We prioritize accuracy and up-to-date information to offer you
          reliable results every time you search for the nearest hospital.
        </p>
        <p className="hero-description">
          In addition to locating hospitals, our app/site provides valuable
          details such as contact information, services offered, and user
          reviews. This empowers you to choose a healthcare facility that aligns
          with your preferences and needs, all with just a few clicks or taps.
        </p>
       
      </div>
    </div>
  );
}

export default Hero;
