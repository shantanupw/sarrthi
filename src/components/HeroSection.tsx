import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Phone, Users, Award, BookOpen } from 'lucide-react';
const HeroSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const credentials = ["4 UPSC Mains", "2 Interviews", "IIT Roorkee", "AIR 297, UPSC CSE 2022", "Ex IRS, Ex IPS"];
  const stats = [{
    icon: Users,
    number: "450+",
    label: "Rankers Mentored"
  }, {
    icon: Award,
    number: "25+",
    label: "Years Experience"
  }, {
    icon: BookOpen,
    number: "700+",
    label: "Hours of Content"
  }];
  return <section className="relative min-h-screen flex items-center justify-center py-16 px-6 md:px-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0" style={{
      background: 'linear-gradient(135deg, rgba(248,168,36,0.12) 0%, rgba(254,254,254,0.06) 100%)'
    }} />
      <div className="absolute top-1/4 right-1/4 w-96 h-96" style={{
      background: 'radial-gradient(circle at center, rgba(248,168,36,0.2), transparent 60%)'
    }} />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64" style={{
      background: 'radial-gradient(circle at center, rgba(254,254,254,0.18), transparent 60%)'
    }} />
      
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Brand */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              SARRTHI IAS
            </h1>
            <p className="text-xl text-primary font-medium">
              Credible Faculty, Quality Content, Affordable Courses
            </p>
          </div>

          {/* Credentials */}
          

          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Crack UPSC with our 
              <span className="text-primary"> Expert Guidance</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of successful UPSC aspirants who trusted our proven methodology 
              and experienced faculty to achieve their IAS dreams.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => {
            const Icon = stat.icon;
            return <div key={index} className="text-center space-y-2">
                  <Icon className="w-8 h-8 mx-auto text-primary" />
                  <div className="font-bold text-2xl text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>;
          })}
          </div>
        </div>

        {/* Right Column - Callback Form */}
        <div className="flex justify-center lg:justify-end">
          <Card className="w-full max-w-md p-6 border-border shadow-lg bg-card">
            <CardContent className="space-y-6 p-0">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Get a Callback by our UPSC Expert!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Free consultation to discuss your UPSC preparation strategy
                </p>
              </div>

              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input id="name" type="text" placeholder="Enter your full name" value={name} onChange={e => setName(e.target.value)} className="bg-background border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Mobile Number *</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-md text-muted-foreground">
                      +91
                    </div>
                    <Input id="phone" type="tel" placeholder="Enter mobile number" value={phone} onChange={e => setPhone(e.target.value)} className="rounded-l-none bg-background border-border" />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  Get Free Callback
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By continuing, you agree to the terms and conditions.
                </p>
              </form>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Free mentorship session included</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default HeroSection;