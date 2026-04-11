import { useState } from "react";
import { Search, Pill, ShieldPlus, HeartPulse, Stethoscope, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const essentials = [
  {
    title: "First Aid Kit",
    category: "Emergency Essential",
    desc: "Bandages, antiseptic, cotton, and urgent care basics for quick response.",
    icon: <ShieldPlus className="h-14 w-14 text-primary" />,
  },
  {
    title: "Fever Relief Pack",
    category: "Daily Care",
    desc: "Basic fever care support items and temperature monitoring essentials.",
    icon: <HeartPulse className="h-14 w-14 text-primary" />,
  },
  {
    title: "BP Monitor",
    category: "Health Device",
    desc: "Track blood pressure regularly for better home care monitoring.",
    icon: <Stethoscope className="h-14 w-14 text-primary" />,
  },
  {
    title: "Pain Relief Tablets",
    category: "Prescription Guidance",
    desc: "Common support for mild pain management and day-to-day relief.",
    icon: <Pill className="h-14 w-14 text-primary" />,
  },
  {
    title: "Diabetes Care Kit",
    category: "Health Device",
    desc: "Essential support tools for glucose awareness and daily diabetes care.",
    icon: <PackageCheck className="h-14 w-14 text-primary" />,
  },
  {
    title: "Antibiotic Support",
    category: "Prescription Guidance",
    desc: "Medicine access guidance for prescribed antibiotic treatment support.",
    icon: <Pill className="h-14 w-14 text-primary" />,
  },
];

const categories = [
  "All",
  "Emergency Essential",
  "Daily Care",
  "Health Device",
  "Prescription Guidance",
];

export default function MedicalStoreInfo() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = essentials.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 mb-6">
            <PackageCheck className="h-4 w-4" />
            Smart Care Essentials
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Medical Store
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            MedFlow AI provides access to essential healthcare products, emergency kits,
            and treatment support items in one smart and organized space.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <Search className="h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search essentials, medicines, and health devices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Essentials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5">{item.icon}</div>
                <p className="text-sm font-medium text-primary mb-2">{item.category}</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-slate-500">
                No matching items found.
              </p>
            </div>
          )}
        </div>

        {/* Recommendation Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-sky-100 bg-sky-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Recommended for Fever Care
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A suggested care combination for common fever-related support includes
              fever relief tablets, thermometer checks, hydration support, and first-aid basics.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Fever Relief Pack</li>
              <li>• Thermometer / temperature monitoring</li>
              <li>• Hydration and care essentials</li>
              <li>• Quick home-care support</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Why this page is unique
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              MedFlow AI’s store is not just a shopping page. It is designed as a
              smart care essentials hub that supports healthcare decision-making,
              emergency readiness, and guided treatment access.
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Focused on healthcare support, not generic shopping</li>
              <li>• Organized by emergency and treatment need</li>
              <li>• Connected to the medical journey of the patient</li>
              <li>• Works as part of a complete healthcare ecosystem</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need full access to store features?</h2>
          <p className="text-lg text-white/90 mb-6">
            Login to view personalized recommendations, prescriptions, and smarter care support.
          </p>

          <Link to="/login">
            <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-2 font-semibold">
              Login to Continue
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}