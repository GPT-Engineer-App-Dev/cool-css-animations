import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("pulse");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-md z-50">
        <nav className="container mx-auto px-4 py-4">
          <Tabs value={activeTab} className="w-full justify-center">
            <TabsList>
              <TabsTrigger value="pulse" onClick={() => scrollToSection('pulse')}>Pulse</TabsTrigger>
              <TabsTrigger value="bounce" onClick={() => scrollToSection('bounce')}>Bounce</TabsTrigger>
              <TabsTrigger value="spin" onClick={() => scrollToSection('spin')}>Spin</TabsTrigger>
              <TabsTrigger value="shake" onClick={() => scrollToSection('shake')}>Shake</TabsTrigger>
              <TabsTrigger value="fade" onClick={() => scrollToSection('fade')}>Fade</TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-20">
        <section id="pulse" className="min-h-screen flex items-center justify-center">
          <Card className="w-64 h-64">
            <CardContent className="flex items-center justify-center h-full">
              <div className="w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
            </CardContent>
          </Card>
        </section>

        <section id="bounce" className="min-h-screen flex items-center justify-center">
          <Card className="w-64 h-64">
            <CardContent className="flex items-center justify-center h-full">
              <div className="w-32 h-32 bg-green-500 rounded-full animate-bounce"></div>
            </CardContent>
          </Card>
        </section>

        <section id="spin" className="min-h-screen flex items-center justify-center">
          <Card className="w-64 h-64">
            <CardContent className="flex items-center justify-center h-full">
              <div className="w-32 h-32 bg-red-500 rounded-full animate-spin"></div>
            </CardContent>
          </Card>
        </section>

        <section id="shake" className="min-h-screen flex items-center justify-center">
          <Card className="w-64 h-64">
            <CardContent className="flex items-center justify-center h-full">
              <div className="w-32 h-32 bg-yellow-500 rounded-full animate-shake"></div>
            </CardContent>
          </Card>
        </section>

        <section id="fade" className="min-h-screen flex items-center justify-center">
          <Card className="w-64 h-64">
            <CardContent className="flex items-center justify-center h-full">
              <div className="w-32 h-32 bg-purple-500 rounded-full animate-fade"></div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;