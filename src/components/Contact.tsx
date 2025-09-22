import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 bg-muted/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Still In Doubt?
          </h2>
          <p className="text-muted-foreground text-lg">
            Let us know any query regarding your UPSC preparation and we'll guide you in the right direction.
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 95690 93856</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> ask@sarrthi.com</div>
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /> Shop No -6, 2nd Floor, Front Side, Sarrthi IAS, Near Grover Mithaivala, Bada Bazar Rd, Delhi, 110060</div>
          </div>
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-6 space-y-4">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="c-name" className="text-foreground">Name *</Label>
                <Input id="c-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-phone" className="text-foreground">Mobile Number *</Label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-md text-muted-foreground">+91</div>
                  <Input id="c-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter mobile number" className="rounded-l-none bg-background border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-course" className="text-foreground">Course *</Label>
                <Input id="c-course" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter course of interest" className="bg-background border-border" />
              </div>
              <Button type="submit" className="w-full brand-gradient">Request Callback</Button>
              <p className="text-xs text-muted-foreground text-center">By continuing, you agree to the terms and conditions.</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;


