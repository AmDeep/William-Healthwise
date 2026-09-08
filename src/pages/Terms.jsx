import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <>
      <section className="wrap privacy-hero">
        <div className="eyebrow">Legal</div>
        <h1>
          Terms &amp; <span className="accent">Conditions</span>
        </h1>
        <p className="lead privacy-lead">
          In-app version · OpenLab, a lab at UHN · Beta development phase
        </p>
        <p className="privacy-nav">
          <Link to="/privacy">Privacy Policy</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/privacy#data-sharing">Data-Sharing Notice</Link>
        </p>
      </section>

      <section className="wrap privacy-content">
        <div className="privacy-body">
          <div className="privacy-block">
            <h1 className="privacy-doc-title">Healthwise — Terms &amp; Conditions</h1>
            <p className="privacy-meta">In-app version · OpenLab, a lab at UHN · Beta development phase</p>

            <h2>1. About Healthwise and these Terms</h2>
            <p>
              Healthwise is a health-education tool developed by OpenLab, a lab at UHN, currently offered in a
              beta development phase. Like other AI assistants, Healthwise is something you choose to use, at your
              own discretion. By using it, you agree to these Terms &amp; Conditions and the Privacy Policy. If you
              do not agree, please do not use Healthwise.
            </p>

            <h2>2. Who Healthwise is (and is not)</h2>
            <p>
              Healthwise is developed by OpenLab, a research and innovation lab at UHN. In providing Healthwise,
              OpenLab is not acting as your health-care provider and is not a health-information custodian.
              Healthwise does not operate Healthwise as a clinical service, does not review its outputs, and does
              not manage your information through it. Your clinic remains the custodian of your medical record.
            </p>

            <h2>3. Who can take part</h2>
            <p>
              Healthwise’s beta is for adults 18 years of age or older. By using it, you confirm you are 18 or older.
            </p>

            <h2>4. What Healthwise is and is not</h2>
            <p>
              Healthwise gives general health information and education and can help you prepare for appointments.
              It is not a medical device, not a diagnostic tool, and not a treatment service, and it does not
              provide regulated health care. Nothing Healthwise generates is a diagnosis, prescription, or medical
              instruction.
            </p>
            <p>
              You are always interacting with an AI tool, not a person. Healthwise cannot replace advice from your
              doctor, nurse practitioner, pharmacist, or other qualified professional. Always confirm health
              decisions with a qualified professional.
            </p>

            <h2>5. Not for emergencies</h2>
            <p>
              Healthwise is not monitored in real time and is not for emergencies. If you think you may be having
              a medical emergency, call 911 (or your local emergency number) or go to the nearest emergency
              department immediately.
            </p>

            <h2>6. Beta development phase</h2>
            <ul>
              <li>Features and AI outputs may be incomplete, may contain errors, and may change or be removed without notice.</li>
              <li>We may use app-usage information, bug reports, and your feedback to improve Healthwise, without payment or attribution.</li>
              <li>We may end the beta, or a particular tester’s access, at any time.</li>
              <li>Taking part is voluntary and free, and it will not affect your care.</li>
            </ul>

            <h2>7. How you access Healthwise (no account needed)</h2>
            <p>
              <strong>Access During the Beta Phase.</strong> No user account creation is required to access the
              HealthWise platform during the Beta Development Phase. Instead, each User will be issued a unique,
              non-transferable username by the HealthWise team, together with a one-time password (“OTP”) for the
              purpose of initial authentication. Upon first accessing the platform using the assigned username and
              OTP, the User shall be required to create a new password, and the OTP shall thereafter be invalid for
              any subsequent login. For all subsequent access, the User shall authenticate using the assigned
              username together with the password created during this initial login process. The User is solely
              responsible for maintaining the confidentiality of their login credentials and for all activity
              occurring under their account, and shall promptly notify the HealthWise team of any suspected
              unauthorized access to or use of their credentials.
            </p>

            <h2>8. Your information is yours and sending a summary to your doctor</h2>
            <p>
              What you share with Healthwise, you choose to share, and it remains yours. Any summary Healthwise
              creates is your document. If you decide to, you can send it to your doctor or have it added to your
              chart at your clinic. This happens only because you choose to send it. Healthwise only places
              information into your chart (one-way); it never reads or pulls anything from your clinic’s record.
              Your clinic, as custodian, holds whatever is added to your record.
            </p>

            <h2>9. Your responsibilities</h2>
            <p>Because you decide what to share and how to use Healthwise:</p>
            <ul>
              <li>You are responsible for the information you choose to share with Healthwise, and for making sure it is accurate.</li>
              <li>You are responsible for any decisions you make based on Healthwise’s output, and for what you choose to send to your doctor. Please verify health information with a qualified professional first.</li>
            </ul>
            <p>Please also use Healthwise only for your own personal, non-commercial health and wellness, and do not:</p>
            <ul>
              <li>use it for any unlawful purpose or in breach of applicable law;</li>
              <li>try to reverse-engineer, decompile, or extract source code, models, or algorithms;</li>
              <li>share information about another person without their lawful consent;</li>
              <li>try to access, alter, or delete another person’s data;</li>
              <li>try to manipulate or circumvent the AI features, including through prompt injection or other adversarial inputs;</li>
              <li>use bots, scripts, or scraping tools against the app.</li>
            </ul>

            <h2>10. Artificial-intelligence features</h2>
            <p>
              Healthwise uses AI to generate educational information and responses, based on what you tell it. This
              content is for information and education only, and may sometimes be inaccurate, incomplete, out of
              date, or not applicable to you (“hallucinations”). Independently verify any health information before
              relying on it, and make health decisions with a qualified professional.
            </p>

            <h2>11. Your content and intellectual property</h2>
            <p>
              Information you enter remains yours; you give us a limited licence to store and process it to run and
              improve Healthwise, consistent with the Privacy Policy. Healthwise has no public feed or forum. The
              app’s own software, design, and content are owned by or licensed to us; you get a limited,
              non-exclusive, non-transferable licence to use Healthwise for personal, non-commercial purposes during
              the beta.
            </p>

            <h2>12. Third-party links and connected services</h2>
            <p>
              Healthwise may link to third-party sites. Anything you share with a third-party service is governed by
              that provider’s terms and privacy policy, and is at your own risk.
            </p>

            <h2>13. Disclaimers and limitation of liability</h2>
            <p>
              Healthwise is provided “as is” and “as available,” without warranties of any kind to the extent
              permitted by law, especially during the beta. To the maximum extent permitted by law, we are not liable
              for indirect, incidental, special, consequential, or punitive damages arising from your use of
              Healthwise, including reliance on AI-generated information.
            </p>

            <h2>14. Changes, termination, and governing law</h2>
            <p>
              We may modify, suspend, or discontinue Healthwise or any feature, and may end your access. We may
              update these Terms and will tell you of material changes by in-app notice, push notification, and/or
              email; continued use after the effective date means you accept them. These Terms are governed by the
              laws of Ontario and the federal laws of Canada that apply there. If a dispute arises, please contact
              us first so we can try to resolve it in good faith.
            </p>

            <h2>Contact</h2>
            <p>
              Questions or requests about these terms or your information: the Healthwise / HealthWise team at
              OpenLab, a lab at UHN.
            </p>
            <p>
              Email: <a href="mailto:healthwise@uhnopenlab.ca">healthwise@uhnopenlab.ca</a>
            </p>
          </div>

          <p className="privacy-related">
            See also: <Link to="/privacy">Privacy Policy</Link>
            <span aria-hidden="true"> · </span>
            <Link to="/privacy#data-sharing">Data-Sharing Notice</Link>
          </p>
        </div>
      </section>
    </>
  )
}
