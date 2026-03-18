import React, { useEffect } from 'react';
import './About.css';
import gymImage from '../assets/gym-image.jpg';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.about-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container about__inner">
        {/* Image side */}
        <div className="about-animate about__image-side">
          <div className="about__image-frame">
           <img
  src={gymImage}
  alt="Iron Empire Gym Interior"
  className="about__main-img"
/>
            <div className="about__img-badge">
              <span className="badge-year">EST</span>
              <span className="badge-num">2015</span>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="about__text-side">
          <span className="section-label about-animate">WHO WE ARE</span>
          <h2 className="section-title about-animate about__heading">
            MORE THAN JUST A GYM. <span className="text-gold">WE ARE A MOVEMENT.</span>
          </h2>

          <p className="about-animate about__body">
            Founded in 2015, Iron Empire was built on a simple principle: strength is for everyone. We've created a space where beginners and pro athletes alike can push their limits.
          </p>

          <p className="about-animate about__body">
            Our facility features state-of-the-art Hammer Strength equipment, a dedicated powerlifting zone, and a cardio theater designed to keep you moving. But our true strength lies in our community.
          </p>

          <div className="about-animate about__stats-grid">
            {[
              { value: '15k+', label: 'Happy Members' },
              { value: '50+', label: 'Expert Trainers' },
              { value: '24/7', label: 'Access' },
              { value: '100%', label: 'Results' },
            ].map((s) => (
              <div key={s.label} className="about__stat-box">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;