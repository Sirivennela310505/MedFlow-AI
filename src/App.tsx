import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BedManagement from "./pages/BedManagement";
import AppointmentsPage from "./pages/AppointmentsPage";
import EmergencyPage from "./pages/EmergencyPage";
import TelemedicinePage from "./pages/TelemedicinePage";
import SymptomChecker from "./pages/SymptomChecker";
import NotFound from "./pages/NotFound";

import About from "./pages/About";
import FirstAid from "./pages/FirstAid";
import NearbyHospitals from "./pages/NearbyHospitals";
import BloodDonation from "./pages/BloodDonation";
import MedicalHistoryInfo from "./pages/MedicalHistoryInfo";
import TelemedicineInfo from "./pages/TelemedicineInfo";
import MedicalStoreInfo from "./pages/MedicalStoreInfo";
import ScheduleTestInfo from "./pages/ScheduleTestInfo";
import BedStatus from "./pages/BedStatus";
import MedicalHistory from "./pages/MedicalHistory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/first-aid" element={<FirstAid />} />
            <Route path="/nearby-hospitals" element={<NearbyHospitals />} />
            <Route path="/blood-donation" element={<BloodDonation />} />
            <Route path="/medical-history-info" element={<MedicalHistoryInfo />} />
            <Route path="/telemedicine-info" element={<TelemedicineInfo />} />
            <Route path="/medical-store-info" element={<MedicalStoreInfo />} />
            <Route path="/schedule-test-info" element={<ScheduleTestInfo />} />

            {/* Protected Patient Pages */}
            <Route
              path="/patient"
              element={
                <ProtectedRoute allowedRoles={["patient"]}>
                  <PatientDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/symptom-checker"
              element={
                <ProtectedRoute allowedRoles={["patient"]}>
                  <SymptomChecker />
                </ProtectedRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <ProtectedRoute allowedRoles={["patient"]}>
                  <AppointmentsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/emergency"
              element={
                <ProtectedRoute allowedRoles={["patient"]}>
                  <EmergencyPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/telemedicine"
              element={
                <ProtectedRoute allowedRoles={["patient"]}>
                  <TelemedicinePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/medical-history"
              element={
                <ProtectedRoute allowedRoles={["patient"]}>
                  <MedicalHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bed-status"
              element={
                <ProtectedRoute allowedRoles={["patient"]}>
                  <BedStatus />
                </ProtectedRoute>
              }
            />
            <Route
  path="/nearby-hospitals"
  element={<NearbyHospitals />}
  />

   <Route
  path="/blood-donation"
  element={<BloodDonation />}
   />

            {/* Protected Doctor/Admin */}
            <Route
              path="/doctor"
              element={
                <ProtectedRoute allowedRoles={["doctor"]}>
                  <DoctorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/beds"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <BedManagement />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;