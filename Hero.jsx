import React, { useState } from 'react';

export default function Hero() {
  const [focus, setFocus] = useState('Code');

  const snippets = {
    Code: <>
      <span className="code-purple">const</span> sarah = {'{'}<br />
      &nbsp; curious: <span className="code-purple">true</span>,<br />
      &nbsp; focus: [<br />
      &nbsp;&nbsp; <span className="code-green">'design'</span>,<br />
      &nbsp;&nbsp; <span className="code-green">'development'</span>,<br />
      &nbsp;&nbsp; <span className="code-green">'quality'</span><br />
      &nbsp; ],<br />
      &nbsp; always: <span className="code-green">'learning'</span><br />
      {'};'}
    </>,
    Design: <>
      <span className="code-purple">const</span> approach = {'{'}<br />
      &nbsp; listen: <span className="code-purple">true</span>,<br />
      &nbsp; sketch: <span className="code-green">'ideas'</span>,<br />
      &nbsp; improve: [<br />
      &nbsp;&nbsp; <span className="code-green">'clarity'</span>,<br />
      &nbsp;&nbsp; <span className="code-green">'usability'</span><br />
      &nbsp; ],<br />
      &nbsp; detail: <span className="code-green">'matters'</span><br />
      {'};'}
    </>,
    QA: <>
      <span className="code-purple">const</span> checklist = [<br />
      &nbsp; <span className="code-green">'explore the flow'</span>,<br />
      &nbsp; <span className="code-green">'test edge cases'</span>,<br />
      &nbsp; <span className="code-green">'report findings'</span>,<br />
      &nbsp; <span className="code-green">'verify the fix'</span><br />
      ];<br />
      <br />
      status: <span className="code-purple">'ready'</span>;
    </>
  };

  return (
    <>
      <section id="home" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="tiny-star">✦</span> A LITTLE CURIOSITY. A LOT OF CARE.</p>
          <h1>Hi, I’m Sarah<br /><span className="serif">Nicole.</span>
            <svg className="name-flower" viewBox="0 0 100 100" aria-hidden="true">
              <g fill="currentColor">
                <ellipse cx="50" cy="50" rx="13" ry="46" />
                <ellipse cx="50" cy="50" rx="13" ry="46" transform="rotate(45 50 50)" />
                <ellipse cx="50" cy="50" rx="13" ry="46" transform="rotate(90 50 50)" />
                <ellipse cx="50" cy="50" rx="13" ry="46" transform="rotate(135 50 50)" />
              </g>
              <circle cx="50" cy="50" r="10" fill="#fbfaff" />
            </svg>
          </h1>
          <p className="hero-subtitle">Thoughtful design.<br />Reliable software. <em>Always learning.</em></p>
          <p className="hero-description">A software development student bringing a careful eye to interfaces, code, and the details that make things work.</p>
          <div className="actions">
            <a className="button primary" href="#projects">Explore my work</a>
            <a className="button secondary" href="/assets/Sarah_Nicole_Hular_CV.pdf" download>
              Download CV
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M5 16v5h14v-5" /></svg>
            </a>
          </div>
          <div className="hero-foot"><span>BSIT · Software Development</span><span>Based in the Philippines</span></div>
        </div>
        <div className="hero-art" aria-label="Interactive creative workspace illustration" role="group">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="art-spark spark-one">✧</span><span className="art-spark spark-two">✦</span>
          <div className="paper-note"><span>my approach</span><p>Make it clear.<br />Make it work.<br /><i>Make it better.</i></p><span className="note-star">✺</span></div>
          <div className="code-card">
            <div className="window-bar">
              <i /><i /><i />
              <div className="window-tabs" role="group" aria-label="Explore my focus areas">
                {['Code', 'Design', 'QA'].map((label) => (
                  <button key={label} type="button" aria-pressed={focus === label} onClick={() => setFocus(label)}>{label}</button>
                ))}
              </div>
            </div>
            <div className="code-text" aria-live="polite" key={focus}>{snippets[focus]}</div>
          </div>
          <div className="qa-note"><span className="check">✓</span><div>It’s all in the details.<small>Built with care. Tested with purpose.</small></div></div>
          <div className="floating-label">design + code + a little heart ♡</div>
        </div>
      </section>
      <div className="interest-strip" aria-hidden="true">
        <div className="wrap"><span>UI/UX DESIGN</span><b>✺</b><span>SOFTWARE DEVELOPMENT</span><b>✺</b><span>MANUAL QA</span><b>✺</b><span>CONTINUOUS LEARNING</span></div>
      </div>
    </>
  );
}
