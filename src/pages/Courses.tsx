import React, { useMemo, useState } from 'react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';
import { courses } from '@/lib/courses';
import { books } from '@/lib/books';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, BookOpen, ChevronLeft, ChevronRight, FileText, Download, ShoppingCart } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Courses = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const isBooks = category === 'books';
  
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [price, setPrice] = useState<'All' | 'Free' | 'Paid' | 'Contact'>('All');
  const [popularOnly, setPopularOnly] = useState(false);
  const [batch, setBatch] = useState<string>('All');
  const [level, setLevel] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(6);

  const tags = useMemo(() => {
    try {
      if (isBooks) {
        const raw = books.map(b => b.category);
        return Array.from(new Set(raw)).filter((t): t is string => typeof t === 'string' && t.length > 0);
      } else {
        const raw = courses.flatMap(c => Array.isArray(c.tags) ? c.tags : []);
        return Array.from(new Set(raw)).filter((t): t is string => typeof t === 'string' && t.length > 0);
      }
    } catch {
      return [] as string[];
    }
  }, [isBooks]);

  const filtered = useMemo(() => {
    try {
      if (isBooks) {
        return books.filter(b => {
          const matchesSearch = (b.title || '').toLowerCase().includes((search || '').toLowerCase()) ||
                               (b.author || '').toLowerCase().includes((search || '').toLowerCase());
          const matchesTags = selectedTags.length === 0 ? true : selectedTags.includes(b.category);
          return matchesSearch && matchesTags;
        });
      } else {
        return courses.filter(c => {
          const matchesSearch = (c.title || '').toLowerCase().includes((search || '').toLowerCase());
          const courseTags = Array.isArray(c.tags) ? c.tags : [];
          const matchesTags = selectedTags.length === 0 ? true : selectedTags.every(t => courseTags.includes(t));
          const priceVal = c.price || '';
          const matchesPrice = price === 'All' ? true : price === 'Free' ? priceVal === 'Free' : price === 'Contact' ? priceVal === 'Contact Us' : priceVal !== 'Free' && priceVal !== 'Contact Us';
          const matchesPopular = popularOnly ? !!c.popular : true;
          const matchesBatch = batch === 'All' ? true : (c.batch || '').toLowerCase().includes(batch.toLowerCase());
          const matchesLevel = level === 'All' ? true : 
            level === 'Foundation' ? (c.title || '').toLowerCase().includes('foundation') :
            level === 'Mains' ? (c.title || '').toLowerCase().includes('mains') :
            level === 'Prelims' ? (c.title || '').toLowerCase().includes('prelims') : true;
          return matchesSearch && matchesTags && matchesPrice && matchesPopular && matchesBatch && matchesLevel;
        });
      }
    } catch {
      return isBooks ? books : courses;
    }
  }, [search, selectedTags, price, popularOnly, batch, level, isBooks]);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentItems = filtered.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedTags, price, popularOnly, batch, level, isBooks]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <TopNavBar />
      <main className="pt-20 py-12 px-6 md:px-12">
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
                  <div className="text-sm text-muted-foreground">{isBooks ? 'Book Categories' : 'Categories'}</div>
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
                {!isBooks && (
                  <>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Price</div>
                      {(['All','Free','Paid','Contact'] as const).map(p => (
                        <label key={p} className="flex items-center gap-2 text-sm">
                          <input type="radio" name="price" checked={price===p} onChange={() => setPrice(p)} /> {p}
                        </label>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Batch</div>
                      {(['All', 'Batch 5', 'Batch 4', 'Batch 3', 'Foundation', 'Test Series', 'Mains', 'Free'] as const).map(b => (
                        <label key={b} className="flex items-center gap-2 text-sm">
                          <input type="radio" name="batch" checked={batch===b} onChange={() => setBatch(b)} /> {b}
                        </label>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Course Level</div>
                      {(['All', 'Foundation', 'Mains', 'Prelims'] as const).map(l => (
                        <label key={l} className="flex items-center gap-2 text-sm">
                          <input type="radio" name="level" checked={level===l} onChange={() => setLevel(l)} /> {l}
                        </label>
                      ))}
                    </div>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={popularOnly} onChange={(e) => setPopularOnly(e.target.checked)} /> Popular only
                    </label>
                  </>
                )}
                <div className="pt-2">
                  <button className="text-xs text-muted-foreground hover:text-foreground" onClick={() => { setSearch(''); setSelectedTags([]); setPrice('All'); setPopularOnly(false); setBatch('All'); setLevel('All'); }}>Clear all</button>
                </div>
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {isBooks ? 'UPSC Books' : 'All Courses'}
                </h1>
                <div className="text-sm text-muted-foreground">
                  {filtered.length} result(s) • Page {currentPage} of {totalPages}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {isBooks ? (
                  // Books Layout
                  currentItems.map((book: any) => (
                    <Card key={book.id} className="relative p-6 border flex flex-col h-full bg-card hover:shadow-lg transition-shadow">
                      
                      {/* Book Thumbnail */}
                      <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-6 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <FileText className="w-12 h-12 mx-auto mb-3 text-primary" />
                          <span className="text-sm font-medium">UPSC Book</span>
                        </div>
                      </div>
                      
                      <CardHeader className="p-0 pb-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">{book.category}</Badge>
                            <div className="text-sm text-muted-foreground">(Includes Shipping)</div>
                          </div>
                          <h3 className="text-xl font-semibold tracking-tight line-clamp-2">{book.title}</h3>
                          <p className="text-sm text-primary font-medium">By {book.author}</p>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0 flex-grow flex flex-col justify-between">
                        <div className="space-y-4 mb-6">
                          <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                            {book.description}
                          </p>
                          
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="text-xs text-muted-foreground font-medium mb-2">About the Author:</p>
                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                              {book.authorDescription}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="text-3xl font-bold text-primary">{book.price}</div>
                            <div className="text-xs text-muted-foreground text-right">
                              <div>{book.deliveryInfo}</div>
                            </div>
                          </div>
                          
                          <div className="flex gap-3">
                            {book.samplePdf && (
                              <Button variant="outline" size="sm" className="flex-1">
                                <Download className="w-4 h-4 mr-2" />
                                Sample PDF
                              </Button>
                            )}
                            <Button variant="default" size="sm" className="flex-1">
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Book A Copy
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  // Courses Layout
                  currentItems.map((course: any) => (
                    <Card key={course.id} className={`relative p-6 border flex flex-col h-full ${course.popular ? 'border-primary/50 shadow-lg bg-card' : 'border-border bg-card'}`}>
                      
                      {/* Popular Badge */}
                      {course.popular && (
                        <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
                          Most Popular
                        </div>
                      )}
                      
                      {/* Course Thumbnail */}
                      <div className="w-full h-32 bg-muted rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <BookOpen className="w-8 h-8 mx-auto mb-2" />
                          <span className="text-sm">Course Thumbnail</span>
                        </div>
                      </div>
                      
                      <CardHeader className="p-0 pb-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs border-strong">{course.batch}</Badge>
                              {course.live && (
                                <Badge variant="destructive" className="text-xs bg-red-500 text-white">LIVE</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="w-3 h-3" />{course.startDate}</div>
                          </div>
                          <h3 className="text-xl font-semibold tracking-tight">{course.title}</h3>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 flex-grow flex flex-col justify-between">
                        <div className="space-y-3 mb-6">
                          {course.features.map((f: any, i: number) => (
                            <div key={i} className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-500" /><span className="text-sm">{f}</span></div>
                          ))}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold">{course.price}</div>
                            {course.price !== 'Free' && course.price !== 'Contact Us' && <div className="text-sm text-muted-foreground">Inclusive of all taxes</div>}
                          </div>
                          <Button variant="default" className="w-full" onClick={() => navigate(`/course/${course.slug}`)}>Learn More</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        className="w-10 h-10 p-0"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;


