// components/WhyParticipate.jsx
import React from 'react';
import "./WhyParticipate.css"; // Assuming you have a CSS file for styling

const WhyParticipate = () => {
  const features = [
    { title: 'Celebrate Real Talent', desc: 'Shine a spotlight on athletes and coaches who truly deserve national recognition.' },
    { title: 'Represent Your Region', desc: 'Give local sports heroes the platform to be recognized on a national stage.' },
    { title: 'Build Their Legacy', desc: 'Nominations turn effort into history — help them get the honor they earned.' },
    { title: 'Transparent & Trusted', desc: 'SportGlory ensures a fair, inclusive, and verified nomination process for all.' }
  ];

  return (
    <section className="why-participate">
      <h2>WHY TO NOMINATE <br /> IN SPORTGLORY ?</h2>
      <div className="features-grid">
        {features.map((feature, i) => (
          <div className="feature-card" key={i}>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyParticipate;

// components/Gallery.jsx
