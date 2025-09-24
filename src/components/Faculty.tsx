import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Users, Star } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Varun Jain",
      credentials: "2 UPSC Interviews, Founder Sarrthi IAS, IIT Roorkee",
      specialization: "IR, MCQ Solving & Mentorship",
      experience: "4 UPSC Mains, 2 Interviews",
      icon: Award
    },
    {
      name: "Dr. Shivin Chaudhary", 
      credentials: "Ex-IRS",
      specialization: "Economy, Environment, Disaster Management, Science & Technology, Security",
      experience: "Ex-IRS Officer",
      icon: BookOpen
    },
    {
      name: "Mudit Jain",
      credentials: "Ex-IRS, Ex-IPS",
      specialization: "Ethics, Essay and Current Affairs",
      experience: "Ex-IRS, Ex-IPS Officer",
      icon: Award
    },
    {
      name: "Faculty Member",
      credentials: "3 UPSC Interviews",
      specialization: "General Studies 2",
      experience: "Teaching Experience - 25+ Years",
      icon: Users
    },
    {
      name: "Geography Faculty",
      credentials: "3 UPSC Interviews, UGC NET (100 percentile)",
      specialization: "Geography & Mapping",
      experience: "Geography Author",
      icon: BookOpen
    },
    {
      name: "History Faculty",
      credentials: "Teaching Experience: 5+ years",
      specialization: "Ancient, Medieval, Art & Culture, Modern History",
      experience: "5+ Years Teaching Experience",
      icon: BookOpen
    },
    {
      name: "Strategy Mentor",
      credentials: "Mentor to 450+ rankers",
      specialization: "Strategy and Mentorship",
      experience: "3 UPSC Interviews",
      icon: Star
    }
  ];

  return (
    <section id="faculty" className="w-full py-20 px-6 md:px-12 bg-muted/20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Meet Our Expert Faculty
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn from experienced professionals who have cracked UPSC and are dedicated to your success
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => {
            const Icon = faculty.icon;
            return (
              <Card key={index} className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 space-y-4">
                  {/* Faculty Image */}
                  <div className="w-full h-32 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Icon className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm">Faculty Photo</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-center">{faculty.name}</h3>
                    <Badge variant="secondary" className="text-xs w-full justify-center">
                      {faculty.experience}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">{faculty.credentials}</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Specialization: </span>
                      {faculty.specialization}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Faculty Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              number: "450+",
              label: "Rankers Mentored",
              description: "Successful UPSC candidates guided by our faculty"
            },
            {
              number: "25+",
              label: "Years Combined Experience", 
              description: "Collective teaching and mentoring experience"
            },
            {
              number: "15+",
              label: "UPSC Interviews",
              description: "Faculty members with interview experience"
            }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-lg font-medium text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;