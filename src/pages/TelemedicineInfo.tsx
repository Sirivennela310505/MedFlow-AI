import { Video, CalendarCheck, MessageCircle, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TelemedicineInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-6 py-12">

      {/* 🔹 TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-3">
          Telemedicine Services
        </h1>
        <p className="text-gray-600">
          Access quality healthcare from the comfort of your home
        </p>
      </div>

      {/* 🔹 FEATURES GRID */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center">
          <Video className="mx-auto mb-3 text-blue-500" size={28} />
          <h2 className="font-semibold text-lg">Video Consultation</h2>
          <p className="text-sm text-gray-600 mt-2">
            Connect with doctors through secure video calls.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center">
          <CalendarCheck className="mx-auto mb-3 text-blue-500" size={28} />
          <h2 className="font-semibold text-lg">Appointment Booking</h2>
          <p className="text-sm text-gray-600 mt-2">
            Schedule appointments easily at your convenience.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center">
          <MessageCircle className="mx-auto mb-3 text-blue-500" size={28} />
          <h2 className="font-semibold text-lg">Chat with Doctor</h2>
          <p className="text-sm text-gray-600 mt-2">
            Get quick advice via secure chat system.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition text-center">
          <FileText className="mx-auto mb-3 text-blue-500" size={28} />
          <h2 className="font-semibold text-lg">E-Prescriptions</h2>
          <p className="text-sm text-gray-600 mt-2">
            Receive prescriptions digitally.
          </p>
        </div>

      </div>

      {/* 🔹 EXTRA FEATURE */}
      <div className="mt-8 max-w-md mx-auto bg-white rounded-xl p-6 shadow text-center">
        <Users className="mx-auto mb-3 text-blue-500" size={28} />
        <h2 className="font-semibold text-lg">Group Therapy</h2>
        <p className="text-sm text-gray-600 mt-2">
          Join virtual therapy sessions with professionals.
        </p>
      </div>

      {/* 🔹 HOW IT WORKS */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          <div>
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">1</div>
            <h3 className="font-semibold">Choose a Service</h3>
            <p className="text-sm text-gray-600">
              Select the service you need.
            </p>
          </div>

          <div>
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">2</div>
            <h3 className="font-semibold">Book Appointment</h3>
            <p className="text-sm text-gray-600">
              Pick a time slot.
            </p>
          </div>

          <div>
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">3</div>
            <h3 className="font-semibold">Consult Doctor</h3>
            <p className="text-sm text-gray-600">
              Talk via video or chat.
            </p>
          </div>

          <div>
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">4</div>
            <h3 className="font-semibold">Receive Care</h3>
            <p className="text-sm text-gray-600">
              Get treatment & prescriptions.
            </p>
          </div>

        </div>
      </div>

      {/* 🔹 CTA */}
      <div className="mt-16 max-w-5xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="mb-6">
          Experience telemedicine today with MedFlow AI
        </p>

        <Link to="/login">
          <Button className="bg-white text-blue-600 font-semibold px-6 py-2">
            Book Appointment
          </Button>
        </Link>
      </div>

    </div>
  );
}