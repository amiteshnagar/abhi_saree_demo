import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="bg-brand-maroon text-brand-ivory text-xs sm:text-sm py-2 px-4 border-b border-brand-maroonHover text-center font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
        <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0 animate-pulse" aria-hidden="true" />
        <span>Discover timeless Indian elegance at Abhi Saree Collection, Pachore.</span>
      </div>
    </aside>
  );
}