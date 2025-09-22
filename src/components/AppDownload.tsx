import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Download, Video, MessageSquare, FileText } from 'lucide-react';

const AppDownload = () => {
  return (
    <section id="app" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Download the App
          </h2>
          <p className="text-muted-foreground text-lg">
            Get everything UPSC at one place. One stop solution for UPSC CSE preparation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[{icon: Video, label: 'HD Live Sessions'}, {icon: FileText, label: 'Free Study Material'}, {icon: MessageSquare, label: 'Student Chat Section'}].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">{f.label}</span>
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 pt-2">
            <Button className="brand-gradient">
              <Download className="w-4 h-4 mr-2" /> Download App
            </Button>
            <Button variant="outline" className="border-border">
              <Smartphone className="w-4 h-4 mr-2" /> Try Web
            </Button>
          </div>
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-0">
            <div className="aspect-[4/3] w-full rounded-md bg-muted flex items-center justify-center">
              <Smartphone className="w-16 h-16 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppDownload;


