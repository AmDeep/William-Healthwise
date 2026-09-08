import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <>
      <section className="wrap privacy-hero">
        <div className="eyebrow">Legal</div>
        <h1>
          Privacy <span className="accent">Policy</span>
        </h1>
        <p className="lead privacy-lead">
          In-app version · OpenLab, a lab at UHN · Beta development phase · PIPEDA-based, informed by PHIPA
        </p>
        <p className="privacy-nav">
          <a href="#data-sharing">Data-Sharing Notice</a>
          <span aria-hidden="true"> · </span>
          <a href="#privacy-policy">Privacy Policy</a>
          <span aria-hidden="true"> · </span>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </p>
      </section>

      <section className="wrap privacy-content">
        <div className="privacy-body">

          <div id="data-sharing" className="privacy-block">
            <h1 className="privacy-doc-title">Healthwise — Data-Sharing Notice</h1>
            <p className="privacy-meta">In-app version · OpenLab, a lab at UHN · Beta development phase</p>

            <p>
              <strong>In short:</strong> what you share with Healthwise is yours, and you decide where it goes.
              We don’t sell your information and we don’t use it for advertising. Here is who your information
              may be shared with, and why.
            </p>

            <h2>1. To your doctor — only because you choose to</h2>
            <p>
              A summary Healthwise creates is your document. If you decide to send it, it can go to your doctor
              or be added to your chart at your clinic, so your doctor can see it before your visit.
            </p>
            <ul>
              <li><strong>You are in control.</strong> This only happens because you choose to send it.</li>
              <li><strong>One-way only.</strong> Healthwise places the summary into your chart; it does not read or pull anything from your clinic’s record.</li>
              <li>Your clinic, as the custodian of your record, holds whatever is added.</li>
            </ul>

            <h2>2. With service providers that work for us</h2>
            <p>
              We use trusted providers to run Healthwise, for example, secure cloud hosting and AI/language-model
              processing. They may process your information only on our behalf, only to provide these services,
              under agreements requiring privacy and security protections. They may not use it for their own purposes.
            </p>

            <h2>3. As de-identified or aggregate data, to improve Healthwise</h2>
            <p>
              We may de-identify your information and use it in aggregate to improve Healthwise. We reduce
              re-identification risk to a very low level and do not try to re-identify de-identified data, except
              where the law requires. Using your information to train or build new models is a separate purpose we
              would only do with your separate consent or with robust de-identification.
            </p>

            <h2>4. When the law requires, or to prevent serious harm</h2>
            <p>
              We may share information if required or permitted by law, for example, a valid court order, or to
              prevent a serious and imminent threat to someone’s safety.
            </p>

            <h2>5. If our project changes hands</h2>
            <p>
              If Healthwise moves to another organization, your information may move too, only if the new
              organization takes on equivalent privacy obligations, and we would give you advance notice.
            </p>

            <h2>What we do NOT do</h2>
            <ul>
              <li>We do not sell your information.</li>
              <li>We do not use it for advertising or behavioural profiling.</li>
              <li>We do not share your identifiable information with anyone else, except as described above.</li>
            </ul>

            <h2>Your choices</h2>
            <p>
              You can withdraw consent, ask to see your information, or ask us to delete it at any time (subject
              to any legal retention rules). Withdrawing does not affect the lawfulness of what we did before.
              See the Privacy Policy, and use the contact below.
            </p>

            <h2>Contact</h2>
            <p>
              Questions or requests about these terms or your information: the Healthwise / HealthWise team at
              OpenLab (UHN).
            </p>
            <p>
              Email: <a href="mailto:healthwise@uhnopenlab.ca">healthwise@uhnopenlab.ca</a>
            </p>
          </div>

          <hr className="privacy-divider" />

          <div id="privacy-policy" className="privacy-block">
            <h1 className="privacy-doc-title">Healthwise — Privacy Policy</h1>
            <p className="privacy-meta">
              In-app version · OpenLab, a lab at UHN · Beta development phase · PIPEDA-based, informed by PHIPA
            </p>

            <h2>1. Overview</h2>
            <p>
              This Privacy Policy explains how we collect, use, share, keep, and protect the information you share
              with Healthwise, consistent with Canada’s Personal Information Protection and Electronic Documents Act
              (PIPEDA) and informed by the principles of Ontario’s Personal Health Information Protection Act (PHIPA).
              Healthwise is developed by OpenLab, a lab at UHN, and is offered in a beta development phase.
            </p>

            <h2>2. Our role, and yours</h2>
            <p>
              OpenLab is a research and innovation lab at UHN. In providing Healthwise it is not acting as your
              health-care provider and is not a health-information custodian; UHN does not operate Healthwise or
              manage your information through it. Like other AI tools, what you choose to share, you share at your
              own discretion, and you own your content. Your clinic remains the custodian of your medical record,
              including anything you choose to add to it through Healthwise.
            </p>

            <h2>3. Information we collect</h2>
            <p><strong>Information you choose to give us</strong></p>
            <ul>
              <li>Name, date of birth, and email;</li>
              <li>Any health details you choose to share (for example, conditions, medications, and history);</li>
              <li>Your questions and conversations with Healthwise, and the summaries Healthwise generates.</li>
            </ul>
            <p><strong>Information collected automatically</strong></p>
            <ul>
              <li>Device and operating-system information;</li>
              <li>How you use the app (interaction logs), for safety monitoring and product improvement.</li>
            </ul>

            <h2>4. Why we collect it</h2>
            <p>We use your information only with your consent, and only to:</p>
            <ul>
              <li>provide health information, guidance, and appointment preparation, including Healthwise’s AI features;</li>
              <li>create summaries you can choose to send to your doctor;</li>
              <li>keep Healthwise safe and improve it, including through de-identified, aggregated analysis;</li>
              <li>meet legal obligations, and contact you about material changes to these documents.</li>
            </ul>
            <p>We do not collect your information for advertising or marketing profiling.</p>

            <h2>5. We collect only what we need</h2>
            <p>
              We don’t collect more than is reasonably necessary. You may leave optional fields blank without
              losing basic access to Healthwise.
            </p>

            <h2>6. Who we share it with</h2>
            <p>
              See the separate <a href="#data-sharing">Data-Sharing Notice</a> for the plain-language version.
              In summary: with your doctor / your chart only when you choose to send a summary (one-way;
              Healthwise never reads your record); with service providers who process information only on our
              behalf under privacy agreements; as de-identified or aggregate data to improve Healthwise; when
              required or permitted by law, or to prevent a serious and imminent threat; and, on a project
              transfer, only with equivalent obligations and advance notice.
            </p>

            <h2>7. De-identified and aggregate data</h2>
            <p>
              We may de-identify your information so it can no longer reasonably identify you, and use or share
              it in aggregate to improve Healthwise. We reduce re-identification risk to a very low level and
              will not attempt to re-identify it, except as the law allows. We are telling you here, in advance,
              that we routinely de-identify information for product-improvement purposes.
            </p>

            <h2>8. Consent, and your control</h2>
            <p>
              Your acceptance of this Policy is your express, informed, voluntary consent to the collection, use,
              and sharing described. You choose what to share, and you may withhold or withdraw consent at any
              time; we won’t withhold Healthwise’s core features simply because you decline optional collection
              that isn’t required for them. Withdrawing consent does not affect the lawfulness of what we did
              beforehand.
            </p>

            <h2>9. Where your information is kept, and for how long</h2>
            <p>
              Our strong default is storage in Canada. Some parts of the service move data outside Canada: your
              questions and conversations with Healthwise’s AI features are processed by OpenAI (ChatGPT), based
              in the United States. This means that information may be accessible to US courts, law enforcement,
              or national security authorities under US law. OpenAI is contractually required to use this
              information only to provide the service to us, and not for its own purposes. By using Healthwise’s
              AI features, you consent to this cross-border processing.
            </p>
            <p>
              We keep your information only as long as needed for the purposes above or as the law requires. When
              it is no longer needed, we securely delete or de-identify it. Everything is deleted when you delete
              your participation, unless the law requires us to keep it.
            </p>

            <h2>10. How we protect it</h2>
            <ul>
              <li>Encryption in transit (TLS 1.3 or higher) and at rest (AES-256 or equivalent);</li>
              <li>Access via a unique per-user link, with server-side data kept pseudonymized (identified only by a token);</li>
              <li>Role-based, least-privilege access controls;</li>
              <li>Logging and monitoring of access;</li>
              <li>Regular security review and an incident-response and breach-notification process.</li>
            </ul>

            <h2>11. If there is a privacy breach</h2>
            <p>
              If your information is lost, stolen, or used or shared without authorization, we will notify affected
              people at the first reasonable opportunity, and report to the Federal Privacy Commissioner of Canada
              where required.
            </p>

            <h2>12. Cookies and analytics</h2>
            <p>
              Healthwise may use local storage or analytics tools for keeping your session, performance and crash
              reporting, and de-identified, aggregated usage analysis. We do not use these for advertising. You can
              opt out of analytics in privacy settings without losing access to health features.
            </p>

            <h2>13. Your rights</h2>
            <p>
              You have the right to: access your information; ask us to correct it; ask us to delete it (subject to
              legal retention rules); ask for a copy in a portable format where technically feasible; and withdraw
              consent at any time. We do not sell your information or use it for targeted advertising or behavioural
              profiling.
            </p>

            <h2>14. The beta, and your data</h2>
            <p>
              Taking part in the beta does not reduce these protections. Product feedback about the app (for example,
              bug reports and usability comments) is treated as product-improvement information. Your health-related
              questionnaire answers are handled as sensitive personal information under this Policy.
            </p>

            <h2>15. Changes to this Policy</h2>
            <p>
              We may update this Policy to reflect changes in our practices or the law, and will tell you of material
              changes by in-app notice, push notification, and/or email. Continued use after the effective date means
              you accept the changes.
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

          <hr className="privacy-divider" />

          <div id="consent" className="privacy-block">
            <h1 className="privacy-doc-title">Consent declaration (in-app “I Agree”)</h1>
            <p>By tapping “I Agree,” I confirm that:</p>
            <ul>
              <li>
                I have read and understood these Data sharing notice, Terms &amp; Conditions and this Privacy Policy;
              </li>
              <li>
                I understand I choose what to share with Healthwise, that my content is mine, and that I am
                responsible for what I share and how I use it;
              </li>
              <li>
                I consent to the collection, use, and sharing of my information as described, and understand I can
                withdraw consent at any time;
              </li>
              <li>I am 18 years of age or older;</li>
              <li>
                I understand Healthwise is in a beta development phase, and its features and AI outputs may change
                or contain errors;
              </li>
              <li>
                I understand Healthwise gives general health information only, is not a substitute for professional
                medical advice, diagnosis, or treatment, and that any summary it creates is my own document, which
                is added to my clinic chart only if I choose to send it (one-way only).
              </li>
            </ul>
          </div>

          <p className="privacy-related">
            See also: <Link to="/terms">Terms &amp; Conditions</Link>
          </p>
        </div>
      </section>
    </>
  )
}
