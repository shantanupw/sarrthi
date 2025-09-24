import React, { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Brain, 
  FileText, 
  Target, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Calendar, 
  Award,
  Clock,
  CheckCircle,
  Star,
  Zap,
  BarChart3,
  PenTool,
  Globe,
  Trophy,
  Flame,
  Bell,
  Search,
  Plus,
  ArrowRight,
  Activity,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';

const Dashboard = () => {
  const [currentStreak, setCurrentStreak] = useState(15);
  const [todayProgress, setTodayProgress] = useState(75);
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background text-foreground">
        <DashboardSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-xl font-semibold">Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Welcome back to AI Guru</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon">
                  <Search className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Bell className="w-4 h-4" />
                </Button>
                <Avatar className="w-8 h-8">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>
          
          <div className="flex-1 p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Current Streak</p>
                      <p className="text-2xl font-bold text-orange-500">{currentStreak} days</p>
                    </div>
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                      <Flame className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Today's Progress</p>
                      <p className="text-2xl font-bold text-green-500">{todayProgress}%</p>
                    </div>
                    <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                      <TrendingUpIcon className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Rank</p>
                      <p className="text-2xl font-bold text-blue-500">#127</p>
                    </div>
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                      <Trophy className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Study Hours</p>
                      <p className="text-2xl font-bold text-purple-500">18.5</p>
                    </div>
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                      <Clock className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions & Daily Progress */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <Card className="lg:col-span-2 border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Target size={20} />
                      Today's Goals
                    </CardTitle>
                    <Button size="sm" variant="outline">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Goal
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Daily Target Completion</span>
                        <span className="font-medium">{todayProgress}%</span>
                      </div>
                      <Progress value={todayProgress} className="h-3" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { task: "Study 3 Topics", completed: true, icon: BookOpen, color: "text-green-500" },
                        { task: "Complete 50 MCQs", completed: true, icon: Award, color: "text-blue-500" },
                        { task: "Write 1 Essay", completed: false, icon: PenTool, color: "text-purple-500" },
                        { task: "Review Current Affairs", completed: false, icon: Globe, color: "text-orange-500" }
                      ].map((goal, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <goal.icon size={16} className={goal.color} />
                          <span className={`flex-1 ${goal.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {goal.task}
                          </span>
                          <CheckCircle 
                            size={16} 
                            className={goal.completed ? "text-green-500" : "text-muted-foreground"} 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="text-blue-500" size={20} />
                    AI Mentor
                  </CardTitle>
                  <CardDescription>Quick assistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="default">
                    <Zap size={16} className="mr-2" />
                    Ask Doubt
                  </Button>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium mb-2">💡 Today's Tip</p>
                    <p className="text-xs text-muted-foreground">
                      Focus on Polity - Constitutional amendments for better Prelims preparation.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Recommendations
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Performance */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="text-green-500" size={20} />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { activity: "Completed Ethics Module 3", time: "2 hours ago", icon: CheckCircle, color: "text-green-500" },
                      { activity: "Essay evaluated - Score: 85%", time: "4 hours ago", icon: FileText, color: "text-blue-500" },
                      { activity: "Solved 45 MCQs in Polity", time: "6 hours ago", icon: Award, color: "text-purple-500" },
                      { activity: "Joined community discussion", time: "1 day ago", icon: Users, color: "text-orange-500" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                        <div className="p-2 bg-muted rounded-full">
                          <item.icon size={14} className={item.color} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.activity}</p>
                          <p className="text-xs text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="text-blue-500" size={20} />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-green-500">85%</div>
                        <div className="text-sm text-muted-foreground">Avg Score</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-500">1,247</div>
                        <div className="text-sm text-muted-foreground">MCQs Solved</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { subject: "Polity", progress: 78, color: "bg-blue-500" },
                        { subject: "History", progress: 65, color: "bg-green-500" },
                        { subject: "Geography", progress: 82, color: "bg-purple-500" },
                        { subject: "Economics", progress: 71, color: "bg-orange-500" }
                      ].map((subject, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{subject.subject}</span>
                            <span>{subject.progress}%</span>
                          </div>
                          <Progress value={subject.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;