import React, { useEffect } from 'react';
import './Trainers.css';

const trainers = [
  {
    id: 1,
    name: 'Alex Stone',
    role: 'Head Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
    specialties: ['Powerlifting', 'Strength'],
    instagram: '#',
  },
  {
    id: 2,
    name: 'Marcus Reid',
    role: 'CrossFit Expert',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
    specialties: ['CrossFit', 'HIIT'],
    instagram: '#',
  },
  {
    id: 3,
    name: 'Sarah Vance',
    role: 'Yoga & Mobility',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
    specialties: ['Yoga', 'Flexibility'],
    instagram: '#',
  },
  {
    id: 4,
    name: 'Jake Powell',
    role: 'Body Building Pro',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
    specialties: ['Bodybuilding', 'Nutrition'],
    instagram: '#',
  },
];

const Trainers = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.trainer-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trainers" className="trainers">
      <div className="container">
        <div className="trainers__header trainer-animate">
          <span className="section-label">Expert Team</span>
          <h2 className="section-title">MEET THE <span className="text-gold">ELITE</span></h2>
        </div>

        <div className="trainers__grid">
          {trainers.map((trainer, i) => (
            <div
              key={trainer.id}
              className="trainer-card trainer-animate"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="trainer-card__photo">
                <img src={trainer.image} alt={trainer.name} />
                <div className="trainer-card__overlay">
                  <div className="trainer-card__specialties">
                    {trainer.specialties.map(s => (
                      <span key={s} className="specialty-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="trainer-card__info">
                <h3 className="trainer-card__name">{trainer.name}</h3>
                <span className="trainer-card__role">{trainer.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;