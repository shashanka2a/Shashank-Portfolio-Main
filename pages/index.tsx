'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from '../src/components/figma/ImageWithFallback';
import EasterEggSpidey from '../src/components/EasterEggSpidey';
import OriginBadge from '../src/components/OriginBadge';
import { Button } from '../src/components/ui/button';
import { Card } from '../src/components/ui/card';
import { Progress } from '../src/components/ui/progress';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Award, 
  Calendar,
  MapPin,
  ArrowRight,
  Code
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);


  // Track scroll progress with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (window.scrollY / totalHeight) * 100;
          setScrollProgress(Math.min(progress, 100));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalXP = Math.floor(scrollProgress * 5); // Simple XP based on scroll progress



  const journeyArcs = [
    {
      level: "Level 1: Student Era",
      period: "2023–2024",
      badge: "🎓",
      title: "Kampus",
      description: "Started by solving campus problems with integrated student-focused solutions.",
      projects: ["GatorEx → campus marketplace", "Rydify → campus transportation", "Vybr → roommate matching"],
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-500",
      borderColor: "border-red-500",
      link: "https://kampus.fun/"
    },
    {
      level: "Level 2: Startup Builder", 
      period: "2024–2025",
      badge: "🚀",
      title: "Markit",
      description: "Evolved into building scalable tools that help startups grow and thrive.",
      projects: ["FormEase → form building", "QRBee → QR analytics", "HackHire → coding assessments"],
      gradientFrom: "from-teal-500",
      gradientTo: "to-cyan-500",
      borderColor: "border-teal-500",
      link: "https://markit.one/"
    },
    {
      level: "Level 3: PaaS Architect",
      period: "2025–Current", 
      badge: "☁️",
      title: "Layr",
      description: "Now building platform infrastructure — enabling others to build on top of my tools.",
      projects: ["Logora → AI-powered branding layer", "Deckr → collaborative presentation layer", "Buidl → rapid prototyping layer"],
      gradientFrom: "from-purple-500",
      gradientTo: "to-blue-500",
      borderColor: "border-purple-500",
      link: "https://layr.plus/"
    }
  ];

  const achievements = [
    {
      title: "Organizer @ NASA Space Apps",
      year: "2019",
      description: "Led 300+ participants, streamlined e-certificates with automation, and drove event marketing.",
      icon: "🚀"
    },
    {
      title: "Speaker @ MLH 305 Hackathon",
      year: "2025",
      description: "Shared insights on rapid prototyping and AI-powered MVP building to 200+ students.",
      icon: "🎤"
    },
    {
      title: "Judge @ ShellHacks",
      year: "2025",
      description: "Evaluated projects across AI, blockchain, and SaaS; mentored student founders on execution & strategy.",
      icon: "⚖️"
    },
    {
      title: "Mentor @ Gator Hatchery",
      year: "Ongoing",
      description: "Helping non-tech founders at UF's startup incubator figure out the technical side of their ideas.",
      icon: "🧭"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* XP Bar */}
      <div className="xp-bar">
        <div className="flex items-center space-x-2 md:space-x-3 mb-2">
          <Code className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
          <span className="comic-font text-primary text-sm md:text-base">LEVEL {Math.floor(totalXP / 200) + 1}</span>
          <span className="comic-text text-xs md:text-sm text-secondary">{totalXP} XP</span>
        </div>
        <div className="w-32 md:w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="xp-progress h-full"
            style={{ 
              transform: `scaleX(${scrollProgress / 100})`,
              transformOrigin: 'left',
              willChange: 'transform'
            }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="comic-text text-xs text-muted">Progress</span>
          <span className="comic-text text-xs text-muted">{Math.round(scrollProgress)}%</span>
        </div>
      </div>


      {/* Hero Section */}
      <section className="hero-nyc-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* NYC Background Image */}
        <div className="nyc-background"></div>
        
        {/* Dark Miles Palette Overlay */}
        <div className="miles-overlay"></div>
        
        {/* Parallax Elements */}
        <div className="parallax-layer parallax-slow"></div>
        <div className="parallax-layer parallax-medium"></div>
        <div className="parallax-layer parallax-fast"></div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center gap-6">
              <div className="speech-bubble inline-block max-w-lg mx-auto">
                <p className="comic-text">
                  "With great power comes great responsibility... to write clean code!"
                </p>
              </div>

              <div className="name-easter relative inline-block group" role="heading" aria-level={1}>
                <h1 
                  className="hero-title mb-0 comic-zoom" 
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900 }}
                  data-text="SHASHANK JAGANNATHAM"
                >
                  SHASHANK JAGANNATHAM
                </h1>
                {/* Hidden Spider-Man swing easter egg */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-10 pointer-events-none select-none">
                  {/* Hover (desktop) */}
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-150 motion-reduce:transition-none">
                    <div className="origin-top animate-swing motion-reduce:animate-none">
                      <EasterEggSpidey width={40} height={52} />
                    </div>
                  </div>
                  {/* Tap-to-reveal (mobile) */}
                  <div className="md:hidden opacity-0 group-active:opacity-100 transition-opacity duration-150 motion-reduce:transition-none">
                    <div className="origin-top animate-swing motion-reduce:animate-none">
                      <EasterEggSpidey width={40} height={52} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glitch neon-red mb-8" data-text="WEB-SLINGER DEVELOPER" style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', fontWeight: 700 }}>
              WEB-SLINGER DEVELOPER
            </div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="comic-panel max-w-3xl mx-auto mb-8 p-8"
            >
              <p className="comic-text text-white font-semibold px-4 md:px-0" style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', lineHeight: '1.6', textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(255,255,255,0.4)' }}>
                I'm Shashank Jagannatham, an MVP-slinger & product builder. From hackathons to startups, I've been building products fast, 
                testing them with users, and scaling what works. My superpower? Turning ideas into real software that people actually use!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center"
            >
              <a href="https://github.com/shashanka2a" target="_blank" rel="noopener noreferrer" className="comic-button hover-glow">
                COLLABORATE & CREATE 🚀
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-blue-900/10 relative">
        <div className="spider-web-bg"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="comic-word-balloon" style={{ borderColor: 'var(--miles-purple)', color: 'var(--miles-purple)' }}>
              ORIGIN STORY!
            </div>
            <p className="comic-text text-white font-bold max-w-2xl mx-auto px-4" style={{ fontSize: '1.2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,255,255,0.3)' }}>
              From getting bit by the coding spider in 2021 to <strong className="text-accent">architecting complex scalable applications</strong> - here's how each phase unlocked new technical superpowers!
            </p>
          </motion.div>
          
          <div className="relative max-w-5xl mx-auto px-4 md:px-0">
            {/* Spider-Verse Portal Timeline */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-2 md:w-3 h-full">
              <div className="w-full h-full bg-gradient-to-b from-red-500 via-blue-500 to-red-500 rounded-full opacity-80"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-500 via-red-500 to-blue-500 rounded-full opacity-30"></div>
            </div>
            
            {journeyArcs.map((arc, index) => (
              <motion.div
                key={arc.title}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -50 : 50
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "tween",
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 md:mb-20 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-8 md:ml-0`}>
                  <motion.div 
                    className={`superpower-panel p-6 md:p-10 comic-zoom relative overflow-hidden ${arc.borderColor}`}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5
                    }}
                    transition={{ type: "tween", duration: 0.2 }}
                  >
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${arc.gradientFrom} ${arc.gradientTo} opacity-10 hover:opacity-20 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      {/* Level Badge */}
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${arc.gradientFrom} ${arc.gradientTo} text-white`}>
                        {arc.level}
                      </div>
                      
                      {/* Period and Title */}
                      <div className="flex items-center mb-3 md:mb-4">
                        <Calendar className="h-5 w-5 md:h-6 md:w-6 text-accent mr-2 md:mr-3" />
                        <span className="comic-font text-emphasis" style={{ fontSize: '1.2rem' }}>{arc.period}</span>
                      </div>
                      
                      <h3 className="comic-font text-strong mb-4" style={{ fontSize: '1.5rem' }}>
                        {arc.badge} {arc.title.toUpperCase()}
                      </h3>
                      
                      <p className="text-white font-medium comic-text mb-6" style={{ fontSize: '1rem', lineHeight: '1.6', textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(255,255,255,0.3)' }}>
                        {arc.description}
                      </p>
                      
                      {/* Projects List */}
                      <div className="space-y-2 mb-6">
                        {arc.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="flex items-center text-gray-300 comic-text">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${arc.gradientFrom} ${arc.gradientTo} mr-3 flex-shrink-0`}></div>
                            <span style={{ fontSize: '0.9rem' }}>{project}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Company Link */}
                      <a 
                        href={arc.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="comic-font text-blue-400 hover:text-blue-300 p-0 text-lg inline-flex items-center hover:underline"
                      >
                        EXPLORE {arc.title.toUpperCase()} <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                </div>
                
                {/* Arc Badge Timeline Node */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-10"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`timeline-badge relative bg-gradient-to-br ${arc.gradientFrom} ${arc.gradientTo} text-white text-2xl w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
                    {arc.badge}
                  </div>
                  {/* Animated rings */}
                  <div className="absolute inset-0 w-20 h-20 -translate-x-2 -translate-y-2">
                    <div className={`absolute inset-0 border-2 border-opacity-40 rounded-full animate-ping ${arc.borderColor}`}></div>
                    <div className={`absolute inset-2 border border-opacity-30 rounded-full animate-pulse ${arc.borderColor}`}></div>
                    <div className={`absolute inset-4 border border-opacity-20 rounded-full animate-bounce ${arc.borderColor}`}></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Achievements */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-red-900/10 relative">
        <div className="halftone-bg"></div>
        <div className="web-pattern"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateX: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="comic-word-balloon" style={{ borderColor: 'var(--miles-red)', color: 'var(--miles-red)' }}>
              🏆 TROPHY ROOM!
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  rotateX: -30,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.4
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(255, 0, 64, 0.4)"
                }}
                className="trading-card p-8 comic-zoom"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="text-4xl filter drop-shadow-lg">{achievement.icon}</div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="comic-font text-strong mb-3" style={{ fontSize: '1.5rem' }}>
                      {achievement.title.toUpperCase()}
                    </h3>
                    <p className="comic-font text-emphasis mb-4" style={{ fontSize: '1.2rem' }}>
                      {achievement.year}
                    </p>
                    <p className="text-white font-medium comic-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', textShadow: '1px 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(255,255,255,0.3)' }}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                
                {/* Trophy shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent -skew-x-12 animate-pulse"></div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Contact */}
      <section className="py-24 sm:py-20 px-4 sm:px-6 bg-gradient-to-t from-black via-purple-900/20 to-red-900/10 relative min-h-screen flex items-center">
        <div className="halftone-bg"></div>
        <div className="web-pattern"></div>
        
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="speech-bubble mb-12 md:mb-12 inline-block max-w-3xl mx-6">
              <p className="comic-text px-4" style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)' }}>
                "Let's team up and save the digital world together!"
              </p>
            </div>
            
            <div className="avengers-callout mb-12 md:mb-12">
              <span className="callout-badge">TEAM UP</span>
              <h2 className="callout-text">WEB‑TEAM, ASSEMBLE</h2>
              <p className="callout-sub">Time to build something amazing.</p>
            </div>
            
            <motion.p 
              className="text-blue-400 comic-text mb-20 md:mb-20 max-w-3xl mx-auto px-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', lineHeight: '1.6' }}
            >
              Whether you need a technical co-founder, want to discuss your next big idea, or just want to explore the multiverse of possibilities - I'm here to help!
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row flex-wrap justify-center gap-8 sm:gap-8 md:gap-10 lg:gap-12 mb-20 md:mb-16 px-6"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="mailto:jagannathamashashank@gmail.com" className="neon-social-icon gmail text-base md:text-base">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 inline align-[-2px]" />
                <span className="hidden sm:inline">jagannathamashashank@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateY: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://github.com/shashanka2a" target="_blank" rel="noopener noreferrer" className="neon-social-icon github text-base md:text-base">
                <Github className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 inline align-[-2px]" />
                <span className="hidden sm:inline">github.com/shashanka2a</span>
                <span className="sm:hidden">GitHub</span>
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://linkedin.com/in/shashank-jagannatham" target="_blank" rel="noopener noreferrer" className="neon-social-icon linkedin text-base md:text-base">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 inline align-[-2px]" />
                <span className="hidden sm:inline">linkedin.com/in/shashank-jagannatham</span>
                <span className="sm:hidden">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="comic-panel inline-block p-8 mt-12 sm:mt-16"
          >
            <div className="flex items-center justify-center text-primary">
              <MapPin className="h-6 w-6 mr-3 text-accent" />
              <span className="comic-text text-strong" style={{ fontSize: '1.2rem' }}>
                Gainesville, FL - Earth-616
              </span>
            </div>
          </motion.div>
          
        </div>
        
        {/* Final web decoration */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

    </div>
  );
}