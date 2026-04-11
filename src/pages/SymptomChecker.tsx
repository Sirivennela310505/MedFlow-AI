import { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Brain,
  Home,
  CalendarCheck,
  AlertTriangle,
  Stethoscope,
  Activity,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Dashboard', href: '/patient', icon: <Home className="h-4 w-4" /> },
  { label: 'Symptom Checker', href: '/symptom-checker', icon: <Brain className="h-4 w-4" /> },
  { label: 'Appointments', href: '/appointments', icon: <CalendarCheck className="h-4 w-4" /> },
  { label: 'Emergency', href: '/emergency', icon: <AlertTriangle className="h-4 w-4" /> },
  { label: 'Telemedicine', href: '/telemedicine', icon: <Stethoscope className="h-4 w-4" /> },
];

type Priority = 'low' | 'medium' | 'high' | 'critical';

interface AnalysisResult {
  priority: Priority;
  condition: string;
  advice: string;
  department: string;
  color: string;
}

export default function SymptomChecker() {
  const { toast } = useToast();

  const [symptoms, setSymptoms] = useState('');
  const [age, setAge] = useState(30);
  const [duration, setDuration] = useState('Few days');
  const [severity, setSeverity] = useState(5);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  const analyzeSymptoms = (symptomText: string, age: number, severity: number): AnalysisResult => {
    const text = symptomText.toLowerCase();

    if (
      text.includes('chest pain') ||
      text.includes('breathing problem') ||
      text.includes('shortness of breath') ||
      text.includes('unconscious') ||
      text.includes('heavy bleeding')
    ) {
      return {
        priority: 'critical',
        condition: 'Critical symptoms detected',
        advice: 'Seek emergency medical care immediately. Do not delay treatment.',
        department: 'Emergency / ICU',
        color: 'text-red-600',
      };
    }

    if (
      text.includes('fever') && text.includes('weakness') && age > 55 ||
      text.includes('vomiting') ||
      text.includes('severe pain') ||
      severity >= 8
    ) {
      return {
        priority: 'high',
        condition: 'High priority medical attention recommended',
        advice: 'Consult a doctor as soon as possible and monitor your condition closely.',
        department: 'General Medicine',
        color: 'text-orange-600',
      };
    }

    if (
      text.includes('fever') ||
      text.includes('headache') ||
      text.includes('cough') ||
      text.includes('cold') ||
      severity >= 5
    ) {
      return {
        priority: 'medium',
        condition: 'Moderate symptoms detected',
        advice: 'Book an appointment within 24 hours and monitor symptoms regularly.',
        department: 'General OPD',
        color: 'text-yellow-600',
      };
    }

    return {
      priority: 'low',
      condition: 'Low-risk symptoms',
      advice: 'Rest, hydrate, and monitor symptoms. Seek care if symptoms worsen.',
      department: 'Home Care / General OPD',
      color: 'text-green-600',
    };
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!symptoms.trim()) {
      toast({
        title: 'Enter symptoms',
        description: 'Please describe your symptoms before analyzing.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const analysis = analyzeSymptoms(symptoms, age, severity);
      setResult(analysis);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        await supabase.from('symptom_checks').insert({
          user_id: user.id,
          symptoms,
          age,
          duration,
          severity,
          priority: analysis.priority,
          recommendation: analysis.advice,
        });
      }

      toast({
        title: 'Analysis complete',
        description: `Priority detected: ${analysis.priority.toUpperCase()}`,
      });
    } catch (error) {
      toast({
        title: 'Analysis failed',
        description: 'Something went wrong while analyzing symptoms.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout navItems={navItems} title="AI Symptom Checker">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-2xl bg-sky-100 p-3">
              <Brain className="h-7 w-7 text-sky-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Describe Your Symptoms</h2>
              <p className="text-slate-600 mt-1">
                Our AI will analyze and suggest the appropriate care level.
              </p>
            </div>
          </div>

          <form onSubmit={handleAnalyze} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Symptoms
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Example: fever, headache, weakness"
                className="w-full min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option>Few hours</option>
                  <option>Few days</option>
                  <option>One week</option>
                  <option>More than one week</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Severity (1-10)
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={severity}
                  onChange={(e) => setSeverity(Number(e.target.value))}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <Button type="submit" className="w-full rounded-2xl py-6 text-base" disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze Symptoms'}
            </Button>
          </form>
        </div>

        {result && (
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <Activity className="h-6 w-6 text-sky-600" />
              <h3 className="text-2xl font-bold text-slate-900">AI Analysis Result</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-slate-50 border p-5">
                <p className="text-sm text-slate-500 mb-2">Priority Level</p>
                <p className={`text-2xl font-bold uppercase ${result.color}`}>
                  {result.priority}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border p-5">
                <p className="text-sm text-slate-500 mb-2">Recommended Department</p>
                <p className="text-xl font-semibold text-slate-900">{result.department}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 border p-5">
                <p className="text-sm text-slate-500 mb-2">Assessment</p>
                <p className="text-lg font-semibold text-slate-900">{result.condition}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 border p-5">
                <p className="text-sm text-slate-500 mb-2">Advice</p>
                <p className="text-slate-700 leading-relaxed">{result.advice}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}