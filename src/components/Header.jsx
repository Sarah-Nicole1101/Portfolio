import React, { useState } from 'react';

const navigation = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Credentials', '#credentials']
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header>
        <a href="#home" className="logo" aria-label="Sarah Nicole, home">sn<span>✺</span></a>
        <nav aria-label="Main navigation">
          {navigation.map(([label, link]) => <a href={link} key={label}>{label}</a>)}
        </nav>
        <a className="nav-contact" href="#contact">Let’s connect <span>✦</span></a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((open) => !open)}
        >{menuOpen ? '×' : '☰'}</button>
      </header>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>
        {[...navigation, ['Contact', '#contact']].map(([label, link]) => (
          <a href={link} key={label} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
    </>
  );
}
