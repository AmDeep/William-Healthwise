import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const phoneImages = [
  '/assets/phone_login.png',
  '/assets/phone_chat.png',
  '/assets/phone_menu.png',
  '/assets/phone_vitals.png',
  '/assets/phone_medications.png',
  '/assets/phone_prepsheet.png',
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phoneImages.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <header className="wrap hero">
        <div>
          <div className="eyebrow">HealthWise</div>
          <h1>Your Companion for<br />Better <span className="accent">Diabetes Care</span></h1>
          <p className="lead">
            A smart health companion designed by doctors to support you through every step of your Type 2 diabetes.
          </p>
          <Link className="btn-primary" to="/how-it-works">See How It Works</Link>
        </div>

        <div className="carousel">
          {phoneImages.map((src, i) => (
            <img
              key={src}
              src={src}
              className={i === current ? 'active' : ''}
              alt="HealthWise app screen"
            />
          ))}
          <div className="carousel-dots">
            {phoneImages.map((_, i) => (
              <span key={i} className={i === current ? 'active' : ''} />
            ))}
          </div>
        </div>
      </header>

      <section className="wrap feature-row">
        <div className="item">
          <div className="icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h4>Connected Care Team</h4>
          <p>Bridges the gap between you and your healthcare team, so no one ever feels out of the loop.</p>
        </div>
        <div className="item">
          <div className="icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h4>Always By Your Side</h4>
          <p>Understands where you are on your journey and walks alongside you so you never feel alone.</p>
        </div>
        <div className="item">
          <div className="icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h4>Clinician-Vetted Information</h4>
          <p>Delivers doctor-approved medical information in plain, easy-to-understand language.</p>
        </div>
        <div className="item">
          <div className="icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <h4>Simple Questions, Fast Answers</h4>
          <p>Ask questions in natural language and get instant, useful support from William.</p>
        </div>
        <div className="item">
          <div className="icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h4>Privacy First</h4>
          <p>Built with security at its core, ensuring your personal health information remains protected and confidential.</p>
        </div>
      </section>

      <section className="wrap">
        <h2 className="section-title">Powerful Features to Support Your Health</h2>
        <div className="card-grid">
          <div className="card">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h4>Health Insights</h4>
            <p>Track your progress and understand your trends with easy-to-read insights.</p>
          </div>
          <div className="card">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h4>Medication Reminders</h4>
            <p>Never miss a dose with smart reminders and refill alerts.</p>
          </div>
          <div className="card">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h4>Guided Health Support</h4>
            <p>Ask questions and get personalized, evidence-based answers.</p>
          </div>
          <div className="card">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              </svg>
            </div>
            <h4>Designed for Older Adults</h4>
            <p>Simple, clear, and easy to use — because your health matters.</p>
          </div>
          <div className="card">
            <div className="icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h4>Secure & Private</h4>
            <p>Your health information stays private and is protected with top security standards.</p>
          </div>
        </div>
      </section>

      <section className="wrap william">
        <div className="william-photo">
          <img src="/assets/healthwise_icon.png" alt="William" style={{ width: 130, height: 130 }} />
        </div>
        <div>
          <h2>Meet William — Your Health Companion</h2>
          <p className="desc">
            William is your trusted companion on your diabetes management journey. He's here to answer your questions, provide personalized guidance, and support you every step of the way.
          </p>
          <div className="william-points">
            <div><span className="icon">✓</span> Answers your health questions</div>
            <div><span className="icon">✓</span> Provides personalized insights</div>
            <div><span className="icon">✓</span> Sends reminders and encouragement</div>
          </div>
          <div className="quote-box">
            <span className="mark">“</span>
            William was designed to feel like a calm, approachable health companion — something that helps users understand health information, stay on track, and feel supported.
          </div>
        </div>
      </section>

      <section className="wrap openlab-strip">
        <div>
          <div className="label">Developed in collaboration with</div>
          <img src="/assets/openlab_logo.png" alt="OpenLab" />
        </div>
        <p className="desc">
          HealthWise is a research-backed project from OpenLab at the University Health Network, building intelligent solutions for better health outcomes.
        </p>
        <div className="trust-badges">
          <div>
            <span className="icon-frame">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
            </span>
            Research<br />Driven
          </div>
          <div>
            <span className="icon-frame">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </span>
            Privacy<br />Focused
          </div>
          <div>
            <span className="icon-frame">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              </svg>
            </span>
            Built for<br />Older Adults
          </div>
        </div>
      </section>

      <section className="wrap steps-wrap">
        <h2 className="section-title">How HealthWise Works</h2>
        <div className="steps">
          <div className="step">
            <div className="num">1</div>
            <h4>Share Your Health Info</h4>
            <p>Add your health details and medications.</p>
          </div>
          <div className="step">
            <div className="num">2</div>
            <h4>Get Personalized Insights</h4>
            <p>HealthWise analyzes your information and shows you the trends.</p>
          </div>
          <div className="step">
            <div className="num">3</div>
            <h4>Chat with William</h4>
            <p>Ask questions to get guidance and emotional support tailored to your everyday needs.</p>
          </div>
          <div className="step">
            <div className="num">4</div>
            <h4>Receive Reminders</h4>
            <p>Get timely reminders for medications, activities, and check-ins.</p>
          </div>
          <div className="step">
            <div className="num">5</div>
            <h4>Connect With Your Healthcare Team</h4>
            <p>Every visit generates a pre-visit summary, so your doctor knows what's happened between appointments.</p>
          </div>
        </div>
      </section>
    </>
  )
}
