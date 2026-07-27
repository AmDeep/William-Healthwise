import { Link } from 'react-router-dom'

const team = [
  { img: '/assets/team_girish.png', name: 'Dr. Girish Payal', role: 'Project Lead' },
  { img: '/assets/team_howard.png', name: 'Dr. Howard Abrams', role: 'Project Lead' },
  { img: '/assets/team_amardeep.png', name: 'Amardeep Singh', role: 'AI Engineer' },
  { img: '/assets/team_gabriel.png', name: 'Gabriel Paulos', role: 'Full Stack Developer' },
  { img: '/assets/team_alexa.png', name: 'Alexa Chew', role: 'UX Designer' },
  { img: '/assets/team_nandita.png', name: 'Nandita Javadevan', role: 'Research Assistant' },
  { img: '/assets/team_viboosha.png', name: 'Viboosha Easwarathas', role: 'Research Assistant' },
]

export default function About() {
  return (
    <>
      <section className="wrap mission">
        <div>
          <div className="eyebrow">About Us</div>
          <h1>Our Mission</h1>
          <p>
            HealthWise is here to help you understand and better manage your condition through clinically accurate information, while connecting you more closely with your healthcare team — so you get the benefits of companionship and education, without the risks of relying on it for diagnosis.
          </p>
        </div>
        <div className="mission-icon">
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
      </section>

      <section className="wrap">
        <h2 className="section-title">Our Team</h2>
        <p className="team-sub">
          A small, multidisciplinary team focused on useful AI for healthcare.{' '}
          <Link to="/contact">Contact us</Link>.
        </p>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.name}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
