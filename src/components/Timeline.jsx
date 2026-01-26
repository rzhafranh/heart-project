import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, X, Heart, Sparkles, MessageCircle, Star, MapPin, Camera, Coffee, Mail, Moon } from 'lucide-react';

// Images from your assets folder
import A1 from '../assets/a1.jpg';
import A2 from '../assets/a2.jpg';
import A3 from '../assets/a3.jpg';
import A4 from '../assets/a4.jpeg';

import B1 from '../assets/r2.jpg';
import B2 from '../assets/r3.jpg';
import B3 from '../assets/b3.jpg';
import B4 from '../assets/b4.jpg';

import C1 from '../assets/l1.png';
import C2 from '../assets/c2.jpg';
import C3 from '../assets/c3.jpg';
import C4 from '../assets/c4.jpg';
import C5 from '../assets/c5.jpg';

import D1 from '../assets/r4.JPG';
import D2 from '../assets/l4.JPG';
import D3 from '../assets/d3.JPG';
import D4 from '../assets/d4.JPG';
import D5 from '../assets/d5.JPG';
import D6 from '../assets/d6.JPG';
import D7 from '../assets/d7.JPG';
import D8 from '../assets/d8.JPG';
import D9 from '../assets/d9.JPG';
import D10 from '../assets/d10.JPG';
import D11 from '../assets/d11.JPG';
import D12 from '../assets/d12.jpg';

import E1 from '../assets/l2.png';
import E2 from '../assets/l3.jpg';
import E3 from '../assets/l5.jpg';
import E4 from '../assets/r7.jpg';
import E5 from '../assets/e5.jpg';
import E6 from '../assets/e6.jpg';
import E7 from '../assets/e7.jpg';
import E8 from '../assets/e8.jpg';
import E9 from '../assets/r5.jpg';
import E10 from '../assets/e10.jpeg';

export default function Timeline() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

