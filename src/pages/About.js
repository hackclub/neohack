import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <div className="page-container">
        <div className="container">
          <div className="page-content">
            <h1 className="page-title">About Neohack</h1>
            
            <div className="about-section">
              <h2>What is You Ship We Ship?</h2>
              <p>
                You Ship We Ship (YSWS) is a program where you build something amazing and we reward you for it! 
                In Neohack, you spend 5 hours building a plugin for Neovim, and in return, we send you a Neovim shirt.
              </p>
              <p>
                It's simple: you ship (build) a Neovim plugin, and we ship (send) you a shirt. 
              </p>
              <p>
                You can find other YSWS' at <a href='https://ysws.hackclub.com'>the website</a>
              </p>
            </div>

            <div className="about-section">
              <h2>Why Neovim Plugins?</h2>
              <p>
                Neovim plugins can drastically change the way you use neovim. No plugins can be useless even if you're a professional with the vim binds. That's why its importatnt to choose the right plugins. Making one that fits your needs is the perfect plugin!
              </p>
            </div>

            <div className="about-section">
              <h2>How It Works</h2>
              <div className="how-it-works-grid">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Build</h3>
                  <p>Spend 5 hours building a Neovim plugin using Hackatime to track your development.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Document</h3>
                  <p>Create a comprehensive README with installation instructions for Lazy.nvim and Packer.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>Submit</h3>
                  <p>Share your plugin through the fillout form coming soon™.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">4</div>
                  <h3>Receive</h3>
                  <p>Get your Neovim shirt!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Buttons at the bottom */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem 2rem 2rem 2rem' }}>
        <button type="button" className="nav-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', background: '#4f46e5', color: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => window.location.href='/'}>
          <span style={{ fontSize: '1.2em' }}>←</span> Back
        </button>
        <button type="button" className="nav-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', background: '#4f46e5', color: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => window.location.href='/guide'}>
          Next <span style={{ fontSize: '1.2em' }}>→</span>
        </button>
      </div>
    </main>
  );
};

export default About; 