import React, { useEffect } from 'react';
import './Plans.css';

const plans = [
  {
    id: 1,
    name: 'Standard',
    price: 29,
    tagline: 'For the motivated fitness enthusiast.',
    features: [
      { text: 'Gym Access', included: true },
      { text: 'Locker Room Access', included: true },
      { text: 'Free Wifi', included: true },
      { text: 'Personal Trainer', included: false },
      { text: 'Group Classes', included: false },
    ],
    popular: false,
    cta: 'Select Plan',
  },
  {
    id: 2,
    name: 'Premium',
    price: 59,
    tagline: 'Most powerful for serious people.',
    features: [
      { text: '24/7 Gym Access', included: true },
      { text: 'All Group Classes', included: true },
      { text: 'Sauna & Spa Access', included: true },
      { text: '1PT Session/Month', included: true },
      { text: 'Guest Pass (1/month)', included: true },
    ],
    popular: true,
    cta: 'Select Plan',
  },
  {
    id: 3,
    name: 'Elite',
    price: 99,
    tagline: 'The ultimate fitness experience.',
    features: [
      { text: 'All Premium Features', included: true },
      { text: 'Unlimited PT Sessions', included: true },
      { text: 'Nutrition Plan', included: true },
      { text: 'Private Locker', included: true },
      { text: 'Merchandise Discount', included: true },
    ],
    popular: false,
    cta: 'Select Plan',
  },
];

const Plans = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.plan-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="plans" className="plans">
      <div className="container">
        <div className="plans__header plan-animate">
          <span className="section-label">Membership Plans</span>
          <h2 className="section-title">CHOOSE YOUR <span className="text-gold">PATH</span></h2>
        </div>

        <div className="plans__grid">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`plan-card plan-animate ${plan.popular ? 'plan-card--popular' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {plan.popular && (
                <div className="plan-card__popular-badge">Most Popular</div>
              )}

              <div className="plan-card__header">
                <h3 className="plan-card__name">{plan.name}</h3>
                <p className="plan-card__tagline">{plan.tagline}</p>
                <div className="plan-card__price">
                  <span className="price-currency">$</span>
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">/month</span>
                </div>
              </div>

              <ul className="plan-card__features">
                {plan.features.map((f) => (
                  <li key={f.text} className={`plan-feature ${f.included ? 'included' : 'excluded'}`}>
                    <span className="feature-icon">{f.included ? '✓' : '✕'}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <button
                className={`plan-card__cta ${plan.popular ? 'btn-primary' : 'btn-outline-dark'}`}
                onClick={scrollToContact}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;