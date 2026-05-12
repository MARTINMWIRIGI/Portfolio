export default function Ticker() {
  const items = [
    "Custom Website Design", "WordPress Development", "SEO Optimization",
    "Corporate Branding", "E-Commerce Solutions", "NGO Websites",
    "Hospitality Sites", "ISP Platforms", "UI/UX Design", "Web Maintenance"
  ];
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#0B1628] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 text-white text-sm font-medium px-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}