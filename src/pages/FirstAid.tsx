import { useState } from "react";
import {
  Droplets,
  Scissors,
  Flame,
  LifeBuoy,
  Activity,
  Bone,
  ShieldAlert,
  HeartPulse,
  Footprints,
} from "lucide-react";

type Topic = {
  id: string;
  title: string;
  icon: React.ReactNode;
  steps: string[];
  video: string;
};

const topics: Topic[] = [
  {
    id: "nosebleed",
    title: "Nosebleed",
    icon: <Droplets size={28} />,
    steps: [
      "Sit upright and lean forward",
      "Pinch nose for 10-15 mins",
      "Apply cold compress",
      "Do not tilt head back",
    ],
    video: "PmmhxW0vVXA",
  },
  {
    id: "cuts",
    title: "Cuts",
    icon: <Scissors size={28} />,
    steps: ["Clean wound", "Apply pressure", "Use antiseptic", "Bandage it"],
    video: "7fXg663EU3g",
  },
  {
    id: "burns",
    title: "Burns",
    icon: <Flame size={28} />,
    steps: ["Cool with water", "No ice", "Cover loosely", "Do not burst blisters"],
    video: "B10sth4zjuI",
  },
  {
    id: "cpr",
    title: "CPR",
    icon: <LifeBuoy size={28} />,
    steps: ["Check breathing", "Call help", "Chest compressions", "Continue"],
    video: "ewdKM9NYo1A",
  },
  {
    id: "choking",
    title: "Choking",
    icon: <Activity size={28} />,
    steps: ["Encourage coughing", "Back blows", "Call emergency"],
    video: "ewmbiHraztk",
  },
  {
    id: "fractures",
    title: "Fractures",
    icon: <Bone size={28} />,
    steps: ["Keep still", "Apply ice", "Do not move", "Go hospital"],
    video: "uDzbvgIOXac",
  },
  {
    id: "bleeding",
    title: "Bleeding",
    icon: <ShieldAlert size={28} />,
    steps: ["Apply pressure", "Raise area", "Use cloth"],
    video: "L6jjyikFwmA",
  },
  {
    id: "shock",
    title: "Shock",
    icon: <HeartPulse size={28} />,
    steps: ["Lay down", "Raise legs", "Keep warm"],
    video: "61urGQrmeNM",
  },
  {
    id: "sprains",
    title: "Sprains",
    icon: <Footprints size={28} />,
    steps: ["Rest", "Ice", "Compression", "Elevation"],
    video: "1gBYJZmuMk0",
  },
];

export default function FirstAid() {
  const [selected, setSelected] = useState(topics[0]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Basic First Aid Guide
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* LEFT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {topics.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className={`p-6 rounded-xl border cursor-pointer text-center transition ${
                selected.id === item.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white hover:shadow-md"
              }`}
            >
              <div className="flex justify-center mb-3">
                {item.icon}
              </div>
              <p className="font-semibold">{item.title}</p>
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Treatment for {selected.title}
          </h2>

          <ul className="space-y-2 mb-5">
            {selected.steps.map((step, i) => (
              <li key={i}>• {step}</li>
            ))}
          </ul>

          <h3 className="text-xl font-bold text-blue-600 mb-3">
            Instructional Video
          </h3>

          <iframe
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/${selected.video}`}
            allowFullScreen
            className="rounded-lg"
          ></iframe>

        </div>
      </div>
    </div>
  );
}