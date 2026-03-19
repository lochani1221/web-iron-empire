import React, { useEffect, useState } from 'react';
import './Services.css';
import services1 from '../assets/services/services1.jpg';
import services2 from '../assets/services/services2.jpg';
import services3 from '../assets/services/services3.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Personal Training',
    description:
      "One-on-one coaching tailored to your specific goals, whether it's weight loss, muscle gain, or athletic performance.",
    image: services1,
    tag: 'Most Popular',
  },
  {
    id: 2,
    title: 'Cardio & HIIT',
    description:
      'High-energy classes designed to burn calories and boost endurance.',
    image: services2,
  },
  {
    id: 3,
    title: 'Strength Training',
    description:
      'Build raw power and muscle mass with professional equipment.',
    image: services3,
  },
];

const Services = () => {

  const [search, setSearch] = useState('');

  // 🔥 FILTER LOGIC
  const filteredServices = servicesData.filter(service =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

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

        {/* HEADER */}
        <div className="services__header service-animate">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            PUSH YOUR <span className="text-gold">LIMITS</span>
          </h2>

          {/* 🔍 SEARCH BAR */}
          <input
            type="text"
            placeholder="Search services..."
            className="services__search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* GRID */}
        <div className="services__grid">
          {filteredServices.map((service, i) => (
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