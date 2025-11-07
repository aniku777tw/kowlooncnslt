type CourseCardProps = {
  course: {
    id: number;
    icon: string;
    title: string;
    description: string;
    features: string[];
    backgroundImage: string;
  };
  lineLink?: string;
};

export default function CourseCard({ course, lineLink }: CourseCardProps) {
  const { icon, title, description, features, backgroundImage } = course;

  return (
    <div className="relative bg-[#FAF3E6]/90 border border-[#E4B873]/70 rounded-2xl p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl flex flex-col">
      <div
        className="absolute inset-0 bg-cover rounded-2xl shadow-lg bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 rounded-2xl bg-[#FAF3E6]/85"
        aria-hidden
      />
      <div
        className="absolute inset-0 rounded-2xl backdrop-blur-[2px] opacity-80"
        aria-hidden
      />
      <div className="relative">
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-xl md:text-2xl font-bold text-[#3E543B] mb-3">
            {title}
          </h3>
          <p className="text-sm md:text-base text-[#4A4A4A] leading-relaxed mb-6 flex-grow">
            {description}
          </p>
          <h4 className="text-[#3E543B] font-semibold mb-3">課程內容：</h4>
          <ul className="space-y-2 text-sm md:text-base mb-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-[#4A4A4A] text-sm flex items-start gap-2"
              >
                <span className="text-[#6BBF59]">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {lineLink && (
          <a
            href={lineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center px-8 py-4 bg-[#E2725B] text-[#FAF3E6] rounded-full font-semibold transition-colors hover:bg-[#d1624d]"
          >
            立即報名
          </a>
        )}
      </div>
    </div>
  );
}
