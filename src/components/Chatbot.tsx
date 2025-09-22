import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hi! Ask anything about Sarrthi IAS courses or mentorship.' }
  ]);
  const [text, setText] = useState('');

  const sendMessage = () => {
    const value = text.trim();
    if (!value) return;
    setMessages(prev => [...prev, { role: 'user', text: value }, { role: 'bot', text: 'Thanks! Our team will contact you shortly at +91 95690 93856. You can also check the Courses section.' }]);
    setText('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-[320px] h-[420px] rounded-xl border border-border bg-card shadow-xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="font-medium text-foreground">Ask Sarrthi</div>
            <button className="text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${m.role === 'bot' ? 'bg-muted text-foreground' : 'brand-gradient text-foreground ml-auto'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border flex items-center gap-2">
            <Input
              placeholder="Type your message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="bg-background border-border"
            />
            <Button size="icon" className="brand-gradient" onClick={sendMessage}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
      <Button size="icon" className="brand-gradient rounded-full w-12 h-12 shadow-lg" onClick={() => setOpen(v => !v)}>
        <MessageCircle className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Chatbot;


