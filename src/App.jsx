import React, { useMemo, useState } from "react";
import "./App.css";

const I = ({ children, className = "" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    {children}
  </svg>
);

const LogoMark = () => (
  <div className="logo-icon">
    <I>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </I>
  </div>
);

const HeartMark = () => (
  <I className="heart-mark">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </I>
);

const NavIcon = ({ page }) => {
  const map = {
    overview: (
      <I><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></I>
    ),
    insights: (
      <I><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></I>
    ),
    meds: (
      <I><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="11" x2="6" y2="24" /><line x1="10" y1="11" x2="10" y2="24" /><line x1="14" y1="11" x2="14" y2="24" /></I>
    ),
    reminders: (
      <I><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></I>
    ),
    goals: (
      <I><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></I>
    ),
    messages: (
      <I><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 1 0 0 14.14" /></I>
    ),
    settings: (
      <I><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></I>
    )
  };
  return map[page] || map.overview;
};

const TopNav = ({ page, setPage }) => (
  <nav className="nav">
    <div className="logo" onClick={() => setPage("home")} role="button" tabIndex={0}>
      <LogoMark />
      <span>HealthWise</span>
    </div>
    <div className="nav-links">
      <button className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>Home</button>
      <button className={page === "hiw" ? "active" : ""} onClick={() => setPage("hiw")}>How It Works</button>
      <button className={page === "about" ? "active" : ""} onClick={() => setPage("about")}>About Us</button>
      <button className={page === "contact" ? "active" : ""} onClick={() => setPage("contact")}>Contact</button>
    </div>
    <button className="nav-cta" onClick={() => setPage("hiw")}>Get Started</button>
  </nav>
);

const Dashboard = ({ compact = false }) => (
  <div className={compact ? "dashboard-wrap compact" : "dashboard-wrap"}>
    <div className="dash-header">
      <div className="logo-sm">
        <div className="icon"><LogoMark /></div>
        <span>HealthWise</span>
      </div>
    </div>
    <div className="dash-body">
      <aside className="dash-sidebar">
        <ul>
          {[
            ["overview", "Overview"],
            ["insights", "Health Insights"],
            ["meds", "Medications"],
            ["reminders", "Reminders"],
            ["goals", "Goals"],
            ["messages", "Messages"],
            ["settings", "Settings"]
          ].map(([k, label]) => (
            <li key={k} className={k === "overview" ? "active" : ""}>
              <NavIcon page={k} /> {label}
            </li>
          ))}
        </ul>
      </aside>
      <main className="dash-main">
        <div className="dash-greeting">Good morning, Maria!</div>
        <div className="dash-greeting-sub">Here’s your health overview.</div>
        <div className="dash-grid">
          <div className="dash-card">
            <div className="dash-card-label">Blood Sugar</div>
            <div><span className="dash-card-value">128</span> <span className="dash-card-unit">mg/dL</span></div>
            <div className="dash-card-status">In Range</div>
            <div className="dash-card-chart" />
          </div>
          <div className="dash-card">
            <div className="dash-card-label">Today’s Reminders</div>
            <div className="reminder-item">
              <div>
                <div className="reminder-name">Metformin</div>
                <div className="reminder-dose">500 mg · After breakfast</div>
              </div>
              <div className="reminder-check">
                <I><polyline points="20 6 9 17 4 12" /></I>
              </div>
            </div>
            <div className="reminder-item">
              <div>
                <div className="reminder-name">Walk</div>
                <div className="reminder-dose">20 minutes</div>
              </div>
              <div className="reminder-time">6:00 PM</div>
            </div>
          </div>
          <div className="dash-card">
            <div className="dash-card-label">Weekly Progress</div>
            <div><span style={{fontSize:10,color:"#374151",fontWeight:600}}>Steps</span></div>
            <div><span className="dash-card-value" style={{fontSize:16}}>4,320</span> <span className="dash-card-unit">/ 7,000 steps</span></div>
            <div className="progress-bar-wrap">
              <div className="progress-bar-bg"><div className="progress-bar-fill" /></div>
              <div style={{fontSize:10,color:"var(--text-muted)",textAlign:"right",marginTop:2}}>62%</div>
            </div>
          </div>
          <div className="dash-card">
            <div className="dash-card-label">Insights</div>
            <div className="insight-badge">
              <I><polyline points="20 6 9 17 4 12" /></I>
              <div className="insight-text">Your morning readings are improving compared with last week.</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="phone-mockup">
    <div className="phone-screen">
      <div className="phone-bar">
        <div className="phone-avatar">W</div>
        <div>
          <div className="phone-name">William</div>
          <div className="phone-role">Your Health Agent</div>
        </div>
      </div>
      <div className="phone-msgs">
        <div className="msg-bubble msg-bot">How can I help you manage your diabetes today?</div>
        <div className="msg-bubble msg-user">Show my medication reminders.</div>
        <div className="msg-bubble msg-bot">
          Here are your reminders:
          <div className="msg-links">
            <div className="msg-link"><I><polyline points="20 6 9 17 4 12" /></I> Metformin 500 mg</div>
            <div className="msg-link"><I><polyline points="20 6 9 17 4 12" /></I> Walk 20 minutes</div>
          </div>
        </div>
      </div>
      <div className="phone-input">
        <div className="phone-input-field">Ask William a question...</div>
        <div className="phone-send"><I><path d="M22 2 11 13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></I></div>
      </div>
    </div>
  </div>
);

const FeatureStrip = () => (
  <section className="features-strip">
    <div className="container">
      <div className="feat-item">
        <div className="feat-icon"><I><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></I></div>
        <div className="feat-title">Connected Care Team</div>
        <div className="feat-desc">Bridges the gap between you and your healthcare team so no one ever feels out of the loop.</div>
      </div>
      <div className="feat-item">
        <div className="feat-icon"><I><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></I></div>
        <div className="feat-title">Always By Your Side</div>
        <div className="feat-desc">Understands where you are on your journey and walks alongside you so you never feel alone.</div>
      </div>
      <div className="feat-item">
        <div className="feat-icon"><I><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" /></I></div>
        <div className="feat-title">Clinician-Vetted Information</div>
        <div className="feat-desc">Delivers doctor-approved medical information in plain, easy-to-understand language.</div>
      </div>
      <div className="feat-item">
        <div className="feat-icon"><I><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></I></div>
        <div className="feat-title">Simple Questions, Fast Answers</div>
        <div className="feat-desc">Ask questions in natural language and get instant, useful support from William.</div>
      </div>
      <div className="feat-item">
        <div className="feat-icon"><I><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></I></div>
        <div className="feat-title">Privacy First</div>
        <div className="feat-desc">Built with security at its core, ensuring your personal health information remains protected and confidential.</div>
      </div>
    </div>
  </section>
);

const OpenLabSection = () => (
  <section className="openlab-section">
    <div className="container openlab-grid">
      <div className="openlab-logo-block">
        <div className="openlab-label">Developed in collaboration with</div>
        <div className="openlab-badge">
          <div className="openlab-hex">
            <I>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </I>
          </div>
          <div>
            <div className="openlab-name">OPENLAB</div>
            <div className="openlab-sub">Proud Member of UHN</div>
          </div>
        </div>
      </div>
      <div className="openlab-desc">
        HealthWise is a research-backed project from OpenLab at the University Health Network, building intelligent solutions for better health outcomes.
      </div>
      <div className="openlab-badges">
        <div className="ol-badge">
          <div className="ol-badge-icon"><I><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" /></I></div>
          <div className="ol-badge-text">Research<br/>Driven</div>
        </div>
        <div className="ol-badge">
          <div className="ol-badge-icon"><I><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></I></div>
          <div className="ol-badge-text">Privacy<br/>Focused</div>
        </div>
        <div className="ol-badge">
          <div className="ol-badge-icon"><I><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></I></div>
          <div className="ol-badge-text">Built for<br/>Older Adults</div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, text }) => (
  <div className="fg-card">
    <div className="icon-circle">{icon}</div>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

const StepsSection = () => (
  <section className="steps-section">
    <div className="container">
      <h2>How HealthWise Works</h2>
      <div className="steps-row">
        <Step num="1" icon={<I><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></I>} title="Share Your Health Info" text="Add your health details, medications, and goals." />
        <div className="step-arrow"><I><polyline points="9 18 15 12 9 6" /></I></div>
        <Step num="2" icon={<I><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></I>} title="Get Personalized Insights" text="HealthWise analyzes your information and shows you what matters most." />
        <div className="step-arrow"><I><polyline points="9 18 15 12 9 6" /></I></div>
        <Step num="3" icon={<I><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></I>} title="Chat with William" text="Ask questions and get guidance tailored to your needs." />
        <div className="step-arrow"><I><polyline points="9 18 15 12 9 6" /></I></div>
        <Step num="4" icon={<I><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></I>} title="Receive Reminders" text="Get timely reminders for medications, activities, and check-ins." />
        <div className="step-arrow"><I><polyline points="9 18 15 12 9 6" /></I></div>
        <Step num="5" icon={<I><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></I>} title="Track Progress Goals" text="See your progress and stay motivated to reach your health goals." />
      </div>
    </div>
  </section>
);

const Step = ({ num, icon, title, text }) => (
  <div className="step-item">
    <div className="step-num">{num}</div>
    <div className="step-icon">{icon}</div>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

const WilliamSection = () => (
  <section className="william-section">
    <div className="william-img">
      <div className="william-avatar">
        <I viewBox="0 0 100 120" className="william-svg">
          <circle cx="50" cy="35" r="22" />
          <ellipse cx="50" cy="90" rx="30" ry="25" />
          <circle cx="50" cy="35" r="18" fill="white" />
          <circle cx="44" cy="32" r="2.5" fill="currentColor" />
          <circle cx="56" cy="32" r="2.5" fill="currentColor" />
          <path d="M44 40 Q50 45 56 40" />
        </I>
      </div>
    </div>
    <div className="william-info">
      <h3>Meet William — Your Health Agent</h3>
      <p>William is your trusted companion on your diabetes management journey. He’s here to answer your questions, provide personalized guidance, and support you every step of the way.</p>
      <div className="william-feats">
        <div className="wf-item"><div className="wf-icon"><I><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></I></div><div className="wf-text">Answers your health questions</div></div>
        <div className="wf-item"><div className="wf-icon"><I><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></I></div><div className="wf-text">Provides personalized insights</div></div>
        <div className="wf-item"><div className="wf-icon"><I><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></I></div><div className="wf-text">Sends reminders and encouragement</div></div>
      </div>
    </div>
    <div className="william-quote">
      <p>William was designed to feel like a calm, approachable health companion—something that helps users understand information, stay on track, and feel supported.</p>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <section className="home-hero section">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="eyebrow">HEALTHWISE</div>
          <h1>Your Companion for <br /><span>Better Diabetes Care</span></h1>
          <p>A smart health companion designed to support your self-management of Type II Diabetes every step of the way.</p>
          <button className="btn-primary">See How It Works</button>
        </div>
        <div className="hero-right">
          <Dashboard />
          <PhoneMockup />
        </div>
      </div>
    </section>
    <FeatureStrip />
    <section className="features-section section">
      <div className="container">
        <h2>Powerful Features to Support Your Health</h2>
        <div className="features-grid">
          <FeatureCard icon={<I><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></I>} title="Health Insights" text="Track your progress and understand your trends with easy-to-read insights." />
          <FeatureCard icon={<I><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="11" x2="6" y2="24" /><line x1="10" y1="11" x2="10" y2="24" /><line x1="14" y1="11" x2="14" y2="24" /></I>} title="Medication Reminders" text="Never miss a dose with smart reminders and refill alerts." />
          <FeatureCard icon={<I><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></I>} title="Guided Health Support" text="Ask questions and get personalized, evidence-based answers." />
          <FeatureCard icon={<I><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></I>} title="Designed for Older Adults" text="Simple, clear, and easy to use—because your health matters." />
          <FeatureCard icon={<I><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></I>} title="Secure Private" text="Your health information stays private and is protected with top security standards." />
        </div>
      </div>
    </section>
    <WilliamSection />
    <OpenLabSection />
    <StepsSection />
  </>
);

const HiwPage = () => (
  <>
    <section className="hiw-hero section">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">HOW IT WORKS</div>
          <h1 className="section-title">How HealthWise <br /><span>Works for You</span></h1>
          <p className="section-sub">HealthWise combines intelligent guidance, smart reminders, and personalized insights to help you manage your diabetes with confidence every step of the way.</p>
        </div>
        <div className="hero-right">
          <Dashboard compact />
        </div>
      </div>
    </section>
    <OpenLabSection />
    <StepsSection />
  </>
);

const AboutPage = () => (
  <>
    <section className="about-hero section">
      <div className="container about-grid">
        <div>
          <div className="eyebrow">ABOUT US</div>
          <h1 className="section-title" style={{fontSize:42}}>Our Mission</h1>
          <p className="page-text">HealthWise is a smart health companion designed to help adults manage Type II Diabetes with confidence. We combine clinician-vetted information, personalized guidance, and intelligent reminders to support healthier daily choices and long-term well-being.</p>
        </div>
        <div className="about-hero-visual">
          <div className="heart-circle">
            <HeartMark />
          </div>
        </div>
      </div>
    </section>

    <section className="team-section">
      <div className="container">
        <h2>Our Team</h2>
        <div className="team-sub">A small, multidisciplinary team focused on useful AI for healthcare. <a href="#contact">Contact us</a>.</div>
        <div className="team-grid">
          <Member name="Amardeep Singh" role="AI Engineer" desc="Building intelligent models and AI solutions that power HealthWise." />
          <Member name="Gabriel Paulos" role="Developer" desc="Developing and maintaining robust, secure, and scalable applications." />
          <Member name="Design Team" role="Product / UX" desc="Designing intuitive and accessible experiences that put users first." />
        </div>
      </div>
    </section>
  </>
);

const Member = ({ name, role, desc }) => (
  <div className="member-card">
    <div className="member-avatar">
      <I><circle cx="12" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /></I>
    </div>
    <div className="member-name">{name}</div>
    <div className="member-role">{role}</div>
    <div className="member-desc">{desc}</div>
  </div>
);

const ContactPage = () => (
  <>
    <section className="contact-hero section">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">CONTACT US</div>
          <h1 className="section-title" style={{fontSize:40}}>We’d love to <br /><span>hear from you.</span></h1>
          <p className="page-text">Have questions about HealthWise, our research, or collaboration opportunities? Reach out to us! We’re here to help.</p>
        </div>
        <div className="contact-visual">
          <div className="contact-icon-wrap">
            <div className="c-icon"><I><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></I></div>
            <div className="send-icon"><I><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></I></div>
          </div>
          <div className="contact-icon-wrap">
            <div className="c-icon"><I><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></I></div>
            <div className="plant-icon"><I><path d="M30 0v60" /></I></div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-body">
      <div className="container contact-body-grid">
        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>489 College Street, Suite 400, Toronto, Ontario, M6G 1A5</p>
          <h3>Email</h3>
          <p>healthwiseuhnopenlab.ca</p>
        </div>
        <div className="map-placeholder">
          <div className="map-placeholder-inner">
            <I><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></I>
            <div style={{fontWeight:700,fontSize:12}}>489 College Street</div>
            <div style={{fontSize:11,color:"var(--text-muted)"}}>Suite 400, Toronto, ON M6G 1A5</div>
          </div>
        </div>
      </div>
    </section>

    <section className="social-connect">
      <div className="social-connect-icon"><I><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></I></div>
      <div className="social-connect-text">
        <h4>Connect with HealthWise</h4>
        <p>Follow our work and stay updated on new developments.</p>
      </div>
      <div className="social-icons">
        <div className="social-icon"><I><circle cx="12" cy="12" r="10" /></I></div>
        <div className="social-icon"><I><path d="M4 4h16v16H4z" /></I></div>
        <div className="social-icon"><I><path d="M12 2a10 10 0 1 0 10 10" /></I></div>
      </div>
    </section>
  </>
);

const Footer = ({ setPage }) => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <div className="logo"><LogoMark /><span>HealthWise</span></div>
        <p>Your companion for better diabetes care.</p>
      </div>
      <div className="footer-col">
        <h5>Pages</h5>
        <ul>
          <li><button onClick={() => setPage("home")}>Home</button></li>
          <li><button onClick={() => setPage("hiw")}>How It Works</button></li>
          <li><button onClick={() => setPage("about")}>About Us</button></li>
          <li><button onClick={() => setPage("contact")}>Contact</button></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Support</h5>
        <ul>
          <li><button>Privacy</button></li>
          <li><button>Terms</button></li>
        </ul>
      </div>
      <div className="footer-contact">
        <p>healthwiseuhnopenlab.ca</p>
        <p>489 College Street, Suite 400, Toronto, Ontario, M6G 1A5</p>
      </div>
    </div>
    <div className="footer-bottom">© 2026 HealthWise. All rights reserved.</div>
  </footer>
);

export default function App() {
  const [page, setPage] = useState("home");

  const content = useMemo(() => {
    if (page === "hiw") return <HiwPage />;
    if (page === "about") return <AboutPage />;
    if (page === "contact") return <ContactPage />;
    return <HomePage />;
  }, [page]);

  return (
    <div className="app">
      <TopNav page={page} setPage={setPage} />
      {content}
      <Footer setPage={setPage} />
    </div>
  );
}
