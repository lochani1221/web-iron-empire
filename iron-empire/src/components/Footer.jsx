import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Pricing', href: '#plans' },
  ];

  const supportLinks = [
    { label: 'FAQ', href: '#!' },
    { label: 'Privacy Policy', href: '#!' },
    { label: 'Terms of Services', href: '#!' },
    { label: 'Contact Support', href: '#!' },
  ];

  const hours = [
    { day: 'Mon – Fri', time: '5:00 AM – 11:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '7:00 AM – 9:00 PM' },
  ];

  const socials = [
    { label: 'f', title: 'Facebook' },
    { label: '✦', title: 'Instagram' },
    { label: 't', title: 'Twitter' },
    { label: '♪', title: 'TikTok' },
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Brand */}
       <div className="footer__brand">

  <div className="footer__logo">
    <img src={logo} alt="Logo" className="footer__logo-image" />
    IRON<span className="footer__logo-accent">EMPIRE</span>
  </div>

  <p className="footer__tagline">
    Building stronger bodies and minds since 2015. Join the empire today.
  </p>

  <div className="footer__socials">
    {socials.map((s) => (
      <a key={s.title} href="#!" className="social-icon" title={s.title}>
        {s.label}
      </a>
    ))}
  </div>

 
 <div className="footer__map">
  <iframe
    src="https://maps.google.com/maps?q=Galle%20Sri%20Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed"
    loading="lazy"
  ></iframe>
</div>

</div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <nav className="footer__links">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer__link"
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Support */}
        <div className="footer__col">
          <h4 className="footer__col-title">Support</h4>
          <nav className="footer__links">
            {supportLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Hours */}
        <div className="footer__col">
          <h4 className="footer__col-title">Opening Hours</h4>
          <div className="footer__hours">
            {hours.map((h) => (
              <div key={h.day} className="footer__hour-row">
                <span className="hour-day">{h.day}</span>
                <span className="hour-time">{h.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    


    </footer>
  );
};

export default Footer;