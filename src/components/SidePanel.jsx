
// components/SidePanel.jsx
import React from 'react';
import './SidePanel.css';

const SidePanel = () => {
  return (
    <div className="side-panel">
      <img src="/assets/sidepanel.svg" alt="Side Panel" />
      <div className="award-buttons">
        <h2 className="title">Major Awards</h2>
        {['Maulana Abul Kalam Azad Trophy','Arjuna Award','Dronacharya Award','Major Dhyan Chand Khel Ratna','Dhyan Chand Award','Rashtriya Khel Protsahan Puruskar'].map((award, index) => (
          <button className="award-btn" key={index}>{award}</button>
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
