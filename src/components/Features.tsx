import React, { useMemo, useState } from 'react';
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

import ContactDialog from '@/components/ContactDialog';
import { useNavigate } from 'react-router-dom';

import { courses as allCourses, Course } from '@/lib/courses';

const Features = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('All Courses');
  const courses: Course[] = [...allCourses];
  // Additional courses from content spec
  courses.push(
    {
      id: 9,
      title: "GS Foundation Course 2026 (Batch 4)",
      slug: "live-gs-foundation-course-2026-batch-4-additional",
      batch: "Batch 4",
      startDate: "26th May 2025",
      price: "₹19,999",
      features: [
        "Foundation Class",
        "Flip Learning Method",
        "Answer Writing Session",
        "Mains & Interview Preparation",
        "PYQ-Based Practice"
      ],
      popular: false,
      live: true,
      tags: ["GS Foundation"]
    },
    {
      id: 10,
      title: "GS Foundation Course 2026 Plus (Batch 4)",
      slug: "live-gs-foundation-course-2026-plus-batch-4-additional",
      batch: "Batch 4 Plus",
      startDate: "26th May 2025",
      price: "₹29,999",
      features: [
        "Foundation Class",
        "1:1 Mentorship",
        "Bi-Weekly Study Plans",
        "Answer Writing Sessions",
        "Prelims & Mains Revision"
      ],
      popular: false,
      live: true,
      tags: ["GS Foundation"]
    },
    {
      id: 11,
      title: "GS Foundation Course 2026 Plus (Batch 3)",
      slug: "live-gs-foundation-course-2026-plus-batch-3-additional",
      batch: "Batch 3 Plus",
      startDate: "1st April 2025",
      price: "₹29,999",
      features: [
        "Foundation Class",
        "1:1 Mentorship",
        "Bi-Weekly Study Plans",
        "Answer Writing Sessions",
        "Prelims & Mains Revision"
      ],
      popular: false,
      live: true,
      tags: ["GS Foundation"]
    },
    {
      id: 12,
      title: "GS Foundation Course 2026 (Batch 3)",
      slug: "live-gs-foundation-course-2026-batch-3-additional",
      batch: "Batch 3",
      startDate: "1st April 2025",
      price: "₹19,999",
      features: [
        "Foundation Class",
        "Complete Mains Coverage",
        "Answer Writing Session",
        "Prelims Revision"
      ],
      popular: false,
      live: true,
      tags: ["GS Foundation"]
    }
  );

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

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'All Courses') return courses;
    // Simple mapping based on title keywords
    return courses.filter(c => {
      const t = c.title.toLowerCase();
      const map: Record<string, RegExp> = {
        'gs foundation': /(foundation)/,
        'mentorship': /(mentor)/,
        'gs mains comprehensive': /(mains)\s*(comprehensive)?/,
        'gs mains modules': /(mains).*?(module)/,
        'optional': /(optional)/,
        'csat': /(csat)/,
        'prelims revision': /(prelims)|(revision)/,
        'current affairs': /(current\s*affairs)/,
        'test series': /(test\s*series)/
      };
      const regex = map[activeCategory.toLowerCase()];
      return regex ? regex.test(t) : true;
    });
  }, [activeCategory, courses]);

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
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md border text-sm transition-colors ${activeCategory === category ? 'brand-gradient border-transparent' : 'bg-card border-border text-foreground hover:bg-muted'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Courses Grid */}
        <div className="relative">
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-4">
              {filteredCourses.slice(0, 6).map((course, index) => (
                <Card 
                  key={course.id}
                  className={`relative p-6 border flex flex-col h-full w-80 flex-shrink-0 ${
                    course.popular 
                      ? "border-primary/50 shadow-lg bg-card" 
                      : "border-border bg-card"
                  } transition-all duration-300`}
                >
                  {course.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
                      Most Popular
                    </div>
                  )}
                  
                  {/* Course Thumbnail */}
                  <div className="w-full h-32 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <BookOpen className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm">Course Thumbnail</span>
                    </div>
                  </div>

                  <CardHeader className="p-0 pb-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs border-strong">
                            {course.batch}
                          </Badge>
                          {course.live && (
                            <Badge variant="destructive" className="text-xs bg-red-500 text-white">LIVE</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {course.startDate}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground leading-tight">
                        {course.title}
                      </h3>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 flex-grow flex flex-col justify-between">
                    <div className="space-y-3 mb-6">
                      <div className="space-y-2">
                        {course.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                        {course.features.length > 3 && (
                          <p className="text-xs text-muted-foreground">+{course.features.length - 3} more features</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-foreground">{course.price}</div>
                        {course.price !== "Free" && course.price !== "Contact Us" && (
                          <div className="text-xs text-muted-foreground">Incl. taxes</div>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button 
                          variant="default"
                          className="w-full"
                          onClick={() => navigate(`/course/${encodeURIComponent(course.title.toLowerCase().replace(/\s+/g,'-'))}`)}
                        >
                          Learn More
                        </Button>
                        <ContactDialog>
                          <Button variant="bordered-strong" className="w-full">Contact</Button>
                        </ContactDialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {filteredCourses.length > 6 && (
          <div className="text-center">
            <Button variant="bordered" onClick={() => navigate('/courses')}>Load more</Button>
          </div>
        )}

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