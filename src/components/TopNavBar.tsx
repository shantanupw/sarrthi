import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Home, BookOpen, Users, HeartHandshake, Phone, Book, Sun, Moon, LayoutDashboard, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const TopNavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    } catch {
      return false;
    }
  });
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active page based on current route
  const getActivePage = () => {
    const path = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    
    if (path === '/about') return 'about';
    if (path === '/dashboard') return 'dashboard';
    if (path === '/courses') {
      // If on books page (courses with category=books), show books as active
      if (searchParams.get('category') === 'books') return 'books';
      return 'courses';
    }
    if (path.startsWith('/course/')) return 'courses';
    if (path === '/' && location.hash) return location.hash.substring(1);
    if (path === '/') return 'home';
    return 'home';
  };
  
  const activePage = getActivePage();

  useEffect(() => {
    // Apply and persist the theme when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
      try { localStorage.setItem('theme', 'dark'); } catch {}
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
      try { localStorage.setItem('theme', 'light'); } catch {}
    }
  }, [isDarkMode]);

  // Handle scroll detection for show/hide nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(currentScrollY > 150); // Only show after scrolling down 150px initially
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (page === 'home') {
      navigate('/');
    } else if (page === 'about') {
      navigate('/about');
    } else if (page === 'courses') {
      navigate('/courses');
    } else if (page === 'dashboard') {
      navigate('/dashboard');
    } else if (page === 'books') {
      // Navigate to courses with books filter
      navigate('/courses?category=books');
    } else {
      // For sections that exist on home page, navigate to home with hash
      if (location.pathname === '/') {
        const element = document.getElementById(page);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = `#${page}`;
        }
      } else {
        navigate(`/#${page}`);
      }
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigationItems = [
    { key: 'home', label: 'Home', icon: Home },
    { key: 'about', label: 'About', icon: Info },
    { key: 'courses', label: 'Courses', icon: BookOpen },
    { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { key: 'books', label: 'Books', icon: Book },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg">
      <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" aria-label="Sarrthi IAS Home" className="inline-flex">
                <Logo />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={handleNavClick(item.key)}
                  className={cn(
                    "flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    activePage === item.key
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <item.icon size={16} className="mr-2" />
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Right side - Theme toggle, CTA and Login */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Theme toggle */}
              <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-full">
                <button
                  onClick={toggleTheme}
                  className={`p-1.5 rounded-full transition-all duration-200 ${
                    !isDarkMode 
                      ? 'bg-background shadow-sm text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Sun size={14} />
                </button>
                <button
                  onClick={toggleTheme}
                  className={`p-1.5 rounded-full transition-all duration-200 ${
                    isDarkMode 
                      ? 'bg-background shadow-sm text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Moon size={14} />
                </button>
              </div>
              
              <Button variant="default" className="brand-gradient" size="sm">
                Get Free Callback
              </Button>
              
              <Button variant="outline" size="sm">
                Login
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={handleNavClick(item.key)}
                    className={cn(
                      "flex items-center w-full px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      activePage === item.key
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon size={16} className="mr-2" />
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile theme toggle */}
                <div className="flex items-center justify-between px-3 py-2 mt-4">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-full">
                    <button
                      onClick={toggleTheme}
                      className={`p-1.5 rounded-full transition-all duration-200 ${
                        !isDarkMode 
                          ? 'bg-background shadow-sm text-foreground' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Sun size={14} />
                    </button>
                    <button
                      onClick={toggleTheme}
                      className={`p-1.5 rounded-full transition-all duration-200 ${
                        isDarkMode 
                          ? 'bg-background shadow-sm text-foreground' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Moon size={14} />
                    </button>
                  </div>
                </div>
                
                <div className="px-3 py-2 space-y-2">
                  <Button variant="default" className="brand-gradient w-full">
                    Get Free Callback
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default TopNavBar;