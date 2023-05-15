import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Rocket from './pages/Rocket';
import Mission from './pages/Mission';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rocket />} />
        <Route exact path="/missions" element={<Mission />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
