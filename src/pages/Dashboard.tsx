import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DisciplineEngineSection from '@/components/dashboard/DisciplineEngine';
import StudyMaterialsSection from '@/components/dashboard/StudyMaterials';
import QuickActions from '@/components/dashboard/QuickActions';
import PerformanceMetrics from '@/components/dashboard/PerformanceMetrics';
import StudyPlan from '@/components/dashboard/StudyPlan';
import Logo from '@/components/Logo';
import { 
  Brain, 
  Upload, 
  TrendingUp, 
  BookOpen, 
  BarChart3, 
  Globe, 
  Users, 
  Smartphone,
  Menu,
  X,
  Target,
  MessageCircle,
  Flame,
  Clock,
  CheckCircle,
  Zap,
  FileText,
  Calendar,
  Award,
  Trophy,
  Wifi,
  WifiOff,
  Sun,
  Moon,
  Phone,
  HeartHandshake,
  GraduationCap,
  Library,
  PenTool,
  Lightbulb,
  Settings,
  HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Link, useNavigate } from 'react-router-dom';

// Dashboard Header Component (integrated into sidebar)
const DashboardHeader = ({ isDarkMode, setIsDarkMode }: {
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 border-b border-border">
      <div className="flex items-center justify-between mb-6">
        <Link to="/" aria-label="Sarrthi IAS Home" className="inline-flex">
          <Logo />
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/')}
          className="text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Quick Navigation */}
      <div className="space-y-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/courses')}
          className="w-full justify-start text-muted-foreground hover:text-foreground"
        >
          <BookOpen className="h-4 w-4 mr-2" />
          Courses
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/#faculty')}
          className="w-full justify-start text-muted-foreground hover:text-foreground"
        >
          <Users className="h-4 w-4 mr-2" />
          Faculty
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/#mentorship')}
          className="w-full justify-start text-muted-foreground hover:text-foreground"
        >
          <HeartHandshake className="h-4 w-4 mr-2" />
          Mentorship
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/#contact')}
          className="w-full justify-start text-muted-foreground hover:text-foreground"
        >
          <Phone className="h-4 w-4 mr-2" />
          Contact
        </Button>
      </div>

      {/* Theme Toggle */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Theme</span>
          <div className="flex items-center gap-2">
            <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={() => setIsDarkMode(!isDarkMode)} 
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Sidebar Component
const DashboardSidebar = ({ activeSection, setActiveSection, isOpen, setIsOpen, isDarkMode, setIsDarkMode }: {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
}) => {
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'study-plan', label: 'Study Plan', icon: Calendar },
    { id: 'ai-mentor', label: 'AI Mentor', icon: Brain },
    { id: 'evaluation', label: 'Answer Evaluation', icon: Upload },
    { id: 'quick-actions', label: 'Quick Actions', icon: Zap },
    { id: 'performance', label: 'Performance', icon: BarChart3 },
    { id: 'discipline', label: 'Discipline Engine', icon: TrendingUp },
    { id: 'materials', label: 'Study Materials', icon: BookOpen },
    { id: 'practice', label: 'Practice Center', icon: FileText },
    { id: 'current-affairs', label: 'Current Affairs', icon: Globe },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'platform', label: 'Platform', icon: Smartphone },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-screen w-80 bg-background border-r border-border z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "lg:translate-x-0 lg:z-auto lg:h-screen lg:overflow-y-auto"
      )}>
        {/* Integrated Header */}
        <DashboardHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <div className="p-6">
          {/* Navigation Items */}
          <nav className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Dashboard</h3>
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start h-12",
                    activeSection === item.id && "bg-primary text-primary-foreground"
                  )}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                >
                  <Icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* Quick Stats */}
          <div className="mt-8 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-primary" />
              Quick Stats
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Flame className="h-3 w-3 text-orange-500" />
                  Study Streak
                </span>
                <Badge variant="secondary" className="font-medium">47 days</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Target className="h-3 w-3 text-green-500" />
                  Today's Progress
                </span>
                <Badge className="font-medium">75%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Award className="h-3 w-3 text-blue-500" />
                  Community Rank
                </span>
                <Badge variant="outline" className="font-medium">#47</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Clock className="h-3 w-3 text-purple-500" />
                  Study Hours
                </span>
                <Badge variant="secondary" className="font-medium">156h</Badge>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              Quick Links
            </h3>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start text-xs"
                onClick={() => setActiveSection('practice')}
              >
                <FileText className="h-3 w-3 mr-2" />
                Today's Mock Test
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start text-xs"
                onClick={() => setActiveSection('current-affairs')}
              >
                <Globe className="h-3 w-3 mr-2" />
                Daily Current Affairs
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start text-xs"
                onClick={() => setActiveSection('ai-mentor')}
              >
                <Brain className="h-3 w-3 mr-2" />
                Ask AI Mentor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Overview Component
const OverviewSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome to Your UPSC Dashboard</h1>
        <p className="text-muted-foreground">
          Your AI-powered personal mentor for disciplined UPSC preparation
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                <Flame className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Study Streak</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">75%</p>
                <p className="text-sm text-muted-foreground">Today's Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">#47</p>
                <p className="text-sm text-muted-foreground">Community Rank</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-muted-foreground">AI Mentor</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Tasks</CardTitle>
          <CardDescription>Your personalized study plan for today</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium">GS Paper 1 - Modern History</span>
              </div>
              <Badge variant="secondary">Completed</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium">Current Affairs - Daily News</span>
              </div>
              <Badge variant="secondary">Completed</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium">Ethics Case Study Practice</span>
              </div>
              <Badge variant="secondary">Completed</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-600" />
                <span className="font-medium">Essay Writing Practice</span>
              </div>
              <Badge variant="outline">In Progress</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// AI Mentor Component
const AIMentorSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Personal AI Mentor</h1>
        <p className="text-muted-foreground">
          24x7 AI-powered guidance and instant doubt resolution
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chat Interface */}
        <Card className="h-[500px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Instant Doubt Resolution
            </CardTitle>
            <CardDescription>
              Ask your AI mentor anything about UPSC preparation
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            <div className="flex-1 bg-muted/30 rounded-lg p-4 mb-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="bg-background p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Hello! I'm your AI mentor. How can I help you with your UPSC preparation today?</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">I'm struggling with Indian Polity concepts. Can you help?</p>
                  </div>
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">You</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="bg-background p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Of course! Let's break down Indian Polity systematically. Which specific area would you like to focus on first?</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border border-border rounded-lg bg-background"
              />
              <Button>
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card className="h-[500px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Personalized Learning Path
            </CardTitle>
            <CardDescription>
              Your adapted learning strategy based on performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Current Focus Area</span>
                <Badge variant="secondary">Indian Polity</Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">Constitutional Framework</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">Fundamental Rights</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Clock className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">Directive Principles</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-xs">3</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Parliamentary System</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-medium text-sm mb-3">Recommended Next Steps</h4>
              <div className="space-y-2">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <p className="text-sm font-medium">Focus on Directive Principles</p>
                  <p className="text-xs text-muted-foreground">Complete 2 more practice questions</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <p className="text-sm font-medium">Review Previous Mistakes</p>
                  <p className="text-xs text-muted-foreground">Analyze last week's errors</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Answer Evaluation Component
const EvaluationSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Answer Evaluation Hub</h1>
        <p className="text-muted-foreground">
          Upload handwritten answers for instant AI evaluation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Interface */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Quick Upload
            </CardTitle>
            <CardDescription>
              Drag and drop your handwritten answer sheets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">Drop your answer sheet here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse files</p>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Choose File
              </Button>
            </div>
            
            <div className="mt-6 bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800 dark:text-green-200">
                  60-Second Evaluation Promise
                </span>
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                Get instant UPSC-standard feedback with improvement suggestions
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Evaluations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Recent Evaluations
            </CardTitle>
            <CardDescription>
              Your latest answer evaluations and feedback
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">GS Paper 1 - History</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">85%</Badge>
                  <p className="text-xs text-muted-foreground">Good</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">Ethics Case Study</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">92%</Badge>
                  <p className="text-xs text-muted-foreground">Excellent</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium text-sm">Essay Practice</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="mb-1">78%</Badge>
                  <p className="text-xs text-muted-foreground">Needs Work</p>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              View All Evaluations
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Practice Section Component
const PracticeSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Practice & Assessment Center</h1>
        <p className="text-muted-foreground">
          Unlimited practice with AI-powered performance analytics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">GS Paper 1</h4>
                <p className="text-sm text-muted-foreground">1,250 Questions</p>
              </div>
            </div>
            <Button className="w-full" size="sm">
              Start Practice
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">GS Paper 2</h4>
                <p className="text-sm text-muted-foreground">980 Questions</p>
              </div>
            </div>
            <Button className="w-full" size="sm">
              Start Practice
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium">GS Paper 3</h4>
                <p className="text-sm text-muted-foreground">1,100 Questions</p>
              </div>
            </div>
            <Button className="w-full" size="sm">
              Start Practice
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Current Affairs Section Component
const CurrentAffairsSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Current Affairs Integration</h1>
        <p className="text-muted-foreground">
          Daily curated news mapped to UPSC syllabus with instant MCQ generation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Today's Top Stories
            </CardTitle>
            <CardDescription>
              Curated news mapped to UPSC syllabus
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm">India's Space Policy Framework</h4>
                  <Badge variant="outline" className="text-xs">GS Paper 3</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  New guidelines for private sector participation in space activities...
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    <Zap className="h-3 w-3 mr-1" />
                    Generate MCQ
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    Read More
                  </Button>
                </div>
              </div>
              
              <div className="p-3 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm">Climate Finance Commitments</h4>
                  <Badge variant="outline" className="text-xs">GS Paper 2</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  International climate finance mechanisms and India's position...
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    <Zap className="h-3 w-3 mr-1" />
                    Generate MCQ
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Trending Topics
            </CardTitle>
            <CardDescription>
              Important current affairs with exam relevance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Digital India Initiative</p>
                  <p className="text-xs text-muted-foreground">High exam relevance</p>
                </div>
                <Badge className="bg-blue-600">Hot</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Renewable Energy Policy</p>
                  <p className="text-xs text-muted-foreground">Environment & Ecology</p>
                </div>
                <Badge className="bg-green-600">Trending</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <div>
                  <p className="font-medium text-sm">Social Justice Reforms</p>
                  <p className="text-xs text-muted-foreground">GS Paper 2</p>
                </div>
                <Badge className="bg-purple-600">Important</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Community Section Component
