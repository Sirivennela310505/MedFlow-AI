import { FlaskConical, CalendarCheck, Clock3, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ScheduleTestInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 mb-6">
            <FlaskConical className="h-4 w-4" />
            Diagnostics and Testing
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Schedule Test
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            MedFlow AI makes diagnostic test booking easier by helping users
            schedule lab tests with better convenience and time management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <CalendarCheck className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">What it does</h2>
            <p className="text-slate-600 leading-relaxed">
              Allows users to book diagnostic tests and health screenings with
              better scheduling support.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Clock3 className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">How it works</h2>
            <p className="text-slate-600 leading-relaxed">
              Users choose required tests, select available slots, and manage
              appointments in an organized way.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <BadgeCheck className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Why it matters</h2>
            <p className="text-slate-600 leading-relaxed">
              Helps patients save time, avoid confusion, and complete diagnosis
              steps more smoothly.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-sky-50 border border-sky-100 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
            <li>• Simple diagnostic booking flow</li>
            <li>• Better time slot management</li>
            <li>• Faster access to test scheduling</li>
            <li>• Supports smoother treatment planning</li>
          </ul>

          <div className="mt-8">
            <Link to="/login">
              <Button size="lg" className="px-8">
                Login to Access Full Feature
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}