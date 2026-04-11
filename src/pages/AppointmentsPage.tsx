import { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { PriorityBadge } from '@/components/PriorityBadge';
import { useMyAppointments, useCreateAppointment } from '@/hooks/use-data';
import { useAuth } from '@/contexts/AuthContext';
import {
  Home,
  Brain,
  CalendarCheck,
  AlertTriangle,
  Stethoscope,
  Check,
  Loader2,
  Building2,
  Clock3,
  UserRound,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const navItems = [
  { label: 'Dashboard', href: '/patient', icon: <Home className="h-4 w-4" /> },
  { label: 'Symptom Checker', href: '/symptom-checker', icon: <Brain className="h-4 w-4" /> },
  { label: 'Appointments', href: '/appointments', icon: <CalendarCheck className="h-4 w-4" /> },
  { label: 'Emergency', href: '/emergency', icon: <AlertTriangle className="h-4 w-4" /> },
  { label: 'Telemedicine', href: '/telemedicine', icon: <Stethoscope className="h-4 w-4" /> },
];

const timeSlots = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
];

const hospitals = [
  {
    name: 'KIMS Hospital',
    location: 'Secunderabad • 2.4 km',
    department: 'General Medicine',
  },
];

const demoDoctors = [
  {
    user_id: 'doctor-kims-1',
    full_name: 'Dr. Rajesh Kumar',
    hospital: 'KIMS Hospital',
    department: 'General Medicine',
  },
  {
    user_id: 'doctor-kims-2',
    full_name: 'Dr. Priya Sharma',
    hospital: 'KIMS Hospital',
    department: 'General Medicine',
  },
];

export default function AppointmentsPage() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [selectedHospital, setSelectedHospital] = useState('KIMS Hospital');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  });
  const [booked, setBooked] = useState(false);

  const { data: appointments = [], isLoading: apptLoading } = useMyAppointments();
  const createAppointment = useCreateAppointment();

  const selectedDoc = demoDoctors.find((d) => d.user_id === selectedDoctor);

  const handleBook = async () => {
    if (!selectedDoctor || !selectedTime || !selectedHospital || !user) {
      toast({
        title: 'Missing details',
        description: 'Please select doctor, date and time.',
        variant: 'destructive',
      });
      return;
    }

    try {
      // Try DB insert first
      await createAppointment.mutateAsync({
        patient_id: user.id,
        doctor_id: selectedDoctor,
        date: selectedDate,
        time_slot: selectedTime,
      });

      setBooked(true);
      toast({
        title: 'Appointment Booked!',
        description: `${selectedHospital} • ${selectedDate} at ${selectedTime}`,
      });
    } catch {
      // Demo fallback still shows success for hackathon
      setBooked(true);
      toast({
        title: 'Demo Appointment Booked!',
        description: `${selectedHospital} • ${selectedDate} at ${selectedTime}`,
      });
    }
  };

  const demoAppointments =
    appointments.length > 0
      ? appointments
      : booked
      ? [
          {
            id: 'demo-appt-1',
            department: 'General Medicine',
            date: selectedDate,
            time_slot: selectedTime,
            priority: 'MODERATE',
            status: 'booked',
          },
        ]
      : [];

  return (
    <DashboardLayout navItems={navItems} title="Appointments">
      <div className="space-y-6">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Book Appointment</h2>
              <p className="mt-2 text-slate-600 max-w-2xl">
                For this demo, appointments are booked at KIMS Hospital with available doctors.
              </p>
            </div>
            <div className="rounded-2xl bg-white px-5 py-4 border shadow-sm">
              <p className="text-sm text-slate-500">Demo hospital</p>
              <p className="text-sm font-medium text-slate-800 mt-1">KIMS Hospital</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-5">New Appointment</h3>

            {booked ? (
              <div className="text-center py-10">
                <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Check className="h-7 w-7 text-green-600" />
                </div>
                <p className="text-xl font-semibold text-slate-900">Appointment Confirmed!</p>
                <p className="text-sm text-slate-600 mt-2">
                  {selectedDoc?.full_name || 'Doctor'} • {selectedHospital}
                </p>
                <p className="text-sm text-slate-600">
                  {selectedDate} at {selectedTime}
                </p>

                <Button
                  variant="outline"
                  className="mt-5 rounded-xl"
                  onClick={() => {
                    setBooked(false);
                    setSelectedDoctor('');
                    setSelectedTime('');
                  }}
                >
                  Book Another
                </Button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <Label>Select Hospital</Label>
                  <div className="mt-2 space-y-3">
                    {hospitals.map((hospital) => (
                      <button
                        type="button"
                        key={hospital.name}
                        onClick={() => setSelectedHospital(hospital.name)}
                        className="w-full rounded-2xl border p-4 text-left bg-sky-50 border-sky-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="rounded-xl bg-sky-100 p-2">
                            <Building2 className="h-5 w-5 text-sky-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{hospital.name}</p>
                            <p className="text-sm text-slate-600 mt-1">{hospital.location}</p>
                            <p className="text-xs text-slate-500 mt-1">
                              Department: {hospital.department}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Select Doctor</Label>
                  <div className="mt-2 space-y-3">
                    {demoDoctors.map((doctor) => (
                      <button
                        type="button"
                        key={doctor.user_id}
                        onClick={() => setSelectedDoctor(doctor.user_id)}
                        className={`w-full rounded-2xl border p-4 text-left transition-all ${
                          selectedDoctor === doctor.user_id
                            ? 'bg-sky-50 border-sky-300'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-sky-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                            {(doctor.full_name || 'DR').slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{doctor.full_name}</p>
                            <p className="text-xs text-slate-500 mt-1">
                              {doctor.department} • {doctor.hospital}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Date</Label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="mt-2 w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <Label>Selected Time</Label>
                    <div className="mt-2 h-11 rounded-xl border border-slate-300 bg-slate-50 px-4 flex items-center text-sm text-slate-700">
                      <Clock3 className="h-4 w-4 mr-2 text-sky-600" />
                      {selectedTime || 'Choose a time slot below'}
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Time Slot</Label>
                  <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                          selectedTime === time
                            ? 'bg-sky-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleBook}
                  className="w-full rounded-xl h-11 gap-2"
                  disabled={!selectedDoctor || !selectedTime || createAppointment.isPending}
                >
                  {createAppointment.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                  Book Appointment
                </Button>
              </div>
            )}
          </div>

          <div className="bg-card rounded-3xl p-6 shadow-sm border border-border/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Your Appointments</h3>

            {apptLoading ? (
              <p className="text-sm text-muted-foreground">Loading...</p>
            ) : demoAppointments.length === 0 ? (
              <div className="text-center py-10">
                <CalendarCheck className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                <p className="text-base font-medium text-foreground">No appointments yet</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Book your first consultation from the form.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {demoAppointments.map((appointment: any) => (
                  <div
                    key={appointment.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <UserRound className="h-4 w-4 text-sky-600" />
                          <p className="text-sm font-semibold text-slate-900">
                            {appointment.department}
                          </p>
                        </div>
                        <p className="text-xs text-slate-600">
                          {appointment.date} at {appointment.time_slot}
                        </p>
                        <p className="text-xs text-slate-500">Hospital: KIMS Hospital</p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <PriorityBadge priority={appointment.priority} size="sm" />
                        <span className="text-xs font-medium text-sky-600">
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-5">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Selected Booking Summary</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <span className="font-medium">Hospital:</span> {selectedHospital || 'KIMS Hospital'}
                </p>
                <p>
                  <span className="font-medium">Doctor:</span>{' '}
                  {selectedDoc?.full_name || 'Not selected'}
                </p>
                <p>
                  <span className="font-medium">Date:</span> {selectedDate}
                </p>
                <p>
                  <span className="font-medium">Time:</span> {selectedTime || 'Not selected'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}