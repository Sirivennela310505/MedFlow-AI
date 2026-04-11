export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  available: boolean;
  avatar: string;
  rating: number;
  experience: number;
}

export interface BedStatus {
  type: 'ICU' | 'General' | 'Maternity';
  total: number;
  occupied: number;
  available: number;
}

export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  priority: string;
  department: string;
}

export interface PatientRecord {
  id: string;
  name: string;
  age: number;
  symptoms: string;
  priority: string;
  department: string;
  status: 'waiting' | 'in-progress' | 'discharged';
  admittedAt: string;
}

export const doctors: Doctor[] = [
  { id: '1', name: 'Dr. Sarah Chen', specialty: 'Cardiology', available: true, avatar: 'SC', rating: 4.9, experience: 15 },
  { id: '2', name: 'Dr. James Wilson', specialty: 'Neurology', available: true, avatar: 'JW', rating: 4.8, experience: 12 },
  { id: '3', name: 'Dr. Emily Rodriguez', specialty: 'Emergency Medicine', available: false, avatar: 'ER', rating: 4.7, experience: 10 },
  { id: '4', name: 'Dr. Michael Park', specialty: 'Orthopedics', available: true, avatar: 'MP', rating: 4.6, experience: 8 },
  { id: '5', name: 'Dr. Lisa Thompson', specialty: 'General Medicine', available: true, avatar: 'LT', rating: 4.8, experience: 20 },
  { id: '6', name: 'Dr. Priya Sharma', specialty: 'Maternity', available: true, avatar: 'PS', rating: 4.9, experience: 14 },
  { id: '7', name: 'Dr. David Kim', specialty: 'Psychiatry', available: true, avatar: 'DK', rating: 4.7, experience: 11 },
  { id: '8', name: 'Dr. Anna Kowalski', specialty: 'Dermatology', available: false, avatar: 'AK', rating: 4.5, experience: 7 },
];

export const beds: BedStatus[] = [
  { type: 'ICU', total: 20, occupied: 14, available: 6 },
  { type: 'General', total: 100, occupied: 72, available: 28 },
  { type: 'Maternity', total: 30, occupied: 18, available: 12 },
];

export const appointments: Appointment[] = [
  { id: '1', patientName: 'John Smith', doctorName: 'Dr. Sarah Chen', date: '2026-04-01', time: '09:00', status: 'scheduled', priority: 'HIGH', department: 'Cardiology' },
  { id: '2', patientName: 'Maria Garcia', doctorName: 'Dr. Lisa Thompson', date: '2026-04-01', time: '10:30', status: 'completed', priority: 'LOW', department: 'General Medicine' },
  { id: '3', patientName: 'Robert Lee', doctorName: 'Dr. James Wilson', date: '2026-04-01', time: '11:00', status: 'scheduled', priority: 'MODERATE', department: 'Neurology' },
  { id: '4', patientName: 'Amy Chen', doctorName: 'Dr. Priya Sharma', date: '2026-04-01', time: '14:00', status: 'scheduled', priority: 'HIGH', department: 'Maternity' },
  { id: '5', patientName: 'Tom Brown', doctorName: 'Dr. Michael Park', date: '2026-04-02', time: '09:30', status: 'scheduled', priority: 'MODERATE', department: 'Orthopedics' },
];

export const patients: PatientRecord[] = [
  { id: '1', name: 'John Smith', age: 58, symptoms: 'Chest pain, shortness of breath', priority: 'EMERGENCY', department: 'Cardiology', status: 'in-progress', admittedAt: '2026-04-01 08:30' },
  { id: '2', name: 'Maria Garcia', age: 35, symptoms: 'Persistent headache, nausea', priority: 'MODERATE', department: 'Neurology', status: 'waiting', admittedAt: '2026-04-01 09:15' },
  { id: '3', name: 'Robert Lee', age: 72, symptoms: 'High fever, cough', priority: 'HIGH', department: 'Internal Medicine', status: 'in-progress', admittedAt: '2026-04-01 07:45' },
  { id: '4', name: 'Amy Chen', age: 28, symptoms: 'Labor contractions', priority: 'HIGH', department: 'Maternity', status: 'in-progress', admittedAt: '2026-04-01 06:00' },
  { id: '5', name: 'Tom Brown', age: 45, symptoms: 'Back pain, difficulty walking', priority: 'MODERATE', department: 'Orthopedics', status: 'waiting', admittedAt: '2026-04-01 10:00' },
  { id: '6', name: 'Sarah Davis', age: 8, symptoms: 'Fever, rash', priority: 'HIGH', department: 'Pediatrics', status: 'waiting', admittedAt: '2026-04-01 10:30' },
];

export const hospitalStats = {
  totalPatients: 247,
  emergencyCases: 12,
  appointmentsToday: 34,
  bedOccupancy: 69,
  avgWaitTime: '23 min',
  doctorsOnDuty: 18,
};

export const nearbyHospitals = [
  { name: 'City General Hospital', distance: '0.5 km', er: true, beds: 15 },
  { name: 'St. Mary Medical Center', distance: '2.1 km', er: true, beds: 8 },
  { name: 'Metro Health Clinic', distance: '3.4 km', er: false, beds: 22 },
  { name: 'University Hospital', distance: '5.0 km', er: true, beds: 30 },
];
