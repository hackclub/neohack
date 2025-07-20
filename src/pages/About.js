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
                You Ship We Ship (YSWS) is a unique program where you build something amazing and we reward you for it! 
                In Neohack, you spend 5 hours building a plugin for Neovim, and in return, we send you a Neovim shirt.
              </p>
              <p>
                It's simple: you ship (build) a Neovim plugin, and we ship (send) you a shirt. 
              </p>
            </div>

            <div className="about-section">
              <h2>The Neovim Community</h2>
              <p>
                Neovim is more than just a text editor - it's a community of developers who love to customize and extend their development environment. 
                With Neohack, we're encouraging this spirit of contribution and innovation.
              </p>
              <p>
                Every plugin you build becomes part of the larger Neovim ecosystem, helping thousands of developers improve their workflow.
              </p>
            </div>

            <div className="about-section">
              <h2>Why Neovim Plugins?</h2>
              <p>
                Neovim plugins are the lifeblood of the editor. They add functionality, improve workflows, and make coding more enjoyable. 
                By building plugins, you're not just getting a shirt - you're contributing to a tool that thousands of developers use every day.
              </p>
              <p>
                Whether it's a productivity tool, language support, or a UI improvement, every plugin makes Neovim better for everyone.
              </p>
            </div>

            <div className="about-section">
              <h2>The Hack Club Connection</h2>
              <p>
                This program is specifically designed for Hack Club members who want to dive deeper into the world of Neovim and lua development. 
                It's a perfect way to learn plugin development while expanding your skillset into deploying and maintaining things that the community uses.
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

            <div className="cta-section">
              <h2>Ready to Get Started?</h2>
              <p>Check out our development guide to learn how to build your first Neovim plugin.</p>
              <Link to="/guide" className="cta-button">View Development Guide</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About; 