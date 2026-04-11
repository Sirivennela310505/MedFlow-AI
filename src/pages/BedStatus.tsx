import { DashboardLayout } from "@/components/DashboardLayout";
import { Home, BedDouble, ClipboardList, Building2, ShieldAlert } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/patient", icon: <Home className="h-4 w-4" /> },
  { label: "Bed Status", href: "/bed-status", icon: <BedDouble className="h-4 w-4" /> },
];

export default function BedStatus() {
  return (
    <DashboardLayout navItems={navItems} title="Bed / Admission Status">
      <div className="space-y-6 animate-slide-in">
        <div className="rounded-2xl border border-primary/10 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">Admission & Bed Status</h2>
          <p className="mt-2 text-muted-foreground">
            Track your admission request, recommended bed type, and ward allocation details.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-card border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <ClipboardList className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Request Status</p>
            </div>
            <p className="text-xl font-bold">Pending Review</p>
          </div>

          <div className="rounded-2xl bg-card border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <BedDouble className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Suggested Bed</p>
            </div>
            <p className="text-xl font-bold">Observation Ward</p>
          </div>

          <div className="rounded-2xl bg-card border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Ward / Bed</p>
            </div>
            <p className="text-xl font-bold">Not Assigned</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
          <h3 className="text-lg font-semibold text-foreground mb-4">Admission Summary</h3>

          <div className="space-y-4">
            <div className="rounded-xl border border-border/30 bg-secondary/30 p-5">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="h-5 w-5 text-amber-500" />
                <p className="font-medium text-foreground">Current Admission Note</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Based on your recent symptom check and hospital review, your case is under observation.
                Bed allocation will be updated once the admin team confirms availability.
              </p>
            </div>

            <div className="rounded-xl border border-border/30 bg-secondary/30 p-5">
              <p className="text-sm font-medium text-foreground">Estimated Next Step</p>
              <p className="text-sm text-muted-foreground mt-2">
                Wait for hospital admin confirmation. In urgent cases, emergency ward priority may be assigned first.
              </p>
            </div>

            <div className="rounded-xl border border-border/30 bg-secondary/30 p-5">
              <p className="text-sm font-medium text-foreground">Patient Guidance</p>
              <p className="text-sm text-muted-foreground mt-2">
                Keep your appointment details and emergency contact ready. If your condition worsens,
                immediately use Emergency Help from the dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}