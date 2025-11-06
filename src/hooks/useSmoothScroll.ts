import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

export function useSmoothScroll() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToElement = useCallback(
    (elementId: string, closeMenu?: () => void) => {
      // 关闭菜单（如果提供了关闭函数）
      if (closeMenu) {
        closeMenu();
      }

      // 如果当前不在首页，先导航到首页
      if (pathname !== "/") {
        router.push(`/#${elementId}`);
        // 等待页面加载后再滚动
        // 使用 requestAnimationFrame 确保 DOM 已更新
        requestAnimationFrame(() => {
          setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        });
      } else {
        // 在同一页面，直接滚动
        // 使用 requestAnimationFrame 确保 DOM 已更新
        requestAnimationFrame(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    },
    [router, pathname]
  );

  return { scrollToElement };
}

