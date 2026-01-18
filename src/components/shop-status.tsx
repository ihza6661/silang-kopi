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
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span
          className={`w-2 h-2 rounded-full ${
            isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"
          }`}
        />
        <span
          className={`text-sm font-medium ${
            isOpen ? "text-green-700" : "text-red-700"
          }`}
        >
          {isOpen ? "Open" : "Closed"}
        </span>
      </div>
      <span className="text-xs text-muted-foreground">
        {currentTime} • Hours: 09:00–23:00
      </span>
    </div>
  );
};

export default ShopStatus;
