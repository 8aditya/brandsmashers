
import React from "react";

const NotificationBadge = ({ position }: { position: string }) => {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-24",
    "middle-right": "top-1/3 right-16",
    "bottom-right": "bottom-1/4 right-8",
  }[position] || "top-4 right-4";

  return (
    <div className={`absolute ${positionClasses} z-10 animate-float`}>
      <div className="notification-badge w-12 h-12 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
        <span className="text-xl">N</span>
      </div>
    </div>
  );
};

export default NotificationBadge;
