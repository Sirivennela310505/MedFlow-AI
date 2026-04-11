import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const hospitals = [
  {
    name: "KIMS Hospital",
    distance: "2.4 km",
    address: "Secunderabad, Hyderabad",
    phone: "+91 98765 11111",
    timing: "24/7 Emergency",
  },
  {
    name: "Yashoda Hospital",
    distance: "3.1 km",
    address: "Somajiguda, Hyderabad",
    phone: "+91 98765 22222",
    timing: "24/7 Emergency",
  },
  {
    name: "Apollo Hospital",
    distance: "4.0 km",
    address: "Jubilee Hills, Hyderabad",
    phone: "+91 98765 33333",
    timing: "24/7 Emergency",
  },
];

export default function NearbyHospitals() {
  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white p-10 mb-10 shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Nearby Hospitals</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Find nearby hospitals quickly during emergencies and get location, contact,
            and access details in one place.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden border bg-white shadow-sm mb-8">
              <div className="p-5 border-b">
                <h2 className="text-2xl font-bold">Hospital Map</h2>
                <p className="text-slate-600 mt-2">
                  Live map view for hospitals near Hyderabad.
                </p>
              </div>

              <div className="w-full h-[420px]">
                <iframe
                  title="Nearby Hospitals Map"
                  src="https://www.google.com/maps?q=hospitals+in+Hyderabad&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {hospitals.map((hospital, index) => (
                <div key={index} className="rounded-3xl border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">{hospital.name}</h3>

                  <div className="space-y-3 text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{hospital.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Navigation className="h-4 w-4" />
                      <span>{hospital.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{hospital.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{hospital.timing}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href={`tel:${hospital.phone.replace(/\s+/g, "")}`}
                      className="flex-1"
                    >
                      <Button className="w-full">Call</Button>
                    </a>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        hospital.name + ", " + hospital.address
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" className="w-full">
                        Directions
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-3xl border bg-white p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">Emergency Access</h2>
              <p className="text-slate-600 mb-5">
                Quickly locate hospitals, view distance, and connect for urgent care.
              </p>
              <Button className="w-full">View Emergency Support</Button>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• 24/7 emergency support</li>
                <li>• Fast hospital lookup</li>
                <li>• One-click directions</li>
                <li>• Contact details available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}