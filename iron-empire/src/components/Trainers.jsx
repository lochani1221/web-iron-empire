import React, { useEffect, useState } from 'react';
import './Trainers.css';
import trainer1 from '../assets/trainers/trainer1.jpg';
import trainer2 from '../assets/trainers/trainer2.jpg';
import trainer3 from '../assets/trainers/trainer3.jpg';
import trainer4 from '../assets/trainers/trainer4.jpg';

const trainersData = [
  {
    id: 1,
    name: 'Alex Stone',
    role: 'Head Coach',
    image: trainer1,
    specialties: ['Powerlifting', 'Strength'],
  },
  {
    id: 2,
    name: 'Marcus Reid',
    role: 'CrossFit Expert',
    image: trainer2,
    specialties: ['CrossFit', 'HIIT'],
  },
  {
    id: 3,
    name: 'Sarah Vance',
    role: 'Yoga & Mobility',
    image: trainer3,
    specialties: ['Yoga', 'Flexibility'],
  },
  {
    id: 4,
    name: 'Jake Powell',
    role: 'Body Building Pro',
    image: trainer4,
    specialties: ['Bodybuilding', 'Nutrition'],
  },
];

const Trainers = () => {

  const [search, setSearch] = useState('');
  const [filteredTrainers, setFilteredTrainers] = useState(trainersData);

  useEffect(() => {
  fetch('https://myapi.com/trainers') // replace with your real API URL
    .then(res => res.json())
    .then(data => setFilteredTrainers(data))
    .catch(err => console.error('Error fetching trainers:', err));
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.trainer-animate').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 🔍 SEARCH FILTER LOGIC
  useEffect(() => {
    const filtered = trainersData.filter((trainer) =>
      trainer.name.toLowerCase().includes(search.toLowerCase()) ||
      trainer.specialties.join(' ').toLowerCase().includes(search.toLowerCase())
    );

    setFilteredTrainers(filtered);
  }, [search]);

  return (
    <section id="trainers" className="trainers">
      <div className="container">

        {/* Header */}
        <div className="trainers__header trainer-animate">
          <span className="section-label">Expert Team</span>
          <h2 className="section-title">
            MEET THE <span className="text-gold">ELITE</span>
          </h2>
        </div>

        {/*  SEARCH BAR */}
        <div className="trainer-search trainer-animate">
          <input
            type="text"
            placeholder="Search trainers or specialties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Trainers Grid */}
        <div className="trainers__grid">
          {filteredTrainers.map((trainer, i) => (
            <div
              key={trainer.id}
              className="trainer-card trainer-animate"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="trainer-card__photo">
                <img src={trainer.image} alt={trainer.name} />

                <div className="trainer-card__overlay">
                  <div className="trainer-card__specialties">
                    {trainer.specialties.map((s) => (
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