const CommunitySection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Community & Competition</h1>
        <p className="text-muted-foreground">
          Join India's Most Disciplined UPSC Community (200,000+ aspirants)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Weekly Leaderboard
            </CardTitle>
            <CardDescription>
              Top performers this week
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-white">1</div>
                <div className="flex-1">
                  <p className="font-medium text-sm">StudyMaster_2024</p>
                  <p className="text-xs text-muted-foreground">98% completion</p>
                </div>
                <Trophy className="h-4 w-4 text-yellow-600" />
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-950/20 rounded-lg">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-xs font-bold text-white">2</div>
                <div className="flex-1">
                  <p className="font-medium text-sm">IAS_Aspirant_99</p>
                  <p className="text-xs text-muted-foreground">95% completion</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white">3</div>
                <div className="flex-1">
                  <p className="font-medium text-sm">CivilService_Pro</p>
                  <p className="text-xs text-muted-foreground">92% completion</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Your Performance
            </CardTitle>
            <CardDescription>
              Your position in the community
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">#47</div>
              <p className="text-sm text-muted-foreground">Your Rank</p>
              <p className="text-xs text-muted-foreground mt-2">Top 5% of community</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Study Hours</span>
                <span className="font-medium">42 hrs</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Questions Solved</span>
                <span className="font-medium">1,247</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Streak</span>
                <span className="font-medium">47 days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Recent Achievements
            </CardTitle>
            <CardDescription>
              Your latest milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                <Award className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-xs font-medium">Study Streak</p>
                <p className="text-xs text-muted-foreground">30+ days</p>
              </div>
              
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                <Trophy className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-medium">Top Performer</p>
                <p className="text-xs text-muted-foreground">This week</p>
              </div>
              
              <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg text-center">
                <Brain className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-xs font-medium">Quick Learner</p>
                <p className="text-xs text-muted-foreground">Fast progress</p>
              </div>
              
              <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg text-center">
                <Zap className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <p className="text-xs font-medium">Consistent</p>
                <p className="text-xs text-muted-foreground">Daily practice</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Platform Section Component
const PlatformSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Platform Integration</h1>
        <p className="text-muted-foreground">
          Seamless learning across all devices with offline access
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Smartphone className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-medium mb-2">Mobile App</h4>
            <p className="text-sm text-muted-foreground mb-3">Android & iOS</p>
            <Button size="sm" variant="outline" className="w-full">
              Download
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-medium mb-2">Web Platform</h4>
            <p className="text-sm text-muted-foreground mb-3">Full features</p>
            <Button size="sm" variant="outline" className="w-full">
              Access Web
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Wifi className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-medium mb-2">Online Sync</h4>
            <p className="text-sm text-muted-foreground mb-3">Real-time updates</p>
            <Badge variant="secondary" className="w-full justify-center">
              <Wifi className="h-3 w-3 mr-1" />
              Connected
            </Badge>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <WifiOff className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h4 className="font-medium mb-2">Offline Mode</h4>
            <p className="text-sm text-muted-foreground mb-3">Study anywhere</p>
            <Badge variant="outline" className="w-full justify-center">
              <WifiOff className="h-3 w-3 mr-1" />
              Available
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'dark';
    } catch {
      return false;
    }
  });

  // Apply theme
  React.useEffect(() => {
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

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'study-plan':
        return <StudyPlan />;
      case 'ai-mentor':
        return <AIMentorSection />;
      case 'evaluation':
        return <EvaluationSection />;
      case 'quick-actions':
        return <QuickActions />;
      case 'performance':
        return <PerformanceMetrics />;
      case 'discipline':
        return <DisciplineEngineSection />;
      case 'materials':
        return <StudyMaterialsSection />;
      case 'practice':
        return <PracticeSection />;
      case 'current-affairs':
        return <CurrentAffairsSection />;
      case 'community':
        return <CommunitySection />;
      case 'platform':
        return <PlatformSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="flex flex-1">
        {/* Sidebar with Integrated Header */}
        <DashboardSidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        
        {/* Main Content */}
        <main className="flex-1 px-4 lg:px-8 lg:ml-80">
          <div className="w-full max-w-6xl mx-auto py-6">
            {/* Mobile Menu Button */}
            <div className="lg:hidden mb-6">
              <Button
                variant="outline"
                onClick={() => setSidebarOpen(true)}
                className="flex items-center gap-2"
              >
                <Menu className="h-4 w-4" />
                Dashboard Menu
              </Button>
            </div>
            
            {/* Section Content */}
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;