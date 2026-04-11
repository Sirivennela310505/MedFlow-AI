import { useMemo, useState } from "react";
import { Heart, Droplets, Phone, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const donors = [
  { name: "Aarav Reddy", blood: "A+", city: "Hyderabad", phone: "+91 98765 11111", available: true },
  { name: "Sneha Rao", blood: "B+", city: "Secunderabad", phone: "+91 98765 22222", available: true },
  { name: "Rahul Varma", blood: "O+", city: "Hyderabad", phone: "+91 98765 33333", available: false },
  { name: "Keerthi", blood: "AB+", city: "Kukatpally", phone: "+91 98765 44444", available: true },
  { name: "Nikhil", blood: "O-", city: "Madhapur", phone: "+91 98765 55555", available: true },
  { name: "Divya", blood: "A-", city: "Gachibowli", phone: "+91 98765 66666", available: false },
];

const groups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function BloodDonation() {
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [search, setSearch] = useState("");

  const filteredDonors = useMemo(() => {
    return donors.filter((donor) => {
      const matchesGroup = selectedGroup === "All" || donor.blood === selectedGroup;
      const matchesAvailability = !showAvailableOnly || donor.available;
      const matchesSearch =
        donor.name.toLowerCase().includes(search.toLowerCase()) ||
        donor.city.toLowerCase().includes(search.toLowerCase()) ||
        donor.blood.toLowerCase().includes(search.toLowerCase());

      return matchesGroup && matchesAvailability && matchesSearch;
    });
  }, [selectedGroup, showAvailableOnly, search]);

  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-red-500 to-rose-600 text-white p-10 mb-10 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Blood Donation Support</h1>
          </div>
          <p className="text-lg text-white/90 max-w-3xl">
            Find blood donors, check blood group availability, and connect patients with urgent donation support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border p-6 mb-8">
              <div className="flex items-center gap-3 mb-5">
                <Search className="h-5 w-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search by donor, city, or blood group"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div className="flex flex-wrap gap-3 mb-5">
                {groups.map((group) => (
                  <Button
                    key={group}
                    type="button"
                    onClick={() => setSelectedGroup(group)}
                    className={`rounded-full px-5 ${
                      selectedGroup === group
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {group}
                  </Button>
                ))}
              </div>

              <Button
                type="button"
                onClick={() => setShowAvailableOnly((prev) => !prev)}
                className={`rounded-full px-5 ${
                  showAvailableOnly
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {showAvailableOnly ? "Showing Available Only" : "Show Available Only"}
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredDonors.length > 0 ? (
                filteredDonors.map((donor, index) => (
                  <div key={index} className="rounded-3xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold">{donor.name}</h2>
                      <span className="rounded-full bg-red-100 text-red-700 px-3 py-1 text-sm font-semibold">
                        {donor.blood}
                      </span>
                    </div>

                    <div className="space-y-3 text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{donor.city}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{donor.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplets className="h-4 w-4" />
                        <span className={donor.available ? "text-emerald-600 font-medium" : "text-amber-600 font-medium"}>
                          {donor.available ? "Available Now" : "Currently Unavailable"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 flex gap-3">
                      <a href={`tel:${donor.phone.replace(/\s+/g, "")}`} className="flex-1">
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                          Call Donor
                        </Button>
                      </a>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => alert(`Request sent to ${donor.name}`)}
                      >
                        Request
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full rounded-3xl border bg-white p-8 text-center text-slate-600">
                  No donors found for this filter.
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="rounded-3xl border bg-white p-6 shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">Emergency Need</h2>
              <p className="text-slate-600 mb-5">
                In critical situations, blood availability can save lives. This section helps connect with matching donors faster.
              </p>
              <Link to="/login">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Login for Full Access
                </Button>
              </Link>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• One donor can save multiple lives</li>
                <li>• O- is universal donor blood</li>
                <li>• Donation is usually safe and quick</li>
                <li>• Emergency matching must be fast</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}