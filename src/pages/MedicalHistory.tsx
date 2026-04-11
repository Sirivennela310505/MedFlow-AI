import { DashboardLayout } from "@/components/DashboardLayout";
import { Home, ClipboardList, CalendarCheck, Brain, FileText, Activity } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/patient", icon: <Home className="h-4 w-4" /> },
  { label: "Medical History", href: "/medical-history", icon: <ClipboardList className="h-4 w-4" /> },
];

const historyItems = [
  {
    id: 1,
    title: "General Medicine Consultation",
    type: "Appointment",
    date: "2026-04-03",
    status: "Completed",
    notes: "Doctor advised rest, hydration, and follow-up if fever continues.",
  },
  {
    id: 2,
    title: "Fever, headache, weakness",
    type: "Symptom Check",
    date: "2026-04-01",
    status: "Reviewed",
    notes: "Moderate priority. Suggested appointment within 24 hours.",
  },
  {
    id: 3,
    title: "Emergency chest discomfort review",
    type: "Emergency",
    date: "2026-03-28",
    status: "Closed",
    notes: "Immediate evaluation completed. No admission required.",
  },
  {
    id: 4,
    title: "Telemedicine follow-up",
    type: "Telemedicine",
    date: "2026-03-20",
    status: "Completed",
    notes: "Medication continued for 3 more days.",
  },
];

export default function MedicalHistory() {
  return (
    <DashboardLayout navItems={navItems} title="Medical History">
      <div className="space-y-6 animate-slide-in">
        <div className="rounded-2xl border border-primary/10 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">Previous Records</h2>
          <p className="mt-2 text-muted-foreground">
            View your past appointments, symptom checks, emergency cases, and consultation summaries.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-card border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <CalendarCheck className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Appointments</p>
            </div>
            <p className="text-2xl font-bold">4</p>
          </div>

          <div className="rounded-2xl bg-card border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Checks</p>
            </div>
            <p className="text-2xl font-bold">3</p>
          </div>

          <div className="rounded-2xl bg-card border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Emergency Visits</p>
            </div>
            <p className="text-2xl font-bold">1</p>
          </div>

          <div className="rounded-2xl bg-card border p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">Reports</p>
            </div>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
          <h3 className="text-lg font-semibold text-foreground mb-4">History Timeline</h3>

          <div className="space-y-4">
            {historyItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-border/30 bg-secondary/30 p-5"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.type} • {item.date}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-white border text-muted-foreground w-fit">
                    {item.status}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}