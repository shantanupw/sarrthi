import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen, CreditCard } from 'lucide-react';

interface CourseInfoCardProps {
  title: string;
  description: string[];
  price: string;
  thumbnail?: string;
  duration: string;
  mode: string;
  feeStructure: string;
  totalFaculties: number;
}

const CourseInfoCard = ({
  title,
  description,
  price,
  thumbnail,
  duration,
  mode,
  feeStructure,
  totalFaculties,
}: CourseInfoCardProps) => {
  return (
    <Card className="w-full border-border bg-card overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {description.map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <span className="text-primary text-xs font-medium">{index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold">{price}</div>
                {price !== 'Free' && price !== 'Contact Us' && (
                  <div className="text-xs text-muted-foreground">Inclusive of all taxes</div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="brand-gradient" size="lg">Enroll Now</Button>
                <Button variant="outline" className="border-border" size="lg">Get Callback</Button>
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex flex-col">
            <div className="h-48 md:h-64 bg-muted flex items-center justify-center">
              {thumbnail ? (
                <img 
                  src={thumbnail} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-muted-foreground">
                  <BookOpen className="w-12 h-12 mx-auto mb-2" />
                  <span className="text-sm">Course Thumbnail</span>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border border-t border-border">
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <Clock className="h-5 w-5 text-muted-foreground mb-1" />
                <div className="text-xs text-muted-foreground">Duration</div>
                <div className="text-sm font-medium">{duration}</div>
              </div>
              
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <BookOpen className="h-5 w-5 text-muted-foreground mb-1" />
                <div className="text-xs text-muted-foreground">Mode</div>
                <div className="text-sm font-medium">{mode}</div>
              </div>
              
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <CreditCard className="h-5 w-5 text-muted-foreground mb-1" />
                <div className="text-xs text-muted-foreground">Fee Structure</div>
                <div className="text-sm font-medium">{feeStructure}</div>
              </div>
              
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <Users className="h-5 w-5 text-muted-foreground mb-1" />
                <div className="text-xs text-muted-foreground">Faculties</div>
                <div className="text-sm font-medium">{totalFaculties}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseInfoCard;