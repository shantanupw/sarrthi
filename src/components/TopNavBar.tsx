import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const TopNavBar = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        {/* Left side - Contact info */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@sarrthi.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon-Sat: 9AM-6PM</span>
          </div>
        </div>

        {/* Center - Logo for mobile */}
        <div className="md:hidden">
          <Logo />
        </div>

        {/* Right side - CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Delhi, India</span>
          </div>
          <Button 
            variant="secondary" 
            size="sm" 
            className="bg-background text-foreground hover:bg-muted text-xs px-3 py-1"
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;