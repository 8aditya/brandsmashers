
import React from "react";

const AIStudio = () => {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-white/30 shadow-2xl w-full max-w-md">
      <div className="bg-gray-900 text-white p-3 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-xs">A</span>
          </div>
          <span className="text-sm font-medium">ArtStyle</span>
        </div>
        <div className="flex space-x-1">
          <button className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-xs">-</span>
          </button>
          <button className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-xs">×</span>
          </button>
        </div>
      </div>
      
      <div className="bg-gray-900 h-72 relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gray-800 border-r border-gray-700">
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-8 h-8 rounded bg-gray-700"></div>
            <div className="w-8 h-8 rounded bg-gray-700"></div>
            <div className="w-8 h-8 rounded bg-gray-700"></div>
          </div>
        </div>
        
        <div className="ml-16 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-white text-xs">Select style</div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-700 rounded-sm"></div>
              <span className="text-white text-xs mx-1">▼</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded p-2 mb-4">
            <div className="text-white text-xs mb-2">Search prompt or option</div>
            <div className="w-full h-5 bg-gray-700 rounded-sm"></div>
          </div>
          
          <div className="text-white text-xs mb-2">Popular styles</div>
          
          <div className="flex gap-2">
            <div className="w-20 h-24 bg-gradient-to-r from-green-300 to-blue-300 rounded-md"></div>
            <div className="flex flex-col h-24 justify-between">
              <div className="w-28 h-5 bg-purple-500/30 rounded-sm"></div>
              <div className="w-28 h-5 bg-pink-500/30 rounded-sm"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-16 right-0 bg-gray-800 p-2 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <div className="bg-blue-600 text-white text-xs py-1 px-3 rounded-full">
              Create
            </div>
            <div className="flex space-x-2">
              <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStudio;
