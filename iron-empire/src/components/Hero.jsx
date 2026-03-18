import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        }),
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      
      {/* Background */}
      <div className="hero__bg">
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__text">

          <span className="hero-animate hero-badge">
            <span className="badge-dot" /> Elite Fitness & Training
          </span>

          <h1 className="hero-animate hero__title">
            FORGE YOUR <span className="hero__title-accent">LEGACY</span>
          </h1>

          <p className="hero-animate hero__subtitle">
            Transform your body and mind with elite equipment, expert trainers,
            and a community driven by strength.
          </p>

          <div className="hero-animate hero__cta-group">
            <button
              className="btn-primary"
              onClick={() => scrollToSection('#contact')}
            >
              START YOUR JOURNEY
            </button>

            <button
              className="btn-outline"
              onClick={() => scrollToSection('#about')}
            >
              LEARN MORE
            </button>
          </div>

        </div>
      </div>

      {/* Scroll */}
      <div
        className="hero__scroll-indicator"
        onClick={() => scrollToSection('#about')}
      >
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>

    </section>
  );
};

export default Hero;