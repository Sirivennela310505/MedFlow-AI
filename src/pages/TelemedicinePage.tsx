import { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Home, Brain, CalendarCheck, AlertTriangle, Stethoscope, Send, Video } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/patient', icon: <Home className="h-4 w-4" /> },
  { label: 'Symptom Checker', href: '/symptom-checker', icon: <Brain className="h-4 w-4" /> },
  { label: 'Appointments', href: '/appointments', icon: <CalendarCheck className="h-4 w-4" /> },
  { label: 'Emergency', href: '/emergency', icon: <AlertTriangle className="h-4 w-4" /> },
  { label: 'Telemedicine', href: '/telemedicine', icon: <Stethoscope className="h-4 w-4" /> },
];

interface Message {
  id: number;
  text: string;
  sender: 'patient' | 'doctor';
  time: string;
}

const initialMessages: Message[] = [
  { id: 1, text: 'Hello! I\'m Dr. Thompson. How can I help you today?', sender: 'doctor', time: '10:00 AM' },
  { id: 2, text: 'Hi Doctor, I\'ve been experiencing headaches for the past few days.', sender: 'patient', time: '10:01 AM' },
  { id: 3, text: 'I\'m sorry to hear that. Can you describe the pain? Is it sharp, dull, or throbbing?', sender: 'doctor', time: '10:02 AM' },
];

export default function TelemedicinePage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(m => [...m, { id: Date.now(), text: input, sender: 'patient', time }]);
    setInput('');

    // Simulate doctor response
    setTimeout(() => {
      const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages(m => [...m, {
        id: Date.now(),
        text: 'Thank you for sharing that. Based on your symptoms, I recommend scheduling an in-person visit for a thorough examination. In the meantime, stay hydrated and rest.',
        sender: 'doctor',
        time: t,
      }]);
    }, 2000);
  };

  return (
    <DashboardLayout navItems={navItems} title="Telemedicine">
      <div className="animate-slide-in">
        <div className="bg-card rounded-xl shadow-card border border-border/50 flex flex-col h-[calc(100vh-12rem)]">
          {/* Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">LT</div>
              <div>
                <p className="font-medium text-foreground text-sm">Dr. Lisa Thompson</p>
                <p className="text-xs text-success">● Online</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Video className="h-4 w-4" /> Start Video Call
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.sender === 'patient' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                  m.sender === 'patient'
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-secondary text-secondary-foreground rounded-bl-md'
                }`}>
                  <p className="text-sm">{m.text}</p>
                  <p className={`text-xs mt-1 ${m.sender === 'patient' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border flex gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
