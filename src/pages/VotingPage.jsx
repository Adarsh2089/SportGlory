import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc, increment } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from '../components/Navbar';
import './VotingPage.css'; // Assuming you have a CSS file for styling

const VotingPage = () => {
  const [nominees, setNominees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNominees = async () => {
    const snapshot = await getDocs(collection(db, 'Nominations'));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setNominees(data.sort((a, b) => b.votes - a.votes));
    setLoading(false);
  };

  const handleVote = async (id) => {
    const nomineeRef = doc(db, 'Nominations', id);
    await updateDoc(nomineeRef, { votes: increment(1) });
    fetchNominees();
  };

  useEffect(() => {
    fetchNominees();
  }, []);

  if (loading) return <p>Loading nominees...</p>;

  return (
    <>
      <Navbar />
      <div className="nominees-container">
        <h1>Vote for Your Favorite Nominee</h1>

        <div className="leaderboard">
          <h2>🏆 Leaderboard</h2>

          <div className="topt-hree">
            {nominees[1] && (
              <div className="topcard-silver">
                <div className="rank">#2</div>
                <div className="emoji">🥈</div>
                <div className="name">{nominees[1].nomineeName}</div>
                <div className="votes">{nominees[1].votes} votes</div>
              </div>
            )}
            {nominees[0] && (
              <div className="topcard-gold">
                <div className="rank">#1</div>
                <div className="emoji">👑</div>
                <div className="name">{nominees[0].nomineeName}</div>
                <div className="votes">{nominees[0].votes} votes</div>
              </div>
            )}
            {nominees[2] && (
              <div className="topcard-bronze">
                <div className="rank">#3</div>
                <div className="emoji">🥉</div>
                <div className="name">{nominees[2].nomineeName}</div>
                <div className="votes">{nominees[2].votes} votes</div>
              </div>
            )}
          </div>

          <div className="rest-leaderboard">
            {nominees.slice(3, 10).map((nominee, index) => (
              <div key={nominee.id} className="rest-card">
                <span className="rank">#{index + 4}</span>
                <span className="name">{nominee.nomineeName}</span>
                <span className="votes">{nominee.votes}</span>
              </div>
            ))}
          </div>
        </div>

        <hr />

        <div className="nominee-list">
          <h2>🗳️ Cast Your Vote</h2>
          {nominees.map(nominee => (
            <div key={nominee.id} className="nomineecard">
              <h3>🧑‍🏫 {nominee.nomineeName}</h3>
              <p><strong>Sport:</strong> {nominee.sport}</p>
              <p><strong>Applying For:</strong> {nominee.applyingforaward}</p>
              <p><strong>Achievements:</strong> {nominee.achievements}</p>
              <p><strong>Votes:</strong> {nominee.votes}</p>
              <button onClick={() => handleVote(nominee.id)}>Vote</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VotingPage;
