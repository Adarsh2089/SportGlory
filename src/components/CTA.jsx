// components/CTA.jsx
import React, { useState } from 'react';
import './CTA.css';
import NominationForm from './NominationForm';

const CTA = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="cta-banner" id="nominate">
        <div className="cta-content">
          <p>📢 Got a Champion in Mind? <strong>Nominate Now.</strong></p>
          <button className="nominate-btn" onClick={() => setShowForm(true)}>👉 NOMINATE</button>
        </div>
      </section>

      <NominationForm isVisible={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default CTA;
