// src/App.js
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  // Utilisation de l'état local pour simuler la connexion de l'utilisateur
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Navbar affichée uniquement si l'utilisateur est connecté */}
        {isLoggedIn && <Navbar />}

        <main className="content">
          <Routes>
            {/* Route vers Login sans Navbar ni Footer si l'utilisateur n'est pas connecté */}
            <Route path="/" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        {/* Footer affiché uniquement si l'utilisateur est connecté */}
        {isLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;
