import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Brain, 
  BarChart3, 
  Calendar,
  FileText,
  Target,
  CheckCircle,
  Clock
} from 'lucide-react';

const StudyMaterialsSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Study Materials Hub</h1>
        <p className="text-muted-foreground">
          Complete UPSC syllabus coverage with progress tracking
        </p>
      </div>

      {/* Syllabus Coverage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Syllabus Coverage Map
          </CardTitle>
          <CardDescription>
            Track your progress across the complete UPSC syllabus
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Overall Progress</h3>
              <Badge variant="secondary" className="text-lg px-3 py-1">68% Complete</Badge>
            </div>
            <Progress value={68} className="h-4" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-sm">General Studies Papers</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GS Paper 1 - History & Culture</span>
                    <div className="flex items-center gap-2">
                      <Progress value={72} className="w-20 h-2" />
                      <span className="text-sm font-medium">72%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GS Paper 2 - Polity & Governance</span>
                    <div className="flex items-center gap-2">
                      <Progress value={65} className="w-20 h-2" />
                      <span className="text-sm font-medium">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GS Paper 3 - Economy & Environment</span>
                    <div className="flex items-center gap-2">
                      <Progress value={58} className="w-20 h-2" />
                      <span className="text-sm font-medium">58%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GS Paper 4 - Ethics & Integrity</span>
                    <div className="flex items-center gap-2">
                      <Progress value={75} className="w-20 h-2" />
                      <span className="text-sm font-medium">75%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-sm">Other Components</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Essay Writing</span>
                    <div className="flex items-center gap-2">
                      <Progress value={45} className="w-20 h-2" />
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Optional Subject</span>
                    <div className="flex items-center gap-2">
                      <Progress value={82} className="w-20 h-2" />
                      <span className="text-sm font-medium">82%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Current Affairs</span>
                    <div className="flex items-center gap-2">
                      <Progress value={90} className="w-20 h-2" />
                      <span className="text-sm font-medium">90%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Prelims Practice</span>
                    <div className="flex items-center gap-2">
                      <Progress value={78} className="w-20 h-2" />
                      <span className="text-sm font-medium">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GS Papers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              General Studies Papers
            </CardTitle>
            <CardDescription>
              Detailed progress for each GS paper
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">GS Paper 1</h4>
                  <Badge variant="secondary">72%</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Modern History</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex justify-between">
                    <span>Ancient History</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex justify-between">
                    <span>Art & Culture</span>
                    <Clock className="h-4 w-4 text-yellow-500" />
                  </div>
                  <div className="flex justify-between">
                    <span>Geography</span>
                    <Clock className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">GS Paper 2</h4>
                  <Badge variant="secondary">65%</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Constitutional Framework</span>
                    <Clock className="h-4 w-4 text-yellow-500" />
                  </div>
                  <div className="flex justify-between">
                    <span>Fundamental Rights</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex justify-between">
                    <span>Governance</span>
                    <Clock className="h-4 w-4 text-yellow-500" />
                  </div>
                  <div className="flex justify-between">
                    <span>International Relations</span>
                    <Clock className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="w-full">
              View Detailed Progress
            </Button>
          </CardContent>
        </Card>

        {/* Quick Access */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Quick Access
            </CardTitle>
            <CardDescription>
              Access study materials and resources instantly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-16 flex-col gap-2">
                <Brain className="h-5 w-5" />
                <span className="text-xs">Mind Maps</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <FileText className="h-5 w-5" />
                <span className="text-xs">Notes</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <BarChart3 className="h-5 w-5" />
                <span className="text-xs">Analytics</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-xs">Schedule</span>
              </Button>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Recent Materials</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span className="text-sm">Indian Polity Notes</span>
                  <Badge variant="outline" className="text-xs">Updated</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span className="text-sm">History Timeline</span>
                  <Badge variant="outline" className="text-xs">New</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                  <span className="text-sm">Geography Maps</span>
                  <Badge variant="outline" className="text-xs">Updated</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modular Content Library */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Modular Content Library
          </CardTitle>
          <CardDescription>
            Organized study materials with completion tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Core Subjects</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Indian History</span>
                  <div className="flex items-center gap-2">
                    <Progress value={75} className="w-16 h-2" />
                    <span className="text-xs">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Indian Polity</span>
                  <div className="flex items-center gap-2">
                    <Progress value={68} className="w-16 h-2" />
                    <span className="text-xs">68%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Indian Economy</span>
                  <div className="flex items-center gap-2">
                    <Progress value={52} className="w-16 h-2" />
                    <span className="text-xs">52%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Current Affairs</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">National Affairs</span>
                  <div className="flex items-center gap-2">
                    <Progress value={90} className="w-16 h-2" />
                    <span className="text-xs">90%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">International Affairs</span>
                  <div className="flex items-center gap-2">
                    <Progress value={85} className="w-16 h-2" />
                    <span className="text-xs">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Science & Technology</span>
                  <div className="flex items-center gap-2">
                    <Progress value={78} className="w-16 h-2" />
                    <span className="text-xs">78%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Practice Materials</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">MCQ Bank</span>
                  <div className="flex items-center gap-2">
                    <Progress value={82} className="w-16 h-2" />
                    <span className="text-xs">82%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Answer Writing</span>
                  <div className="flex items-center gap-2">
                    <Progress value={45} className="w-16 h-2" />
                    <span className="text-xs">45%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 border rounded">
                  <span className="text-sm">Mock Tests</span>
                  <div className="flex items-center gap-2">
                    <Progress value={60} className="w-16 h-2" />
                    <span className="text-xs">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyMaterialsSection;
