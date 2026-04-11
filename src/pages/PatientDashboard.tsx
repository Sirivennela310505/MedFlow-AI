import { DashboardLayout } from '@/components/DashboardLayout';
import { StatCard } from '@/components/StatCard';
import { PriorityBadge } from '@/components/PriorityBadge';
import { useMyAppointments, useSymptomChecks } from '@/hooks/use-data';
import { useAuth } from '@/contexts/AuthContext';
import {
  Brain,
  CalendarCheck,
  AlertTriangle,
  Home,
  Activity,
  Stethoscope,
  Sparkles,
  ArrowRight,
  Building2,
  ClipboardList,
  HeartPulse,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Dashboard', href: '/patient', icon: <Home className="h-4 w-4" /> },
  { label: 'Symptom Checker', href: '/symptom-checker', icon: <Brain className="h-4 w-4" /> },
  { label: 'Appointments', href: '/appointments', icon: <CalendarCheck className="h-4 w-4" /> },
  { label: 'Emergency', href: '/emergency', icon: <AlertTriangle className="h-4 w-4" /> },
  { label: 'Telemedicine', href: '/telemedicine', icon: <Stethoscope className="h-4 w-4" /> },
  { label: 'Medical History', href: '/medical-history', icon: <ClipboardList className="h-4 w-4" /> },
];

const services = [
  {
    title: 'AI Symptom Check',
    desc: 'Analyze symptoms and know whether the condition is normal, moderate, or critical.',
    href: '/symptom-checker',
    icon: <Brain className="h-5 w-5 text-sky-600" />,
    card: 'border-sky-200 bg-sky-50 hover:bg-sky-100',
  },
  {
    title: 'Book Appointment',
    desc: 'Schedule a consultation with the right doctor or department quickly.',
    href: '/appointments',
    icon: <CalendarCheck className="h-5 w-5 text-sky-600" />,
    card: 'border-slate-200 bg-white hover:bg-slate-50',
  },
  {
    title: 'Nearby Hospitals',
    desc: 'Find nearby hospitals, emergency support, and quick contact information.',
    href: '/nearby-hospitals',
    icon: <Building2 className="h-5 w-5 text-sky-600" />,
    card: 'border-slate-200 bg-white hover:bg-slate-50',
  },
  {
    title: 'Emergency Help',
    desc: 'Use urgent support flow when symptoms are serious or critical.',
    href: '/emergency',
    icon: <AlertTriangle className="h-5 w-5 text-red-600" />,
    card: 'border-red-200 bg-red-50 hover:bg-red-100',
  },
  {
    title: 'Telemedicine',
    desc: 'Request online consultation and connect with doctors remotely.',
    href: '/telemedicine',
    icon: <Stethoscope className="h-5 w-5 text-sky-600" />,
    card: 'border-slate-200 bg-white hover:bg-slate-50',
  },
  {
    title: 'Medical History',
    desc: 'View previous symptom checks, appointments, and healthcare records.',
    href: '/medical-history',
    icon: <ClipboardList className="h-5 w-5 text-sky-600" />,
    card: 'border-slate-200 bg-white hover:bg-slate-50',
  },
];

const mockHistory = [
  {
    id: 1,
    title: 'Fever, headache, weakness',
    type: 'Symptom Check',
    date: '2026-04-04',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'General Medicine Consultation',
    type: 'Appointment',
    date: '2026-04-05',
    status: 'Upcoming',
  },
];

const nearbyHospitals = [
  { name: 'KIMS Hospital', distance: '2.4 km', support: '24/7 Emergency' },
  { name: 'Yashoda Hospital', distance: '3.1 km', support: 'Emergency & ICU' },
  { name: 'Apollo Hospital', distance: '4.0 km', support: 'Specialist Care' },
];

