import { DashboardLayout } from '@/components/DashboardLayout';
import { StatCard } from '@/components/StatCard';
import { PriorityBadge } from '@/components/PriorityBadge';
import {
  Home,
  Bed,
  CalendarCheck,
  Users,
  AlertTriangle,
  Activity,
  ClipboardList,
  CheckCircle2,
  Building2,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: <Home className="h-4 w-4" /> },
  { label: 'Beds', href: '/beds', icon: <Bed className="h-4 w-4" /> },
  { label: 'Appointments', href: '/admin', icon: <CalendarCheck className="h-4 w-4" /> },
  { label: 'Emergency', href: '/admin', icon: <AlertTriangle className="h-4 w-4" /> },
];

const bedData = [
  { type: 'General Ward', total: 40, occupied: 28, available: 12 },
  { type: 'ICU', total: 10, occupied: 8, available: 2 },
  { type: 'Emergency', total: 12, occupied: 7, available: 5 },
  { type: 'Observation', total: 15, occupied: 9, available: 6 },
];

const patientQueue = [
  {
    id: 'p1',
    name: 'Kalva Siri Vennela',
    age: 20,
    symptoms: 'Fever, headache, weakness',
    priority: 'MODERATE',
    department: 'General Medicine',
    status: 'Waiting',
    bedType: 'Observation',
  },
  {
    id: 'p2',
    name: 'Rahul Kumar',
    age: 42,
    symptoms: 'Chest pain and breathing problem',
    priority: 'EMERGENCY',
    department: 'Emergency',
    status: 'Admit Immediately',
    bedType: 'ICU',
  },
  {
    id: 'p3',
    name: 'Sneha Reddy',
    age: 31,
    symptoms: 'Severe cough and fever',
    priority: 'HIGH',
    department: 'General Medicine',
    status: 'Under Review',
    bedType: 'General Ward',
  },
];

const todayAppointments = [
  {
    id: 'a1',
    patient: 'Kalva Siri Vennela',
    doctor: 'Dr. Rajesh Kumar',
    department: 'General Medicine',
    time: '09:30',
    hospital: 'KIMS Hospital',
  },
  {
    id: 'a2',
    patient: 'Rahul Kumar',
    doctor: 'Dr. Priya Sharma',
    department: 'Emergency',
    time: '10:00',
    hospital: 'KIMS Hospital',
  },
];

const admissions = [
  {
    id: 'ad1',
    patient: 'Rahul Kumar',
    ward: 'ICU - Bed 2',
    status: 'Assigned',
  },
  {
    id: 'ad2',
    patient: 'Sneha Reddy',
    ward: 'General Ward - Bed 14',
    status: 'Pending',
  },
];

export default function AdminDashboard() {
  const totalPatients = patientQueue.length;
  const emergencyCases = patientQueue.filter((p) => p.priority === 'EMERGENCY').length;
  const totalBeds = bedData.reduce((sum, bed) => sum + bed.total, 0);
  const occupiedBeds = bedData.reduce((sum, bed) => sum + bed.occupied, 0);
  const occupancy = Math.round((occupiedBeds / totalBeds) * 100);

  return (
    <DashboardLayout navItems={navItems} title="Admin Dashboard">
      <div className="space-y-6">
        {/* Hero */}
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Welcome Admin</h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                Manage hospital operations, appointments, emergency cases, and bed allocation at KIMS Hospital.
              </p>
            </div>

            <div className="rounded-2xl bg-white px-5 py-4 border shadow-sm">
              <p className="text-sm text-slate-500">Demo hospital</p>
              <p className="text-sm font-medium text-slate-800 mt-1">KIMS Hospital</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            title="Total Patients"
            value={totalPatients}
            icon={<Users className="h-5 w-5 text-primary" />}
          />
          <StatCard
            title="Emergency Cases"
            value={emergencyCases}
            icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
            variant="emergency"
          />
          <StatCard
            title="Bed Occupancy"
            value={`${occupancy}%`}
            icon={<Bed className="h-5 w-5 text-primary" />}
          />
          <StatCard
            title="Appointments Today"
            value={todayAppointments.length}
            icon={<CalendarCheck className="h-5 w-5 text-primary" />}
          />
        </div>

        <div className="grid xl:grid-cols-2 gap-6">
          {/* Triage / Patient Queue */}
          <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Patient Triage Queue</h3>

            <div className="space-y-4">
              {patientQueue.map((patient) => (
                <div
                  key={patient.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {patient.name}
                        <span className="text-sm text-slate-500"> · Age {patient.age}</span>
                      </p>
                      <p className="text-sm text-slate-600 mt-2">{patient.symptoms}</p>
                      <p className="text-xs text-slate-500 mt-2">
                        {patient.department} • Suggested Bed: {patient.bedType}
                      </p>
                    </div>

                    <PriorityBadge priority={patient.priority} size="sm" />
                  </div>

                  <div className="mt-4">
                    <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium text-slate-600 bg-white">
                      {patient.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bed Allocation */}
          <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Bed Allocation Status</h3>

            <div className="space-y-4">
              {bedData.map((bed, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-slate-900">{bed.type}</p>
                    <span className="text-sm font-medium text-slate-600">
                      {bed.available} available
                    </span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-sky-600 rounded-full"
                      style={{ width: `${(bed.occupied / bed.total) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
                    <span>Total: {bed.total}</span>
                    <span>Occupied: {bed.occupied}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-6">
          {/* Today's Appointments */}
          <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Today's Appointments</h3>

            <div className="space-y-4">
              {todayAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="font-semibold text-slate-900">{appointment.patient}</p>
                  <p className="text-sm text-slate-600 mt-1">
                    {appointment.department} • {appointment.time}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {appointment.doctor} • {appointment.hospital}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Admissions / Operations */}
          <div className="space-y-6">
            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Admissions</h3>

              <div className="space-y-4">
                {admissions.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="font-semibold text-slate-900">{item.patient}</p>
                    <p className="text-sm text-slate-600 mt-1">{item.ward}</p>
                    <p className="text-xs text-slate-500 mt-1">Status: {item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-5">Admin Actions</h3>

              <div className="space-y-4">
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900 flex items-center gap-2">
                    <ClipboardList className="h-4 w-4 text-sky-600" />
                    Review triage queue
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Emergency and high-priority cases are handled first for faster intervention.
                  </p>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600" />
                    Allocate beds quickly
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Assign ICU, emergency, or general beds based on patient severity.
                  </p>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900 flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-sky-600" />
                    Manage hospital operations
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Monitor appointments, admissions, queue status, and bed occupancy from one dashboard.
                  </p>
                </div>

                <div className="rounded-2xl border bg-red-50 border-red-200 p-4">
                  <p className="font-semibold text-red-700 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Triage usage
                  </p>
                  <p className="text-sm text-red-600 mt-2">
                    Triage is used here to prioritize emergency patients and assign beds faster.
                  </p>
                </div>

                <div className="rounded-2xl border bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900 flex items-center gap-2">
                    <Activity className="h-4 w-4 text-sky-600" />
                    Current hospital status
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    KIMS Hospital is operating with active appointments, patient queue handling, and monitored bed occupancy.
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