// --- UPDATED AUTO-SCROLL LOGIC ---
  // Added currentPhotoIndex to dependencies so timer resets on manual click
  useEffect(() => {
    let timer;
    if (selectedItem) {
      timer = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % selectedItem.images.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [selectedItem, currentPhotoIndex]);

  // --- NEW MANUAL NAVIGATION FUNCTIONS ---
  const nextPhoto = (e) => {
    e.stopPropagation();
    if (!selectedItem) return;
    setCurrentPhotoIndex((prev) => (prev + 1) % selectedItem.images.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (!selectedItem) return;
    setCurrentPhotoIndex((prev) => 
      prev === 0 ? selectedItem.images.length - 1 : prev - 1
    );
  };

  const timelineData = [
    {
      id: 1,
      year: "Aug 2025",
      title: "The First Hello",
      description: "Our paths first crossed. Even though life pulled us in different directions shortly after, the spark was planted.",
      images: [A1, A2, A3, A4],
      color: "border-rose-400",
      bg: "bg-rose-400",
      icon: <Heart size={24} />,
      side: "left"
    },
    {
      id: 2,
      year: "18-19 Dec 2025",
      title: "Cheering Each Other On",
      description: "Attending each other's colloquiums. Seeing your brilliance in person made me admire you even more.",
      images: [B1, B2, B3, B4],
      color: "border-rose-500",
      bg: "bg-rose-500",
      icon: <Star size={24} />,
      side: "right"
    },
    {
      id: 3,
      year: "21 Dec 2025",
      title: "First Quality Time",
      description: "The first moments where time seemed to slow down. Just us, and a world of things to talk about.",
      images: [C1, C2, C3, C4, C5],
      color: "border-pink-500",
      bg: "bg-pink-500",
      icon: <Coffee size={24} />,
      side: "left"
    },
    {
      id: 4,
      year: "10 Jan 2026",
      title: "Museum Date",
      description: "Walking through halls of art, but I found myself looking at you more than the exhibits.",
      images: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12],
      color: "border-rose-500",
      bg: "bg-rose-500",
      icon: <Camera size={24} />,
      side: "right"
    },
    {
      id: 5,
      year: "11-28 Jan 2026",
      title: "A Weeks of 'Us'",
      description: "From dinner hangouts and lunch dates to surprising friends—every moment together felt like home.",
      images: [E1, E2, E3, E4, E5, E6, E7, E8, E9, E10],
      color: "border-pink-500",
      bg: "bg-pink-500",
      icon: <Heart size={24} fill="currentColor" />,
      side: "left"
    }
  ];

  const handleClose = () => {
    setSelectedItem(null);
    setCurrentPhotoIndex(0);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-rose-50/30 px-6 flex flex-col items-center overflow-x-hidden font-sans">

    <div className="fixed inset-0 pointer-events-none overflow-hidden">

      <div className="absolute top-[10%] left-[15%] animate-float-slow opacity-20"><Mail className="text-rose-400" size={40} /></div>
      <div className="absolute bottom-[15%] right-[10%] animate-float-delayed opacity-20"><Mail className="text-rose-400" size={32} /></div>
      
      <div className="absolute top-[20%] right-[20%] animate-pulse opacity-30"><Star className="text-rose-300" size={24} /></div>
      <div className="absolute top-[40%] left-[5%] animate-float opacity-20"><Moon className="text-rose-300" size={38} /></div>
      <div className="absolute top-[60%] left-[20%] animate-pulse opacity-30"><Star className="text-rose-300" size={34} /></div>
      <div className="absolute top-[80%] right-[15%] animate-float opacity-20"><Moon className="text-rose-300" size={28} /></div>

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
        <div className="absolute top-1/3 left-1/8 animate-float"><Sparkles className="text-rose-300" size={40} /></div>
        <div className="absolute top-2/4 left-7/8 animate-float"><Sparkles className="text-rose-300" size={40} /></div>
      </div>
    </div>
      
      <div className="max-w-4xl w-full mx-auto grow relative">
        <button 
          onClick={() => navigate('/')} 
          className="group text-rose-400 hover:text-rose-600 text-sm font-bold uppercase tracking-widest mb-10 transition-all flex items-center gap-2"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back Home
        </button>

        <div className="text-center mb-20" data-aos="fade-down">
          <Heart className="mx-auto text-rose-500 mb-4 animate-pulse" fill="currentColor" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold font-pixel text-slate-900 mb-2 uppercase tracking-tighter">
            Our Chapters
          </h2>
          <p className="text-rose-400 font-medium italic">Every moment leading up to now...</p>
        </div>

        {/* --- THE TIMELINE --- */}
        <div className="relative pb-20">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-rose-200 h-full rounded-full hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item) => (
              <div key={item.id} className={`flex items-center w-full mb-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* 1. Content Card */}
                <div className="w-full md:w-5/12">
                  <div 
                    onClick={() => setSelectedItem(item)}
                    className={`group cursor-pointer p-8 rounded-4xl bg-white border-b-4 ${item.color} shadow-xl shadow-rose-100 hover:shadow-rose-200 transition-all hover:-translate-y-2 relative overflow-hidden`}
                    data-aos={item.side === 'left' ? 'fade-right' : 'fade-left'}
                  >
                    {/* Decorative Icon: 100% Opacity & Side Aligned */}
                    <div className={`absolute top-6 ${item.side === 'left' ? 'right-6' : 'left-6'} text-rose-300 opacity-100`}>
                      {item.icon}
                    </div>

                    <div className={item.side === 'left' ? 'text-left' : 'text-right'}>
                      <span className={`text-sm font-bold ${item.bg.replace('bg-', 'text-')} uppercase tracking-widest`}>
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-800 mt-2">{item.title}</h3>
                      
                      {/* Open Memory: Aligned specifically based on side */}
                      <div className={`flex items-center gap-2 mt-4 text-rose-400 text-sm font-semibold group-hover:gap-4 transition-all ${item.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                        {item.side === 'right' && <Sparkles size={14} />}
                        <span>Open Memory</span>
                        {item.side === 'left' && <Sparkles size={14} />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Central Dot */}
                <div className="hidden md:flex w-2/12 justify-center items-center z-10">
                   <div className={`w-10 h-10 rounded-full border-4 border-white ${item.bg} shadow-lg flex items-center justify-center text-white`}>
                      {item.icon}
                   </div>
                </div>

                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

{/* --- MEMORY MODAL --- */}
      {selectedItem && (
        <div 
          // 1. Add this onClick handler to the background wrapper
          onClick={(e) => {
            // e.target is what you actually clicked
            // e.currentTarget is this wrapper div
            // If they are the same, it means you clicked the background, not the inner card
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 bg-rose-900/60 backdrop-blur-md animate-in fade-in duration-300 cursor-pointer"
        >
          <div 
            // 2. Add 'cursor-default' here so the mouse doesn't look like a hand when over the card
            className="bg-white rounded-4xl w-full max-w-5xl flex flex-col md:flex-row relative shadow-2xl overflow-hidden max-h-[90vh] cursor-default"
            data-aos="zoom-in"
          >
            
            {/* 1. LEFT SIDE: PHOTO CAROUSEL */}
            <div className="w-full md:w-1/2 aspect-square relative bg-slate-100 overflow-hidden group">
               {selectedItem.images.map((img, idx) => (
                 <img 
                   key={idx}
                   src={img} 
                   alt="Memory" 
                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                     idx === currentPhotoIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                   }`}
                 />
               ))}

               {/* Arrows & Dots (Keep existing code) */}
               <button 
                 onClick={prevPhoto}
                 className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-rose-500 transition-all opacity-0 group-hover:opacity-100 z-20"
               >
                 <ChevronLeft size={24} />
               </button>

               <button 
                 onClick={nextPhoto}
                 className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-rose-500 transition-all opacity-0 group-hover:opacity-100 z-20"
               >
                 <ChevronRight size={24} />
               </button>

               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {selectedItem.images.map((_, idx) => (
                    <button
                      key={idx} 
                      onClick={() => setCurrentPhotoIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentPhotoIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                    />
                  ))}
               </div>
            </div>

            {/* 2. RIGHT SIDE: CONTENT */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-white overflow-y-auto">
              <button onClick={handleClose} className="absolute top-6 right-6 p-3 rounded-full hover:bg-rose-50 transition-colors z-20">
                <X size={28} className="text-rose-300" />
              </button>

              <span className="text-rose-400 font-bold tracking-[0.2em] uppercase text-sm mb-2">{selectedItem.year}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-pixel">{selectedItem.title}</h2>
              <div className="w-12 h-1 bg-rose-200 mb-6 rounded-full"></div>
              <p className="text-slate-600 leading-relaxed text-lg italic">"{selectedItem.description}"</p>

              <button 
                onClick={handleClose}
                className="mt-10 group bg-rose-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-rose-800 transition-all relative overflow-hidden shadow-lg shadow-rose-200 shrink-0"
              >
                <span className="relative z-10">CLOSE</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BUTTON */}
      <div className="mt-20 pb-20" data-aos="fade-up">
        <button 
          onClick={() => navigate('/bridge')}
          className="group bg-rose-900 text-white px-16 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-rose-800 active:scale-95 transition-all shadow-xl shadow-rose-200 relative overflow-hidden"
        >
          <span className="relative z-10 uppercase tracking-widest">To the Next Chapter</span>
          <Sparkles size={22} className="relative z-10 group-hover:rotate-12 transition-transform" />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
        </button>
      </div>
    </section>
  );
}