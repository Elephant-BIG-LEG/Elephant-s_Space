import { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // === IntersectionObserver — reveal 动画 + 技能条 ===
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar) => {
              bar.style.width = bar.dataset.width;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    
    // === 3D Tilt 效果 — 项目卡片 ===
    const tiltCards = document.querySelectorAll('.project-card');
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
    
    // === 鼠标跟随光晕 — Hero 区域 ===
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const glowEl = document.createElement('div');
      glowEl.style.cssText = `
        position: absolute;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(124, 58, 237, 0.08), transparent 70%);
        pointer-events: none;
        z-index: 0;
        transform: translate(-50%, -50%);
        left: 0;
        top: 0;
        transition: left 0.3s ease-out, top 0.3s ease-out;
      `;
      heroSection.appendChild(glowEl);
      
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        glowEl.style.left = (e.clientX - rect.left) + 'px';
        glowEl.style.top = (e.clientY - rect.top) + 'px';
      });
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </div>
  );
}

export default App;
