import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Heart, Sparkles, Mail, Star, Moon } from 'lucide-react';

import L1 from '../assets/l1.jpg';
import L2 from '../assets/l2.jpg';
import L3 from '../assets/l3.jpg';
import L4 from '../assets/d3.jpg';
import L5 from '../assets/l5.jpg';

import R1 from '../assets/d11.jpg';
import R2 from '../assets/r2.jpg';
import R3 from '../assets/r3.jpg';
import R4 from '../assets/r4.jpg';
import R5 from '../assets/r5.jpg';
import R6 from '../assets/r6.jpg';
import R7 from '../assets/r7.jpg';

export default function Hero() {
  const navigate = useNavigate();

  const column1 = [L1, R1, L3, R3, R5, L4];
  const column2 = [L2, R2, L5, R4, R6, R7];

  return (
    <section className="h-screen w-full flex flex-col md:flex-row bg-white overflow-hidden">
      
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Envelopes (Love Letters) */}
              <div className="absolute top-[10%] right-[15%] animate-float-slow opacity-20"><Mail className="text-rose-400" size={40} /></div>
              <div className="absolute bottom-[15%] right-[10%] animate-float-delayed opacity-20"><Mail className="text-rose-400" size={32} /></div>
              
              {/* Celestial Elements */}
              <div className="absolute top-[20%] right-[20%] animate-pulse opacity-30"><Star className="text-rose-300" size={24} /></div>
              <div className="absolute top-[40%] right-[5%] animate-float opacity-20"><Moon className="text-rose-300" size={38} /></div>
              
              {/* Falling Petals (Dots) */}
              <div className="absolute top-[-5%] right-[60%] w-3 h-3 bg-rose-200 rounded-full animate-drift delay-1"></div>
              <div className="absolute top-[-5%] right-[70%] w-2 h-2 bg-rose-100 rounded-full animate-drift delay-2"></div>
              <div className="absolute top-[-5%] right-[80%] w-4 h-4 bg-rose-200 rounded-full animate-drift delay-3"></div>
      
              <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-10 left-10 animate-float-slow"><Heart className="text-rose-300" size={40} /></div>
              <div className="absolute bottom-20 right-20 animate-float-delayed"><Heart className="text-rose-200" size={60} /></div>
              <div className="absolute top-1/2 left-1/4 animate-float"><Sparkles className="text-rose-300" size={30} /></div>
              </div>
            </div>
      

{/* --- LEFT SIDE: SCROLLING PHOTOS --- */}
      <div className="hidden md:flex w-1/2 h-full bg-slate-50 relative overflow-hidden gap-4 p-4">
        
        {/* COLUMN 1: UPWARD SCROLL */}
        <div className="flex flex-col gap-4 animate-vertical-scroll">
          {column1.map((src, i) => (
            <img key={i} src={src} alt="Memory" className="w-full h-80 object-cover rounded-3xl shadow-lg" />
          ))}
          {/* Duplicate for infinite loop */}
          {column1.map((src, i) => (
            <img key={`dup1-${i}`} src={src} alt="Memory" className="w-full h-80 object-cover rounded-3xl shadow-lg" />
          ))}
        </div>

        {/* COLUMN 2: DOWNWARD SCROLL */}
        {/* Changed class to animate-vertical-scroll-down and removed mt-20 */}
        <div className="flex flex-col gap-4 animate-vertical-scroll-down">
          {column2.map((src, i) => (
            <img key={i} src={src} alt="Memory" className="w-full h-80 object-cover rounded-3xl shadow-lg" />
          ))}
          {/* Duplicate for infinite loop */}
          {column2.map((src, i) => (
            <img key={`dup2-${i}`} src={src} alt="Memory" className="w-full h-80 object-cover rounded-3xl shadow-lg" />
          ))}
        </div>

        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white pointer-events-none z-10"></div>
      </div>

      {/* --- RIGHT SIDE: ROMANTIC GREETING --- */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center px-12 text-center md:text-left md:items-start bg-white">
        <div data-aos="fade-left" className="max-w-md">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <Heart className="text-rose-500" fill="currentColor" size={20} />
            {/* <span className="text-rose-400 font-bold tracking-widest text-xs uppercase">For My Favorite Person</span> */}
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 font-pixel uppercase tracking-tighter leading-none">
            Hi, Tanaya
          </h1>

          <p className="text-lg text-slate-500 mb-10 leading-relaxed font-sans">
            I wanted to create a special place to hold a few of my favorite memories from the time we've spent together. 
            <br /><br />
            Every photo and every detail here is a piece of the story we’re building. 
            <span className="block mt-4 font-semibold text-rose-500">I hope you enjoy looking back as much as I do!</span>
          </p>

<button 
  onClick={() => navigate('/timeline')} 
  className="group bg-rose-900 text-white px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-rose-800 active:scale-95 transition-all shadow-xl shadow-rose-200/50 flex items-center gap-3 relative overflow-hidden group w-fit"
>
  {/* The Text */}
  <span className="relative z-10">See Our Journey</span>
  
  {/* The Sparkles Icon */}
  <Sparkles 
    size={18} 
    className="relative z-10 group-hover:rotate-12 transition-transform" 
  />

  {/* The Shimmer Effect */}
  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
</button>
        </div>
      </div>
    </section>
  );
}