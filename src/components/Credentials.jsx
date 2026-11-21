import React from 'react';

const credentials = [
  {
    icon: '☁', category: 'CLOUD COMPUTING', title: 'AWS Cloud Foundations',
    linkText: 'View credential on Credly',
    url: 'https://www.credly.com/badges/d6c8a482-1841-4fa8-9081-1469e02609f0/public_url'
  },
  {
    icon: '⌘', category: 'INTRODUCTION TO AI AUTOMATION & n8n', title: 'AI Automation Workshop 101',
    linkText: 'View certificate',
    url: 'https://drive.google.com/file/d/1DbVxFyK1EzQwQb6J0_t_0VechW3YoneI/view'
  },
  {
    icon: '✓', category: 'QUALITY ASSURANCE', title: 'Software QA Manual Testing Workshop',
    linkText: 'View certificate',
    url: 'https://drive.google.com/file/d/1BQFXCTnEYmikeT7cgUlmiMVetV7l4hnO/view'
  },
  {
    icon: '✧', category: 'SOFTWARE TESTING TRAINING', title: 'ISTQB Foundation Level Software Testing Essentials & Exam Mastery',
    linkText: 'View training certificate',
    url: 'https://drive.google.com/file/d/1EaRU_Ye3kKV54h1mxelUxY7Ll6Idtgno/view'
  }
];

export default function Credentials() {
  return (
    <section id="credentials" className="section credentials-section">
      <div className="wrap credentials-layout">
        <div data-reveal>
          <p className="eyebrow">ALWAYS A STUDENT</p>
          <h2>Learning doesn’t<br /><span className="serif">stop at the classroom.</span></h2>
          <p>Courses and training that add new perspectives to the way I design, build, and test.</p>
          <a className="text-link" href="https://www.linkedin.com/in/sarah-nicole-hular-36950633a/" target="_blank" rel="noopener noreferrer">Find me on LinkedIn <b>in</b></a>
          <div className="recognition">
            <span aria-hidden="true">✧</span>
            <div>
              <strong>Mobile Development Exemplary Learners’ Output</strong>
              <p>Centinel was selected as an exemplary output demonstrating the course rubric standards.</p>
            </div>
          </div>
        </div>
        <div className="certificate-list">
          {credentials.map((credential, index) => (
            <a className="certificate" data-reveal style={{ '--reveal-delay': `${index * 80}ms` }} key={credential.title} href={credential.url} target="_blank" rel="noopener noreferrer">
              <span className="cert-icon" aria-hidden="true">{credential.icon}</span>
              <div>
                <small>{credential.category}</small>
                <h3>{credential.title}</h3>
                <span>{credential.linkText}</span>
              </div>
              <span className="cert-plus" aria-hidden="true">+</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
