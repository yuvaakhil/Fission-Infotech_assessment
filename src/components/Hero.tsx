import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star, Users, Award, Briefcase, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
      ref={heroRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-orange-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 mr-2" />
              Award-Winning Creative Studio
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-text">
                We Create
              </span>
              <br />
              <span className="text-gray-900">Amazing Digital</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Transform your brand with cutting-edge design, innovative development, and strategic digital solutions that drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2 text-blue-600" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Briefcase className="w-6 h-6 text-purple-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">1200+</span>
                </div>
                <p className="text-gray-600">Projects Done</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="w-6 h-6 text-orange-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">50+</span>
                </div>
                <p className="text-gray-600">Awards Won</p>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Brand Identity</h3>
                      <p className="text-gray-600 text-sm">Complete visual systems</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Web Development</h3>
                      <p className="text-gray-600 text-sm">Modern, responsive websites</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Digital Strategy</h3>
                      <p className="text-gray-600 text-sm">Data-driven solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;