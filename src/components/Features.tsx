import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  BookOpen, 
  Users, 
  Video, 
  Award, 
  Clock,
  CheckCircle,
  Star,
  Calendar
} from 'lucide-react';

const Features = () => {
  const courses = [
    {
      id: 1,
      title: "Live GS Foundation Course 2026 Plus",
      batch: "Batch 5 Plus",
      startDate: "14th July 2025",
      price: "₹29,999",
      features: [
        "Live Foundation Class",
        "Flip Learning Method", 
        "Live Answer Writing Session",
        "Mains & Interview Preparation",
        "PYQ-Based Practice"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Live GS Foundation Course 2026",
      batch: "Batch 5",
      startDate: "14th July 2025", 
      price: "₹19,999",
      features: [
        "Live Foundation Class",
        "Flip Learning Method",
        "Live Answer Writing Session",
        "Mains & Interview Preparation",
        "PYQ-Based Practice"
      ],
      popular: false
    },
    {
      id: 3,
      title: "Decode UPSC with AIR 1 Shakti Dubey",
      batch: "Special Initiative",
      startDate: "29th May 2024",
      price: "Free",
      features: [
        "UPSC Strategy",
        "Beginner Friendly",
        "Topper Sessions", 
        "Note-Making",
        "Answer Writing"
      ],
      popular: false
    },
    {
      id: 4,
      title: "Beginners' Kit",
      batch: "Batch 1",
      startDate: "2nd July 2025",
      price: "Contact Us",
      features: [
        "Comprehensive Foundation Building",
        "Personalized Study Plans",
        "Answer Writing Sessions",
        "Motivation and Mindset Development"
      ],
      popular: false
    }
  ];

  const categories = [
    "All Courses",
    "GS Foundation", 
    "Mentorship",
    "GS Mains Comprehensive",
    "GS Mains Modules",
    "Optional",
    "CSAT",
    "Prelims Revision",
    "Current Affairs",
    "Test Series"
  ];

  return (
    <section id="courses" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Featured Courses for UPSC CSE 2026
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive courses designed by experienced faculty to help you crack UPSC CSE with confidence
          </p>
        </div>

        {/* Course Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className={`relative p-6 border flex flex-col h-full ${
                course.popular 
                  ? "border-primary/50 cosmic-glow bg-card" 
                  : "border-border bg-card"
              } transition-all duration-300`}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Most Popular
                </div>
              )}

              <CardHeader className="p-0 pb-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {course.batch}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {course.startDate}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground leading-tight">
                    {course.title}
                  </h3>
                </div>
              </CardHeader>

              <CardContent className="p-0 flex-grow flex flex-col justify-between">
                <div className="space-y-4 mb-6">
                  <div className="space-y-3">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-foreground">{course.price}</div>
                    {course.price !== "Free" && course.price !== "Contact Us" && (
                      <div className="text-sm text-muted-foreground">Inclusive of all taxes</div>
                    )}
                  </div>
                  <Button 
                    className={
                      course.popular 
                        ? "w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "w-full border-border text-foreground hover:bg-muted"
                    }
                    variant={course.popular ? "default" : "outline"}
                  >
                    {course.price === "Free" ? "Join Now" : course.price === "Contact Us" ? "Contact Us" : "Enroll Now"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tighter text-foreground">
              Why Choose Sarrthi IAS?
            </h3>
            <p className="text-muted-foreground">
              Proven track record with experienced faculty and comprehensive curriculum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Ex-IRS, Ex-IPS officers and UPSC interview qualified mentors"
              },
              {
                icon: BookOpen, 
                title: "Comprehensive Content",
                description: "700+ hours of lectures covering complete UPSC syllabus"
              },
              {
                icon: Video,
                title: "Live Classes",
                description: "Interactive live sessions with doubt resolution"
              },
              {
                icon: Award,
                title: "Proven Results", 
                description: "450+ rankers mentored with our guidance"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center space-y-4 p-6 rounded-lg border border-border bg-card">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;