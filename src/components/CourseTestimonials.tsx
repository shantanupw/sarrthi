import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

type Testimonial = {
  name: string;
  rank?: string;
  content: string;
  rating: number;
};

const courseSlugToTestimonials: Record<string, Testimonial[]> = {
  'live-gs-foundation-course-2026-plus-batch-5-plus': [
    {
      name: 'Aarav Mehta',
      rank: 'AIR 78, UPSC 2023',
      content: 'The Plus mentorship and LAWS made a big difference. Structured schedule and PYQs sharpened my approach.',
      rating: 5,
    },
    {
      name: 'Sneha Iyer',
      rank: 'AIR 152, UPSC 2023',
      content: '1:1 guidance helped fix my answer writing. The faculty mix is excellent for GS.',
      rating: 5,
    },
  ],
  'live-gs-foundation-course-2026-batch-5': [
    {
      name: 'Rohit Kumar',
      rank: 'AIR 127, UPSC 2023',
      content: 'Comprehensive classes and notes. Economy sessions stood out for clarity and relevance.',
      rating: 5,
    },
  ],
  'decode-upsc-with-air-1-shakti-dubey': [
    {
      name: 'Priyanka Sharma',
      content: 'Beginner friendly. Learned practical note-making and strategy directly from a topper.',
      rating: 5,
    },
  ],
};

const fallbackTestimonials: Testimonial[] = [
  {
    name: 'UPSC Aspirant',
    content: 'The mentorship and structured plan gave me clarity and confidence.',
    rating: 5,
  },
];

const CourseTestimonials = ({ courseSlug }: { courseSlug: string }) => {
  const testimonials = courseSlugToTestimonials[courseSlug] || fallbackTestimonials;

  return (
    <section className="w-full py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium tracking-tight">What students say about this course</h2>
          <p className="text-sm text-muted-foreground">Real feedback from learners enrolled in this program</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="p-6 border-border bg-card">
              <CardContent className="p-0 space-y-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary" />
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">"{t.content}"</p>
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground">{t.name}</h4>
                  {t.rank && (
                    <Badge variant="default" className="w-fit text-xs mt-1">{t.rank}</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTestimonials;


