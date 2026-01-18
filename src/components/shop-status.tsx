"use client";

import { useEffect, useState } from "react";

const ShopStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      
      // Shop hours: 09:00 - 23:00
      const isWithinHours = hours >= 9 && hours < 23;
      setIsOpen(isWithinHours);
      
      // Format current time
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-800/20 bg-background/90 backdrop-blur-sm shadow-sm">
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-400" : "bg-red-400"} self-center`}
        />
        <span className={`flex items-center h-5 text-sm font-medium leading-none ${isOpen ? "text-green-400" : "text-red-400"}`}>
          {isOpen ? "Open" : "Closed"}
        </span>
      </div>
      <span className="flex items-center h-5 text-xs text-foreground/80 font-medium leading-none">
        {currentTime} • Hours: 09:00–23:00
      </span>
    </div>
  );
};

export default ShopStatus;
