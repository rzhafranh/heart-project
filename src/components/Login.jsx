import React, { useState } from 'react';
import { Heart, Sparkles, Mail, Star, Moon, Lock } from 'lucide-react';

export default function Login({ onUnlock }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const getCorrectCode = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    return `${day}${month}${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === getCorrectCode()) {
      onUnlock();
    } else {
      setError(true);
      setPasscode('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5f5] px-6 relative overflow-hidden">
      
      {/* 1. LAYER ONE: The Breathing Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-rose-200/40 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>

      {/* 2. LAYER TWO: Floating Romantic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Envelopes (Love Letters) */}
        <div className="absolute top-[10%] left-[15%] animate-float-slow opacity-20"><Mail className="text-rose-400" size={40} /></div>
        <div className="absolute bottom-[15%] right-[10%] animate-float-delayed opacity-20"><Mail className="text-rose-400" size={32} /></div>
        
        {/* Celestial Elements */}
        <div className="absolute top-[20%] right-[20%] animate-pulse opacity-30"><Star className="text-rose-300" size={24} /></div>
        <div className="absolute top-[40%] left-[5%] animate-float opacity-20"><Moon className="text-rose-300" size={38} /></div>
        
        {/* Falling Petals (Dots) */}

      <div className="absolute top-[-5%] left-[20%] w-3 h-3 bg-rose-200 rounded-full animate-drift" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-[-5%] left-[50%] w-2 h-2 bg-rose-100 rounded-full animate-drift" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[-5%] left-[80%] w-4 h-4 bg-rose-200 rounded-full animate-drift" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-[-5%] left-[70%] w-3 h-3 bg-rose-200 rounded-full animate-drift" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-[-5%] left-[30%] w-2 h-2 bg-rose-100 rounded-full animate-drift" style={{ animationDelay: '3.5s' }}></div>
      <div className="absolute top-[-5%] left-[60%] w-4 h-4 bg-rose-200 rounded-full animate-drift" style={{ animationDelay: '5s' }}></div>


        <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 animate-float-slow"><Heart className="text-rose-300" size={40} /></div>
        <div className="absolute bottom-20 right-20 animate-float-delayed"><Heart className="text-rose-200" size={60} /></div>
        <div className="absolute top-1/2 left-1/4 animate-float"><Sparkles className="text-rose-300" size={30} /></div>
        </div>
      </div>

      {/* 3. THE LOGIN CARD */}
      <div className="max-w-md w-full relative z-10" data-aos="fade-up">
        
        <div className="text-center mb-8">
          <div className="relative inline-block">
            {/* Soft rings behind the heart */}
            <div className="absolute inset-0 bg-rose-200 rounded-full animate-ping opacity-20"></div>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-rose-50 relative z-10">
<Lock 
  className={`transition-all duration-700 ${
    error ? 'text-rose-300 scale-90' : 'text-rose-500 scale-100 hover:scale-110'
  }`} 
  fill={error ? "none" : "rgba(244, 63, 94, 0)"} // Subtle fill for the "active" state
  size={32} 
/>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-rose-900 tracking-[0.2em] font-pixel uppercase">
            Entry Gate
          </h1>
          <p className="text-rose-400/80 mt-2 font-medium italic text-sm">A date to remember, a door to open...</p>
        </div>

        {/* Input Form styled like a Stationery Card */}
        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-2xl shadow-rose-200/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="DDMMYY"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                maxLength={6}
                opacity={0.5}
                className={`w-full px-6 py-5 bg-white border-2 rounded-2xl outline-none transition-all text-center text-3xl font-pixel tracking-[0.4em] text-rose-900
                  ${error ? 'border-rose-300 animate-shake' : 'border-rose-50 focus:border-rose-200 focus:ring-4 focus:ring-rose-100/50'}`}
              />
              {/* <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 bg-white text-[10px] text-rose-300 font-bold tracking-widest uppercase rounded-full border border-rose-50">
                The Code
              </div> */}
            </div>
            
            <button 
              type="submit"
              className="w-full bg-rose-900 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-rose-800 active:scale-95 transition-all shadow-lg group overflow-hidden relative"
            >
              <span className="relative z-10">UNLOCK</span>
              <Sparkles size={18} className="relative z-10 group-hover:rotate-12 transition-transform" />
              {/* Subtle button hover effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
            </button>
          </form>

          {error && (
            <p className="text-center text-rose-400 mt-6 font-medium text-xs tracking-tight animate-bounce">
              "Today is a day to remember"
            </p>
          )}
        </div>

        {/* Bottom Detail */}
        <div className="mt-12 flex items-center justify-center gap-4 opacity-30">
            <div className="h-px w-12 bg-rose-300"></div>
            <Heart size={12} className="text-rose-300" fill="currentColor" />
            <div className="h-px w-12 bg-rose-300"></div>
        </div>
      </div>
    </div>
  );
}