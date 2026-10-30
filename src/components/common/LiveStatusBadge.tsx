import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface LiveStatusBadgeProps {
  className?: string;
  variant?: 'subtle' | 'pill' | 'compact';
}

export const LiveStatusBadge: React.FC<LiveStatusBadgeProps> = ({
  className = '',
  variant = 'pill',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeMessage, setTimeMessage] = useState('Open 10 AM – 10 PM');

  useEffect(() => {
    const calculateStatus = () => {
      // Calculate Indian Standard Time (UTC + 5:30)
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 3600000 * 5.5);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentTimeDecimal = hours + minutes / 60;

      // Doppio opening hours: 10:00 to 22:00 every day
      const openHour = 10.0;
      const closeHour = 22.0;

      if (currentTimeDecimal >= openHour && currentTimeDecimal < closeHour) {
        setIsOpen(true);
        const hoursLeft = Math.floor(closeHour - currentTimeDecimal);
        if (hoursLeft <= 1) {
          const minsLeft = Math.floor((closeHour - currentTimeDecimal) * 60);
          setTimeMessage(`Open Now • Closes in ${minsLeft}m`);
        } else {
          setTimeMessage('Open Now • Closes 10:00 PM');
        }
      } else {
        setIsOpen(false);
        if (currentTimeDecimal < openHour) {
          setTimeMessage('Opens Today at 10:00 AM');
        } else {
          setTimeMessage('Closed • Opens Tomorrow 10:00 AM');
        }
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (variant === 'compact') {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${className}`}>
        <span
          className={`w-2 h-2 rounded-full ${
            isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
          }`}
        />
        <span className={isOpen ? 'text-emerald-700' : 'text-amber-800'}>{timeMessage}</span>
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
        isOpen
          ? 'bg-emerald-950/20 text-emerald-900 border border-emerald-600/30 backdrop-blur-md'
          : 'bg-amber-950/20 text-amber-900 border border-amber-600/30 backdrop-blur-md'
      } ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            isOpen ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
        />
      </span>
      <Clock className="w-3.5 h-3.5 opacity-70" />
      <span>{timeMessage}</span>
    </div>
  );
};
