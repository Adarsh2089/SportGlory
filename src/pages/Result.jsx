import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import './Result.css';

const ResultPage = () => {
  const [nominees, setNominees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // List of Award Types
  const awardCategories = [
    'Maulana Abul Kalam Azad Trophy',
    'Arjuna Award',
    'Dronacharya Award',
    'Major Dhyan Chand Khel Ratna',
    'Dhyan Chand Award',
    'Rashtriya Khel Protsahan Puruskar',
  ];

  // Fetch Nominees from Firebase based on the selected category
  const fetchNominees = async (category) => {
    setLoading(true);  // Set loading to true when fetching data

    const nomineesRef = collection(db, 'Nominations');
    const q = category
      ? query(nomineesRef, where('applyingforaward', '==', category))
      : nomineesRef; // If no category selected, fetch all nominees
    
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      votes: parseInt(doc.data().votes) || 0, // Ensure votes are parsed as integers
    }));

    // Sort nominees by votes in descending order
    data.sort((a, b) => b.votes - a.votes);

    setNominees(data);
    setLoading(false);  // Set loading to false once data is fetched
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Set the selected category
    fetchNominees(category); // Fetch data after category selection
  };

  return (
    <>
      <Navbar />

      {/* Overlay for Category Selection */}
      {!selectedCategory && (
        <div className="result-overlay">
          <div className="result-overlay-content">
            <h2 className="overlay-heading">Choose a Category</h2>
            <p className="overlay-text">Please select a category to view the top performers' results.</p>
            {awardCategories.map((category) => (
              <button key={category} onClick={() => handleCategorySelect(category)} className="category-button">
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Nominee Results */}
      {selectedCategory && (
        <div className="result-nominees-container">
          <h1 className="results-heading">🏆 Results for {selectedCategory}</h1>

          {/* Loading State */}
          {loading ? (
            <p className="loading-text">Loading nominees...</p>
          ) : (
            <div className="result-top-performers">
              <h2 className="top-performers-heading">Top Performers</h2>
              {nominees.map((nominee, index) => (
                <div key={nominee.id} className="result-performer-card">
                  <span className="result-performer-rank">#{index + 1}</span>
                  <span className="result-performer-name">{nominee.nomineeName}</span>
                  <span className="result-performer-votes">{nominee.votes} votes</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ResultPage;
