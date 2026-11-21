import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects.js';

function ProjectArt({ project }) {
  return (
    <div className={`project-art ${project.art}`}>
      {project.cover ? (
        <img className="project-cover" src={project.cover} alt={project.coverAlt} loading="lazy" />
      ) : (
        <div className="illustration" aria-hidden="true">
          {project.decoration === 'leaves' && <><span className="leaf" /><span className="leaf two" /></>}
          {project.decoration === 'connect' && <span className="connect-symbol" />}
          {project.decoration === 'bubble' && <span className="bubble" />}
          <div className="art-wordmark">{project.mark}<small>{project.caption}</small></div>
        </div>
      )}
      <span className="project-visual-label">{project.cover ? 'PROJECT SCREENSHOT' : 'PROJECT ILLUSTRATION'}</span>
    </div>
  );
}

function ProjectCard({ project, onOpen, index }) {
  return (
    <article className="project-card" data-reveal style={{ '--reveal-delay': `${(index % 2) * 110}ms` }}>
      <ProjectArt project={project} />
      <div className="card-body">
        <div className="project-meta"><span>{project.type}</span><span>{project.year}</span></div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="card-bottom">
          <button className="detail-button" aria-haspopup="dialog" aria-label={`View ${project.name} project details`} onClick={onOpen}>View project <span>+</span></button>
          {project.demo ? (
            <a className="card-demo" href={project.demo} target="_blank" rel="noopener noreferrer">Play game</a>
          ) : (
            <span className="card-role">{project.role}</span>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectDetails({ project }) {
  return (
    <>
      <div className="dialog-heading">
        <p className="eyebrow">{project.type} · {project.year}</p>
        <h2 id="dialog-title">{project.name}</h2>
        {project.privateRepo && (
          <div className="private-repo">
            <span className="repo-lock" aria-hidden="true">🔒</span>
            <div><strong>Source code of AGAP</strong><span>Private repository · Not publicly accessible</span></div>
          </div>
        )}
        {project.repo && <a className="repo-link" href={project.repo} target="_blank" rel="noopener noreferrer">View source code on GitHub</a>}
        <p className="dialog-summary">{project.description || project.summary}</p>
        {project.demo && <a className="button primary dialog-demo" href={project.demo} target="_blank" rel="noopener noreferrer">Play SEEN</a>}
      </div>

      {project.purpose && (
        <section className="detail-section"><h3>Purpose</h3><p>{project.purpose}</p></section>
      )}
      {project.keyFeatures && (
        <section className="detail-section">
          <h3>Key features</h3>
          <ul className="feature-list">{project.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </section>
      )}
      {project.technologies && (
        <section className="detail-section">
          <h3>Technologies</h3>
          <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        </section>
      )}
      <section className="detail-section contributions-section">
        <h3>My contributions</h3>
        <ul className="contribution-list">{project.contributions.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      </section>
      {project.note && <p className="dialog-note">{project.note}</p>}

      {project.gallery && (
        <section className="gallery-section" aria-label={`${project.name} screenshots`}>
          <div className="gallery-heading">
            <div><p className="eyebrow">A CLOSER LOOK</p><h3>Project screenshots</h3></div>
            <span>Scroll to explore · Select to enlarge</span>
          </div>
          <div className="project-gallery">
            {project.gallery.map(([filename, label]) => (
              <a className="gallery-item" key={filename} href={`/assets/${filename}`} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${label}`}>
                <div className="gallery-image"><img src={`/assets/${filename}`} alt={label} loading="lazy" /></div>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);
  const lastTriggerRef = useRef(null);

  useEffect(() => {
    if (!selectedProject) return;
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
      if (dialog.open) dialog.close();
    };
  }, [selectedProject]);

  function openProject(project, event) {
    lastTriggerRef.current = event.currentTarget;
    setSelectedProject(project);
  }

  function closeProject() {
    if (dialogRef.current?.open) dialogRef.current.close();
  }

  function handleDialogClosed() {
    setSelectedProject(null);
    lastTriggerRef.current?.focus();
  }

  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject();
  }

  return (
    <>
      <section id="projects" className="section projects-section">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div><p className="eyebrow">IDEAS TURNED INTO EXPERIENCE</p><h2>A few things <span className="serif">I’ve worked on.</span></h2></div>
            <a className="text-link" href="https://github.com/Elocin-MMDC" target="_blank" rel="noopener noreferrer">Visit my GitHub <span>⌘</span></a>
          </div>
          <p className="section-intro" data-reveal>Academic and capstone projects — and the part I played in each.</p>
          <div className="project-grid" id="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={(event) => openProject(project, event)} />)}
          </div>
        </div>
      </section>
      <dialog id="project-dialog" ref={dialogRef} aria-labelledby="dialog-title" onClose={handleDialogClosed} onClick={handleBackdropClick}>
        <button className="dialog-close" aria-label="Close project details" onClick={closeProject}>×</button>
        <div id="dialog-content">{selectedProject && <ProjectDetails project={selectedProject} />}</div>
      </dialog>
    </>
  );
}
