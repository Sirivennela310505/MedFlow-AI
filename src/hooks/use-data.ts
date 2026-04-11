import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/contexts/AuthContext';

// Beds
export function useBeds() {
  return useQuery({
    queryKey: ['beds'],
    queryFn: async () => {
      const { data, error } = await supabase.from('beds').select('*');
      if (error) throw error;
      return data;
    },
  });
}

// Hospitals
export function useHospitals() {
  return useQuery({
    queryKey: ['hospitals'],
    queryFn: async () => {
      const { data, error } = await supabase.from('hospitals').select('*');
      if (error) throw error;
      return data;
    },
  });
}

// Patients
export function usePatients() {
  return useQuery({
    queryKey: ['patients'],
    queryFn: async () => {
      const { data, error } = await supabase.from('patients').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useMyPatientRecords() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['my-patients', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase.from('patients').select('*').eq('user_id', user.id).order('created_at', { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user,
  });
}

export function useCreatePatient() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (patient: {
      user_id: string;
      name: string;
      age: number;
      symptoms: string;
      priority: string;
      department: string;
    }) => {
      const { data, error } = await supabase.from('patients').insert(patient).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] });
      queryClient.invalidateQueries({ queryKey: ['my-patients'] });
    },
  });
}

// Appointments
export function useAppointments() {
  return useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const { data, error } = await supabase.from('appointments').select('*').order('date', { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
  });
}

export function useMyAppointments() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['my-appointments', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .eq('patient_id', user.id)
        .order('date', { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user,
  });
}

export function useDoctorAppointments() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['doctor-appointments', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .eq('doctor_id', user.id)
        .order('date', { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user,
  });
}

export function useCreateAppointment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (appointment: {
      patient_id: string;
      doctor_id: string;
      date: string;
      time_slot: string;
      priority?: string;
      department?: string;
    }) => {
      const { data, error } = await supabase.from('appointments').insert(appointment).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
      queryClient.invalidateQueries({ queryKey: ['my-appointments'] });
      queryClient.invalidateQueries({ queryKey: ['doctor-appointments'] });
    },
  });
}

// Profiles (for doctor list)
export function useProfiles() {
  return useQuery({
    queryKey: ['profiles'],
    queryFn: async () => {
      const { data, error } = await supabase.from('profiles').select('*');
      if (error) throw error;
      return data ?? [];
    },
  });
}

// Doctors (profiles with doctor role)
export function useDoctors() {
  return useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const { data: doctorRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id')
        .eq('role', 'doctor');
      if (rolesError) throw rolesError;
      if (!doctorRoles || doctorRoles.length === 0) return [];

      const doctorIds = doctorRoles.map(r => r.user_id);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .in('user_id', doctorIds);
      if (error) throw error;
      return data ?? [];
    },
  });
}

// Symptom Checks
export function useSymptomChecks() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['symptom-checks', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('symptom_checks')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
    enabled: !!user,
  });
}

export function useCreateSymptomCheck() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (check: {
      user_id: string;
      symptoms: string;
      age: number;
      duration: string;
      severity: number;
      priority: string;
      department: string;
      description: string;
      action: string;
      confidence: number;
    }) => {
      const { data, error } = await supabase.from('symptom_checks').insert(check).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['symptom-checks'] });
    },
  });
}

// Update bed occupancy
export function useUpdateBed() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, occupied }: { id: string; occupied: number }) => {
      const { data, error } = await supabase.from('beds').update({ occupied }).eq('id', id).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['beds'] }),
  });
}
