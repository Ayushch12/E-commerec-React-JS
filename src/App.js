import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          {/* Navbar is displayed only on Dashboard and Profile pages */}
          <Routes>
            <Route path="/dashboard" element={<Navbar />} />
            <Route path="/profile" element={<Navbar />} />
          </Routes>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <footer>
          {/* Footer is displayed only on Dashboard and Profile pages */}
          <Routes>
            <Route path="/dashboard" element={<Footer />} />
            <Route path="/profile" element={<Footer />} />
          </Routes>
        </footer>
      </div>
    </Router>
  );
}

export default App;

