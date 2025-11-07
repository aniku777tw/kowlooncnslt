import ContentWrapper from "@/components/common/ContentWrapper";
import CourseCard from "@/components/Courses/CourseCard";
import { socialLinks } from "@/constants/socialLinks";
import crepeImage from "@/images/可麗餅.png";
import milkImage from "@/images/S__18628640_0.jpg";
import friedMilkImage from "@/images/炸牛奶.jpg";

export const metadata = {
  title: "課程資訊 - 夜市翻身學",
  description: "探索我們的專業課程，提升您的技能與知識",
};

export default function CoursesPage() {
  const lineLink = socialLinks.find((link) => link.label === "LINE")?.href;
  const reasons = [
    {
      id: 1,
      title: "避開創業陷阱",
      points: [
        "避免亂花錢買錯設備、囤錯貨",
        "創業初期運營帳本至關重要",
      ],
    },
    {
      id: 2,
      title: "一套標準化 SOP",
      points: [
        "有經驗的老師親自引導",
        "今天學、明天攤攤就能用",
      ],
    },
    {
      id: 3,
      title: "長期翻身計劃",
      points: [
        "翻身計劃不只是一堂課",
        "未來還會有更多資源與方案，助創業一步步走得更穩",
      ],
    },
  ];

  const benefits = [
    "頭家親自授課",
    "技術轉移 SOP",
    "一對一諮詢",
    "餐車（選配）",
    "生財五金（選配）",
  ];

  const courses = [
    {
      id: 1,
      icon: "🥞",
      title: "可麗餅翻身班",
      highlight: "甜點人氣爆款",
      description:
        "手把手教你打造排隊級可麗餅攤位，配方、備料、出餐節奏一次掌握。",
      features: [
        "經典與創意口味完整配方",
        "攤位動線規劃與設備挑選",
        "現場製作節奏實戰演練",
        "食材成本與定價策略",
      ],
      backgroundImage: crepeImage.src,
    },
    {
      id: 2,
      icon: "🧋",
      title: "牛奶味研習會",
      highlight: "奶系飲品專修",
      description:
        "用最穩定的牛奶飲品 SOP 打開你的飲料攤。備料到出杯，一天上手。",
      features: [
        "牛奶保鮮與庫存管理",
        "招牌飲品設計與調味公式",
        "高峰期快速出杯技巧",
        "社群拍攝與主題包裝",
      ],
      backgroundImage: milkImage.src,
    },
    {
      id: 3,
      icon: "🍮",
      title: "炸牛奶手作課",
      highlight: "夜市甜點新寵",
      description:
        "把酥脆奶香變成你的獨門招牌。從製程到攤位操作完整拆解。",
      features: [
        "炸牛奶配方與口感調整",
        "油溫控制與批次備料技巧",
        "外帶包裝與保溫策略",
        "搭配飲品或套餐設計",
      ],
      backgroundImage: friedMilkImage.src,  
    },
  ];

  return (
    <ContentWrapper>
        {/* Header */}
        <section className="container mx-auto px-5 md:px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#3E543B] mb-6 leading-tight">
              課程資訊
            </h1>
            <p className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed">
              探索我們的專業課程，選擇適合您的學習路徑，提升技能與知識
            </p>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="container mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#F4D7A8] via-[#FAF3E6] to-[#F4D7A8] rounded-3xl p-8 shadow-xl border border-[#E4B873]/60">
              <div className="flex items-start gap-4 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#3E543B]">
                    為什麼找夜市翻身學
                  </h2>
                </div>
              </div>
              <div className="space-y-8">
                {reasons.map((reason) => (
                    <div key={reason.id} className="flex gap-6">
                     <div className="text-4xl font-extrabold text-[#E2725B] drop-shadow-sm">
                      {reason.id}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#3E543B] mb-4">
                        {reason.title}
                      </h3>
                       <ul className="space-y-3 text-[#4A4A4A]">
                        {reason.points.map((point, index) => (
                           <li key={index} className="flex items-start gap-3 leading-relaxed">
                             <span className="mt-2 flex h-2 w-2 min-w-[0.5rem] min-h-[0.5rem] rounded-full bg-[#6BBF59]" />
                             <span className="text-sm md:text-base">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Benefits */}
        <section className="container mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="max-w-2xl mx-auto bg-[#FAF3E6] rounded-3xl border border-[#E4B873]/50 shadow-lg p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                
                <h2 className="text-3xl mb-2 font-bold text-[#3E543B]">
                  報名就有滿滿資源
                </h2>
                <p className="text-sm uppercase tracking-[0.3em] text-[#4A4A4A]/70">
                  報名課程將獲得
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-sm border border-[#F4D7A8]/60"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#E4B873] text-[#3E543B] font-bold">
                    {index + 1}
                  </div>
                  <span className="text-[#3E543B] font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="container mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} lineLink={lineLink} />
            ))}
          </div>
        </section>

    </ContentWrapper>
  );
}

