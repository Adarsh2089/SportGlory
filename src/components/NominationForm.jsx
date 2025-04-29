import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './NominationForm.css';

const NominationForm = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    nomineeName: '',
    dob: '',
    gender: '',
    applyingforaward: '',
    sport: '',
    achievements: '',
    performanceSummary: '',
    currentTeam: '',
    previousAwards: '',
    videoLink: '',
    reason: '',
    email: '',
    vote: '',
    phone: ''
  });

  const [loading, setLoading] = useState(false); // <-- NEW

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader
    try {
      await addDoc(collection(db, 'Nominations'), formData);
      alert('Nomination submitted successfully!');
      setFormData({
        nomineeName: '',
        dob: '',
        gender: '',
        applyingforaward: '',
        sport: '',
        achievements: '',
        performanceSummary: '',
        currentTeam: '',
        previousAwards: '',
        videoLink: '',
        reason: '',
        email: '',
        vote: '',
        phone: ''
      });
      onClose();
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting nomination.');
    }finally {
      setLoading(false); // Stop loader
    }
  };

  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="form-container">
        <h2 className="form-title">Nomination Form</h2>
        <form onSubmit={handleSubmit} className="nomination-form">
          <div className="form-columns">
            <div className="form-column">
              <input type="text" name="nomineeName" placeholder="Nominee's Full Name" value={formData.nomineeName} onChange={handleChange} required className="form-input" />
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="form-input" />
            
              <select name="gender" value={formData.gender} onChange={handleChange} required className="form-input">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <select name="applyingforaward" value={formData.applyingforaward} onChange={handleChange} required className="form-input">
                <option value="">Select Award type to apply</option>
                <option value="Maulana Abdul Kalam Azad Trophy">Maulana Abdul Kalam Azad Trophy</option>
                <option value="Arjuna Award">Arjuna Award</option>
                <option value="Dronacharya Award">Dronacharya Award</option>
                <option value="Major Dhyan Chand Khel Ratna">Major Dhyan Chand Khel Ratna</option>
                <option value="Rashtriya Khel Protsahan Puraskar">Rashtriya Khel Protsahan Puraskar</option>
                <option value="Dhyan Chand Award">Dhyan Chand Award</option>
              </select>

              <input type="text" name="sport" placeholder="Sport Category" value={formData.sport} onChange={handleChange} required className="form-input" />
              <textarea name="achievements" placeholder="List of Achievements" value={formData.achievements} onChange={handleChange} required className="form-input" />
              <textarea name="performanceSummary" placeholder="Performance Summary" value={formData.performanceSummary} onChange={handleChange} required className="form-input" />
            </div>

            <div className="form-column">
              <input type="text" name="previousAwards" placeholder="Previous Awards (if any)" value={formData.previousAwards} onChange={handleChange} className="form-input" />
              <input type="url" name="videoLink" placeholder="Performance Video Link (optional)" value={formData.videoLink} onChange={handleChange} className="form-input" />
              <textarea name="reason" placeholder="Reason for Nomination" value={formData.reason} onChange={handleChange} required className="form-input" />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="form-input" />
              <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} className="form-input" />
              <div className="button-group">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NominationForm;
