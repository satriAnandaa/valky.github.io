import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ValentineCard from './ValentineCard';

const ValentineQuestion = () => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      size: Math.floor(20 + Math.random() * 30),
    }));
    setHearts(newHearts);
  }, []);

  const handleNoHover = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    setNoPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    navigate('/valentine-card');
  };

  return (
    <div className="relative min-h-screen bg-pink-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-red-500 opacity-60 animate-floating"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Main Content */}
      <div className="text-center z-10 p-8 bg-white/80 rounded-xl shadow-lg backdrop-blur-sm mx-4 border-2 border-pink-200">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8">
          Apakah Kiky Sayang Satria?
        </h1>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleYesClick}
            className="px-8 py-3 bg-pink-500 text-white rounded-full text-lg font-bold 
                     hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 
                     shadow-md active:scale-95"
          >
            Iya ❤️
          </button>
          
          <button
            onMouseEnter={handleNoHover}
            className="px-8 py-3 bg-gray-500 text-white rounded-full text-lg font-bold 
                     transition-all duration-300 shadow-md"
            style={{
              position: noPosition.x ? 'fixed' : 'relative',
              left: noPosition.x,
              top: noPosition.y,
            }}
          >
            Tidak 💔
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValentineQuestion />} />
        <Route path="/valentine-card" element={<ValentineCard />} />
      </Routes>
    </Router>
  );
};

export default App;