"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import logo from "@/images/logo.webp";
import { motion, AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import SocialLinks from "@/components/common/SocialLinks";


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToElement } = useSmoothScroll();
  const scrollPositionRef = useRef(0);

  // 防止菜单打开时背景滚动
  useEffect(() => {
    if (isMenuOpen) {
      // 保存当前滚动位置
      scrollPositionRef.current = window.scrollY;
      // 使用 CSS 类锁定背景滚动
      document.body.classList.add("menu-open");
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${scrollPositionRef.current}px`
      );
    } else {
      // 恢复背景滚动
      document.body.classList.remove("menu-open");
      document.documentElement.style.removeProperty("--scroll-y");
      // 恢复滚动位置
      window.scrollTo(0, scrollPositionRef.current);
    }

    // 清理函数
    return () => {
      document.body.classList.remove("menu-open");
      document.documentElement.style.removeProperty("--scroll-y");
    };
  }, [isMenuOpen]);

  return (
    <nav className="container mx-auto px-5 md:px-6 py-4 md:py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <span
            aria-hidden
            className="block w-20 h-20 bg-brand-primary"
            style={{
              WebkitMaskImage: `url(${logo.src})`,
              maskImage: `url(${logo.src})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
          <span className="sr-only">夜市翻身學</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-brand-muted">
          <Link
            href="/courses"
            className="text-brand-primary hover:text-brand-accent transition-colors"
          >
            課程資訊
          </Link>
          <Link
            href="/#about"
            className="text-brand-primary hover:text-brand-accent transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("about");
            }}
          >
            關於我們
          </Link>
          <Link
            href="/news"
            className="text-brand-primary hover:text-brand-accent transition-colors"
          >
            新聞報導
          </Link>
          <Link
            href="/#about"
            className="text-brand-primary hover:text-brand-accent transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("contact");
            }}
          >
            聯絡我們
          </Link>
          <SocialLinks variant="nav" />
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
            <FiMenu className="h-6 w-6" />
        </button>
      </div>
      {/* Mobile Menu Overlay - Full Screen with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--secondary)] to-[var(--background)] z-50 md:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex h-full flex-col"
            >
              {/* Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex items-center justify-between p-6 border-b border-[rgba(var(--warm-rgb),0.4)]"
              >
                <div className="text-2xl font-bold text-brand-primary">選單</div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-brand-primary p-2 hover:bg-[rgba(var(--secondary-rgb),0.7)] rounded-full transition-all"
                  aria-label="Close menu"
                >
                  <FiX className="h-6 w-6" />
                </motion.button>
              </motion.div>
              {/* Menu Items - Centered with Icons */}
              <div className="flex-1 overflow-y-auto px-6 py-10">
                <div className="flex flex-col items-center gap-4">
                  {[
                    {
                      href: "/courses",

                      title: "課程資訊",
                      description: "探索專業課程",
                      onClick: () => setIsMenuOpen(false),
                    },
                    {
                      href: "/#about",

                      title: "關於我們",
                      description: "了解我們的團隊",
                      onClick: (e: MouseEvent) => {
                        e.preventDefault();
                        scrollToElement("about", () => setIsMenuOpen(false));
                      },
                    },
                {
                  href: "/news",

                  title: "新聞報導",
                  description: "媒體採訪與最新消息",
                  onClick: () => setIsMenuOpen(false),
                },
                    {
                      href: "/#contact",

                      title: "聯絡我們",
                      description: "開始您的專案",
                      onClick: (e: MouseEvent) => {
                        e.preventDefault();
                        scrollToElement("contact", () => setIsMenuOpen(false));
                      },
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ y: 50, opacity: 0, scale: 0.9 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full max-w-xs"
                    >
                      <Link
                        href={item.href}
                        className="w-full group relative overflow-hidden rounded-2xl bg-[rgba(var(--background-rgb),0.9)] backdrop-blur-sm border border-[rgba(var(--warm-rgb),0.6)] hover:border-[rgba(var(--accent-rgb),0.6)] transition-all duration-300 block"
                        onClick={item.onClick}
                      >
                        <div className="flex items-center gap-4 p-6">
                          <div className="flex-1">
                            <div className="text-xl font-semibold text-brand-primary group-hover:text-brand-accent transition-colors">
                              {item.title}
                            </div>
                            <div className="text-sm text-brand-muted mt-1">
                              {item.description}
                            </div>
                          </div>
                          <FiArrowRight className="h-5 w-5 text-brand-warm transition-colors group-hover:text-brand-accent" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Footer Button */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="p-6 border-t border-[rgba(var(--warm-rgb),0.4)]"
              >
                <SocialLinks variant="mobile-nav" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
