import { HeartPulse, ShieldCheck, Ambulance, Stethoscope, Brain, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white p-10 md:p-14 mb-10 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">About MedFlow AI</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl leading-relaxed">
            MedFlow AI is an intelligent healthcare support platform designed to improve
            emergency response, simplify healthcare access, and guide users toward the
            right medical action at the right time. Our platform combines smart symptom
            analysis, emergency assistance, telemedicine support, hospital discovery,
            and blood donation coordination in one connected healthcare ecosystem.
          </p>
        </div>

        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              MedFlow AI was created with the vision of making healthcare faster,
              smarter, and more accessible. In many situations, patients and families
              face confusion, delay, and lack of clear direction during emergencies.
              Our goal is to reduce this uncertainty by giving users an intelligent
              support system that helps them understand urgency, explore services,
              and take action confidently.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We aim to bridge the gap between technology and healthcare by creating
              a platform that is easy to use, visually clear, and practically useful
              for patients, doctors, and healthcare administrators.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">What Our Platform Solves</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In real-world healthcare systems, people often struggle with delayed
              appointments, lack of immediate emergency guidance, limited access to
              specialist consultation, and difficulty finding the right hospital or
              medical support at the right time.
            </p>
            <p className="text-slate-600 leading-relaxed">
              MedFlow AI addresses these problems by providing one integrated platform
              where users can learn about healthcare services, access smart support,
              and move from confusion to action in a faster and more reliable way.
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Core Features of MedFlow AI</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <Brain className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Symptom Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Helps users understand symptom severity and supports decision-making
                by showing urgency levels and guiding the next medical action.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <Ambulance className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Emergency Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Offers faster emergency awareness by helping users identify critical
                health situations and respond quickly with the right support direction.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <Stethoscope className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Telemedicine Access</h3>
              <p className="text-slate-600 leading-relaxed">
                Supports remote consultation and digital healthcare access, helping
                users connect with care without unnecessary delay.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <MapPin className="h-10 w-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Nearby Hospital Discovery</h3>
              <p className="text-slate-600 leading-relaxed">
                Helps users find hospitals, check basic emergency support details,
                and locate care options quickly during urgent situations.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <HeartPulse className="h-10 w-10 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Blood Donation Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Provides a structured blood donation support section where users can
                search blood groups, find donor availability, and connect faster in
                emergency need.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <ShieldCheck className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smarter Healthcare Flow</h3>
              <p className="text-slate-600 leading-relaxed">
                Organizes multiple healthcare services in one platform so users can
                move smoothly from information to decision and then to care access.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">How MedFlow AI Works</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <span className="font-semibold text-slate-800">Step 1:</span> Users
                explore healthcare services from the homepage and understand the
                available support options.
              </p>
              <p>
                <span className="font-semibold text-slate-800">Step 2:</span> Users
                can review emergency guidance, nearby hospital information, first-aid
                support, and blood donation resources.
              </p>
              <p>
                <span className="font-semibold text-slate-800">Step 3:</span> After
                login, users can access more personalized and functional healthcare
                tools like appointments, telemedicine, and intelligent symptom checking.
              </p>
              <p>
                <span className="font-semibold text-slate-800">Step 4:</span> The
                platform supports faster healthcare decisions and improves patient
                confidence during medical uncertainty.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Why MedFlow AI Is Different</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Many healthcare platforms focus on only one service, such as appointments,
              consultation, or health information. MedFlow AI is different because it
              combines multiple important healthcare needs into one unified system.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Instead of just showing data, our platform is built to guide action.
              It helps users understand what service they need, why it matters, and
              what they should do next.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This makes the platform more practical, more user-friendly, and more
              valuable during both normal and emergency situations.
            </p>
          </div>
        </div>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to use intelligent digital healthcare solutions to reduce
              confusion, improve access, and help users make faster and better medical
              decisions with confidence.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              Our vision is to create a connected healthcare ecosystem where technology
              supports every stage of care — from awareness and prevention to diagnosis,
              emergency response, and treatment access.
            </p>
          </div>
        </div>

        {/* Future Scope */}
        <div className="rounded-3xl border bg-white p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-bold mb-4">Future Scope</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            MedFlow AI can be extended further with real-time doctor availability,
            integrated ambulance support, live bed tracking, secure patient medical
            history management, test scheduling, digital prescriptions, and AI-powered
            risk prediction models.
          </p>
          <p className="text-slate-600 leading-relaxed">
            In the future, it can evolve into a full hospital support ecosystem that
            connects patients, healthcare providers, and emergency systems through one
            intelligent digital platform.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Explore Smarter Healthcare with MedFlow AI</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-6 leading-relaxed">
            Discover how MedFlow AI improves healthcare access, emergency support,
            and intelligent decision-making through one powerful digital platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/login">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full">
                Login to Continue
              </Button>
            </Link>

            <Link to="/">
              <Button
  variant="outline"
  className="border-white bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900 px-6 py-3 rounded-full"
>
  Back to Home
</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}