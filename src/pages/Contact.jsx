export default function Contact() {
  return (
    <>
      <section className="wrap contact-hero">
        <div>
          <div className="eyebrow">Contact Us</div>
          <h1>We'd love to<br /><span className="accent">hear from you.</span></h1>
          <p>
            Have questions about HealthWise, our research, or collaboration opportunities? Reach out to us! We're here to help.
          </p>
        </div>
        <div className="contact-icons">
          <div className="icon-square">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div className="icon-square">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>
            </svg>
          </div>
          <div className="icon-square filled">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="wrap contact-details">
        <div>
          <h4>Visit Us</h4>
          <div className="row">
            <p>489 College Street, Suite 400,<br />Toronto, Ontario, M6G 1A5</p>
            <a
              className="map-link-btn"
              href="https://www.google.com/maps/search/?api=1&query=489+College+Street+Suite+400+Toronto+Ontario+M6G+1A5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Google Maps
            </a>
          </div>
          <h4>Email Us</h4>
          <p>
            <a href="mailto:healthwise@uhnopenlab.ca">healthwise@uhnopenlab.ca</a>
          </p>
        </div>
        <div>
          <a
            className="map-box"
            href="https://www.google.com/maps/search/?api=1&query=489+College+Street+Suite+400+Toronto+Ontario+M6G+1A5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </span>
            489 College Street
            <span className="sub">Suite 400, Toronto, ON M6G 1A5</span>
          </a>
        </div>
      </section>
    </>
  )
}
