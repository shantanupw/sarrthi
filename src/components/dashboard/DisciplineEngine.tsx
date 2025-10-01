import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Target, 
  MessageCircle, 
  TrendingUp, 
  Flame, 
  Upload, 
  Clock, 
  CheckCircle, 
  BookOpen, 
  Brain, 
  BarChart3, 
  Calendar, 
  Award, 
  Users, 
  Trophy,
  Zap,
  FileText,
  Globe,
  Smartphone,
  Wifi,
  WifiOff
} from 'lucide-react';

const DisciplineEngineSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-3 text-foreground tracking-tight">Discipline Engine</h1>
        <p className="text-muted-foreground text-lg">
          Track your consistency and build strong study habits
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Goal Setting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Weekly Goals
            </CardTitle>
            <CardDescription>
              Set and track your weekly study targets
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Study Hours</span>
                <span className="text-sm font-medium">42/50 hrs</span>
              </div>
              <Progress value={84} className="h-3" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Practice Questions</span>
                <span className="text-sm font-medium">180/200</span>
              </div>
              <Progress value={90} className="h-3" />
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Answer Writing</span>
                <span className="text-sm font-medium">12/15</span>
              </div>
              <Progress value={80} className="h-3" />
            </div>
            
            <Button className="w-full">
              <Target className="h-4 w-4 mr-2" />
              Set New Goals
            </Button>
          </CardContent>
        </Card>

        {/* Habit Tracker */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Daily Habits
            </CardTitle>
            <CardDescription>
              Track your daily study consistency
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">This Week</h3>
              <div className="grid grid-cols-7 gap-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      index < 5 ? 'bg-green-500 text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      {day}
                    </div>
                    <p className="text-xs mt-1">{day}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center">
                5-day streak this week
              </p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-sm">Habit Checklist</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Morning Study Session</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Current Affairs Reading</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Practice Questions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Answer Writing</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Analytics */}
      <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            Progress Analytics
          </CardTitle>
          <CardDescription className="text-base">
            Visual insights into your study consistency and improvements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-12">
              <TabsTrigger value="weekly" className="text-sm font-medium">Weekly</TabsTrigger>
              <TabsTrigger value="monthly" className="text-sm font-medium">Monthly</TabsTrigger>
              <TabsTrigger value="yearly" className="text-sm font-medium">Yearly</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weekly" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">42</div>
                    <p className="text-sm text-muted-foreground">Study Hours</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">180</div>
                    <p className="text-sm text-muted-foreground">Questions Solved</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">12</div>
                    <p className="text-sm text-muted-foreground">Answers Written</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="monthly" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">168</div>
                    <p className="text-sm text-muted-foreground">Study Hours</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">720</div>
                    <p className="text-sm text-muted-foreground">Questions Solved</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">48</div>
                    <p className="text-sm text-muted-foreground">Answers Written</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="yearly" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">2,016</div>
                    <p className="text-sm text-muted-foreground">Study Hours</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">8,640</div>
                    <p className="text-sm text-muted-foreground">Questions Solved</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">576</div>
                    <p className="text-sm text-muted-foreground">Answers Written</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisciplineEngineSection;
