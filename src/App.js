import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Actuality from './pages/News';
import HalfMarathon from './pages/HalfMarathon';
import Members from './pages/Members'
import Contact from './pages/Contact'
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/pages/News.js" element={<Actuality />} />
        <Route path="/src/pages/HalfMarathon.js" element={<HalfMarathon />} />
        <Route path="/src/pages/Members.js" element={<Members />} />
        <Route path="/src/pages/Contact.js" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
