import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#3E543B] text-[#FAF3E6]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <SocialLinks variant="footer" />
          <div className="text-sm md:text-base text-center md:text-right">
            版權所有 © 2025 九龍數位顧問有限公司 | Kowloon Digital Consulting Co., Ltd. | 保留所有權利
          </div>
        </div>
      </div>
    </footer>
  );
}

