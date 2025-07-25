import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
        <section className="hero">
            <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">
                    Neohack
                    <span className="hashtag-label">#neohack</span>
                </h1>
                <p className="hero-subtitle">A Neovim YSWS for Hack Club</p>
            </div>
            </div>
        </section>

        <section className="requirements-section">
            <div className="container">
            <h2 className="section-title">Requirements</h2>
            <div className="requirements-grid">
                <div className="requirement-card">
                <h3>Using Hackatime</h3>
                <p>Track your development time using Hackatime to ensure accurate time logging.</p>
                </div>
                <div className="requirement-card">
                <h3>5 Hours Minimum</h3>
                <p>Spend at least 5 hours building your Neovim plugin on Hackatime.</p>
                </div>
                <div className="requirement-card">
                <h3>Proper Documentation</h3>
                <p>Include a comprehensive README.md with installation instructions for both Lazy.nvim and Packer.</p>
                </div>
            </div>
            </div>
        </section>

        <div style={{textAlign: 'center', margin: '2rem 0 0.5rem 0', fontWeight: 'bold', fontSize: '1.2rem'}}>
          Wanna learn more about Neohack and how it works?
        </div>

        <section className="quick-links-section">
            <div className="container">
            <h2 className="section-title">Get Started</h2>
            <div className="quick-links-grid">
                <Link to="/about" className="quick-link-card">
                <h3>Learn More</h3>
                <p>Find out what You Ship We Ship means and how it works.</p>
                </Link>
                <Link to="/guide" className="quick-link-card">
                <h3>Development Guide</h3>
                <p>Step-by-step instructions to build your Neovim plugin.</p>
                </Link>
            </div>
            </div>
        </section>

        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '2rem 2rem 2rem 0' }}>
          <button type="button" className="nav-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', background: '#4f46e5', color: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => window.location.href='/about'}>
            Next <span style={{ fontSize: '1.2em' }}>→</span>
          </button>
        </div>

        
        </main>
    );
};

export default Home;