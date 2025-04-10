import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import HamburgerButton from '../common/HamburgerMenuButton/HamburgerButton';
import MobileHeader from '../common/HamburgerMenuButton/MobileHeader';

function HeroSection() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Add animation after component mounts
    setTimeout(() => {
      setIsAnimated(true);
    }, 300);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Image with Parallax Effect */}
      <div className="relative bg-cover bg-center h-screen max-h-[800px] min-h-[500px] flex items-center">
        <img 
          className="absolute inset-0 object-cover w-full h-full transition-transform duration-10000 ease-linear transform scale-110 hover:scale-100" 
          src="../../../landingPage/hero6.png" 
          alt="Arrière-plan Héro" 
        />

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

        {/* Content Container */}
        <div className="relative container mx-auto px-4 md:px-8 z-10">
          <div className={`max-w-6xl mx-auto text-center ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
            {/* Main Heading */}
            <h1 className="font-bold tracking-tight leading-tight mb-6">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
                <span className="text-[#20B486] drop-shadow-md">Améliorer </span> les Vies,
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white mt-2">
                Un Service à la Fois
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white mt-2">
                Nourrir, <span className="text-[#20B486] drop-shadow-md">Prendre Soin</span>, Soutenir!
              </div>
            </h1>

            {/* Subheading */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto mb-8 md:mb-10">
              Votre Plateforme de Confiance pour des Services Exceptionnels: Garde d'Enfants, Aide Ménagère, Assistance Personnelle, Soutien Scolaire et Aide aux Soins - Autonomiser les Vies, Un Service à la Fois!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
              <Link 
                to="register/applicant" 
                className="flex items-center justify-center bg-[#20B486] hover:bg-[#1a9c73] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2 text-sm md:text-base">Je cherche un emploi</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <Link 
                to="/professionals" 
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2 text-sm md:text-base">Je cherche de l'aide à domicile</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="hidden md:flex justify-center gap-8 mt-16 opacity-80">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#20B486] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white text-sm">Professionnels Vérifiés</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#20B486] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm">Assistance 24/7</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#20B486] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <span className="text-white text-sm">Prix Équitables</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Element - Bottom Wave - Fixed to remove black line */}
        <div className="absolute bottom-0 left-0 right-0 text-white">
        <svg 
            className="absolute bottom-0 w-full"
            height="64" 
            width="100%" 
            viewBox="0 0 1440 64" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C240,42 480,64 720,64 C960,64 1200,42 1440,0 L1440,64 L0,64 Z" 
              fill="#ffffff" 
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;