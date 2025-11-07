import type { Metadata } from "next";
import Script from "next/script";
import ContentWrapper from "@/components/common/ContentWrapper";
import ScrollReveal from "@/components/common/ScrollReveal";
import CourseHighlightCard from "@/components/Home/CourseHighlightCard";
import { socialLinks } from "@/constants/socialLinks";
import crepeImage from "@/images/可麗餅.jpg";
import milkImage from "@/images/牛奶味.jpg";
import friedMilkImage from "@/images/炸牛奶.jpg";
import faviconImage from "@/images/favicon.jpg";

const siteUrl = "https://kowlooncnslt.com";

export const metadata: Metadata = {
  title: "夜市翻身學｜夜市創業課程與顧問諮詢",
  description:
    "夜市翻身學提供可麗餅、牛奶飲品、炸牛奶等夜市創業課程與一對一顧問諮詢，從選品、攤位營運到行銷策略，帶你快速打造高收益夜市品牌。",
  keywords: [
    "夜市翻身學",
    "夜市創業",
    "夜市課程",
    "可麗餅課程",
    "炸牛奶",
    "夜市顧問",
    "攤車創業",
    "創業諮詢",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "夜市翻身學｜夜市創業課程與顧問諮詢",
    description:
      "夜市翻身學提供夜市攤商專屬課程與顧問服務，避開創業陷阱、打造標準 SOP、穩定提升收益。",
    url: siteUrl,
    siteName: "夜市翻身學",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: faviconImage.src,
        width: faviconImage.width,
        height: faviconImage.height,
        alt: "夜市翻身學品牌標誌",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "夜市翻身學｜夜市創業課程與顧問諮詢",
    description:
      "夜市翻身學提供夜市創業課程、攤位 SOP 與行銷策略，協助新手快速穩健翻身。",
    images: [faviconImage.src],
  },
  other: {
    "og:locale:alternate": "zh_HK",
  },
};

