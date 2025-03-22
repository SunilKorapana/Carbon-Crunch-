import React, { useEffect, useState } from 'react';
import "./App.css";
import logo from "./assets/logo.png"; // ✅ Corrected path

function ScrollingLeaf() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLeafPosition = () => {
    const breakpoints = [500, 800, 1100, 1400, 1700];
    const styles = [
      { left: '50%', transform: 'translateX(-50%)', fontSize: '2rem' },
      { right: '10%', transform: 'rotate(15deg)', fontSize: '3rem', marginRight: '30px' },
      { left: '15%', transform: 'rotate(-15deg)', fontSize: '3.5rem', marginLeft: '20px' },
      { right: '20%', transform: 'rotate(15deg)', fontSize: '3rem', marginRight: '20px' },
      { left: '20%', transform: 'rotate(-15deg)', fontSize: '3rem', marginLeft: '20px' }
    ];

    for (let i = 0; i < breakpoints.length; i++) {
      if (scrollY < breakpoints[i]) return styles[i];
    }
    return styles[styles.length - 1];
  };

  return (
    <div
      className="fixed pointer-events-none transition-all duration-500"
      style={{
        top: `${Math.min(100 + scrollY * 0.5, document.body.scrollHeight - 100)}px`,
        ...getLeafPosition(),
      }}
    >
      🍃
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <ScrollingLeaf />
      
      {/* Navigation */}
      <nav className="bg-white py-4 shadow-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="CarbonCrunch" className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold">CarbonCrunch</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Services", "Blog", "About Us", "Contact"].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-900">
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Login</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-32">
          <div className='enviroment-con'><p className="text-sm font-medium text-green-600 mb-4" id='enviroment'>👋 Let's Save our Environment</p></div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Streamline Your Sustainability <br />
            Reporting With <span className="text-green-500">CARBON CRUNCH</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Epic Accurate Carbon Calculations Trusted by Industry Leaders
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-gray-800 px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50">
              Free Calculator
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
              Book Demo
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="space-y-16">
          {[ 
            { value: "3X", text: "ESG High Performers Deliver a Higher Total Shareholder Return", bg: "bg-green-500" },
            { value: "98%", text: "Of CEOs Agree Sustainability Is Their Responsibility", bg: "bg-gray-900" },
            { value: "18%", text: "Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero by 2050", bg: "bg-gray-800" },
            { value: "37%", text: "Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track", bg: "bg-white border-2 border-gray-200", textColor: "text-green-500" }
          ].map((stat, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <div className={`${stat.bg} text-white p-12 rounded-xl transform hover:scale-105 transition-transform duration-300 max-w-2xl`}>
                <div className={`text-6xl font-bold mb-4 ${stat.textColor || ""}`}>{stat.value}</div>
                <p className={`text-lg ${stat.textColor || "text-white"}`}>{stat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
