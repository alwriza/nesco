"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SitejetsInit() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    // Re-initialize Sitejet lazy loading and accordion on every route change
    const reinit = () => {
      // 1. Fix lazy-loaded images: replace SVG placeholders with real sources
      document.querySelectorAll("img[data-src]").forEach((img) => {
        const el = img as HTMLImageElement;
        const src = el.dataset.src;
        if (src) {
          el.src = src;
          el.classList.remove("");
        }
      });

      // 2. Fix lazy background images
      document.querySelectorAll("[data-background]").forEach((el) => {
        const bg = el.getAttribute("data-background");
        if (bg) {
          (el as HTMLElement).style.backgroundImage = bg.replace(/&quot;/g, '"');
        }
      });

      // 3. Re-run Sitejet init if available
      if (typeof (window as any).WV !== "undefined") {
        try { (window as any).WV.init?.(); } catch (e) {}
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(reinit, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
