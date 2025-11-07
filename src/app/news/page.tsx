import type { Metadata } from "next";
import Script from "next/script";
import ContentWrapper from "@/components/common/ContentWrapper";
import ScrollReveal from "@/components/common/ScrollReveal";
import { socialLinks } from "@/constants/socialLinks";

const siteUrl = "https://kowlooncnslt.com";
const newsPageUrl = `${siteUrl}/news`;

export const metadata: Metadata = {
  title: "新聞報導｜夜市翻身學媒體曝光與最新消息",
  description:
    "掌握夜市翻身學的媒體報導、專訪與最新消息，了解我們如何透過夜市創業課程與顧問服務，協助更多攤商翻身。",
  keywords: [
    "夜市翻身學 新聞",
    "夜市創業 報導",
    "夜市課程 媒體",
    "夜市翻身學 最新消息",
    "夜市創業 成功案例",
  ],
  alternates: {
    canonical: newsPageUrl,
  },
  openGraph: {
    title: "新聞報導｜夜市翻身學媒體曝光與最新消息",
    description:
      "夜市翻身學在媒體與產業論壇的最新曝光，帶你了解我們如何協助攤商打造高收益夜市品牌。",
    url: newsPageUrl,
    siteName: "夜市翻身學",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "夜市翻身學新聞報導",
    description:
      "夜市翻身學媒體報導與最新消息，關注夜市創業趨勢與成功案例。",
  },
};

const newsItems = [
  {
    title: "年輕夜市創業者用 TikTok 創意行銷搶市",
    summary:
      "透過探訪各大夜市創業者，分享夜市攤商不藏私的創業心法。",
    source: "經濟日報",
    date: "2025/10/29",
    link: "https://money.udn.com/money/story/5635/9104773",
  },
];

export default function NewsPage() {
  const lineLink = socialLinks.find((link) => link.label === "LINE")?.href;

  const newsListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "夜市翻身學新聞報導",
    itemListElement: newsItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "NewsArticle",
        headline: item.title,
        datePublished: item.date,
        url: item.link,
        description: item.summary,
        publisher: {
          "@type": "Organization",
          name: item.source,
        },
      },
    })),
  };

  return (
    <ContentWrapper>
      <Script id="news-jsonld" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(newsListJsonLd)}
      </Script>

      <ScrollReveal>
        <section className="container mx-auto px-5 md:px-6 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#3E543B] mb-6">
              新聞報導
            </h1>
            <p className="text-base md:text-xl text-[#4A4A4A] leading-relaxed">
              關注夜市翻身學在媒體、論壇與產業界的最新曝光，看到更多夜市創業成功案例與產業洞察。
            </p>
          </div>
        </section>
      </ScrollReveal>

      <section className="container mx-auto px-5 md:px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <article className="relative overflow-hidden rounded-3xl border border-[#E4B873]/60 bg-[#FAF3E6]/80 backdrop-blur-sm shadow-lg transition-transform duration-200 hover:-translate-y-2">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-[#6BBF59] font-semibold">
                    <span>{item.source}</span>
                    <time dateTime={item.date} className="text-[#4A4A4A]/80">
                      {new Date(item.date).toLocaleDateString("zh-TW", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#3E543B]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-[#4A4A4A]">
                    {item.summary}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-[#E2725B] font-semibold hover:text-[#C85F4A]"
                  >
                    觀看完整報導
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <section className="container mx-auto px-5 md:px-6 pb-20">
          <div className="max-w-4xl mx-auto bg-[#3E543B] text-[#FAF3E6] rounded-[28px] p-8 md:p-12 shadow-2xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                想了解更多夜市創業案例？
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-center text-[#FAF3E6]/90">
                直接與夜市翻身學顧問團隊聯繫，獲得專屬夜市創業諮詢與最新活動資訊。
              </p>
              {lineLink && (
                <div className="flex justify-center">
                  <a
                    href={lineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E4B873] text-[#3E543B] font-semibold text-lg transition-transform duration-150 hover:-translate-y-1 hover:bg-[#D3A862]"
                  >
                    立即聯繫顧問
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </ContentWrapper>
  );
}

