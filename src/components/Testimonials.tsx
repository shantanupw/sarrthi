import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rank: "AIR 45, UPSC CSE 2023",
      course: "GS Foundation Plus",
      content: "Sarrthi IAS provided me with the perfect foundation for UPSC preparation. The faculty's expertise, especially Varun Sir's mentorship, was instrumental in my success.",
      rating: 5
    },
    {
      name: "Rohit Kumar", 
      rank: "AIR 127, UPSC CSE 2023",
      course: "Live GS Foundation",
      content: "The comprehensive curriculum and experienced faculty at Sarrthi IAS made all the difference. Dr. Shivin Chaudhary's economics classes were outstanding.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      rank: "AIR 89, UPSC CSE 2022", 
      course: "Complete Course Package",
      content: "I'm grateful to Sarrthi IAS for their excellent guidance throughout my UPSC journey. The faculty's practical approach kept me motivated.",
      rating: 5
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-muted/20">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Success Stories from Our Students
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from UPSC toppers who achieved their dreams with Sarrthi IAS guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-border bg-card">
              <CardContent className="p-0 space-y-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary" />
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <Badge variant="default" className="w-fit text-xs mt-1">
                    {testimonial.rank}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;