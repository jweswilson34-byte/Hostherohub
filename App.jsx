import React from 'react';

export default function App() {
  return (
    <div style={{backgroundColor: '#0b0b0b', color: '#f0f0f0', fontFamily: 'sans-serif', padding: '2rem'}}>
      <h1 style={{fontSize: '2.5rem', color: '#ff6600'}}>HostHeroHub</h1>
      <p>Compare the best hosting providers — modern & flashy.</p>
      <ul style={{marginTop: '1rem', listStyle: 'disc', paddingLeft: '1.5rem'}}>
        <li><a href="#" style={{color: '#ff6600'}}>Hostinger — affordable & fast</a></li>
        <li><a href="#" style={{color: '#ff6600'}}>Bluehost — great for beginners</a></li>
        <li><a href="#" style={{color: '#ff6600'}}>SiteGround — premium reliability</a></li>
      </ul>
      <div style={{marginTop: '2rem'}}>
        <a href="#" style={{backgroundColor: '#ff6600', color: '#000', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none'}}>Get Started</a>
      </div>
    </div>
  );
}
