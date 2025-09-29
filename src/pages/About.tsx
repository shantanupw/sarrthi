import React from 'react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  Brain, 
  Globe, 
  TrendingUp,
  CheckCircle,
  Star,
  GraduationCap,
  Lightbulb,
  Heart,
  Phone
} from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Students Mentored', value: '50,000+', icon: Users },
    { label: 'Success Rate', value: '85%', icon: TrendingUp },
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Expert Faculty', value: '200+', icon: GraduationCap }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in education and mentorship, ensuring every student reaches their potential.'
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We understand the challenges of UPSC preparation and provide compassionate, personalized support.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and modern teaching methods to enhance learning outcomes.'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and educational practices.'
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Advanced AI mentor provides 24/7 guidance and personalized study recommendations.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Study Materials',
      description: 'Curated content from top educators and comprehensive study resources for all subjects.'
    },
    {
      icon: Globe,
      title: 'Current Affairs Hub',
      description: 'Daily updates on national and international events with expert analysis and insights.'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'One-on-one guidance from experienced UPSC toppers and subject matter experts.'
    }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      experience: 'Former IAS Officer, 15+ years experience',
      expertise: 'Public Administration, Governance'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Academic Director',
      experience: 'Former IPS Officer, 12+ years experience',
      expertise: 'Criminal Justice, Law Enforcement'
    },
    {
      name: 'Prof. Amit Singh',
      role: 'Head of Technology',
      experience: 'IIT Delhi, 10+ years in EdTech',
      expertise: 'AI/ML, Educational Technology'
    },
    {
      name: 'Dr. Neha Gupta',
      role: 'Content Strategy Head',
      experience: 'Former IRS Officer, 8+ years experience',
      expertise: 'Economics, Public Policy'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <TopNavBar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-6 md:px-12 overflow-hidden">
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
          
          <div className="relative w-full max-w-7xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              About Sarrthi IAS
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Empowering Future
              <span className="text-primary"> Civil Servants</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              We are a world-class UPSC preparation platform dedicated to transforming ambitious individuals 
              into successful civil servants through innovative learning, expert mentorship, and cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-muted">
                Meet Our Team
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center space-y-4 p-6 rounded-lg border border-border bg-card">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-bold text-2xl text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6 md:px-12 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                Our Mission & Vision
              </h2>
              <p className="text-muted-foreground text-lg">
                Building the next generation of civil servants with excellence and integrity
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To democratize UPSC preparation by providing world-class education, personalized mentorship, 
                    and innovative learning tools that empower every aspirant to achieve their dreams of serving the nation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To become the world's leading platform for civil service preparation, recognized for 
                    producing ethical, competent, and visionary leaders who will shape India's future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center space-y-4 p-6 rounded-lg border border-border bg-card">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 md:px-12 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                Why Choose Sarrthi?
              </h2>
              <p className="text-muted-foreground text-lg">
                Innovative features that set us apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center space-y-4 p-6 rounded-lg border border-border bg-background">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
                Meet Our Leadership Team
              </h2>
              <p className="text-muted-foreground text-lg">
                Experienced professionals dedicated to your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="text-center space-y-4 p-6 rounded-lg border border-border bg-card">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {member.experience}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {member.expertise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 bg-primary">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-primary-foreground mb-6">
              Ready to Start Your UPSC Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join thousands of successful aspirants who have achieved their dreams with Sarrthi
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-muted">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-4 h-4 mr-2" />
                Get Free Callback
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
