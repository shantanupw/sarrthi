import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Clock, 
  Target, 
  CheckCircle, 
  AlertCircle, 
  BookOpen, 
  FileText, 
  Globe,
  Users,
  Zap
} from 'lucide-react';

const StudyPlan = () => {
  return (
    <div className="space-y-6">
      {/* Weekly Study Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            Weekly Study Plan
          </CardTitle>
          <CardDescription>Your personalized weekly schedule with progress tracking</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Monday */}
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Monday</h4>
                <Badge className="text-xs">Completed</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>History - Ancient India</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>Current Affairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>Mock Test - GS1</span>
                </div>
              </div>
            </div>

            {/* Tuesday */}
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Tuesday</h4>
                <Badge className="text-xs">Completed</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>Geography - Physical</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>Ethics Case Study</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>Answer Writing</span>
                </div>
              </div>
            </div>

            {/* Wednesday */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Wednesday</h4>
                <Badge variant="outline" className="text-xs">In Progress</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-600" />
                  <span>Polity - Constitution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-yellow-600" />
                  <span>Economy - Budget</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-3 w-3 text-gray-500" />
                  <span>Essay Writing</span>
                </div>
              </div>
            </div>

            {/* Thursday */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800/20 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Thursday</h4>
                <Badge variant="secondary" className="text-xs">Upcoming</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-3 w-3 text-gray-500" />
                  <span>Science & Tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-3 w-3 text-gray-500" />
                  <span>Environment</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-3 w-3 text-gray-500" />
                  <span>CSAT Practice</span>
                </div>
              </div>
            </div>

            {/* Friday */}
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Friday</h4>
                <Badge variant="secondary" className="text-xs">Revision Day</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-3 w-3 text-blue-600" />
                  <span>Week Revision</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-3 w-3 text-blue-600" />
                  <span>Note Making</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-3 w-3 text-blue-600" />
                  <span>Weak Area Focus</span>
                </div>
              </div>
            </div>

            {/* Weekend */}
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Weekend</h4>
                <Badge variant="outline" className="text-xs">Special</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-3 w-3 text-purple-600" />
                  <span>Group Discussion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-3 w-3 text-purple-600" />
                  <span>Current Affairs Test</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-purple-600" />
                  <span>Weekly Assessment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="mt-6 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Weekly Progress</h4>
              <span className="text-sm text-muted-foreground">65% Complete</span>
            </div>
            <Progress value={65} className="mb-2" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <p className="font-medium">18</p>
                <p className="text-muted-foreground">Topics Covered</p>
              </div>
              <div className="text-center">
                <p className="font-medium">12h 30m</p>
                <p className="text-muted-foreground">Study Time</p>
              </div>
              <div className="text-center">
                <p className="font-medium">8</p>
                <p className="text-muted-foreground">Tests Taken</p>
              </div>
              <div className="text-center">
                <p className="font-medium">85%</p>
                <p className="text-muted-foreground">Avg Score</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Focus */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            Today's Focus Areas
          </CardTitle>
          <CardDescription>Priority topics for today's study session</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-medium">Weak Areas</h4>
                  <p className="text-xs text-muted-foreground">Needs immediate attention</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Economics - Monetary Policy</span>
                  <Badge variant="destructive" className="text-xs">Critical</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Geography - Climate</span>
                  <Badge variant="outline" className="text-xs">Low Score</Badge>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Strength Building</h4>
                  <p className="text-xs text-muted-foreground">Maintain good performance</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Polity - Fundamental Rights</span>
                  <Badge className="text-xs">Strong</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">History - Modern India</span>
                  <Badge variant="secondary" className="text-xs">Good</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyPlan;