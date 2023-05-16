import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Rocket from './pages/Rocket';
import Mission from './pages/Mission';
import { fetchMissions } from './redux/mission/missionSlice';
import { fetchRockets } from './redux/rocket/rocketSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRockets())
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rocket />} />
        <Route exact path="/missions" element={<Mission />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </>

  );
}

export default App;
