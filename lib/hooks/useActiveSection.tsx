"use client";

import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);

      const currentHash = window.location.hash.slice(1);
      if (current !== currentHash) {
        const newUrl = current ? `#${current}` : "/";
        window.history.replaceState(null, "", newUrl);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);
  return activeSection;
};
