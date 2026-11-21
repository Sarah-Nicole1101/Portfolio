import React, { useState } from 'react';

const email = 'lr.snhular@mmdc.mcl.edu.ph';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Email address copied!');
    } catch {
      setCopyStatus('Select the email address above to copy it.');
    }
  }

  return (
    <section id="contact" className="section wrap">
      <div className="contact-panel" data-reveal>
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <h2>Let’s make something<br /><span className="serif">thoughtful, together.</span></h2>
        <p>For internship opportunities, project collaborations,<br className="desktop-only" /> or a simple hello — I’d love to connect.</p>
        <a className="button primary" href={`mailto:${email}`}>Say hello <span>✉</span></a>
        <div className="email-line">
          <a href={`mailto:${email}`}>{email}</a>
          <button id="copy-email" aria-label="Copy email address" title="Copy email address" onClick={copyEmail}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M15 8V4H4v11h4" /></svg>
          </button>
        </div>
        <span id="copy-status" role="status">{copyStatus}</span>
        <span className="contact-flower" aria-hidden="true">✺</span>
      </div>
    </section>
  );
}
