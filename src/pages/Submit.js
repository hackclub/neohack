import React, { useState } from 'react';

const checklistItems = [
    "Your plugin works as intended",
    "README.md is filled with proper install and setup instructions as well as all the commands for your project",
    "At least 5 hours tracked with hackatime",
    "Your plugin is open source on Github",
    "You had fun and (hopefully) learnt something through #neohack!"
];

const Submit = () => {
    const [checked, setChecked] = useState(Array(checklistItems.length).fill(false));

    const allChecked = checked.every(Boolean);

    const handleCheck = idx => {
        setChecked(prev => prev.map((val, i) => (i === idx ? !val : val)));
    };

    return (
        <main>
            <div className='page-container'>
                <div className='container'>
                    <div className='page-content'>
                        <h1 className='page-title'>Submission Checklist</h1>
                        <p>Before you submit, make sure you've completed all the requirements below:</p>
                        <ul style={{listStyle: 'none', padding: 0}}>
                            {checklistItems.map((item, idx) => (
                                <li key={idx} style={{margin: '1rem 0', display: 'flex', alignItems: 'center'}}>
                                    <input
                                        type='checkbox'
                                        id={`check-${idx}`}
                                        checked={checked[idx]}
                                        onChange={() => handleCheck(idx)}
                                        className='checklist-checkbox'
                                    />
                                    <label htmlFor={`check-${idx}`} style={{ fontSize: '1.1rem', cursor: 'pointer' }}>{item}</label>
                                </li>
                            ))}
                        </ul>
                        <button
                            className='cta-button'
                            style={{marginTop: '2rem', opacity: allChecked ? 1 : 0.5, pointerEvents: allChecked ? 'auto' : 'none'}}
                            disabled={!allChecked}
                            onClick={() => window.open('https://submit.hackclub.com/neohack', '_blank')}
                        >
                            {allChecked ? 'Submit!' : 'Complete all items to submit'}
                        </button>
                    </div>
                </div>
            </div>
            {/* Navigation Button at the bottom */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '2rem 2rem 2rem 2rem' }}>
              <button type="button" className="nav-btn" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', background: '#4f46e5', color: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => window.location.href='/guide'}>
                <span style={{ fontSize: '1.2em' }}>←</span> Back
              </button>
            </div>
        </main>
    );
};

export default Submit;