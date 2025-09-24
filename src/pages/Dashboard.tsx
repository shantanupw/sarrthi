import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Flame
} from 'lucide-react';

const Dashboard = () => {
  const [currentStreak, setCurrentStreak] = useState(15);
  const [todayProgress, setTodayProgress] = useState(75);
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to SuperKalam</h1>
              <p className="text-muted-foreground">Your AI-powered personal mentor for UPSC preparation</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Flame className="text-orange-500" size={20} />
                <span className="font-semibold">{currentStreak} Day Streak</span>
              </div>
              <Badge variant="secondary" className="text-sm">
                <Trophy size={14} className="mr-1" />
                Top 5% Today
              </Badge>
            </div>
          </div>
          
          {/* Daily Progress */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target size={20} />
                Today's Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Daily Target Completion</span>
                    <span>{todayProgress}%</span>
                  </div>
                  <Progress value={todayProgress} className="h-2" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>3/4 Modules</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-blue-500" />
                    <span>2.5 hrs studied</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <PenTool size={16} className="text-purple-500" />
                    <span>2 Essays reviewed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen size={16} className="text-amber-500" />
                    <span>45 MCQs solved</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="mentor" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="mentor">AI Mentor</TabsTrigger>
            <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
            <TabsTrigger value="discipline">Discipline</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="current-affairs">Current Affairs</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* AI Personal Mentor Tab */}
          <TabsContent value="mentor" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="text-blue-500" size={20} />
                    AI Personal Mentor
                  </CardTitle>
                  <CardDescription>
                    Get instant doubt resolution and personalized guidance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full" variant="default">
                      <Zap size={16} className="mr-2" />
                      Ask Your Doubt
                    </Button>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Today's Recommendations</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Focus on Polity - Constitution amendments</li>
                        <li>• Practice Ethics case studies</li>
                        <li>• Review last week's current affairs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="text-green-500" size={20} />
                    Learning Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">85%</div>
                      <div className="text-sm text-muted-foreground">Avg Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500">127</div>
                      <div className="text-sm text-muted-foreground">Rank</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-500">42</div>
                      <div className="text-sm text-muted-foreground">Weak Areas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">89%</div>
                      <div className="text-sm text-muted-foreground">Consistency</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Instant Evaluation Tab */}
          <TabsContent value="evaluation" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="text-purple-500" size={20} />
                    Handwritten Answer Evaluation
                  </CardTitle>
                  <CardDescription>
                    Get instant AI feedback on your handwritten answers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full" variant="default">
                      <PenTool size={16} className="mr-2" />
                      Upload Answer Sheet
                    </Button>
                    <div className="text-center p-6 border-2 border-dashed border-border rounded-lg">
                      <FileText size={32} className="mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Upload your handwritten answer for instant evaluation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Recent Evaluations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { subject: "Ethics", score: 85, date: "Today" },
                      { subject: "Essay", score: 78, date: "Yesterday" },
                      { subject: "GS Paper 1", score: 92, date: "2 days ago" }
                    ].map((evaluation, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <div>
                          <span className="font-medium">{evaluation.subject}</span>
                          <p className="text-sm text-muted-foreground">{evaluation.date}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-green-500">{evaluation.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Discipline Engine Tab */}
          <TabsContent value="discipline" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="text-red-500" size={20} />
                    Daily Targets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { task: "Read 2 Chapters", completed: true },
                      { task: "50 MCQs Practice", completed: true },
                      { task: "1 Essay Writing", completed: false },
                      { task: "Current Affairs", completed: false }
                    ].map((target, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle 
                          size={16} 
                          className={target.completed ? "text-green-500" : "text-muted-foreground"} 
                        />
                        <span className={target.completed ? "line-through text-muted-foreground" : ""}>
                          {target.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flame className="text-orange-500" size={20} />
                    Streak Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">{currentStreak}</div>
                    <p className="text-muted-foreground mb-4">Day Streak</p>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 7 }, (_, i) => (
                        <div 
                          key={i} 
                          className={`w-6 h-6 rounded-sm ${
                            i < 5 ? 'bg-orange-500' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="text-blue-500" size={20} />
                    Weekly Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Study Hours</span>
                      <span className="font-medium">18.5hrs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>MCQs Solved</span>
                      <span className="font-medium">245</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Essays Written</span>
                      <span className="font-medium">3</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Full Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Syllabus Coverage Tab */}
          <TabsContent value="syllabus" className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="text-green-500" size={20} />
                  Comprehensive Syllabus Coverage
                </CardTitle>
                <CardDescription>
                  Track your progress across all UPSC subjects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { subject: "General Studies Paper 1", progress: 78, color: "bg-blue-500" },
                    { subject: "General Studies Paper 2", progress: 65, color: "bg-green-500" },
                    { subject: "General Studies Paper 3", progress: 82, color: "bg-purple-500" },
                    { subject: "General Studies Paper 4", progress: 71, color: "bg-orange-500" },
                    { subject: "Essay", progress: 88, color: "bg-red-500" },
                    { subject: "Optional Subject", progress: 55, color: "bg-pink-500" }
                  ].map((item, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">{item.subject}</h4>
                        <Progress value={item.progress} className="mb-2" />
                        <p className="text-sm text-muted-foreground">{item.progress}% Complete</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="text-yellow-500" size={20} />
                    MCQ Practice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full" variant="default">
                      Start Daily Quiz
                    </Button>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-500">1,247</div>
                        <div className="text-sm text-muted-foreground">Questions Solved</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-500">87%</div>
                        <div className="text-sm text-muted-foreground">Accuracy</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Previous Year Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { year: "2023", attempted: 180, total: 200 },
                      { year: "2022", attempted: 200, total: 200 },
                      { year: "2021", attempted: 165, total: 200 }
                    ].map((pyq, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">UPSC {pyq.year}</span>
                        <div className="text-right">
                          <span className="text-sm">{pyq.attempted}/{pyq.total}</span>
                          <Progress value={(pyq.attempted/pyq.total) * 100} className="w-20 mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Current Affairs Tab */}
          <TabsContent value="current-affairs" className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="text-blue-500" size={20} />
                  Current Affairs Integration
                </CardTitle>
                <CardDescription>
                  Stay updated with daily news and instant practice questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-medium">Today's Headlines</h4>
                      {[
                        { title: "Economic Survey 2024 highlights", category: "Economy" },
                        { title: "India-Japan Strategic Partnership", category: "International Relations" },
                        { title: "Climate Change Policy Updates", category: "Environment" }
                      ].map((news, index) => (
                        <div key={index} className="p-3 bg-muted rounded-lg">
                          <Badge variant="secondary" className="text-xs mb-1">{news.category}</Badge>
                          <p className="text-sm font-medium">{news.title}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium">Instant Questions</h4>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm mb-3">Which ministry released the Economic Survey 2024?</p>
                        <Button size="sm" variant="outline" className="w-full">
                          Practice Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="text-yellow-500" size={20} />
                    Leaderboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Rahul S.", score: 945, rank: 1 },
                      { name: "Priya M.", score: 923, rank: 2 },
                      { name: "You", score: 897, rank: 3, isUser: true },
                      { name: "Amit K.", score: 876, rank: 4 },
                      { name: "Sneha R.", score: 854, rank: 5 }
                    ].map((user, index) => (
                      <div 
                        key={index} 
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          user.isUser ? 'bg-accent' : 'bg-muted'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">#{user.rank}</span>
                          <span className={user.isUser ? 'font-bold' : ''}>{user.name}</span>
                        </div>
                        <span className="font-medium">{user.score}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="text-green-500" size={20} />
                    Community Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-500">200K+</div>
                        <div className="text-sm text-muted-foreground">Active Users</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-500">97%</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="font-medium mb-1">India's Most Disciplined Community</p>
                      <p className="text-sm text-muted-foreground">for UPSC Preparation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;