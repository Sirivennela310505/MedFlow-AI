import { Link } from 'react-router-dom';
import { MedFlowLogo } from '@/components/MedFlowLogo';
import { Button } from '@/components/ui/button';
import {
  Activity,
  Shield,
  Clock,
  Brain,
  Bed,
  CalendarCheck,
  Phone,
  ArrowRight,
  Stethoscope,
  Users,
  LayoutDashboard,
  HeartPulse,
  ClipboardList,
  UserRoundCheck,
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: 'AI Triage',
    desc: 'Instant symptom analysis with intelligent priority classification for faster emergency handling.',
  },
  {
    icon: <Bed className="h-6 w-6 text-primary" />,
    title: 'Bed Management',
    desc: 'Real-time ICU, General and Maternity bed availability with quick hospital flow tracking.',
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-primary" />,
    title: 'Smart Scheduling',
    desc: 'Automated appointment booking with doctor matching for smoother patient care.',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Emergency Response',
    desc: 'Instant emergency alerts, patient prioritization, and nearby hospital routing support.',
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Real-time Dashboard',
    desc: 'Monitor live hospital occupancy, workflows, patient queues, and critical metrics.',
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: 'Telemedicine',
    desc: 'Virtual consultations with secure communication and integrated health guidance.',
  },
];

const roles = [
  {
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    title: 'Patient Dashboard',
    desc: 'Check symptoms, book appointments, view health support, and access faster care guidance.',
  },
  {
    icon: <Stethoscope className="h-6 w-6 text-primary" />,
    title: 'Doctor Dashboard',
    desc: 'View patients, manage appointments, monitor triage priority, and improve treatment flow.',
  },
  {
    icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
    title: 'Admin Dashboard',
    desc: 'Track bed occupancy, workflow performance, hospital resources, and emergency response.',
  },
];

const steps = [
  {
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
    title: '1. Patient Enters Symptoms',
    desc: 'Patients describe their symptoms or book an appointment through the platform.',
  },
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: '2. AI Analyzes Priority',
    desc: 'The system evaluates urgency and supports quicker triage and care decisions.',
  },
  {
    icon: <UserRoundCheck className="h-6 w-6 text-primary" />,
    title: '3. Doctors & Admin Respond',
    desc: 'Doctors and administrators use live dashboards to deliver faster, smarter care.',
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
   <nav className="sticky top-0 z-[100] border-b border-border bg-white/90 backdrop-blur-md">
  <div className="container mx-auto flex h-16 items-center justify-between px-4">

    {/* LEFT - LOGO */}
    <div className="flex items-center">
      <MedFlowLogo size="sm" />
    </div>

    {/* CENTER - NAV LINKS */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
      
      <Link to="/" className="hover:text-primary transition-colors">
        Home
      </Link>

      {/* Services */}
      <div className="relative group">
  <button className="hover:text-primary transition-colors py-2">
    Services
  </button>

  <div className="absolute left-0 top-full pt-2 z-[110] hidden group-hover:block">
    <div className="min-w-[220px] rounded-xl border border-border bg-white shadow-lg">
      <Link to="/medical-history-info" className="block px-4 py-3 hover:bg-sky-50 rounded-t-xl">
        Medical History
      </Link>
      <Link to="/telemedicine-info" className="block px-4 py-3 hover:bg-sky-50">
        Telemedicine
      </Link>
      <Link to="/medical-store-info" className="block px-4 py-3 hover:bg-sky-50">
        Medical Store
      </Link>
      <Link to="/schedule-test-info" className="block px-4 py-3 hover:bg-sky-50 rounded-b-xl">
        Schedule Test
      </Link>

          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="relative group">
        <button className="hover:text-primary transition-colors py-2">
          Quick Links
        </button>

        <div className="absolute left-0 top-full pt-2 z-[110] hidden group-hover:block">
          <div className="min-w-[220px] rounded-xl border border-border bg-white shadow-lg">
            <Link to="/first-aid" className="block px-4 py-3 hover:bg-sky-50 rounded-t-xl">
              First Aid Guide
            </Link>
            <Link to="/nearby-hospitals" className="block px-4 py-3 hover:bg-sky-50">
              Nearby Hospitals
            </Link>
            <Link to="/blood-donation" className="block px-4 py-3 hover:bg-sky-50">
              Blood Donation
            </Link>
            <Link to="/about" className="block px-4 py-3 hover:bg-sky-50 rounded-b-xl">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT - BUTTONS */}
    <div className="flex items-center gap-3">
      <Link to="/login">
        <Button variant="ghost" size="sm">Sign In</Button>
      </Link>
      <Link to="/login">
        <Button size="sm">Get Started</Button>
      </Link>
    </div>

  </div>
</nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-background to-background py-20 md:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
                <Activity className="h-4 w-4" />
                Intelligent Hospital Management
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Smarter Healthcare,{' '}
                <span className="text-primary">Faster Response</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                AI-powered triage, real-time bed management, symptom analysis, and
                seamless hospital workflow — all in one smart platform designed to save
                time and save lives.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/login">
                  <Button size="lg" className="gap-2 px-8">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link to="/login">
                  <Button variant="outline" size="lg" className="gap-2 px-8">
                    <Brain className="h-4 w-4" />
                    Check Symptoms
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="rounded-full bg-white shadow-sm border px-4 py-2 text-sm text-muted-foreground">
                  AI Triage
                </span>
                <span className="rounded-full bg-white shadow-sm border px-4 py-2 text-sm text-muted-foreground">
                  Real-Time Beds
                </span>
                <span className="rounded-full bg-white shadow-sm border px-4 py-2 text-sm text-muted-foreground">
                  Doctor Workflow
                </span>
                <span className="rounded-full bg-white shadow-sm border px-4 py-2 text-sm text-muted-foreground">
                  Emergency Care
                </span>
              </div>
            </div>

           {/* Right */}
<div className="flex justify-center">
  <img
    src="/doctor.png"
    alt="Doctor"
    className="w-[400px] md:w-[500px] rounded-2xl object-cover shadow-xl"
  />
</div>
</div>
</div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Everything your hospital needs for better emergency response, patient flow,
              and healthcare management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 w-fit rounded-xl bg-secondary p-3">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-sky-50/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A simple flow that helps hospitals respond faster and manage care more intelligently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-6 border border-border/60 shadow-sm"
              >
                <div className="mb-4 w-fit rounded-xl bg-secondary p-3">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section id="dashboards" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for Every Hospital Role</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              MedFlow AI supports patients, doctors, and administrators with tailored dashboards and workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 w-fit rounded-xl bg-secondary p-3">
                  {role.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{role.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-20 bg-sky-50/60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="rounded-2xl bg-white border p-6 text-center shadow-sm">
              <h3 className="text-3xl font-extrabold text-primary">95%</h3>
              <p className="mt-2 text-sm text-muted-foreground">Faster priority identification</p>
            </div>
            <div className="rounded-2xl bg-white border p-6 text-center shadow-sm">
              <h3 className="text-3xl font-extrabold text-primary">24/7</h3>
              <p className="mt-2 text-sm text-muted-foreground">Smart healthcare accessibility</p>
            </div>
            <div className="rounded-2xl bg-white border p-6 text-center shadow-sm">
              <h3 className="text-3xl font-extrabold text-primary">3 Roles</h3>
              <p className="mt-2 text-sm text-muted-foreground">Patient, Doctor, Admin dashboards</p>
            </div>
            <div className="rounded-2xl bg-white border p-6 text-center shadow-sm">
              <h3 className="text-3xl font-extrabold text-primary">Real-Time</h3>
              <p className="mt-2 text-sm text-muted-foreground">Beds, queue, and hospital monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 MedFlow AI. Smart Hospital Triage & Care Navigation System.
        </div>
      </footer>
    </div>
  );
}