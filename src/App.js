import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Rocket from './pages/Rocket';
import Mission from './pages/Mission';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Rocket />} />
          <Route exact path="/missions" element={<Mission />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
