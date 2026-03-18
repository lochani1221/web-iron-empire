import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.2 }
    );
    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background overlay */}
      <div className="hero__bg">
        <div className="hero__overlay" />
        <div className="hero__noise" />
      </div>

      {/* Decorative elements */}
      <div className="hero__deco hero__deco--1" />
      <div className="hero__deco hero__deco--2" />

      <div className="container hero__content">
        <div className="hero__text">
          <span className="hero-animate hero-badge">
            <span className="badge-dot" /> Elite Fitness & Training
          </span>

          <h1 className="hero-animate hero__title" ref={titleRef}>
            FORGE YOUR <span className="hero__title-accent">LEGACY</span>
          </h1>

          <p className="hero-animate hero__subtitle">
            Transform your body and mind with elite equipment, expert trainers, and a
            community driven by strength.
          </p>

          <div className="hero-animate hero__cta-group">
            <button
              className="btn-primary"
              onClick={() => scrollToSection('#contact')}
            >
              Start Your Journey
            </button>
            <button
              className="btn-outline"
              onClick={() => scrollToSection('#about')}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-animate hero__stats">
          {[
            { value: '15K+', label: 'Happy Members' },
            { value: '50+', label: 'Expert Trainers' },
            { value: '24/7', label: 'Access' },
            { value: '100%', label: 'Results' },
          ].map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" onClick={() => scrollToSection('#about')}>
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;