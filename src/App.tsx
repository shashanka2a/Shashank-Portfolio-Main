import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Progress } from './components/ui/progress';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Award, 
  Calendar,
  MapPin,
  Zap,
  ArrowRight,
  Star,
  Trophy,
  Target,
  Code
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [showBadgePopup, setShowBadgePopup] = useState<{show: boolean, badge: any}>({show: false, badge: null});

  // Badge definitions
  const badges = {
    'student-explorer': { 
      id: 'student-explorer', 
      title: 'Student Explorer', 
      description: 'Discovered student projects', 
      icon: Star, 
      color: 'from-red-500 to-purple-500',
      xp: 100
    },
    'startup-pioneer': { 
      id: 'startup-pioneer', 
      title: 'Startup Pioneer', 
      description: 'Explored startup universe', 
      icon: Zap, 
      color: 'from-purple-500 to-blue-500',
      xp: 200
    },
    'timeline-traveler': { 
      id: 'timeline-traveler', 
      title: 'Timeline Traveler', 
      description: 'Journeyed through origin story', 
      icon: Calendar, 
      color: 'from-blue-500 to-red-500',
      xp: 150
    },
    'achievement-hunter': { 
      id: 'achievement-hunter', 
      title: 'Achievement Hunter', 
      description: 'Unlocked trophy room', 
      icon: Trophy, 
      color: 'from-red-500 to-blue-500',
      xp: 250
    },
    'web-master': { 
      id: 'web-master', 
      title: 'Web Master', 
      description: 'Completed full journey', 
      icon: Target, 
      color: 'from-purple-500 to-red-500',
      xp: 500
    }
  };

  // Track scroll progress and unlock badges
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Unlock badges based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          let badgeId = '';
          switch(index) {
            case 1: badgeId = 'student-explorer'; break;
            case 2: badgeId = 'startup-pioneer'; break;
            case 3: badgeId = 'timeline-traveler'; break;
            case 4: badgeId = 'achievement-hunter'; break;
            case 5: badgeId = 'web-master'; break;
          }
          
          if (badgeId && !unlockedBadges.includes(badgeId)) {
            setUnlockedBadges(prev => [...prev, badgeId]);
            setShowBadgePopup({show: true, badge: badges[badgeId as keyof typeof badges]});
            setTimeout(() => setShowBadgePopup({show: false, badge: null}), 3000);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [unlockedBadges]);

  const totalXP = unlockedBadges.reduce((total, badgeId) => total + (badges[badgeId as keyof typeof badges]?.xp || 0), 0);

  const projectImages = [
    "https://images.unsplash.com/photo-1642132652803-01f9738d0446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NTc0NzExNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NDY5OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTc0NDE1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVjaCUyMG9mZmljZXxlbnwxfHx8fDE3NTc1MjMwMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const studentProjects = [
    {
      title: "Neural Network Visualizer",
      description: "Interactive web app for visualizing neural network architectures and training processes",
      tech: ["React", "D3.js", "TensorFlow.js"],
      image: projectImages[0],
      link: "#"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform app with real-time workout tracking and AI-powered form analysis",
      tech: ["React Native", "Firebase", "ML Kit"],
      image: projectImages[1],
      link: "#"
    },
    {
      title: "Data Dashboard",
      description: "Real-time analytics dashboard with interactive charts and data visualization",
      tech: ["Vue.js", "Chart.js", "Python"],
      image: projectImages[2],
      link: "#"
    }
  ];

  const startupProjects = [
    {
      title: "TechFlow CRM",
      description: "Revolutionary CRM platform that increased client retention by 300% for B2B companies",
      impact: "500+ companies",
      tech: ["Next.js", "PostgreSQL", "AWS"],
      image: projectImages[3],
      link: "#"
    },
    {
      title: "AIChat Assistant",
      description: "Intelligent chatbot platform serving 10M+ conversations monthly",
      impact: "10M+ users",
      tech: ["Python", "OpenAI", "Redis"],
      image: projectImages[0],
      link: "#"
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Lead Developer",
      company: "TechFlow Inc.",
      description: "Leading a team of 8 developers building next-gen CRM solutions"
    },
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      description: "Built and scaled web applications from 0 to 1M+ users"
    },
    {
      year: "2023",
      title: "CS Graduate",
      company: "University of Technology",
      description: "Bachelor's in Computer Science, Magna Cum Laude"
    },
    {
      year: "2022",
      title: "Intern Developer",
      company: "InnovateLab",
      description: "Developed mobile applications and learned industry best practices"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Champion",
      year: "2024",
      description: "1st place at Global Tech Hackathon with AI-powered sustainability app"
    },
    {
      title: "Open Source Contributor",
      year: "2023-2024",
      description: "500+ contributions to major open source projects including React ecosystem"
    },
    {
      title: "Tech Conference Speaker",
      year: "2024",
      description: "Presented 'The Future of Web Development' at TechTalks 2024"
    },
    {
      title: "Scholarship Recipient",
      year: "2021-2023",
      description: "Merit-based scholarship for academic excellence in Computer Science"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* XP Bar */}
      <div className="xp-bar">
        <div className="flex items-center space-x-3 mb-2">
          <Code className="h-5 w-5 text-blue-400" />
          <span className="comic-font text-white">LEVEL {Math.floor(totalXP / 200) + 1}</span>
          <span className="comic-text text-sm text-gray-300">{totalXP} XP</span>
        </div>
        <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="xp-progress h-full transition-all duration-500"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="comic-text text-xs text-gray-400">Progress</span>
          <span className="comic-text text-xs text-gray-400">{Math.round(scrollProgress)}%</span>
        </div>
      </div>

      {/* Badge Unlock Popup */}
      <AnimatePresence>
        {showBadgePopup.show && showBadgePopup.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
            className="badge-popup"
          >
            <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${showBadgePopup.badge.color} mb-4`}>
              <showBadgePopup.badge.icon className="h-12 w-12 text-white badge-icon" />
            </div>
            <h3 className="comic-font text-2xl neon-red mb-2">BADGE UNLOCKED!</h3>
            <h4 className="comic-font text-xl neon-blue mb-2">{showBadgePopup.badge.title.toUpperCase()}</h4>
            <p className="comic-text text-gray-300 mb-3">{showBadgePopup.badge.description}</p>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span className="comic-text text-yellow-400">+{showBadgePopup.badge.xp} XP</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap');
        
        /* Miles Morales Color Palette */
        :root {
          --miles-black: #000000;
          --miles-red: #FF0040;
          --miles-purple: #8B00FF;
          --miles-blue: #00BFFF;
          --miles-dark-purple: #4B0082;
        }
        
        .spider-verse-bg {
          background: var(--miles-black);
          position: relative;
          overflow: hidden;
        }
        
        .spider-verse-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("https://images.unsplash.com/photo-1677508266628-1eb612e55cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0JTIwbmVvbnxlbnwxfHx8fDE3NTc1MjMyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral");
          background-size: cover;
          background-position: center;
          opacity: 0.4;
          pointer-events: none;
        }
        
        .spider-verse-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, var(--miles-red) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, var(--miles-blue) 0%, transparent 40%),
            radial-gradient(circle at 40% 40%, var(--miles-purple) 0%, transparent 30%);
          opacity: 0.15;
          pointer-events: none;
        }
        
        .halftone-bg {
          background: 
            radial-gradient(circle, var(--miles-red) 1px, transparent 1px),
            radial-gradient(circle, var(--miles-blue) 1px, transparent 1px),
            radial-gradient(circle, var(--miles-purple) 1px, transparent 1px);
          background-size: 20px 20px, 30px 30px, 25px 25px;
          background-position: 0 0, 10px 10px, 5px 15px;
          opacity: 0.08;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .comic-font {
          font-family: 'Bangers', cursive;
          letter-spacing: 2px;
        }
        
        .comic-text {
          font-family: 'Comic Neue', cursive;
        }
        
        .neon-red {
          color: var(--miles-red);
          text-shadow: 
            0 0 5px var(--miles-red),
            0 0 10px var(--miles-red),
            0 0 20px var(--miles-red),
            0 0 40px var(--miles-red);
          font-family: 'Bangers', cursive;
          letter-spacing: 3px;
        }
        
        .neon-blue {
          color: var(--miles-blue);
          text-shadow: 
            0 0 5px var(--miles-blue),
            0 0 10px var(--miles-blue),
            0 0 20px var(--miles-blue),
            0 0 40px var(--miles-blue);
          font-family: 'Bangers', cursive;
          letter-spacing: 2px;
        }
        
        .neon-purple {
          color: var(--miles-purple);
          text-shadow: 
            0 0 5px var(--miles-purple),
            0 0 10px var(--miles-purple),
            0 0 20px var(--miles-purple),
            0 0 40px var(--miles-purple);
          font-family: 'Bangers', cursive;
          letter-spacing: 2px;
        }
        
        .glitch {
          position: relative;
          font-family: 'Bangers', cursive;
          letter-spacing: 3px;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch-1 0.3s infinite;
          color: var(--miles-red);
          z-index: -1;
          text-shadow: 2px 0 var(--miles-red);
        }
        
        .glitch::after {
          animation: glitch-2 0.3s infinite;
          color: var(--miles-blue);
          z-index: -2;
          text-shadow: -2px 0 var(--miles-blue);
        }
        
        @keyframes glitch-1 {
          0%, 14%, 15%, 49%, 50%, 99%, 100% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
          15%, 49% {
            transform: translate(-3px, 2px);
            filter: hue-rotate(90deg);
          }
        }
        
        @keyframes glitch-2 {
          0%, 20%, 21%, 62%, 63%, 99%, 100% {
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
          21%, 62% {
            transform: translate(3px, -2px);
            filter: hue-rotate(180deg);
          }
        }
        
        .comic-panel {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(75, 0, 130, 0.3) 100%);
          border: 4px solid;
          border-image: linear-gradient(45deg, var(--miles-red), var(--miles-blue), var(--miles-purple), var(--miles-red)) 1;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 0 30px rgba(255, 0, 64, 0.4),
            inset 0 0 30px rgba(0, 191, 255, 0.1);
          transform-style: preserve-3d;
        }
        
        .comic-panel::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(45deg, var(--miles-red), var(--miles-blue), var(--miles-purple), var(--miles-red));
          border-radius: 20px;
          z-index: -1;
        }
        
        .comic-panel::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle, rgba(255, 0, 64, 0.05) 1px, transparent 1px),
            radial-gradient(circle, rgba(0, 191, 255, 0.05) 1px, transparent 1px);
          background-size: 15px 15px, 25px 25px;
          background-position: 0 0, 12px 12px;
          pointer-events: none;
        }
        
        .hero-title {
          font-family: 'Bangers', cursive;
          letter-spacing: 5px;
          background: linear-gradient(45deg, var(--miles-red), var(--miles-blue), var(--miles-purple), var(--miles-red));
          background-size: 300% 300%;
          animation: miles-gradient 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 15px rgba(255, 0, 64, 0.8));
        }
        
        @keyframes miles-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .spider-swing {
          position: absolute;
          animation: swing 8s ease-in-out infinite;
        }
        
        @keyframes swing {
          0%, 100% { 
            transform: translateX(-100vw) translateY(20vh) rotate(-10deg); 
          }
          50% { 
            transform: translateX(100vw) translateY(10vh) rotate(10deg); 
          }
        }
        
        .spider-silhouette {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, var(--miles-red), var(--miles-purple));
          clip-path: polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%);
          filter: drop-shadow(0 0 10px rgba(255, 0, 64, 0.8));
        }
        
        .portal-transition {
          background: 
            radial-gradient(ellipse at center, 
              transparent 30%, 
              rgba(255, 0, 64, 0.1) 35%, 
              rgba(0, 191, 255, 0.1) 40%, 
              rgba(139, 0, 255, 0.1) 45%, 
              transparent 50%);
          position: relative;
          overflow: hidden;
        }
        
        .portal-transition::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, var(--miles-red), transparent, var(--miles-blue), transparent, var(--miles-purple), transparent);
          animation: portal-spin 8s linear infinite;
          transform: translate(-50%, -50%);
          opacity: 0.2;
          pointer-events: none;
        }
        
        @keyframes portal-spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .web-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, transparent 2px, rgba(255, 0, 64, 0.08) 2px, rgba(255, 0, 64, 0.08) 3px, transparent 3px),
            linear-gradient(45deg, transparent 48%, rgba(0, 191, 255, 0.08) 49%, rgba(0, 191, 255, 0.08) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(139, 0, 255, 0.08) 49%, rgba(139, 0, 255, 0.08) 51%, transparent 52%);
          background-size: 40px 40px, 40px 40px, 40px 40px;
          pointer-events: none;
          opacity: 0.6;
        }
        
        .speech-bubble {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 240, 240, 0.95) 100%);
          border: 3px solid #000;
          border-radius: 20px;
          padding: 20px;
          color: #000;
          font-family: 'Comic Neue', cursive;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .speech-bubble::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 30px;
          width: 0;
          height: 0;
          border: 12px solid transparent;
          border-top-color: #000;
        }
        
        .speech-bubble::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 33px;
          width: 0;
          height: 0;
          border: 9px solid transparent;
          border-top-color: rgba(255, 255, 255, 0.95);
        }
        
        .dimension-rift {
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 0, 64, 0.15) 25%, 
            rgba(0, 191, 255, 0.15) 50%, 
            rgba(139, 0, 255, 0.15) 75%, 
            transparent 100%);
          position: relative;
          overflow: hidden;
        }
        
        .dimension-rift::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.6) 50%, 
            transparent 100%);
          animation: rift-sweep 4s ease-in-out infinite;
        }
        
        @keyframes rift-sweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        /* XP Bar Styles */
        .xp-bar {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid var(--miles-red);
          border-radius: 20px;
          padding: 15px 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px rgba(255, 0, 64, 0.3);
        }
        
        .xp-progress {
          background: linear-gradient(90deg, var(--miles-red), var(--miles-purple), var(--miles-blue));
          border-radius: 10px;
          height: 8px;
          transition: width 0.3s ease;
        }
        
        /* Badge Popup Styles */
        .badge-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2000;
          background: rgba(0, 0, 0, 0.95);
          border: 3px solid var(--miles-red);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 50px rgba(255, 0, 64, 0.6);
          animation: badge-popup 0.6s ease-out;
        }
        
        @keyframes badge-popup {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5) rotate(-10deg);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
        }
        
        .badge-icon {
          animation: badge-glow 2s ease-in-out infinite;
        }
        
        @keyframes badge-glow {
          0%, 100% { filter: drop-shadow(0 0 10px var(--miles-blue)); }
          50% { filter: drop-shadow(0 0 20px var(--miles-red)); }
        }
        
        @keyframes comic-zoom {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(1deg); }
        }
        
        .comic-zoom {
          animation: comic-zoom 4s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="spider-verse-bg min-h-screen flex items-center justify-center relative">
        <div className="halftone-bg"></div>
        <div className="web-pattern"></div>
        
        {/* Swinging Spider-Man Silhouettes */}
        <div className="spider-swing" style={{ top: '10%', animationDelay: '0s' }}>
          <div className="spider-silhouette"></div>
        </div>
        <div className="spider-swing" style={{ top: '60%', animationDelay: '4s' }}>
          <div className="spider-silhouette"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="speech-bubble mb-8 inline-block max-w-lg mx-auto">
              <p className="comic-text">
                "With great power comes great responsibility... to write clean code!"
              </p>
            </div>
            
            <h1 className="hero-title mb-6 comic-zoom" style={{ fontSize: '5rem', fontWeight: 900 }}>
              ALEX CHEN
            </h1>
            
            <div className="glitch neon-red mb-8" data-text="WEB-SLINGER DEVELOPER" style={{ fontSize: '2rem', fontWeight: 700 }}>
              WEB-SLINGER DEVELOPER
            </div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="comic-panel max-w-3xl mx-auto mb-8 p-8"
            >
              <p className="comic-text text-white" style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
                Swinging through the multiverse of modern web development! From React dimensions to Node.js realms, 
                I craft digital experiences that would make even Spider-Man jealous of my web-slinging skills.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-6 justify-center flex-wrap"
            >
              <Button className="comic-font bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 border-none text-white py-4 px-8" style={{ fontSize: '1.2rem' }}>
                VIEW PROJECTS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="comic-font border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black py-4 px-8" style={{ fontSize: '1.2rem' }}>
                THWIP ME!
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Comic Elements */}
        <div className="absolute top-10 left-10 neon-purple comic-font" style={{ fontSize: '2rem', transform: 'rotate(-15deg)' }}>
          POW!
        </div>
        <div className="absolute top-32 right-16 neon-blue comic-font" style={{ fontSize: '1.5rem', transform: 'rotate(12deg)' }}>
          THWIP!
        </div>
        <div className="absolute bottom-32 left-20 neon-red comic-font" style={{ fontSize: '1.8rem', transform: 'rotate(-8deg)' }}>
          BAM!
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Student Projects */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-blue-900/10 relative">
        <div className="halftone-bg"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="comic-panel inline-block p-6 mb-8">
              <h2 className="neon-red comic-font" style={{ fontSize: '4rem', fontWeight: 900 }}>
                STUDENT ADVENTURES!
              </h2>
            </div>
            <p className="comic-text text-blue-400 max-w-2xl mx-auto" style={{ fontSize: '1.4rem' }}>
              My origin story begins here - the projects that gave me my web-slinging powers!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100, rotateY: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(255, 0, 150, 0.3)"
                }}
                className="comic-panel comic-zoom"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="bg-transparent border-none h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 hover:scale-110 hover:hue-rotate-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 left-4 neon-purple comic-font text-sm transform -rotate-12">
                      KAPOW!
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="neon-blue comic-font mb-3" style={{ fontSize: '1.3rem' }}>
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-300 comic-text mb-4" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-gradient-to-r from-red-500/20 to-blue-500/20 border border-red-500 text-red-400 comic-text">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="link" className="comic-font text-blue-400 hover:text-blue-300 p-0 text-lg">
                      ENTER PROJECT <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Startup Projects */}
      <section className="py-20 px-6 bg-gradient-to-b from-red-900/10 to-purple-900/10 relative">
        <div className="halftone-bg"></div>
        <div className="web-pattern"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="speech-bubble mb-8 inline-block max-w-2xl">
              <p className="comic-text" style={{ fontSize: '1.2rem' }}>
                "From friendly neighborhood projects to universe-saving startups!"
              </p>
            </div>
            <div className="comic-panel inline-block p-6">
              <h2 className="neon-blue comic-font" style={{ fontSize: '4rem', fontWeight: 900 }}>
                STARTUP UNIVERSE!
              </h2>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {startupProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateX: -20 }}
                whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: index * 0.3, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  rotateX: 2,
                  boxShadow: "0 30px 60px rgba(0, 255, 255, 0.3)"
                }}
                className="comic-panel"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card className="bg-transparent border-none h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-all duration-700 hover:scale-110 hover:saturate-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="comic-font bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-2 border-black" style={{ fontSize: '1rem' }}>
                        <Zap className="h-4 w-4 mr-1" />
                        {project.impact}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4 neon-red comic-font" style={{ fontSize: '1.2rem', transform: 'rotate(-10deg)' }}>
                      BOOM!
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="neon-purple comic-font mb-4" style={{ fontSize: '1.8rem' }}>
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-300 comic-text mb-6" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400 text-blue-400 comic-text px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="link" className="comic-font text-red-400 hover:text-red-300 p-0" style={{ fontSize: '1.2rem' }}>
                      DIMENSION JUMP <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-blue-900/10 relative">
        <div className="halftone-bg"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="comic-panel inline-block p-6 mb-8">
              <h2 className="neon-purple comic-font" style={{ fontSize: '4rem', fontWeight: 900 }}>
                ORIGIN STORY!
              </h2>
            </div>
            <p className="comic-text text-red-400 max-w-2xl mx-auto" style={{ fontSize: '1.4rem' }}>
              Every hero has a beginning. HereEvery hero has a beginning. Here's how I got bit by the coding spider!apos;s how I got bit by the coding spider!
            </p>
          </motion.div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Enhanced Timeline Web */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-pink-500 via-cyan-400 to-yellow-400 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -150 : 150,
                  rotateY: index % 2 === 0 ? -45 : 45
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div 
                    className="comic-panel p-8 comic-zoom"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: index % 2 === 0 ? 5 : -5,
                      boxShadow: "0 20px 40px rgba(255, 255, 0, 0.3)"
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-blue-400 mr-3" />
                      <span className="neon-blue comic-font" style={{ fontSize: '1.5rem' }}>{item.year}</span>
                    </div>
                    <h3 className="neon-red comic-font mb-3" style={{ fontSize: '1.6rem' }}>
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="text-purple-400 comic-text mb-3" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                      {item.company}
                    </p>
                    <p className="text-gray-300 comic-text" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                      {item.description}
                    </p>
                    
                    {/* Comic effect elements */}
                    <div className={`absolute ${index % 2 === 0 ? '-top-4 -right-4' : '-top-4 -left-4'} neon-blue comic-font text-sm transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}>
                      WHAP!
                    </div>
                  </motion.div>
                </div>
                
                {/* Enhanced Timeline Spider Web Node */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 z-10"
                  whileHover={{ scale: 1.3, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-blue-400 rounded-full border-4 border-white shadow-lg">
                    <div className="w-full h-full bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                  {/* Web strands */}
                  <div className="absolute inset-0 w-16 h-16 -translate-x-4 -translate-y-4">
                    <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-2 border border-red-400/20 rounded-full animate-pulse"></div>
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
            <div className="speech-bubble mb-8 inline-block max-w-2xl">
              <p className="comic-text" style={{ fontSize: '1.3rem' }}>
                "Every spider needs its web of accomplishments!"
              </p>
            </div>
            <div className="comic-panel inline-block p-6">
              <h2 className="neon-red comic-font" style={{ fontSize: '4rem', fontWeight: 900 }}>
                TROPHY ROOM!
              </h2>
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
                  boxShadow: "0 25px 50px rgba(255, 255, 0, 0.4)"
                }}
                className="comic-panel p-8 comic-zoom"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <Award className="h-12 w-12 text-yellow-400 filter drop-shadow-lg" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="neon-blue comic-font mb-3" style={{ fontSize: '1.5rem' }}>
                      {achievement.title.toUpperCase()}
                    </h3>
                    <p className="neon-purple comic-font mb-4" style={{ fontSize: '1.2rem' }}>
                      {achievement.year}
                    </p>
                    <p className="text-gray-300 comic-text" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                {/* Comic effect */}
                <div className="absolute -top-3 -right-3 neon-red comic-font text-sm transform rotate-12">
                  WHAM!
                </div>
                
                {/* Trophy shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent -skew-x-12 animate-pulse"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Floating achievement badges */}
          <div className="absolute top-20 left-10 neon-purple comic-font animate-bounce" style={{ fontSize: '1.5rem', transform: 'rotate(-20deg)' }}>
            HERO!
          </div>
          <div className="absolute bottom-20 right-10 neon-blue comic-font animate-pulse" style={{ fontSize: '1.3rem', transform: 'rotate(15deg)' }}>
            LEGEND!
          </div>
        </div>
      </section>

      {/* Portal Transition */}
      <div className="portal-transition h-32 relative">
        <div className="dimension-rift h-full w-full"></div>
      </div>

      {/* Contact */}
      <section className="py-20 px-6 bg-gradient-to-t from-black via-purple-900/20 to-red-900/10 relative min-h-screen flex items-center">
        <div className="halftone-bg"></div>
        <div className="web-pattern"></div>
        
        {/* Final swinging Spider-Man */}
        <div className="spider-swing" style={{ top: '30%', animationDelay: '2s', animationDuration: '12s' }}>
          <div className="spider-silhouette"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="speech-bubble mb-12 inline-block max-w-3xl">
              <p className="comic-text" style={{ fontSize: '1.4rem' }}>
                "Your friendly neighborhood developer is just a message away! Let"Your friendly neighborhood developer is just a message away! Let's team up and save the digital world together!"apos;s team up and save the digital world together!"
              </p>
            </div>
            
            <div className="comic-panel inline-block p-8 mb-12">
              <h2 className="neon-red comic-font" style={{ fontSize: '4.5rem', fontWeight: 900 }}>
                ASSEMBLE!
              </h2>
            </div>
            
            <motion.p 
              className="text-blue-400 comic-text mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ fontSize: '1.4rem', lineHeight: '1.6' }}
            >
              Ready to swing into action? Whether you need a hero for your next project or just want to chat about the multiverse of possibilities, IReady to swing into action? Whether you need a hero for your next project or just want to chat about the multiverse of possibilities, I'm here to help!apos;m here to help!
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="comic-font bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 border-2 border-white text-white py-4 px-8" style={{ fontSize: '1.3rem' }}>
                <Mail className="h-5 w-5 mr-3" />
                alex.chen@email.com
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateY: -10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="comic-font border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black py-4 px-8" style={{ fontSize: '1.3rem' }}>
                <Github className="h-5 w-5 mr-3" />
                GitHub Portal
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="comic-font border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black py-4 px-8" style={{ fontSize: '1.3rem' }}>
                <Linkedin className="h-5 w-5 mr-3" />
                LinkedIn Web
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="comic-panel inline-block p-6"
          >
            <div className="flex items-center justify-center text-white">
              <MapPin className="h-6 w-6 mr-3 text-red-400" />
              <span className="comic-text neon-blue" style={{ fontSize: '1.2rem' }}>
                San Francisco, CA - Earth-616
              </span>
            </div>
          </motion.div>
          
          {/* Final comic elements */}
          <div className="absolute top-16 left-16 neon-purple comic-font animate-pulse" style={{ fontSize: '2rem', transform: 'rotate(-25deg)' }}>
            EXCELSIOR!
          </div>
          <div className="absolute bottom-16 right-16 neon-red comic-font animate-bounce" style={{ fontSize: '1.8rem', transform: 'rotate(20deg)' }}>
            THWIP!
          </div>
        </div>
        
        {/* Final web decoration */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>
    </div>
  );
}