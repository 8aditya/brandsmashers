
import React from "react";
import NotificationBadge from "../components/NotificationBadge";
import ArtGallery from "../components/ArtGallery";
import AIStudio from "../components/AIStudio";

const Index = () => {
  return (
    <div className="w-full min-h-screen blue-gradient-bg relative overflow-hidden">
      {/* Notification badges */}
      <NotificationBadge position="top-left" />
      <NotificationBadge position="top-right" />
      <NotificationBadge position="middle-right" />
      <NotificationBadge position="bottom-right" />
      
      {/* Main content */}
      <div className="container mx-auto px-6 py-16 relative z-0">
        {/* Header */}
        <h1 className="text-center text-white text-3xl md:text-4xl font-bold mb-16 mt-4">
          Saagas is tackling these challenges head-on using
          <br />
          <span className="text-amber-100">FairEx and FairGen</span>
        </h1>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - FairEx */}
          <div className="space-y-6">
            <h2 className="text-white text-4xl font-bold">FairEx</h2>
            <p className="text-white text-xl leading-relaxed">
              A marketplace for fair, transparent and secure 
              licensing of rights, ensuring that true creators are 
              treated with respect, dignity and fairness
            </p>
          </div>
          
          {/* Right column - ArtGallery */}
          <div className="flex justify-end">
            <ArtGallery />
          </div>
        </div>
        
        {/* Reversed two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - AIStudio */}
          <div className="flex justify-start lg:order-1 lg:order-none">
            <AIStudio />
          </div>
          
          {/* Right column - FairGen */}
          <div className="space-y-6 lg:order-2">
            <h2 className="text-white text-4xl font-bold">FairGen</h2>
            <p className="text-white text-xl leading-relaxed">
              An AI Studio with state of the art image generation
              capabilities and feature rich canvas, delivering an
              exceptional creative experience
            </p>
          </div>
        </div>
        
        {/* Footer text */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-white text-xl leading-relaxed">
            Working in tandem FairEx and FairGen enable AI Creators and Brands to ethically source required digital content then use
            those to create personalized commercial content with full legal protection
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="get-started-btn text-white font-semibold py-4 px-12 rounded-full text-lg">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
