// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VotingPage from './pages/VotingPage';
import ResultsPage from './pages/Result';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
       <Route path="/voting" element={<VotingPage />} />
       <Route path="/results" element={<ResultsPage />} />
     </Routes>
    </Router>
  );
};

export default App;
