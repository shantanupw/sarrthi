
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-card" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              Sarrthi IAS — Credible Faculty, Quality Content, Affordable Courses. Your trusted partner for UPSC CSE preparation.
            </p>
            <address className="space-y-2 text-sm text-muted-foreground not-italic">
              <p><strong className="text-foreground">Phone:</strong> <a href="tel:+919569093856" className="hover:text-foreground transition-colors" aria-label="Call Sarrthi IAS">+91 95690 93856</a></p>
              <p><strong className="text-foreground">Email:</strong> <a href="mailto:ask@sarrthi.com" className="hover:text-foreground transition-colors" aria-label="Email Sarrthi IAS">ask@sarrthi.com</a></p>
              <p><strong className="text-foreground">Address:</strong> Shop No -6, 2nd Floor, Front Side, Near Grover Mithaivala, Bada Bazar Rd, Delhi, 110060</p>
            </address>
            <div className="flex items-center gap-4" role="list" aria-label="Social media links">
              <a href="https://youtube.com/@sarrthi" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow Sarrthi IAS on YouTube" role="listitem">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2c.313-1.732.467-3.482.46-5.33a29.005 29.005 0 00-.46-5.33z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://instagram.com/sarrthi_ias" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Follow Sarrthi IAS on Instagram" role="listitem">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/sarrthi-ias" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Connect with Sarrthi IAS on LinkedIn" role="listitem">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://t.me/sarrthi_ias" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" aria-label="Join Sarrthi IAS Telegram channel" role="listitem">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M21 2l-2 18-4-4-3 3-1-6-6-1 3-3-4-4 17-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <nav className="space-y-4" aria-labelledby="courses-heading">
            <h4 id="courses-heading" className="font-semibold text-lg text-foreground">UPSC Courses</h4>
            <ul className="space-y-3" role="list">
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GS Foundation 2026 course">GS Foundation 2026</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GS Foundation Plus course">GS Foundation Plus</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Beginners Kit course">Beginners Kit</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GS Mains Comprehensive course">GS Mains Comprehensive</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Optional Subjects course">Optional Subjects</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="CSAT Preparation course">CSAT Preparation</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Test Series course">Test Series</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="View all courses">All Courses</a></li>
            </ul>
          </nav>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">UPSC Preparation</h4>
            <ul className="space-y-3">
              <li><a href="#mentorship" className="text-muted-foreground hover:text-foreground transition-colors">Free Mentorship</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Prelims Preparation</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Mains Preparation</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Interview Guidance</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Answer Writing</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Current Affairs</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Study Strategy</a></li>
              <li><a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Previous Year Questions</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">About Sarrthi IAS</h4>
            <ul className="space-y-3">
              <li><a href="#faculty" className="text-muted-foreground hover:text-foreground transition-colors">Our Faculty</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Student Reviews</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Results & Rankings</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground">Support & Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Download App</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Study Materials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Free Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Student Support</a></li>
              <li><a href="#policies" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#policies" className="text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</a></li>
              <li><a href="#policies" className="text-muted-foreground hover:text-foreground transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-semibold text-foreground mb-3">Quick Links</h5>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Courses</a>
                <a href="#faculty" className="text-muted-foreground hover:text-foreground transition-colors">Faculty</a>
                <a href="#mentorship" className="text-muted-foreground hover:text-foreground transition-colors">Mentorship</a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-3">Popular Searches</h5>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">UPSC CSE 2026</a>
                <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">GS Foundation</a>
                <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">Mains Course</a>
                <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">IAS Coaching</a>
                <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">UPSC Strategy</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-foreground mb-3">Locations</h5>
              <div className="text-sm text-muted-foreground">
                <p><strong className="text-foreground">Delhi Center:</strong></p>
                <p>Bada Bazar Road, Delhi - 110060</p>
                <p className="mt-2"><strong className="text-foreground">Online Classes:</strong></p>
                <p>Available Pan India</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm pt-8 border-t border-border">
            <div>© 2025 Sarrthi IAS (Guiding Light Education Technologies Pvt Ltd). All rights reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#policies" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#policies" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#policies" className="hover:text-foreground transition-colors">Refunds</a>
              <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