export default function Home() {
  const lineLink = socialLinks.find((link) => link.label === "LINE")?.href;

  const coursesIntro = [
    {
      icon: "🥞",
      title: "可麗餅翻身班",
      description: "掌握經典甜點配方，教你打造排隊級的可麗餅攤位。",
      backgroundImage: crepeImage.src,
    },
    {
      icon: "🧋",
      title: "牛乳味研習會",
      description: "牛奶系飲品賣點全解析，從備料到出杯全程 SOP。",
      backgroundImage: milkImage.src,
    },
    {
      icon: "🍮",
      title: "炸牛奶手作課",
      description: "人氣甜點一次學會，酥脆口感與食材控管完整傳授。",
      backgroundImage: friedMilkImage.src,
    },
  ];

  const whyChooseUs = [
    {
      title: "1. 避開創業陷阱",
      description:
        "避免亂花錢買錯設備、囤錯貨，創業初期把資金花在刀口上。"
    },
    {
      title: "2. 一套標準化 SOP",
      description:
        "有經驗的老師親自引導，今天學、明天攤位就能用。"
    },
    {
      title: "3. 長期翻身計劃",
      description:
        "翻身不只是一次課，未來持續提供資源與方案，陪你走得更穩。"
    }
  ];

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "夜市翻身學",
    url: siteUrl,
    logo: faviconImage.src,
    sameAs: socialLinks.map((link) => link.href),
    description:
      "夜市翻身學提供夜市創業課程與一對一顧問諮詢服務，協助攤商優化產品、營運與行銷。",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["zh-TW"],
      url: lineLink,
    },
  };

  const featuredCoursesItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "夜市翻身學熱門課程",
    itemListElement: coursesIntro.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        url: `${siteUrl}/courses#${encodeURIComponent(course.title)}`,
        provider: {
          "@type": "Organization",
          name: "夜市翻身學",
          sameAs: siteUrl,
        },
      },
    })),
  };

  return (
    <ContentWrapper>
        <Script id="organization-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationLd)}
        </Script>
        <Script id="featured-courses-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(featuredCoursesItemList)}
        </Script>
        {/* Hero Section */}
        <section className="container mx-auto px-5 md:px-6 py-16 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-brand-primary mb-6 leading-tight">
            零基礎也能打造
              <br />
              <span className="bg-gradient-to-r from-[var(--warm)] to-[var(--highlight)] bg-clip-text text-transparent">
              夜市現金流
              </span>
            </h1>
            <p className="text-base md:text-2xl text-brand-muted mb-10 leading-relaxed md:leading-relaxed">
              想創業，卻被高昂租金和風險嚇退？夜市是最容易開始、最快見效的創業入口。別再摸索，跟著夜市翻身學一步步實作，從零開始也能穩穩賺。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-brand-background rounded-full text-lg font-semibold hover:bg-brand-primary-dark transition-all transform hover:scale-105"
              >
                立即諮詢
              </a>
            </div>
          </div>
        </section>

      {/* About Section */}
      <ScrollReveal>
        <section id="about" className="container mx-auto px-5 md:px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                  關於我們
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <div className="bg-brand-soft border border-[rgba(var(--warm-rgb),0.7)] rounded-2xl p-6 md:p-12 shadow-lg space-y-6 text-base md:text-lg text-brand-muted leading-relaxed">
               <p className="leading-relaxed text-center text-xl md:text-2xl font-bold text-brand-primary">夜市翻身學</p>
                <p className="leading-relaxed">
                來自真正擺過攤、賺過錢、踩過坑的夜市師傅。我們的目的很簡單：讓老闆賺更多，也讓想創業的人少走冤枉路。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Courses Preview Section */}
      <ScrollReveal>
        <section className="container mx-auto px-5 md:px-6 py-16 md:py-20">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
              現已上架翻身課程
            </h2>
            <p className="text-base md:text-xl text-brand-muted max-w-2xl mx-auto">
              熱銷實戰課程上線中，幫你一步步打造人氣夜市攤位
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10 md:mb-12">
            {coursesIntro.map((course, index) => (
              <ScrollReveal key={course.title} delay={index * 0.1}>
                <CourseHighlightCard
                  icon={course.icon}
                  title={course.title}
                  description={course.description}
                  backgroundImage={course.backgroundImage}
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <a
                href="/courses"
                className="inline-block px-8 py-4 bg-brand-accent text-brand-background rounded-full text-lg font-semibold hover:bg-[var(--accent-dark)] transition-all transform hover:scale-105"
              >
                查看所有課程
              </a>
            </div>
          </ScrollReveal>
        </section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal>
        <section className="container mx-auto px-5 md:px-6 py-16 md:py-20">
          <div className="max-w-5xl mx-auto bg-brand-primary text-brand-background rounded-[24px] md:rounded-[32px] p-7 md:p-10 shadow-2xl">
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                為什麼要找夜市翻身學？
              </h2>
            </ScrollReveal>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg">
              {whyChooseUs.map((item, index) => (
                <ScrollReveal key={item.title} delay={0.2 + index * 0.1}>
                  <div className="flex flex-col md:flex-row md:items-start md:gap-6 bg-[rgba(var(--background-rgb),0.1)] rounded-2xl p-5 md:p-6">
                    <div className="text-2xl md:text-4xl font-bold text-brand-warm">
                      {item.title}
                    </div>
                    <p className="text-sm md:text-lg leading-relaxed mt-2 md:mt-0">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Early Bird & Contact */}
      <ScrollReveal>
        <section id="contact" className="container mx-auto px-5 md:px-6 py-16 md:py-20">
          <div className="max-w-5xl mx-auto bg-white/90 border border-[rgba(var(--warm-rgb),0.8)] rounded-[24px] md:rounded-[28px] p-5 md:p-12 shadow-2xl">
            <div className="grid gap-6 md:gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
              <div className="space-y-5 md:space-y-6">
                <ScrollReveal delay={0.1}>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-secondary text-brand-primary rounded-full font-semibold">
                    <span>🎯</span>
                    <span>早鳥優惠進行中</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <h2 className="text-3xl md:text-5xl font-bold text-brand-accent">
                    早鳥價格等你來諮詢
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-lg md:text-2xl text-brand-primary font-semibold">
                    20 萬不用 · 15 萬不用 · 10 萬不用
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.25}>
                  <p className="text-base md:text-lg text-brand-muted leading-relaxed">
                    課程仍在早鳥期，只要留下資訊，我們立刻為你安排專人提供最優惠的翻身方案。
                  </p>
                </ScrollReveal>
              </div>
              <div className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary-deep)] to-[var(--primary)] text-brand-background rounded-3xl p-6 md:p-8 shadow-lg space-y-6">
                <ScrollReveal delay={0.2}>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold">聯絡我們</h3>
                    <p className="text-base md:text-lg text-[rgba(var(--background-rgb),0.85)] leading-relaxed">
                      想了解課程內容、創業計劃或夜市翻身學的資源配置？留下聯絡方式，我們的顧問會在 24 小時內回覆。
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <div className="space-y-3 md:space-y-4">
                    <a
                      href={lineLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[var(--warm)] to-[var(--highlight)] text-brand-primary rounded-full text-base md:text-lg font-semibold hover:from-[var(--warm-dark)] hover:to-[var(--highlight-dark)] transition-all transform hover:-translate-y-1 shadow-xl"
                    >
                      立即諮詢早鳥方案
                    </a>
                    <p className="text-xs md:text-sm text-[rgba(var(--background-rgb),0.7)] text-center">
                      加入 LINE，預約顧問諮詢
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </ContentWrapper>
  );
}
