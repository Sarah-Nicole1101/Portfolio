import React from 'react';

export default function About() {
  return (
    <section id="about" className="section wrap about">
      <div className="about-intro" data-reveal>
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>Curious about technology.<br /><span className="serif">Mindful of quality.</span></h2>
        <figure className="portrait-frame">
          <img src="/assets/sarah-nicole-hular.jpeg" alt="Sarah Nicole Hular smiling, wearing glasses and a black shirt" width="400" height="400" loading="lazy" />
          <figcaption>Sarah Nicole Hular <span aria-hidden="true">✦</span></figcaption>
        </figure>
      </div>
      <div className="about-copy" data-reveal style={{ '--reveal-delay': '100ms' }}>
        <p>I am a software development student who enjoys exploring new technologies and turning ideas into functional applications.</p>
        <p>Through personal, academic, and capstone projects, I have gained hands-on experience in <strong>frontend and backend development, UI/UX design, manual testing, and technical documentation</strong>.</p>
        <p>My school’s project-based learning approach allows me to apply concepts by building real systems and developing solutions to practical problems.</p>
        <p>I value intuitive interfaces, reliable functionality, and collaboration throughout the development process.</p>
        <p>I am particularly interested in <strong>Artificial Intelligence, Web Development, and Quality Assurance</strong>, and I hope to explore game development in the future.</p>
        <div className="education-mini">
          <span className="education-icon">⌘</span>
          <div>
            <strong>BS in Information Technology</strong>
            <span>Software Development · MMDC</span>
            <small>August 2023 — August 2027 (expected)</small>
          </div>
        </div>
      </div>
    </section>
  );
}
