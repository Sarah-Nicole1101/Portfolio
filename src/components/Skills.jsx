import React from 'react';

const skills = [
  {
    symbol: '⌘', title: 'Development',
    description: 'Turning requirements into working features and connected systems.',
    items: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Java', 'Python', 'SQL', 'Bootstrap', 'Node.js', 'Express.js', 'Django REST', 'Electron', 'MySQL', 'SQLite', 'MongoDB']
  },
  {
    symbol: '✓', title: 'Quality assurance',
    description: 'Checking the expected, investigating the unexpected, and verifying the fix.',
    items: ['Manual testing', 'Functional testing', 'API testing', 'Bug reporting', 'Retesting', 'Postman', 'Technical documentation']
  },
  {
    symbol: '✺', title: 'Design & collaboration',
    description: 'Making ideas tangible, from the first wireframe to a shared understanding.',
    items: ['Figma', 'Canva', 'Lucidchart', 'Wireframing', 'UI/UX prototyping', 'Git & GitHub', 'VS Code', 'Tailwind CSS', 'Docker', 'Railway']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section wrap">
      <div className="section-head" data-reveal>
        <div><p className="eyebrow">MY TOOLKIT</p><h2>Different tools.<br /><span className="serif">The same attention to detail.</span></h2></div>
        <p className="skills-intro">Skills I’ve put into practice through coursework, collaboration, and building.</p>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <article key={skill.title} data-reveal style={{ '--reveal-delay': `${index * 100}ms` }}>
            <span className="skill-symbol" aria-hidden="true">{skill.symbol}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
