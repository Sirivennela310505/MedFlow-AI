import { FileText, ShieldCheck, Clock3, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function MedicalHistoryInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 mb-6">
            <FileText className="h-4 w-4" />
            Smart Health Records
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Medical History
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            MedFlow AI helps patients maintain and review essential medical history,
            making healthcare decisions faster, safer, and more informed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">What it does</h2>
            <p className="text-slate-600 leading-relaxed">
              Stores patient history such as past diseases, treatments, allergies,
              prescriptions, and important care information.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Clock3 className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">How it works</h2>
            <p className="text-slate-600 leading-relaxed">
              The system organizes health records in one place so doctors and patients
              can quickly review previous history during consultations and emergencies.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <UserRound className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Why it matters</h2>
            <p className="text-slate-600 leading-relaxed">
              Better access to history improves diagnosis, reduces repeated tests,
              and helps doctors make quicker and more accurate decisions.
            </p>
          </div>
        </div>

        {/* Extra info */}
        <div className="mt-14 rounded-3xl bg-sky-50 border border-sky-100 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Key Benefits
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
            <li>• Quick access to previous treatments and prescriptions</li>
            <li>• Better support during emergency situations</li>
            <li>• Easy sharing of important health records</li>
            <li>• Reduces confusion and repeated documentation</li>
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