import React, { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { courses } from '@/lib/courses';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [price, setPrice] = useState<'All' | 'Free' | 'Paid' | 'Contact'>('All');
  const [popularOnly, setPopularOnly] = useState(false);

  const tags = useMemo(() => {
    try {
      const raw = courses.flatMap(c => Array.isArray(c.tags) ? c.tags : []);
      return Array.from(new Set(raw)).filter((t): t is string => typeof t === 'string' && t.length > 0);
    } catch {
      return [] as string[];
    }
  }, []);

  const filtered = useMemo(() => {
    try {
      return courses.filter(c => {
        const matchesSearch = (c.title || '').toLowerCase().includes((search || '').toLowerCase());
        const courseTags = Array.isArray(c.tags) ? c.tags : [];
        const matchesTags = selectedTags.length === 0 ? true : selectedTags.every(t => courseTags.includes(t));
        const priceVal = c.price || '';
        const matchesPrice = price === 'All' ? true : price === 'Free' ? priceVal === 'Free' : price === 'Contact' ? priceVal === 'Contact Us' : priceVal !== 'Free' && priceVal !== 'Contact Us';
        const matchesPopular = popularOnly ? !!c.popular : true;
        return matchesSearch && matchesTags && matchesPrice && matchesPopular;
      });
    } catch {
      return courses;
    }
  }, [search, selectedTags, price, popularOnly]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
              <div className="p-4 rounded-lg border border-border bg-card space-y-3">
                <div className="font-semibold">Filter</div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Search</div>
                  <input className="w-full px-3 py-2 rounded-md bg-background border border-border" placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Categories</div>
                  <div className="flex flex-col gap-2">
                    {tags.map(t => {
                      const checked = selectedTags.includes(t);
                      return (
                        <label key={t} className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => {
                              const isChecked = e.currentTarget.checked;
                              setSelectedTags(prev => {
                                const set = new Set(prev);
                                if (isChecked) set.add(t); else set.delete(t);
                                return Array.from(set);
                              });
                            }}
                          />
                          {t}
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Price</div>
                  {(['All','Free','Paid','Contact'] as const).map(p => (
                    <label key={p} className="flex items-center gap-2 text-sm">
                      <input type="radio" name="price" checked={price===p} onChange={() => setPrice(p)} /> {p}
                    </label>
                  ))}
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={popularOnly} onChange={(e) => setPopularOnly(e.target.checked)} /> Popular only
                </label>
                <div className="pt-2">
                  <button className="text-xs text-muted-foreground hover:text-foreground" onClick={() => { setSearch(''); setSelectedTags([]); setPrice('All'); setPopularOnly(false); }}>Clear all</button>
                </div>
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">All Courses</h1>
                <div className="text-sm text-muted-foreground">{filtered.length} result(s)</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map(course => (
              <Card key={course.id} className={`relative p-6 border flex flex-col h-full ${course.popular ? 'border-primary/50 cosmic-glow bg-card' : 'border-border bg-card'}`}>
                <CardHeader className="p-0 pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">{course.batch}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{course.startDate}</div>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight">{course.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-grow flex flex-col justify-between">
                  <div className="space-y-3 mb-6">
                    {course.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-500" /><span className="text-sm">{f}</span></div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">{course.price}</div>
                      {course.price !== 'Free' && course.price !== 'Contact Us' && <div className="text-sm text-muted-foreground">Inclusive of all taxes</div>}
                    </div>
                    <Button className="brand-gradient w-full" onClick={() => navigate(`/course/${course.slug}`)}>Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;


