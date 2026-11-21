import React from 'react';

export default function Footer() {
  return (
    <footer className="wrap">
      <a className="logo" href="#home" aria-label="Back to top">sn<span>✺</span></a>
      <p>© {new Date().getFullYear()} Sarah Nicole Hular. Made with intention.</p>
      <div>
        <a href="https://github.com/Elocin-MMDC" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/sarah-nicole-hular-36950633a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/assets/Sarah_Nicole_Hular_CV.pdf" target="_blank" rel="noopener noreferrer">View CV</a>
      </div>
    </footer>
  );
}
