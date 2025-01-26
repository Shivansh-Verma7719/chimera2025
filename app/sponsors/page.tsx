// app/sponsors/page.tsx
import Card from "@/components/Card";

export default function Sponsors() {
  const sponsors = [
    { name: "Premas Biotech", logo: "/images/premas.png" },
    { name: "Koita Centre for Digital Health", logo: "/images/kcdh.png" },
    { name: "Lodha Genius Programme", logo: "/images/lodha.png" },
    { name: "Research Development Office", logo: "/images/rdo.png" },
  ];

  return (
    <div className="min-h-screen  bg-center bg-fixed flex justify-center items-center">
    
      <Card title="Our Sponsors">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-md shadow-sm"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 w-auto"
              />
              <span className="text-white-700 font-medium">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
