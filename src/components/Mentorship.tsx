import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshake, ArrowRight } from 'lucide-react';

const Mentorship = () => {
  return (
    <section id="mentorship" className="w-full py-20 px-6 md:px-12 bg-muted/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Free Mentorship
          </h2>
          <p className="text-muted-foreground text-lg">
            Still in doubt? Get a free strategy call with our UPSC expert and
            a personalized study roadmap tailored to your goals.
          </p>
          <div className="flex gap-4">
            <Button className="brand-gradient">
              Get Free Callback
            </Button>
            <Button variant="outline" className="border-border">
              Learn More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">What you get</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>One-on-one call with a UPSC mentor</li>
                  <li>Study plan and booklist guidance</li>
                  <li>Answer writing and note-making tips</li>
                  <li>Course and batch recommendations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Mentorship;


