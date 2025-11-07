import { type ReactNode } from "react";

type CourseHighlightCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
};

export default function CourseHighlightCard({ icon, title, description, backgroundImage }: CourseHighlightCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E4B873]/70 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
      <div
        className="absolute inset-0 bg-cover rounded-2xl shadow-lg bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />
      <div className="absolute inset-0 rounded-2xl bg-[#FAF3E6]/85" aria-hidden />
      <div className="absolute inset-0 rounded-2xl backdrop-blur-[2px] opacity-80" aria-hidden />
      <div className="relative p-6 md:p-8">
        <div className="text-4xl md:text-5xl mb-4 drop-shadow-sm">{icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-[#3E543B] mb-3 drop-shadow-sm">
          {title}
        </h3>
        <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

