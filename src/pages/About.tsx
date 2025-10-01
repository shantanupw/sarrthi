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
          <div className="absolute inset-0 cosmic-gradient opacity-40" />
          <div className="absolute inset-0 cosmic-grid opacity-30" />
          
          <div className="relative w-full max-w-7xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              About Sarrthi IAS
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
              Empowering Future
              <span className="block text-primary mt-2">Civil Servants</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              We are a world-class UPSC preparation platform dedicated to transforming ambitious individuals 
              into successful civil servants through innovative learning, expert mentorship, and cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="brand-gradient h-12 px-8 text-base">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base border-2">
                Meet Our Team
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 md:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="font-bold text-4xl text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                Our Mission & Vision
              </h2>
              <p className="text-muted-foreground text-lg">
                Building the next generation of civil servants with excellence and integrity
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Target className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    To democratize UPSC preparation by providing world-class education, personalized mentorship, 
                    and innovative learning tools that empower every aspirant to achieve their dreams of serving the nation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Star className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    To become the world's leading platform for civil service preparation, recognized for 
                    producing ethical, competent, and visionary leaders who will shape India's future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 md:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
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
                  <Card key={index} className="text-center border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                Why Choose Sarrthi?
              </h2>
              <p className="text-muted-foreground text-lg">
                Innovative features that set us apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 md:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                Meet Our Leadership Team
              </h2>
              <p className="text-muted-foreground text-lg">
                Experienced professionals dedicated to your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground mb-1">
                      {member.experience}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.expertise}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 md:px-12 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 cosmic-grid" />
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary-foreground mb-6">
              Ready to Start Your UPSC Journey?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join thousands of successful aspirants who have achieved their dreams with Sarrthi
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base bg-background text-foreground hover:bg-background/90 border-2 border-background">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
