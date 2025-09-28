
import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Faculty from '@/components/Faculty';
import Testimonials from '@/components/Testimonials';
import AppDownload from '@/components/AppDownload';
import Mentorship from '@/components/Mentorship';
import Contact from '@/components/Contact';
import Policies from '@/components/Policies';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <TopNavBar />
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Mentorship />
        <Faculty />
        <Testimonials />
        <AppDownload />
        <Contact />
        <Policies />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
