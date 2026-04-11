import { DashboardLayout } from '@/components/DashboardLayout';
import { useHospitals } from '@/hooks/use-data';
import { nearbyHospitals as fallbackHospitals } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Phone, MapPin, Home, Brain, CalendarCheck, Stethoscope, Heart, ShieldAlert } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/patient', icon: <Home className="h-4 w-4" /> },
  { label: 'Symptom Checker', href: '/symptom-checker', icon: <Brain className="h-4 w-4" /> },
  { label: 'Appointments', href: '/appointments', icon: <CalendarCheck className="h-4 w-4" /> },
  { label: 'Emergency', href: '/emergency', icon: <AlertTriangle className="h-4 w-4" /> },
  { label: 'Telemedicine', href: '/telemedicine', icon: <Stethoscope className="h-4 w-4" /> },
];

const firstAidSteps = [
  { icon: <Phone className="h-5 w-5" />, title: 'Call Emergency Services', desc: 'Dial 911 (US) or your local emergency number immediately.' },
  { icon: <Heart className="h-5 w-5" />, title: 'Check Responsiveness', desc: 'Tap the person and shout. Check for breathing.' },
  { icon: <ShieldAlert className="h-5 w-5" />, title: 'Begin CPR if Needed', desc: '30 chest compressions, 2 rescue breaths. Repeat.' },
  { icon: <MapPin className="h-5 w-5" />, title: 'Stay with Patient', desc: 'Keep the person calm and still until help arrives.' },
];

export default function EmergencyPage() {
  const { data: dbHospitals } = useHospitals();

  const hospitals = dbHospitals && dbHospitals.length > 0
    ? dbHospitals.map(h => ({ name: h.name, distance: h.distance, er: h.has_er, beds: h.available_beds }))
    : fallbackHospitals;

  return (
    <DashboardLayout navItems={navItems} title="Emergency Response">
      <div className="space-y-6 animate-slide-in">
        {/* Alert Banner */}
        <div className="bg-emergency/10 border-2 border-emergency/30 rounded-xl p-6 animate-pulse-emergency">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="h-8 w-8 text-emergency" />
            <div>
              <h2 className="text-xl font-bold text-emergency">Emergency Alert Active</h2>
              <p className="text-sm text-emergency/80">If you are experiencing a life-threatening emergency, call 911 immediately.</p>
            </div>
          </div>
          <Button className="bg-emergency hover:bg-emergency/90 text-emergency-foreground gap-2 mt-2">
            <Phone className="h-4 w-4" /> Call 911 Now
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* First Aid */}
          <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
            <h2 className="text-lg font-semibold text-foreground mb-4">Immediate Action Steps</h2>
            <div className="space-y-4">
              {firstAidSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 bg-emergency/10 rounded-lg text-emergency shrink-0">{step.icon}</div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{i + 1}. {step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Hospitals */}
          <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> Nearest Hospitals
            </h2>
            <div className="space-y-3">
              {hospitals.map((h, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border/50">
                  <div>
                    <p className="font-medium text-foreground text-sm">{h.name}</p>
                    <p className="text-xs text-muted-foreground">{h.distance} away · {h.beds} beds available</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {h.er && (
                      <span className="px-2 py-0.5 rounded-full bg-emergency/10 text-emergency text-xs font-medium">ER</span>
                    )}
                    <Button size="sm" variant="outline">
                      <MapPin className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
