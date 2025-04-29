// components/Roadmap.jsx
import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  const steps = [
    { img: 'assets/submit.png', title: 'Step 1', desc: 'Submit Nomination' },
    { img: 'assets/bad-review.png', title: 'Step 2', desc: 'Review & Shortlisting' },
    { img: 'assets/voting.png', title: 'Step 3', desc: 'Voting / Jury Panel' },
    { img: 'assets/winner.png', title: 'Step 4', desc: 'Winner Announcement' }
  ];

  return (
    <>
      <h2 className="roadmap-title">Process Flow</h2>
      <div className="roadmap-flow">
        {steps.map((step, index) => (
          <div className="roadmap-card" key={index}>
            <img src={step.img} alt={step.desc} />
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roadmap;