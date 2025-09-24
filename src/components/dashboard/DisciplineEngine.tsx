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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Discipline Engine</h1>
        <p className="text-muted-foreground">
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Progress Analytics
          </CardTitle>
          <CardDescription>
            Visual insights into your study consistency and improvements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weekly" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">42</div>
                  <p className="text-sm text-muted-foreground">Study Hours</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">180</div>
                  <p className="text-sm text-muted-foreground">Questions Solved</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
                  <p className="text-sm text-muted-foreground">Answers Written</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="monthly" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">168</div>
                  <p className="text-sm text-muted-foreground">Study Hours</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">720</div>
                  <p className="text-sm text-muted-foreground">Questions Solved</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">48</div>
                  <p className="text-sm text-muted-foreground">Answers Written</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="yearly" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">2,016</div>
                  <p className="text-sm text-muted-foreground">Study Hours</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">8,640</div>
                  <p className="text-sm text-muted-foreground">Questions Solved</p>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">576</div>
                  <p className="text-sm text-muted-foreground">Answers Written</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisciplineEngineSection;
