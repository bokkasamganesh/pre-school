import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Classes from './pages/Classes';
import Teachers from './pages/Teachers';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar onLoginClick={() => setModalOpen(true)} />
      <LoginModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
