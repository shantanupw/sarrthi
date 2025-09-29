import React, { useState, useEffect, useMemo, useCallback } from 'react';
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

  const sidebarItems = useMemo(() => [
    { id: 'overview', label: 'Overview', icon: Target, color: 'text-blue-600' },
    { id: 'ai-mentor', label: 'AI Mentor', icon: Brain, color: 'text-purple-600' },
    { id: 'study-plan', label: 'Study Plan', icon: Calendar, color: 'text-green-600' },
    { id: 'practice', label: 'Practice Center', icon: BarChart3, color: 'text-orange-600' },
    { id: 'materials', label: 'Study Materials', icon: BookOpen, color: 'text-indigo-600' },
    { id: 'evaluation', label: 'Answer Evaluation', icon: Upload, color: 'text-red-600' },
    { id: 'current-affairs', label: 'Current Affairs', icon: Globe, color: 'text-cyan-600' },
    { id: 'community', label: 'Community', icon: Users, color: 'text-pink-600' },
  ], []);

  const OverviewSection = useMemo(() => {
    return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-8 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-600 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-indigo-400/10"></div>
        <div className="relative flex items-center justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                Welcome back, Aspirant
              </h1>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
              Ready to conquer your UPSC journey today?
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Last active: 2 hours ago</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Study streak: 47 days</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Trophy className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Study Streak</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">47</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Days</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Flame className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Today's Progress</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">75%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Completed</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Community Rank</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">#47</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Top 5%</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Trophy className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">AI Sessions</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">156</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">This month</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Brain className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Tasks */}
        <div className="lg:col-span-2">
          <Card className="h-full border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">Today's Study Plan</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">Your personalized daily agenda</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                  <Settings className="h-4 w-4 mr-2" />
                  Customize
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: 'GS Paper 1 - Modern History', status: 'completed', time: '09:00 - 10:30' },
                { title: 'Current Affairs - Daily News', status: 'completed', time: '10:45 - 11:15' },
                { title: 'Ethics Case Study Practice', status: 'completed', time: '11:30 - 12:30' },
                { title: 'Essay Writing Practice', status: 'in-progress', time: '14:00 - 15:30' },
                { title: 'Optional Subject Revision', status: 'pending', time: '16:00 - 17:30' },
              ].map((task, index) => (
                <div key={index} className={cn(
                  "group flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 hover:shadow-md",
                  task.status === 'completed' && "bg-green-50/50 dark:bg-green-950/10 border-green-200/50 dark:border-green-800/30",
                  task.status === 'in-progress' && "bg-orange-50/50 dark:bg-orange-950/10 border-orange-200/50 dark:border-orange-800/30",
                  task.status === 'pending' && "bg-slate-50/50 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-700/30"
                )}>
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-2.5 rounded-xl transition-all duration-200",
                      task.status === 'completed' && "bg-green-500 text-white shadow-sm",
                      task.status === 'in-progress' && "bg-orange-500 text-white shadow-sm",
                      task.status === 'pending' && "bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-300"
                    )}>
                      {task.status === 'completed' && <CheckCircle className="h-4 w-4" />}
                      {task.status === 'in-progress' && <Clock className="h-4 w-4" />}
                      {task.status === 'pending' && <Calendar className="h-4 w-4" />}
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100">{task.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{task.time}</p>
                    </div>
                  </div>
                  <Badge className={cn(
                    "px-3 py-1 text-xs font-medium",
                    task.status === 'completed' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                    task.status === 'in-progress' && "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
                    task.status === 'pending' && "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-400"
                  )}>
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
          <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Study Hours</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">32/40 hrs</span>
                </div>
                <Progress value={80} className="h-2 bg-slate-200 dark:bg-slate-700" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Mock Tests</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">3/4 tests</span>
                </div>
                <Progress value={75} className="h-2 bg-slate-200 dark:bg-slate-700" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Revision</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">6/8 topics</span>
                </div>
                <Progress value={75} className="h-2 bg-slate-200 dark:bg-slate-700" />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-16 flex-col gap-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200">
                <PlayCircle className="h-5 w-5 text-blue-500" />
                <span className="text-xs font-medium">Start Study</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200">
                <Upload className="h-5 w-5 text-green-500" />
                <span className="text-xs font-medium">Upload Answer</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200">
                <Brain className="h-5 w-5 text-purple-500" />
                <span className="text-xs font-medium">Ask AI</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200">
                <BarChart3 className="h-5 w-5 text-orange-500" />
                <span className="text-xs font-medium">Take Test</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    );
  }, []);

  const renderContent = useCallback(() => {
    switch (activeSection) {
      case 'overview':
        return OverviewSection;
      case 'ai-mentor':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">AI Mentor</h1>
                <p className="text-slate-600 dark:text-slate-400">24x7 AI-powered guidance and instant doubt resolution</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">Online</span>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chat Area */}
              <div className="lg:col-span-2">
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm h-[600px]">
                  <CardHeader className="border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">AI Mentor</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Ready to help with your UPSC preparation</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 h-[500px] overflow-y-auto">
                    <div className="space-y-4">
                      {/* AI Message */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Brain className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-md p-4 max-w-[80%]">
                          <p className="text-slate-900 dark:text-slate-100">Hello! I'm your AI mentor. I can help you with:</p>
                          <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                            <li>• Concept explanations</li>
                            <li>• Answer writing guidance</li>
                            <li>• Current affairs analysis</li>
                            <li>• Study strategy advice</li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* User Message */}
                      <div className="flex gap-3 justify-end">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-md p-4 max-w-[80%]">
                          <p>Can you explain the concept of federalism in the Indian context?</p>
                        </div>
                        <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-slate-600 dark:text-slate-300">U</span>
                        </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Brain className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-md p-4 max-w-[80%]">
                          <p className="text-slate-900 dark:text-slate-100">Federalism in India is a unique system that combines federal and unitary features...</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Ask your question..." 
                        className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
                        Send
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick Actions & History */}
              <div className="space-y-6">
                {/* Quick Questions */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Quick Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Explain the Preamble of Indian Constitution",
                      "What is the difference between Fundamental Rights and DPSP?",
                      "How does the Indian federal system work?",
                      "Explain the role of Governor in state administration"
                    ].map((question, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        className="w-full text-left justify-start h-auto p-3 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                      >
                        <span className="text-sm">{question}</span>
                      </Button>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Chats */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Recent Chats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { topic: "Constitutional Law", time: "2 hours ago" },
                      { topic: "Indian Economy", time: "Yesterday" },
                      { topic: "Modern History", time: "2 days ago" },
                      { topic: "Geography", time: "3 days ago" }
                    ].map((chat, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
                        <div>
                          <p className="font-medium text-slate-900 dark:text-slate-100">{chat.topic}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{chat.time}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      case 'study-plan':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Study Plan</h1>
                <p className="text-slate-600 dark:text-slate-400">Personalized study schedule and progress tracking</p>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create New Plan
              </Button>
            </div>

            {/* Study Plan Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">12</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Weeks Remaining</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">68%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Plan Completion</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">6.5</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Hours/Day</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">24</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Subjects Covered</p>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">This Week's Schedule</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { day: 'Monday', subjects: ['GS Paper 1', 'Current Affairs'], time: '6 hours', status: 'completed' },
                      { day: 'Tuesday', subjects: ['GS Paper 2', 'Optional Subject'], time: '6.5 hours', status: 'completed' },
                      { day: 'Wednesday', subjects: ['GS Paper 3', 'Essay Writing'], time: '7 hours', status: 'in-progress' },
                      { day: 'Thursday', subjects: ['GS Paper 4', 'Mock Test'], time: '6 hours', status: 'pending' },
                      { day: 'Friday', subjects: ['Revision', 'Answer Writing'], time: '6.5 hours', status: 'pending' },
                      { day: 'Saturday', subjects: ['Full Mock Test', 'Analysis'], time: '8 hours', status: 'pending' },
                      { day: 'Sunday', subjects: ['Weekly Revision', 'Planning'], time: '5 hours', status: 'pending' }
                    ].map((day, index) => (
                      <div key={index} className={cn(
                        "flex items-center justify-between p-4 rounded-xl border transition-all duration-200",
                        day.status === 'completed' && "bg-green-50/50 dark:bg-green-950/10 border-green-200/50 dark:border-green-800/30",
                        day.status === 'in-progress' && "bg-orange-50/50 dark:bg-orange-950/10 border-orange-200/50 dark:border-orange-800/30",
                        day.status === 'pending' && "bg-slate-50/50 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-700/30"
                      )}>
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-3 h-3 rounded-full",
                            day.status === 'completed' && "bg-green-500",
                            day.status === 'in-progress' && "bg-orange-500",
                            day.status === 'pending' && "bg-slate-300 dark:bg-slate-600"
                          )}></div>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{day.day}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{day.subjects.join(', ')}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{day.time}</p>
                          <Badge className={cn(
                            "text-xs",
                            day.status === 'completed' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                            day.status === 'in-progress' && "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
                            day.status === 'pending' && "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-400"
                          )}>
                            {day.status === 'completed' ? 'Done' : day.status === 'in-progress' ? 'Active' : 'Pending'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Study Progress & Quick Actions */}
              <div className="space-y-6">
                {/* Progress Chart */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Study Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">GS Paper 1</span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">85%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-slate-200 dark:bg-slate-700" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">GS Paper 2</span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">72%</span>
                      </div>
                      <Progress value={72} className="h-2 bg-slate-200 dark:bg-slate-700" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">GS Paper 3</span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">68%</span>
                      </div>
                      <Progress value={68} className="h-2 bg-slate-200 dark:bg-slate-700" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">GS Paper 4</span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">45%</span>
                      </div>
                      <Progress value={45} className="h-2 bg-slate-200 dark:bg-slate-700" />
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Monthly Plan
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Settings className="h-4 w-4 mr-2" />
                      Adjust Schedule
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      case 'practice':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Practice Center</h1>
                <p className="text-slate-600 dark:text-slate-400">Mock tests, quizzes, and practice questions</p>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <PlayCircle className="h-4 w-4 mr-2" />
                Start Practice
              </Button>
            </div>

            {/* Practice Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">24</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Tests Completed</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">78%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Average Score</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">#47</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Current Rank</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">156</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Hours Practiced</p>
                </CardContent>
              </Card>
            </div>

            {/* Practice Options */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Available Practice Tests</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: 'UPSC Prelims 2024 - Mock Test 1', type: 'Full Test', questions: 100, duration: '2 hours', difficulty: 'Medium', status: 'available' },
                      { title: 'GS Paper 1 - History & Culture', type: 'Subject Test', questions: 50, duration: '1 hour', difficulty: 'Easy', status: 'available' },
                      { title: 'GS Paper 2 - Polity & Governance', type: 'Subject Test', questions: 50, duration: '1 hour', difficulty: 'Hard', status: 'completed' },
                      { title: 'Current Affairs - January 2024', type: 'Current Affairs', questions: 30, duration: '45 mins', difficulty: 'Medium', status: 'available' },
                      { title: 'UPSC Mains - Essay Writing', type: 'Essay Test', questions: 2, duration: '3 hours', difficulty: 'Hard', status: 'available' }
                    ].map((test, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-3 h-3 rounded-full",
                            test.status === 'available' && "bg-green-500",
                            test.status === 'completed' && "bg-blue-500",
                            test.status === 'locked' && "bg-slate-300 dark:bg-slate-600"
                          )}></div>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{test.title}</p>
                            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                              <span>{test.type}</span>
                              <span>•</span>
                              <span>{test.questions} questions</span>
                              <span>•</span>
                              <span>{test.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={cn(
                            "text-xs",
                            test.difficulty === 'Easy' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                            test.difficulty === 'Medium' && "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
                            test.difficulty === 'Hard' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          )}>
                            {test.difficulty}
                          </Badge>
                          <Button 
                            size="sm" 
                            className={cn(
                              test.status === 'available' && "bg-blue-500 hover:bg-blue-600 text-white",
                              test.status === 'completed' && "bg-green-500 hover:bg-green-600 text-white",
                              test.status === 'locked' && "bg-slate-300 dark:bg-slate-600 text-slate-500"
                            )}
                            disabled={test.status === 'locked'}
                          >
                            {test.status === 'available' ? 'Start' : test.status === 'completed' ? 'Review' : 'Locked'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Recent Performance & Quick Actions */}
              <div className="space-y-6">
                {/* Recent Performance */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Recent Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { test: 'GS Paper 1 Mock', score: 85, date: '2 days ago' },
                      { test: 'Current Affairs Quiz', score: 92, date: '3 days ago' },
                      { test: 'Polity Practice', score: 78, date: '5 days ago' },
                      { test: 'History Test', score: 88, date: '1 week ago' }
                    ].map((performance, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700">
                        <div>
                          <p className="font-medium text-slate-900 dark:text-slate-100">{performance.test}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{performance.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-slate-900 dark:text-slate-100">{performance.score}%</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Trophy className="h-4 w-4 mr-2" />
                      Leaderboard
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Settings className="h-4 w-4 mr-2" />
                      Test Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      case 'materials':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Study Materials</h1>
                <p className="text-slate-600 dark:text-slate-400">Comprehensive study resources and materials</p>
              </div>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                <Download className="h-4 w-4 mr-2" />
                Download All
              </Button>
            </div>

            {/* Materials Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">156</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">PDFs Available</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Video className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">89</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Video Lectures</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">24</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Subject Notes</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Headphones className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">45</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Audio Notes</p>
                </CardContent>
              </Card>
            </div>

            {/* Materials Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Study Materials by Subject</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { subject: 'GS Paper 1 - History & Culture', files: 24, videos: 12, notes: 8, lastUpdated: '2 days ago' },
                      { subject: 'GS Paper 2 - Polity & Governance', files: 18, videos: 15, notes: 6, lastUpdated: '1 day ago' },
                      { subject: 'GS Paper 3 - Economy & Environment', files: 22, videos: 18, notes: 10, lastUpdated: '3 days ago' },
                      { subject: 'GS Paper 4 - Ethics & Essay', files: 16, videos: 8, notes: 4, lastUpdated: '5 days ago' },
                      { subject: 'Current Affairs', files: 32, videos: 20, notes: 12, lastUpdated: '1 day ago' },
                      { subject: 'Optional Subject - Geography', files: 28, videos: 16, notes: 14, lastUpdated: '4 days ago' }
                    ].map((material, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-100">{material.subject}</p>
                            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                              <span>{material.files} PDFs</span>
                              <span>•</span>
                              <span>{material.videos} Videos</span>
                              <span>•</span>
                              <span>{material.notes} Notes</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-slate-500 dark:text-slate-400">Updated {material.lastUpdated}</span>
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                            View All
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Recent Downloads & Quick Actions */}
              <div className="space-y-6">
                {/* Recent Downloads */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Recent Downloads</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'Indian Constitution - Complete Notes', type: 'PDF', size: '2.4 MB', date: '2 hours ago' },
                      { name: 'Modern History - Video Lecture 15', type: 'Video', size: '156 MB', date: '1 day ago' },
                      { name: 'Current Affairs - January 2024', type: 'PDF', size: '1.8 MB', date: '2 days ago' },
                      { name: 'Economy - Audio Notes', type: 'Audio', size: '45 MB', date: '3 days ago' }
                    ].map((download, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center",
                            download.type === 'PDF' && "bg-red-100 dark:bg-red-900/30",
                            download.type === 'Video' && "bg-blue-100 dark:bg-blue-900/30",
                            download.type === 'Audio' && "bg-green-100 dark:bg-green-900/30"
                          )}>
                            {download.type === 'PDF' && <FileText className="h-4 w-4 text-red-500" />}
                            {download.type === 'Video' && <Video className="h-4 w-4 text-blue-500" />}
                            {download.type === 'Audio' && <Headphones className="h-4 w-4 text-green-500" />}
                          </div>
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100 text-sm">{download.name}</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">{download.size} • {download.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download All PDFs
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Video className="h-4 w-4 mr-2" />
                      Watch Latest Videos
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Browse by Topic
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      case 'evaluation':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Answer Evaluation</h1>
                <p className="text-slate-600 dark:text-slate-400">Upload your answers for expert evaluation and feedback</p>
              </div>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Upload className="h-4 w-4 mr-2" />
                Upload Answer
              </Button>
            </div>

            {/* Evaluation Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Upload className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">24</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Answers Submitted</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">8.2</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Average Score</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">2</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Pending Reviews</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">4.8</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Expert Rating</p>
                </CardContent>
              </Card>
            </div>

            {/* Answer Evaluation Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Recent Evaluations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { 
                        question: 'Discuss the role of women in India\'s freedom struggle', 
                        subject: 'GS Paper 1 - History', 
                        score: 8.5, 
                        status: 'evaluated', 
                        date: '2 days ago',
                        feedback: 'Good structure and content. Improve on examples and conclusion.'
                      },
                      { 
                        question: 'Analyze the impact of climate change on Indian agriculture', 
                        subject: 'GS Paper 3 - Environment', 
                        score: 7.8, 
                        status: 'evaluated', 
                        date: '4 days ago',
                        feedback: 'Well-researched answer. Add more statistical data and policy measures.'
                      },
                      { 
                        question: 'Explain the concept of federalism in Indian context', 
                        subject: 'GS Paper 2 - Polity', 
                        score: null, 
                        status: 'pending', 
                        date: '1 day ago',
                        feedback: null
                      },
                      { 
                        question: 'Write an essay on "Digital India: Opportunities and Challenges"', 
                        subject: 'Essay Writing', 
                        score: 8.2, 
                        status: 'evaluated', 
                        date: '6 days ago',
                        feedback: 'Excellent introduction and conclusion. Work on body paragraphs structure.'
                      }
                    ].map((evaluation, index) => (
                      <div key={index} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">{evaluation.question}</p>
                            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                              <span>{evaluation.subject}</span>
                              <span>•</span>
                              <span>{evaluation.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {evaluation.score && (
                              <div className="text-right">
                                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{evaluation.score}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">out of 10</p>
                              </div>
                            )}
                            <Badge className={cn(
                              "text-xs",
                              evaluation.status === 'evaluated' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                              evaluation.status === 'pending' && "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            )}>
                              {evaluation.status === 'evaluated' ? 'Evaluated' : 'Pending'}
                            </Badge>
                          </div>
                        </div>
                        {evaluation.feedback && (
                          <div className="mt-3 p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              <span className="font-medium">Expert Feedback:</span> {evaluation.feedback}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Upload Area & Quick Actions */}
              <div className="space-y-6">
                {/* Upload Answer */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Upload New Answer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-6 text-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-3" />
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Drop your answer file here or click to browse</p>
                      <p className="text-xs text-slate-500 dark:text-slate-500">Supports PDF, DOC, DOCX (Max 10MB)</p>
                    </div>
                    <div className="space-y-3">
                      <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                        <option>Select Subject</option>
                        <option>GS Paper 1 - History</option>
                        <option>GS Paper 2 - Polity</option>
                        <option>GS Paper 3 - Economy</option>
                        <option>GS Paper 4 - Ethics</option>
                        <option>Essay Writing</option>
                      </select>
                      <textarea 
                        placeholder="Enter the question or topic..."
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 h-20 resize-none"
                      />
                      <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                        Submit for Evaluation
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Award className="h-4 w-4 mr-2" />
                      View All Evaluations
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Performance Analytics
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Settings className="h-4 w-4 mr-2" />
                      Evaluation Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      case 'current-affairs':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Current Affairs</h1>
                <p className="text-slate-600 dark:text-slate-400">Stay updated with the latest news and events</p>
              </div>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Globe className="h-4 w-4 mr-2" />
                View All News
              </Button>
            </div>

            {/* Current Affairs Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">156</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Articles Today</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">24</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Topics Covered</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">89%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">UPSC Relevance</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">2</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Hours Read</p>
                </CardContent>
              </Card>
            </div>

            {/* Current Affairs Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Today's Top Stories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { 
                        title: 'India signs historic trade agreement with European Union', 
                        category: 'International Relations', 
                        importance: 'High', 
                        time: '2 hours ago',
                        summary: 'The agreement covers trade in goods, services, and investment, expected to boost bilateral trade by 30%.'
                      },
                      { 
                        title: 'New climate change policy announced by government', 
                        category: 'Environment', 
                        importance: 'High', 
                        time: '4 hours ago',
                        summary: 'Focus on renewable energy targets and carbon neutrality by 2070. New incentives for green technology.'
                      },
                      { 
                        title: 'Supreme Court ruling on fundamental rights', 
                        category: 'Polity', 
                        importance: 'Medium', 
                        time: '6 hours ago',
                        summary: 'Landmark judgment on privacy rights and data protection. Implications for digital governance.'
                      },
                      { 
                        title: 'Economic growth rate shows positive trend', 
                        category: 'Economy', 
                        importance: 'Medium', 
                        time: '8 hours ago',
                        summary: 'GDP growth at 6.8% for Q3. Manufacturing sector shows strong recovery. Inflation under control.'
                      },
                      { 
                        title: 'New space mission launched successfully', 
                        category: 'Science & Technology', 
                        importance: 'Medium', 
                        time: '12 hours ago',
                        summary: 'ISRO launches satellite for weather monitoring. Advanced technology for climate prediction.'
                      }
                    ].map((news, index) => (
                      <div key={index} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{news.title}</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{news.summary}</p>
                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                              <span>{news.category}</span>
                              <span>•</span>
                              <span>{news.time}</span>
                            </div>
                          </div>
                          <Badge className={cn(
                            "text-xs",
                            news.importance === 'High' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                            news.importance === 'Medium' && "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
                            news.importance === 'Low' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          )}>
                            {news.importance}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Categories & Quick Actions */}
              <div className="space-y-6">
                {/* Categories */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { name: 'International Relations', count: 24, color: 'bg-blue-500' },
                      { name: 'Economy', count: 18, color: 'bg-green-500' },
                      { name: 'Polity', count: 15, color: 'bg-purple-500' },
                      { name: 'Environment', count: 12, color: 'bg-emerald-500' },
                      { name: 'Science & Technology', count: 9, color: 'bg-orange-500' },
                      { name: 'Social Issues', count: 8, color: 'bg-pink-500' }
                    ].map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                          <span className="font-medium text-slate-900 dark:text-slate-100">{category.name}</span>
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{category.count}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Globe className="h-4 w-4 mr-2" />
                      Daily News Digest
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Weekly Analysis
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Target className="h-4 w-4 mr-2" />
                      UPSC Focus
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Community</h1>
                <p className="text-slate-600 dark:text-slate-400">Connect with fellow UPSC aspirants and mentors</p>
              </div>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                <Users className="h-4 w-4 mr-2" />
                Join Discussion
              </Button>
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">2.4K</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Active Members</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">156</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Discussions Today</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">#47</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Your Rank</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">4.8</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Community Rating</p>
                </CardContent>
              </Card>
            </div>

            {/* Community Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100">Recent Discussions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { 
                        title: 'Best strategy for GS Paper 4 preparation?', 
                        author: 'Priya Sharma', 
                        replies: 24, 
                        likes: 18, 
                        time: '2 hours ago',
                        category: 'Study Strategy'
                      },
                      { 
                        title: 'Current affairs sources for 2024', 
                        author: 'Rajesh Kumar', 
                        replies: 31, 
                        likes: 25, 
                        time: '4 hours ago',
                        category: 'Current Affairs'
                      },
                      { 
                        title: 'Mock test analysis and improvement tips', 
                        author: 'Anita Singh', 
                        replies: 19, 
                        likes: 22, 
                        time: '6 hours ago',
                        category: 'Practice Tests'
                      },
                      { 
                        title: 'Optional subject selection guidance', 
                        author: 'Vikram Patel', 
                        replies: 15, 
                        likes: 12, 
                        time: '8 hours ago',
                        category: 'Optional Subject'
                      },
                      { 
                        title: 'Time management during exam preparation', 
                        author: 'Sneha Reddy', 
                        replies: 28, 
                        likes: 35, 
                        time: '12 hours ago',
                        category: 'Study Tips'
                      }
                    ].map((discussion, index) => (
                      <div key={index} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{discussion.title}</p>
                            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                              <span>by {discussion.author}</span>
                              <span>•</span>
                              <span>{discussion.time}</span>
                              <span>•</span>
                              <span>{discussion.category}</span>
                            </div>
                          </div>
                          <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs">
                            {discussion.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{discussion.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            <span>{discussion.likes} likes</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Top Contributors & Quick Actions */}
              <div className="space-y-6">
                {/* Top Contributors */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Top Contributors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'Dr. Shivin Chaudhary', role: 'Mentor', points: 2450, avatar: 'SC' },
                      { name: 'Varun Jain', role: 'Mentor', points: 2180, avatar: 'VJ' },
                      { name: 'Priya Sharma', role: 'Aspirant', points: 1890, avatar: 'PS' },
                      { name: 'Rajesh Kumar', role: 'Aspirant', points: 1650, avatar: 'RK' },
                      { name: 'Anita Singh', role: 'Aspirant', points: 1420, avatar: 'AS' }
                    ].map((contributor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">{contributor.avatar}</span>
                          </div>
                          <div>
                            <p className="font-medium text-slate-900 dark:text-slate-100 text-sm">{contributor.name}</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">{contributor.role}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{contributor.points}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">points</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-100">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Start New Discussion
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Users className="h-4 w-4 mr-2" />
                      Find Study Partners
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                      <Trophy className="h-4 w-4 mr-2" />
                      View Leaderboard
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
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
  }, [activeSection, OverviewSection]);

  return (
    <div className="min-h-screen bg-background">
      <TopNavBar />
      
      <div className="flex pt-16">
        {/* Sidebar */}
        <div className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}>
          <div className="p-6">
            {/* User Profile */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl mb-6 border border-slate-200/50 dark:border-slate-600/50">
              <Avatar className="h-12 w-12 ring-2 ring-slate-200 dark:ring-slate-600">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold">AS</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="font-bold text-slate-900 dark:text-slate-100">UPSC Aspirant</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Rank Goal: Top 100</p>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="space-y-1">
              <h3 className="text-sm font-bold text-slate-600 dark:text-slate-400 mb-4 px-3 uppercase tracking-wider">Dashboard</h3>
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start h-12 px-4 rounded-xl transition-all duration-200",
                      activeSection === item.id 
                        ? "bg-black text-white shadow-lg border-2 border-dashed border-white/30" 
                        : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    )}
                    onClick={useCallback(() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }, [item.id])}
                  >
                    <Icon className={cn("h-5 w-5 mr-3", activeSection === item.id ? "text-white" : item.color)} />
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <ChevronRight className="h-4 w-4 ml-auto text-white" />
                    )}
                  </Button>
                );
              })}
            </nav>

            {/* Quick Stats */}
            <div className="mt-8 p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-slate-200/50 dark:border-slate-600/50">
              <h3 className="font-bold text-sm mb-4 text-slate-700 dark:text-slate-300 uppercase tracking-wider">Quick Stats</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">Study Streak</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-slate-100">47 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">Progress Today</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-slate-100">75%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">Rank</span>
                  </div>
                  <span className="font-bold text-slate-900 dark:text-slate-100">#47</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={useCallback(() => setSidebarOpen(false), [])}
          />
        )}

        {/* Main Content */}
        <div className={cn(
          "flex-1 transition-all duration-300 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/50 dark:from-slate-900/50 dark:via-slate-800 dark:to-slate-900/50",
          "lg:ml-80"
        )}>
          <div className="p-6 lg:p-8 min-h-screen">
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={useCallback(() => setSidebarOpen(true), [])}
                className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                <Menu className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">
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