export default function PatientDashboard() {
  const { user } = useAuth();
  const { data: appointments = [], isLoading: apptLoading } = useMyAppointments();
  const { data: symptomChecks = [], isLoading: checksLoading } = useSymptomChecks();

  const now = new Date().toISOString();
  const upcomingAppointments = appointments.filter(
    (a) => a.date >= now.slice(0, 10) && a.status !== 'cancelled'
  );

  const lastCheck = symptomChecks.length > 0 ? symptomChecks[0] : null;
  const greetingName = user?.name || 'Patient';

  return (
    <DashboardLayout navItems={navItems} title="Patient Dashboard">
      <div className="space-y-8 px-1">
        {/* Hero */}
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-8 shadow-sm">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-sky-700 border border-sky-100 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Smart Patient Care Portal
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Welcome, {greetingName}
              </h2>

              <p className="mt-3 max-w-3xl text-base text-slate-600 leading-relaxed">
                Access smart healthcare services, analyze symptoms, book appointments,
                and get the right care at the right time.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/symptom-checker">
                <Button size="lg" className="rounded-xl px-6">
                  Check Symptoms
                </Button>
              </Link>

              <Link to="/appointments">
                <Button variant="outline" size="lg" className="rounded-xl px-6">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <StatCard
            title="Upcoming Appointments"
            value={apptLoading ? '...' : upcomingAppointments.length}
            icon={<CalendarCheck className="h-5 w-5 text-primary" />}
          />
          <StatCard
            title="Last Symptom Check"
            value={lastCheck ? new Date(lastCheck.created_at).toLocaleDateString() : 'None'}
            icon={<Activity className="h-5 w-5 text-primary" />}
          />
          <StatCard
            title="Medical Records"
            value={checksLoading ? '...' : symptomChecks.length}
            icon={<ClipboardList className="h-5 w-5 text-primary" />}
          />
        </div>

        {/* Main Services */}
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Important Services</h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((item) => (
              <Link to={item.href} key={item.title}>
                <div className={`rounded-2xl border p-5 transition-all ${item.card}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="rounded-xl bg-white/80 p-3 shadow-sm">
                      {item.icon}
                    </div>
                    <ArrowRight className="h-4 w-4 text-sky-600" />
                  </div>

                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid xl:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Recent Activity</h3>

            <div className="space-y-4">
              {mockHistory.map((record) => (
                <div key={record.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-slate-900">{record.title}</p>
                      <p className="text-sm text-slate-600 mt-1">
                        {record.type} • {record.date}
                      </p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-white border text-slate-500">
                      {record.status}
                    </span>
                  </div>
                </div>
              ))}

              <Link to="/medical-history">
                <Button variant="outline" className="w-full rounded-xl">
                  View Full Medical History
                </Button>
              </Link>
            </div>
          </div>

          {/* Smart Guidance */}
          <div className="space-y-6">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Nearby Hospitals</h3>

              <div className="space-y-4">
                {nearbyHospitals.map((hospital, index) => (
                  <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{hospital.name}</p>
                        <p className="text-sm text-slate-600 mt-1">
                          {hospital.distance} • {hospital.support}
                        </p>
                      </div>
                      <Building2 className="h-5 w-5 text-sky-600" />
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/nearby-hospitals">
                <Button variant="outline" className="w-full rounded-xl mt-5">
                  View All Hospitals
                </Button>
              </Link>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Quick Guidance</h3>

              <div className="space-y-4">
                <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                  <p className="font-semibold text-green-700">Normal symptoms</p>
                  <p className="text-sm text-green-600 mt-2">
                    Rest, hydrate, and monitor your condition.
                  </p>
                </div>

                <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
                  <p className="font-semibold text-yellow-700">Moderate symptoms</p>
                  <p className="text-sm text-yellow-700 mt-2">
                    Book an appointment and consult a doctor.
                  </p>
                </div>

                <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                  <p className="font-semibold text-red-700">Critical symptoms</p>
                  <p className="text-sm text-red-600 mt-2">
                    Use Emergency Help and go to the nearest hospital immediately.
                  </p>
                </div>
              </div>

              <Link to="/emergency">
                <Button className="w-full rounded-xl mt-5 bg-red-600 hover:bg-red-700">
                  Emergency Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}