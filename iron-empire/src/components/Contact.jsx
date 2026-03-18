import React, { useState, useEffect } from 'react';
import './Contact.css';

// Import your custom icons from your device
import LocationIcon from '../assets/location.png';
import EmailIcon from '../assets/email.png';
import PhoneIcon from '../assets/phone.png';

const initialForm = {
  fullName: '',
  email: '',
  interest: 'General Membership',
  message: '',
};

const initialErrors = {
  fullName: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.contact-animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors = { fullName: '', email: '', message: '' };
    let valid = true;

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
      valid = false;
    } else if (form.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required.';
      valid = false;
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1500);
  };

  const contactInfo = [
    { icon: LocationIcon, label: 'Location', value: '123 Main Street, Galle' },
    { icon: EmailIcon, label: 'Email', value: 'ironemp@gmail.com' },
    { icon: PhoneIcon, label: 'Phone', value: '+94 771234568' },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        {/* Left */}
        <div className="contact__left">
          <div className="contact-animate">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              START <span className="text-gold">TODAY</span>
            </h2>
            <p className="contact__desc">
              Ready to make a change? Fill out the form to schedule your free
              tour and consultation. We'll get back to you within 24 hours.
            </p>
          </div>

          <div className="contact-animate contact__info-list">
            {contactInfo.map((info) => (
              <div key={info.label} className="contact-info-item">
                <div className="contact-info-icon">
                  <img src={info.icon} alt={info.label} className="contact-icon-img" />
                </div>
                <div>
                  <span className="contact-info-label">{info.label}</span>
                  <span className="contact-info-value">{info.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className="contact-animate contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <div className="success-icon">✓</div>
              <h3 className="success-title">Message Sent!</h3>
              <p className="success-body">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                className="btn-primary"
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '24px' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input"
                  placeholder="Alex Michel"
                  value={form.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <span className="form-error">{errors.fullName}</span>
                )}
              </div>

              <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                <label htmlFor="email" className="form-label">E-mail Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="alex.m@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="form-error">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="interest" className="form-label">Interested In</label>
                <select
                  id="interest"
                  name="interest"
                  className="form-input form-select"
                  value={form.interest}
                  onChange={handleChange}
                >
                  <option>General Membership</option>
                  <option>Personal Training</option>
                  <option>Cardio & HIIT</option>
                  <option>Strength Training</option>
                  <option>Premium Plan</option>
                  <option>Elite Plan</option>
                </select>
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell us about your fitness goals..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="form-error">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className={`btn-primary contact__submit ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner" /> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;