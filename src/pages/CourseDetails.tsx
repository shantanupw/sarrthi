import React, { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '@/lib/courses';
import CourseTestimonials from '@/components/CourseTestimonials';

const CourseDetails = () => {
  const [phone, setPhone] = useState('');
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = useMemo(() => {
    if (!slug) return courses[0];
    return courses.find(c => c.slug === slug) || courses[0];
  }, [slug]);

  const faculties = [
    { name: 'Dr. Shivin Chaudhary', subtitle: 'Ex-IRS', details: 'Economy, Environment, Disaster Management, Science & Technology, Security' },
    { name: 'Varun Jain', subtitle: '2 UPSC Interviews, Founder Sarrthi IAS', details: 'IR, MCQ Solving & Mentorship' },
    { name: 'Mudit Jain', subtitle: 'Ex-IRS, Ex-IPS', details: 'Ethics, Essay and Current Affairs' },
    { name: 'M. Puri Sir', subtitle: '3 UPSC Interviews, 25+ Years', details: 'General Studies 2' },
    { name: 'Pallavi Saxena', subtitle: '3 UPSC Interviews, UGC NET (100 percentile)', details: 'Geography & Mapping' },
    { name: 'Kawal Baweja', subtitle: '5+ Years', details: 'Ancient, Medieval, Art & Culture, Modern History' },
    { name: 'Sajal Singh', subtitle: 'Mentor to 450+ rankers, 3 UPSC Interviews', details: 'Strategy and Mentorship' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <button onClick={() => window.history.length > 1 ? window.history.back() : navigate('/')} className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
                ← Back
              </button>
              <Badge className="brand-gradient">{course.batch}</Badge>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{course.title}</h1>
              <p className="text-muted-foreground">Boost your UPSC prep with the Live GS Foundation Plus course: 700+ hours of lectures, 1:1 mentorship with Sajal Singh, structured planning, answer writing, PYQ-based learning, and revision modules.</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{course.price}</div>
                {course.price !== 'Free' && course.price !== 'Contact Us' && (
                  <div className="text-xs text-muted-foreground">Inclusive of all taxes</div>
                )}
              </div>
              <div className="space-x-3">
                <Button className="brand-gradient">Enroll Now</Button>
                <Button variant="outline" className="border-border">Detailed Schedule</Button>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">Meet Your Educators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faculties.map((f, i) => (
                  <Card key={i} className="border-border bg-card">
                    <CardContent className="p-4">
                      <div className="font-semibold">{f.name}</div>
                      <div className="text-sm text-primary">{f.subtitle}</div>
                      <div className="text-sm text-muted-foreground">{f.details}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium">FAQs</h2>
              <Accordion type="single" collapsible>
                {[ 'What is the Flip Learning Method?', 'Is mentorship available?', 'Will the Foundation Program cover all subjects from the basics?', 'Will the Foundation Course provide video lectures and notes?', "What's the difference between Foundation and Foundation Plus?", 'Are recorded lectures provided?', 'What is Foundation Course?' ].map((q, i) => (
                  <AccordionItem value={`q${i}`} key={i}>
                    <AccordionTrigger>{q}</AccordionTrigger>
                    <AccordionContent>
                      Details will be shared during counseling and mentorship sessions.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          <div className="space-y-4">
            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-3">
                <div className="text-lg font-semibold">Get a Callback by our UPSC Expert!</div>
                <div className="text-xs text-muted-foreground">By continuing, you agree to the terms and conditions.</div>
                <div className="flex">
                  <div className="flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-md text-muted-foreground">+91</div>
                  <input className="rounded-l-none bg-background border border-border px-3 py-2 text-sm w-full" placeholder="Your mobile number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <Button className="brand-gradient w-full">Call Me Back</Button>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="p-6 text-sm text-muted-foreground">
                Shop No -6, 2nd Floor, Front Side, Sarrthi IAS, Near Grover Mithaivala, Bada Bazar Rd, Delhi, 110060
              </CardContent>
            </Card>
            <Button variant="outline" className="border-border w-full" onClick={() => navigate('/')}>Back to Courses</Button>
          </div>
        </div>
      </main>
      <div className="py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <CourseTestimonials courseSlug={course.slug} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;


