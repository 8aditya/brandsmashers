
import React from "react";

const ArtGallery = () => {
  const galleryImages = [
    "/lovable-uploads/4b612c12-3add-401f-acc7-e878fffb4abd.png", // Using placeholder - in a real implementation we'd use actual gallery images
  ];

  return (
    <div className="rounded-xl overflow-hidden border-2 border-white/30 shadow-2xl w-full max-w-lg">
      <div className="bg-black/80 p-2 flex items-center justify-between border-b border-gray-700">
        <div className="text-white text-sm font-medium flex items-center gap-2">
          <span className="bg-gray-700 text-white text-xs py-1 px-2 rounded-full">Art style gallery</span>
          <div className="border border-gray-700 rounded-full w-6 h-6 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
        
        <div className="flex gap-1">
          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="p-2 bg-black/70">
        <div className="flex flex-wrap gap-1 mb-2">
          <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded-full">#minimalist</div>
          <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded-full">#3D</div>
          <div className="bg-purple-800 text-white text-xs py-1 px-2 rounded-full">#digital</div>
          <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded-full">#abstract</div>
          <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded-full">#cartoon</div>
          <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded-full">#realistic</div>
          <div className="bg-pink-700 text-white text-xs py-1 px-2 rounded-full">#digital photo</div>
          <div className="bg-orange-600 text-white text-xs py-1 px-2 rounded-full">#anime</div>
          <div className="bg-gray-800 text-white text-xs py-1 px-2 rounded-full">+14</div>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 space-y-2">
            <div className="h-36 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden"></div>
            <div className="h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden"></div>
          </div>
          
          <div className="col-span-1 space-y-2">
            <div className="h-28 bg-amber-200 rounded-lg overflow-hidden"></div>
            <div className="h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg overflow-hidden"></div>
          </div>
          
          <div className="col-span-1 space-y-2">
            <div className="h-44 bg-gradient-to-b from-cyan-300 to-blue-500 rounded-lg overflow-hidden"></div>
            <div className="h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtGallery;
