import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, Stars, Music } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Bridge() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [noBtnPosition, setNoBtnPosition] = useState({ top: 'auto', left: 'auto' });

  // Endless Confetti for Step 3
  // Trigger confetti when step reaches 3

  useEffect(() => {
    if (step === 3) {
      const duration = 30 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      const randomInRange = (min, max) => Math.random() * (max - min) + min;
      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        // Confetti coming from left and right
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  }, [step]);

  const moveNoButton = () => {
    const randomX = Math.random() * 70;
    const randomY = Math.random() * 70;
    setNoBtnPosition({ top: `${randomY}%`, left: `${randomX}%`, position: 'absolute' });
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 px-6 text-center text-white relative overflow-hidden font-sans">
      
      {/* GLOBAL BACKGROUND DECOR */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 animate-pulse opacity-20"><Stars size={40} className="text-rose-400" /></div>
        <div className="absolute bottom-20 right-10 animate-pulse opacity-20"><Sparkles size={50} className="text-rose-400" /></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* --- STEP 2 AMBIENCE (Only visible in Step 2) --- */}
      {step === 2 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Glowing Ambient Blobs */}
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>
      )}

      {/* --- STEP 1: THE TRANSITION --- */}
      {step === 1 && (
        <div className="max-w-2xl relative z-10 animate-in fade-in zoom-in duration-1000">
          <button onClick={() => navigate('/timeline')} className="text-slate-500 hover:text-rose-400 text-xs font-bold uppercase tracking-[0.3em] mb-12 transition-colors">
            ← Back to Memories
          </button>
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Heart className="text-rose-500 animate-bounce" size={60} fill="currentColor" />
              <Sparkles className="absolute -top-4 -right-4 text-yellow-200 animate-spin-slow" size={30} />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 font-pixel uppercase tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-rose-300 to-rose-600">
            The Next Chapter
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 font-light">
            We've looked back at where we started... <br/><br/>
            But the timeline isn't finished yet. There is one more memory I want to create.
          </p>
          <button onClick={() => setStep(2)} className="group bg-rose-600 text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-rose-500 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/50 transition-all flex items-center gap-3 mx-auto">
            Ask Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

      {/* --- STEP 2: THE PROPOSAL --- */}
      {step === 2 && (
        <div className="max-w-3xl relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="text-4xl md:text-7xl font-black mb-8 font-pixel uppercase tracking-tighter text-white drop-shadow-2xl">
            Will you be my <br/>
            <span className="text-rose-500 drop-shadow-[0_0_25px_rgba(244,63,94,0.4)]">Girlfriend?</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 relative h-48">
            <button 
              onClick={() => setStep(3)}
              className="bg-green-500 text-white px-16 py-6 rounded-2xl font-black text-2xl uppercase tracking-widest hover:bg-green-400 hover:scale-110 shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all z-20"
            >
              YES! ❤️
            </button>

            <button 
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={noBtnPosition.position === 'absolute' ? { position: 'absolute', top: noBtnPosition.top, left: noBtnPosition.left } : {}}
              className="bg-slate-800/80 backdrop-blur-sm text-slate-400 px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition-all cursor-pointer z-10 border border-white/5"
            >
              No
            </button>
          </div>
        </div>
      )}

      {/* --- STEP 3: SUCCESS --- */}
      {step === 3 && (
        <div className="max-w-2xl relative z-10 animate-in zoom-in duration-500">
          <div className="flex justify-center mb-8">
             <Heart className="text-rose-500 animate-ping absolute" size={100} fill="currentColor" />
             <Heart className="text-rose-500 animate-pulse relative" size={100} fill="currentColor" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 font-pixel uppercase tracking-tighter text-white">
            She Said Yes!
          </h1>
          <p className="text-xl text-rose-200 leading-relaxed mb-10 font-medium">
            This timeline just got a whole lot longer. <br/>
            I love you.
          </p>
          <button onClick={() => navigate('/celebration')} className="bg-purple-500 text-white px-16 py-6 rounded-2xl font-black text-2xl uppercase tracking-widest hover:bg-purple-300 hover:scale-110 shadow-xl shadow-purple-500/30 transition-all z-20">
            NEXT
          </button>
        </div>
      )}
    </section>
  );
}