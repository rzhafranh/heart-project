import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Calendar, ArrowLeft, Sparkles } from 'lucide-react';

export default function Celebration() {
  const navigate = useNavigate();
  
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = String(today.getFullYear()).slice(-2);
  const formattedDate = `${day}-${month}-${year}`;

  const anniversaryDate = new Date(today);
  anniversaryDate.setFullYear(today.getFullYear() + 1);
  
  const annivMonthName = anniversaryDate.toLocaleString('default', { month: 'long' });
  const annivYear = anniversaryDate.getFullYear();

  const daysInMonth = new Date(annivYear, anniversaryDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(annivYear, anniversaryDate.getMonth(), 1).getDay();

  return (
    // Changed py-20 to py-10 and added h-screen to force it into the viewport
    <section className="h-screen w-full bg-slate-950 text-white font-sans py-10 px-6 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-600/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-md w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section - Reduced margins and text size */}
        <div className="text-center mb-6 animate-in fade-in zoom-in duration-1000 shrink-0">
          <h1 className="text-5xl md:text-7xl font-black font-pixel mb-2 tracking-tighter text-white">
            {formattedDate}
          </h1>
          <p className="text-rose-400 uppercase tracking-[0.3em] font-bold text-[10px]">
            Our Journey Begins
          </p>
        </div>

        {/* SINGLE ANNIVERSARY CARD - Reduced padding and rounded corners */}
        <div className="bg-white/5 border border-white/10 rounded-4xl p-6 backdrop-blur-xl shadow-2xl animate-in slide-in-from-bottom-10 duration-1000 w-full">
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="text-rose-500" size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Future Milestone</span>
            </div>
            <Sparkles className="text-yellow-400 animate-spin-slow" size={16} />
          </div>

          <h2 className="text-2xl font-bold text-center mb-4 uppercase tracking-tight">
            {annivMonthName} <span className="text-rose-500">{annivYear}</span>
          </h2>

          {/* Calendar Grid - Tighter gaps and smaller text */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
              <div key={d} className="text-[9px] font-bold text-slate-600 uppercase mb-1">{d}</div>
            ))}
            
            {Array(firstDayOfMonth).fill(null).map((_, idx) => (
              <div key={`empty-${idx}`} className="aspect-square" />
            ))}
            
            {[...Array(daysInMonth)].map((_, idx) => {
              const d = idx + 1;
              const isAnniversaryDay = d === anniversaryDate.getDate();
              
              return (
                <div 
                  key={d} 
                  className={`aspect-square flex items-center justify-center rounded-lg text-xs transition-all
                    ${isAnniversaryDay 
                      ? 'bg-rose-500 text-white font-black scale-105 shadow-[0_0_15px_rgba(244,63,94,0.4)] animate-pulse' 
                      : 'text-slate-500 hover:bg-white/5'}`}
                >
                  {d}
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/5 rounded-full border border-rose-500/10">
              <Heart className="text-rose-500 fill-rose-500" size={12} />
              <span className="text-[9px] font-bold text-rose-300 uppercase tracking-widest">
                1st Anniversary
              </span>
            </div>
          </div>
        </div>

        {/* Back Button - Moved closer */}
        <div className="mt-8 text-center opacity-40 hover:opacity-100 transition-opacity shrink-0">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 mx-auto text-slate-400 hover:text-white transition-all uppercase text-[9px] font-bold tracking-[0.2em]"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}