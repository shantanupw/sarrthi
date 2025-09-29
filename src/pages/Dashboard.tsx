import React, { useState, useEffect } from 'react';
import TopNavBar from '@/components/TopNavBar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Brain, 
  Upload, 
  TrendingUp, 
  BookOpen, 
  BarChart3, 
  Globe, 
  Users, 
  Target,
  MessageCircle,
  Flame,
  Clock,
  CheckCircle,
  Trophy,
  Calendar,
  Award,
  Star,
  PlusCircle,
  FileText,
  Video,
  Headphones,
  Download,
  Settings,
  Bell,
  Search,
  Filter,
  ChevronRight,
  PlayCircle,
  BookMarked,
  GraduationCap,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Target, color: 'text-blue-600' },
    { id: 'ai-mentor', label: 'AI Mentor', icon: Brain, color: 'text-purple-600' },
    { id: 'study-plan', label: 'Study Plan', icon: Calendar, color: 'text-green-600' },
    { id: 'practice', label: 'Practice Center', icon: BarChart3, color: 'text-orange-600' },
    { id: 'materials', label: 'Study Materials', icon: BookOpen, color: 'text-indigo-600' },
    { id: 'evaluation', label: 'Answer Evaluation', icon: Upload, color: 'text-red-600' },
    { id: 'current-affairs', label: 'Current Affairs', icon: Globe, color: 'text-cyan-600' },
    { id: 'community', label: 'Community', icon: Users, color: 'text-pink-600' },
  ];

  const OverviewSection = () => (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-2xl border border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Aspirant! 👋</h1>
            <p className="text-muted-foreground text-lg">Ready to conquer your UPSC journey today?</p>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
              <Trophy className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">Study Streak</p>
                <p className="text-3xl font-bold text-orange-700 dark:text-orange-300">47 Days</p>
              </div>
              <div className="p-3 bg-orange-500/20 rounded-full">
                <Flame className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 dark:text-green-400 text-sm font-medium">Today's Progress</p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-300">75%</p>
              </div>
              <div className="p-3 bg-green-500/20 rounded-full">
                <Target className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Community Rank</p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">#47</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">AI Sessions</p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">156</p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Tasks */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Today's Study Plan</CardTitle>
                  <CardDescription>Your personalized daily agenda</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Customize
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'GS Paper 1 - Modern History', status: 'completed', time: '09:00 - 10:30' },
                { title: 'Current Affairs - Daily News', status: 'completed', time: '10:45 - 11:15' },
                { title: 'Ethics Case Study Practice', status: 'completed', time: '11:30 - 12:30' },
                { title: 'Essay Writing Practice', status: 'in-progress', time: '14:00 - 15:30' },
                { title: 'Optional Subject Revision', status: 'pending', time: '16:00 - 17:30' },
              ].map((task, index) => (
                <div key={index} className={cn(
                  "flex items-center justify-between p-4 rounded-xl border-2 transition-all",
                  task.status === 'completed' && "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
                  task.status === 'in-progress' && "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800",
                  task.status === 'pending' && "bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800"
                )}>
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-2 rounded-full",
                      task.status === 'completed' && "bg-green-500 text-white",
                      task.status === 'in-progress' && "bg-orange-500 text-white",
                      task.status === 'pending' && "bg-gray-400 text-white"
                    )}>
                      {task.status === 'completed' && <CheckCircle className="h-4 w-4" />}
                      {task.status === 'in-progress' && <Clock className="h-4 w-4" />}
                      {task.status === 'pending' && <Calendar className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">{task.time}</p>
                    </div>
                  </div>
                  <Badge variant={
                    task.status === 'completed' ? 'default' : 
                    task.status === 'in-progress' ? 'secondary' : 'outline'
                  }>
                    {task.status === 'completed' ? 'Done' : 
                     task.status === 'in-progress' ? 'Active' : 'Pending'}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Progress */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Study Hours</span>
                  <span className="font-medium">32/40 hrs</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Mock Tests</span>
                  <span className="font-medium">3/4 tests</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Revision</span>
                  <span className="font-medium">6/8 topics</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-16 flex-col gap-2">
                <PlayCircle className="h-5 w-5" />
                <span className="text-xs">Start Study</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <Upload className="h-5 w-5" />
                <span className="text-xs">Upload Answer</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <Brain className="h-5 w-5" />
                <span className="text-xs">Ask AI</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <BarChart3 className="h-5 w-5" />
                <span className="text-xs">Take Test</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'ai-mentor':
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">AI Mentor</h1>
            <p className="text-muted-foreground">24x7 AI-powered guidance and instant doubt resolution</p>
            {/* Add AI Mentor content */}
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold capitalize">{activeSection.replace('-', ' ')}</h1>
            <p className="text-muted-foreground">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavBar />
      
      <div className="flex pt-16">
        {/* Sidebar */}
        <div className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-card border-r border-border transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}>
          <div className="p-6">
            {/* User Profile */}
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl mb-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-primary text-primary-foreground">AS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">UPSC Aspirant</p>
                <p className="text-sm text-muted-foreground">Rank Goal: Top 100</p>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 px-3">Dashboard</h3>
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start h-12 px-4",
                      activeSection === item.id 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "hover:bg-muted/50"
                    )}
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }}
                  >
                    <Icon className={cn("h-5 w-5 mr-3", item.color)} />
                    {item.label}
                    {activeSection === item.id && (
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    )}
                  </Button>
                );
              })}
            </nav>

            {/* Quick Stats */}
            <div className="mt-8 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
              <h3 className="font-semibold text-sm mb-3 text-primary">Quick Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <span>Study Streak</span>
                  </div>
                  <span className="font-semibold">47 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-green-500" />
                    <span>Progress Today</span>
                  </div>
                  <span className="font-semibold">75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-blue-500" />
                    <span>Rank</span>
                  </div>
                  <span className="font-semibold">#47</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className={cn(
          "flex-1 transition-all duration-300",
          "lg:ml-80"
        )}>
          <div className="p-6 lg:p-8">
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;