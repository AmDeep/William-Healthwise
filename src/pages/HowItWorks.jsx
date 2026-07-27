import { useEffect, useState } from 'react'

const phoneImages = [
  '/assets/phone_chat.png',
  '/assets/phone_menu.png',
  '/assets/phone_vitals.png',
  '/assets/phone_medications.png',
  '/assets/phone_prepsheet.png',
  '/assets/phone_login.png',
]

export default function HowItWorks() {
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
          <div className="eyebrow">How It Works</div>
          <h1>How HealthWise<br />Works <span className="accent">for You</span></h1>
          <p className="lead">
            HealthWise combines intelligent guidance, smart reminders, and personalized insights to help you manage your diabetes with confidence every step of the way — while also keeping your clinical care team in the loop.
          </p>
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
