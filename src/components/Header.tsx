
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, BookOpen, Home, Book, LayoutDashboard, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    } catch {
      return false;
    }
  }); // Default to light mode unless persisted
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active page based on current route
  const getActivePage = () => {
    const path = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    
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

  // Handle scroll detection for blur effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 150); // Only show floating header after more scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (page === 'dashboard') {
      navigate('/dashboard');
    } else if (page === 'courses') {
      navigate('/courses');
    } else if (page === 'books') {
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

  return (
    <div className={cn(
      "sticky top-0 z-50 pt-8 px-4 transition-all duration-300",
      isScrolled && "backdrop-blur-md bg-background/80 shadow-lg"
    )}>
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <Link to="/" aria-label="Sarrthi IAS Home" className="inline-flex">
            <Logo />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className={cn(
            "rounded-full px-1 py-1 border border-border transition-all duration-300",
            isScrolled 
              ? "backdrop-blur-lg bg-background/90 shadow-xl" 
              : "backdrop-blur-md bg-background/80 shadow-lg"
          )}>
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => {
              if (value) {
                const event = new MouseEvent('click', { bubbles: true });
                handleNavClick(value)(event as any);
              }
            }}>
              <ToggleGroupItem 
                value="courses" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'courses' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('courses')}
              >
                <BookOpen size={16} className="inline-block mr-1.5" /> Courses
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="dashboard" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'dashboard' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={() => navigate('/dashboard')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5" /> Dashboard
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="books" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'books' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('books')}
              >
                <Book size={16} className="inline-block mr-1.5" /> Books
              </ToggleGroupItem>
              
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-lg py-4 px-6 border border-border rounded-2xl shadow-xl z-50">
            <div className="flex flex-col gap-4">
              <a 
                href="/" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'home' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('home')}
              >
                <Home size={16} className="inline-block mr-1.5" /> Home
              </a>
              <a 
                href="/courses" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'courses' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('courses')}
              >
                <BookOpen size={16} className="inline-block mr-1.5" /> Courses
              </a>
              <a 
                href="/dashboard" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'dashboard' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={() => navigate('/dashboard')}
              >
                <LayoutDashboard size={16} className="inline-block mr-1.5" /> Dashboard
              </a>
              <a 
                href="/courses?category=books" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'books' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('books')}
              >
                <Book size={16} className="inline-block mr-1.5" /> Books
              </a>
              
              
              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
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
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-full">
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-all duration-200 ${
                !isDarkMode 
                  ? 'bg-background shadow-sm text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Sun size={16} />
            </button>
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-background shadow-sm text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Moon size={16} />
            </button>
          </div>
          <Button variant="default" className="brand-gradient" size="sm">
            Get Free Callback
          </Button>
          <Button variant="outline" size="sm">
            Login
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
