import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Target, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  FileText,
  Brain,
  Users
} from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Today's Study Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Today's Study Plan
          </CardTitle>
          <CardDescription>Your personalized daily schedule</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm">History - Medieval India</span>
            </div>
            <Badge variant="secondary" className="text-xs">Done</Badge>
          </div>
          <div className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-yellow-600" />
              <span className="text-sm">Polity - Fundamental Rights</span>
            </div>
            <Badge variant="outline" className="text-xs">2h left</Badge>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800/20 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Current Affairs Review</span>
            </div>
            <Badge variant="outline" className="text-xs">Pending</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Practice Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-600" />
            Practice Tests
          </CardTitle>
          <CardDescription>Test your knowledge and track progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <BookOpen className="h-4 w-4 mr-2" />
            GS Paper 1 Mock Test
            <Badge className="ml-auto">New</Badge>
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Brain className="h-4 w-4 mr-2" />
            CSAT Practice Set
            <Badge variant="secondary" className="ml-auto">5 left</Badge>
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <TrendingUp className="h-4 w-4 mr-2" />
            Previous Year Papers
            <Badge variant="outline" className="ml-auto">2024</Badge>
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-600" />
            Upcoming Events
          </CardTitle>
          <CardDescription>Live classes and important dates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 border border-border rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-sm">Ethics Live Class</span>
              <Badge className="text-xs">Today 6PM</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Case Studies & Solutions</p>
          </div>
          <div className="p-3 border border-border rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-sm">Mock Interview</span>
              <Badge variant="outline" className="text-xs">Tomorrow</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Panel Discussion Round</p>
          </div>
          <div className="p-3 border border-border rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-sm">Current Affairs</span>
              <Badge variant="secondary" className="text-xs">Weekly</Badge>
            </div>
            <p className="text-xs text-muted-foreground">Weekly Compilation</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickActions;