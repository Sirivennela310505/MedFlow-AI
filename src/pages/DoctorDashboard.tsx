import { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { StatCard } from '@/components/StatCard';
import { PriorityBadge } from '@/components/PriorityBadge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Home,
  Users,
  CalendarCheck,
  AlertTriangle,
  Stethoscope,
  CheckCircle,
  XCircle,
  Clock,
  UserRound,
  FileText,
  Activity,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/doctor', icon: <Home className="h-4 w-4" /> },
  { label: 'Appointments', href: '/doctor', icon: <CalendarCheck className="h-4 w-4" /> },
  { label: 'Emergency', href: '/doctor', icon: <AlertTriangle className="h-4 w-4" /> },
  { label: 'Telemedicine', href: '/doctor', icon: <Stethoscope className="h-4 w-4" /> },
];

const demoPatients = [
  {
    id: 'p1',
    name: 'Kalva Siri Vennela',
    age: 20,
    symptoms: 'Fever, headache, weakness',
    department: 'General Medicine',
    admitted_at: new Date().toISOString(),
    priority: 'MODERATE',
    status: 'waiting',
    hospital: 'KIMS Hospital',
  },
  {
    id: 'p2',
    name: 'Rahul Kumar',
    age: 42,
    symptoms: 'Chest pain and breathing problem',
    department: 'Emergency',
    admitted_at: new Date().toISOString(),
    priority: 'EMERGENCY',
    status: 'waiting',
    hospital: 'KIMS Hospital',
  },
  {
    id: 'p3',
    name: 'Sneha Reddy',
    age: 31,
    symptoms: 'Severe cough and fever',
    department: 'General Medicine',
    admitted_at: new Date().toISOString(),
    priority: 'HIGH',
    status: 'in-progress',
    hospital: 'KIMS Hospital',
  },
];

const demoAppointments = [
  {
    id: 'a1',
    department: 'General Medicine',
    date: new Date().toISOString().slice(0, 10),
    time_slot: '09:30',
    priority: 'MODERATE',
    patient_name: 'Kalva Siri Vennela',
    hospital: 'KIMS Hospital',
  },
  {
    id: 'a2',
    department: 'Emergency',
    date: new Date().toISOString().slice(0, 10),
    time_slot: '10:00',
    priority: 'EMERGENCY',
    patient_name: 'Rahul Kumar',
    hospital: 'KIMS Hospital',
  },
];

export default function DoctorDashboard() {
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [statuses, setStatuses] = useState<Record<string, string>>({});

  const waitingPatients = demoPatients.filter((p) => p.status === 'waiting');
  const activePatients = demoPatients.filter((p) => p.status === 'in-progress');
  const emergencyCases = demoPatients.filter((p) => p.priority === 'EMERGENCY');
  const todayAppointments = demoAppointments;

  const handleAccept = (id: string) =>
    setStatuses((prev) => ({ ...prev, [id]: 'accepted' }));

  const handleReject = (id: string) =>
    setStatuses((prev) => ({ ...prev, [id]: 'rejected' }));

  const handleDone = (id: string) =>
    setStatuses((prev) => ({ ...prev, [id]: 'completed' }));

  return (
    <DashboardLayout navItems={navItems} title="Doctor Dashboard">
      <div className="space-y-6">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Welcome Doctor</h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                KIMS Hospital doctor panel with triage-based patient review and appointment handling.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-4 border shadow-sm">
              <p className="text-sm text-slate-500">Demo hospital</p>
              <p className="text-sm font-medium text-slate-800 mt-1">KIMS Hospital</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Active Patients" value={activePatients.length} icon={<Users className="h-5 w-5 text-primary" />} />
          <StatCard title="Waiting Queue" value={waitingPatients.length} icon={<Clock className="h-5 w-5 text-primary" />} />
          <StatCard title="Today Appointments" value={todayAppointments.length} icon={<CalendarCheck className="h-5 w-5 text-primary" />} />
          <StatCard title="Emergency Cases" value={emergencyCases.length} icon={<AlertTriangle className="h-5 w-5 text-red-500" />} variant="emergency" />
        </div>

        <div className="grid xl:grid-cols-2 gap-6">
          <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Triage Queue</h3>

            <div className="space-y-4">
              {demoPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900 flex items-center gap-2">
                        <UserRound className="h-4 w-4 text-sky-600" />
                        {patient.name}
                        <span className="text-sm text-slate-500">· Age {patient.age}</span>
                      </p>

                      <p className="text-sm text-slate-600 mt-2">{patient.symptoms}</p>
                      <p className="text-xs text-slate-500 mt-2">
                        {patient.department} • {patient.hospital}
                      </p>
                    </div>

                    <PriorityBadge priority={patient.priority} size="sm" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button size="sm" className="rounded-lg" onClick={() => handleAccept(patient.id)}>
                      <CheckCircle className="h-3.5 w-3.5 mr-1" />
                      Accept
                    </Button>

                    <Button size="sm" variant="outline" className="rounded-lg" onClick={() => handleReject(patient.id)}>
                      <XCircle className="h-3.5 w-3.5 mr-1" />
                      Reject
                    </Button>

                    <Button size="sm" variant="outline" className="rounded-lg" onClick={() => handleDone(patient.id)}>
                      Mark Done
                    </Button>
                  </div>

                  {statuses[patient.id] && (
                    <p className="text-sm font-medium mt-3 text-sky-700">
                      Status: {statuses[patient.id]}
                    </p>
                  )}

                  <div className="mt-4">
                    <Textarea
                      placeholder="Add doctor notes..."
                      value={notes[patient.id] || ''}
                      onChange={(e) =>
                        setNotes((prev) => ({ ...prev, [patient.id]: e.target.value }))
                      }
                      rows={3}
                      className="text-sm rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Today’s Appointments</h3>

              <div className="space-y-4">
                {todayAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">{appointment.patient_name}</p>
                        <p className="text-sm text-slate-600 mt-1">
                          {appointment.department} • {appointment.date} • {appointment.time_slot}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">{appointment.hospital}</p>
                      </div>

                      <PriorityBadge priority={appointment.priority} size="sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Where Triage Is Used</h3>

              <div className="space-y-4">
                <div className="rounded-2xl border bg-red-50 border-red-200 p-4">
                  <p className="font-semibold text-red-700">Emergency</p>
                  <p className="text-sm text-red-600 mt-2">
                    Emergency patients appear first in the doctor queue.
                  </p>
                </div>

                <div className="rounded-2xl border bg-yellow-50 border-yellow-200 p-4">
                  <p className="font-semibold text-yellow-700">Moderate / High</p>
                  <p className="text-sm text-yellow-700 mt-2">
                    Moderate and high-priority patients are reviewed before normal cases.
                  </p>
                </div>

                <div className="rounded-2xl border bg-green-50 border-green-200 p-4">
                  <p className="font-semibold text-green-700">Normal</p>
                  <p className="text-sm text-green-600 mt-2">
                    Normal cases can be booked as regular appointments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Doctor Guidance</h3>

              <div className="space-y-4">
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-sky-600" />
                    Review symptoms first
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Use symptom severity and triage priority to decide consultation order.
                  </p>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900 flex items-center gap-2">
                    <Activity className="h-4 w-4 text-sky-600" />
                    Keep notes updated
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Add short doctor notes after patient review and mark status clearly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}