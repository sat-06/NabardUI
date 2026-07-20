import React, { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Impact from './components/Impact';
import Differentiators from './components/Differentiators';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  // IntersectionObserver — reveal-on-scroll for elements with .reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-midnight antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Architecture />
        <Impact />
        <Differentiators />
        <TechStack />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
