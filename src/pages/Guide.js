import React from 'react';
import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <main>
      <div className="page-container">
        <div className="container">
          <div className="page-content">
            <h1 className="page-title">Development Guide</h1>
            
            <div className="guide-intro">
              <p>Welcome to Neohack! This guide will walk you through the process of building a Neovim plugin and earning your shirt.</p>
            </div>

            <div className="guide-section">
              <h2>Prerequisites</h2>
              <p>Before you start, make sure you have:</p>
              <ul>
                <li>A GitHub account</li>
                <li>Neovim installed on your system</li>
                <li>Basic knowledge of Lua (for plugin development)</li>
                <li>Hackatime account for time tracking</li>
              </ul>
            </div>

            <div className="guide-step">
              <h3>Step 1: Set Up Your Development Environment</h3>
              <p>Install Neovim and create a Hackatime account to track your development time.</p>
              <p><strong>Hackatime Setup:</strong></p>
              <ol>
                <li>Go to <a href="https://hackatime.hackclub.com/" target="_blank" rel="noopener noreferrer">hackatime.hackclub.com/</a></li>
                <li>Create an account</li>
                <li>Install the Hackatime extension for your editor</li>
                <li>Start tracking your development time</li>
              </ol>
            </div>

            <div className="guide-step">
              <h3>Step 2: Choose Your Plugin Idea</h3>
              <p>Pick something that <i>you</i> would truly use. Here are some ideas:</p>
              <div className="idea-categories">
                <div className="idea-category">
                  <ul>
                    <li>Github Dashboard</li>
                    <li>Youtube Player</li>
                    <li>Spotify Controller</li>
                  </ul>
                </div>
              </div>
              <p><strong>Getting Ideas:</strong></p>
              <ul>
                <li>Look at existing plugins on <a href="https://github.com/rockerBOO/awesome-neovim" target="_blank" rel="noopener noreferrer">Neovim Awesome</a></li>
                <li>See whats missing and what might be fixed!</li>
                <li>Browse GitHub issues for feature requests</li>
              </ul>
            </div>

            <div className="guide-step">
              <h3>Step 3: Start Development</h3>
              <p>Create your plugin structure and start coding. Make sure to track your time on Hackatime! A good way to get introduced to the Neovim API is by reading their <a href='https://neovim.io/doc/'>official documentation</a></p>
              <p>If you need a guide on how to get started with project setup, I recommend you check out <a href='https://adam-drake-frontend-developer.medium.com/how-to-build-a-simple-neovim-plugin-0763e7593b07'>this</a> Medium post.</p>
            </div>

            <div className="guide-step">
              <h3>Step 4: Documentation Requirements</h3>
              <p>Your README.md must include installation instructions for both Lazy.nvim and Packer</p>
              <p><a href='https://github.com/nvim-telescope/telescope.nvim'>Here</a> is a good example of what I expect a readme file to look like for Neohack. In doesn't have to be complicated, but here is what I expect:</p>
              <ol>
                <li>Clear statement of what your project does.</li>
                <li>How to set up and install it for different package managers (think lazy.nvim, and packer).</li>
                <li>A guide on what commands you have and what each one of them does.</li>
                <li>Some images of videos of your project in action! (you can get permanent links using #cdn on the slack).</li>
              </ol>
              <p>You can do step 2 and 3 on a seperate static site for documentation by using github pages, vercel, or even Jekyll!</p>
              <p><b>NOTE</b>:If you are going to make a website, please link it at the top of your README.md file and indicate that is the site for documentation!</p>
            </div>

            <div className="guide-step">
              <h3>Step 5: Time Tracking</h3>
              <p><strong>Using Hackatime:</strong></p>
              <ul>
                <li>Aim for at least 5 hours of focused development time</li>
              </ul>
              <p><strong>What Counts as Development Time:</strong></p>
              <div className="time-tracking">
                <div className="counts">
                  <h4>Counts:</h4>
                  <ul>
                    <li>Writing Lua code</li>
                    <li>Testing your plugin</li>
                    <li>Writing documentation</li>
                    <li>Debugging and fixing issues</li>
                  </ul>
                </div>
                <div className="doesnt-count">
                  <h4>Doesn't Count:</h4>
                  <ul>
                    <li>Installing Neovim (setup time)</li>
                    <li>Learning Lua basics (should be done beforehand)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="guide-step">
              <h3>Step 6: Submission</h3>
              <p><strong>Before Submitting:</strong></p>
              <ul>
                <li>Plugin works correctly</li>
                <li>README.md is complete with both installations for the most popular package managers</li>
                <li>At least 5 hours tracked on Hackatime</li>
                <li>Code is well-documented</li>
                <li>Plugin is published on GitHub</li>
              </ul>
              <p><strong>Submission Process:</strong></p>
              <p>Fill out <a href='https://youtu.be/xvFZjo5PgG0?si=bgt7up0JES4a6-m5'>this</a> fillout form (coming soon™)</p>
            </div>

            <div className="guide-section">
              <h2>Tips for Success</h2>
              <div className="tips-grid">
                <div className="tip-card">
                  <h4>Code Quality</h4>
                  <ul>
                    <li>Follow Lua best practices</li>
                    <li>Use meaningful variable names</li>
                    <li>Add comments for complex logic</li>
                    <li>Handle errors gracefully</li>
                  </ul>
                </div>
                <div className="tip-card">
                  <h4>User Experience</h4>
                  <ul>
                    <li>Make your plugin easy to configure</li>
                    <li>Provide sensible defaults</li>
                    <li>Add helpful error messages</li>
                    <li>Test with different Neovim configurations</li>
                  </ul>
                </div>
                <div className="tip-card">
                  <h4>Documentation</h4>
                  <ul>
                    <li>Write clear installation instructions</li>
                    <li>Include usage examples</li>
                    <li>Document all configuration options</li>
                    <li>Add screenshots if applicable</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="guide-section">
              <h2>Resources</h2>
              <div className="resources-grid">
                <div className="resource-category">
                  <h4>Learning Lua</h4>
                  <ul>
                    <li><a href="https://www.lua.org/manual/5.4/" target="_blank" rel="noopener noreferrer">Lua Reference Manual</a></li>
                    <li><a href="https://learnxinyminutes.com/docs/lua/" target="_blank" rel="noopener noreferrer">Learn Lua in Y Minutes</a></li>
                  </ul>
                </div>
                <div className="resource-category">
                  <h4>Neovim Development</h4>
                  <ul>
                    <li><a href="https://neovim.io/doc/user/lua.html" target="_blank" rel="noopener noreferrer">Neovim Lua Guide</a></li>
                    <li><a href="https://neovim.io/doc/user/api.html" target="_blank" rel="noopener noreferrer">Neovim API Documentation</a></li>
                    <li><a href="https://github.com/rockerBOO/awesome-neovim" target="_blank" rel="noopener noreferrer">Awesome Neovim</a></li>
                  </ul>
                </div>
                <div className="resource-category">
                  <h4>Plugin Examples</h4>
                  <ul>
                    <li><a href="https://github.com/nvim-treesitter/nvim-treesitter" target="_blank" rel="noopener noreferrer">nvim-treesitter</a></li>
                    <li><a href="https://github.com/nvim-telescope/telescope.nvim" target="_blank" rel="noopener noreferrer">telescope.nvim</a></li>
                    <li><a href="https://github.com/nvim-lualine/lualine.nvim" target="_blank" rel="noopener noreferrer">lualine.nvim</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <h2>Need Help?</h2>
              <p>Don't hesitate to reach out to the Neohack team or the Neovim community.</p>
              <Link to="/gallery" className="cta-button">View Community Plugins</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Guide; 