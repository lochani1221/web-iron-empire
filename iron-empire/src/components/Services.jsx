import React, { useEffect } from 'react';
import './Services.css';
import services1 from '../assets/services/services1.jpg';
import services2 from '../assets/services/services2.jpg';
import services3 from '../assets/services/services3.jpg';


const services = [
  {
    id: 1,
    title: 'Personal Training',
    description:
      'One-on-one coaching tailored to your specific goals, whether it\'s weight loss, muscle gain, or athletic performance.',
    image: services1,
    tag: 'Most Popular',
  },
  {
    id: 2,
    title: 'Cardio & HIIT',
    description:
      'High-energy classes designed to burn calories and boost endurance. From spin classes to intense circuit training.',
    image: services2 ,
    tag: null,
  },
  {
    id: 3,
    title: 'Strength Training',
    description:
      'Free weights, power racks, and resistance machines. Everything you need to build raw power and muscle mass.',
    image: services3 ,
    tag: null,
  },
];

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.service-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header service-animate">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">PUSH YOUR <span className="text-gold">LIMITS</span></h2>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-card service-animate"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {service.tag && (
                <span className="service-card__tag">{service.tag}</span>
              )}
              <div className="service-card__image">
                <img src={service.image} alt={service.title} />
                <div className="service-card__icon">{service.icon}</div>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <button className="service-card__link">
                  Learn More <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;