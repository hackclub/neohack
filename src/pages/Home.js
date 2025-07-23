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
        </main>
    );
};

export default Home;