import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    // Trigger the line animation shortly after mount
    setTimeout(() => setShowLine(true), 100);

    // Start fade out sequence
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out transition to complete before unmounting
      setTimeout(onFinish, 700);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0d1117] transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Logo Container */}
        <div className="relative mb-8 group">
          {/* Rotating outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-spin-slow"></div>
          
          {/* Logo Box */}
          <div className="relative w-24 h-24 bg-gray-900 rounded-2xl border border-gray-700/50 flex items-center justify-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
            
            {/* The 'M' Icon */}
            <svg width="50" height="50" viewBox="0 0 100 100" className="text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
              <path d="M20 80 L20 20 L50 50 L80 20 L80 80" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="50" cy="70" r="6" fill="#b026ff" className="animate-pulse" />
            </svg>
          </div>
          
          {/* Notification Dot Animation */}
          <div className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-neon-purple"></span>
          </div>
        </div>

        {/* Text Branding */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-white font-sans">
            MATH<span className="text-neon-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">MIND</span>
          </h1>
          
          {/* Expanding Line */}
          <div className="h-1 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple rounded-full mx-auto transition-all duration-[1500ms] ease-out"
               style={{ width: showLine ? '100px' : '0px', opacity: showLine ? 1 : 0 }}>
          </div>
          
          <p className="text-gray-500 text-xs md:text-sm tracking-widest uppercase font-mono pt-2">
            AI Powered Intelligence
          </p>
        </div>
      </div>

      {/* Loading dots at bottom */}
      <div className="absolute bottom-12 flex space-x-2 opacity-50">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
