import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Exception: If hash exists, scroll to that specific section
    if (hash) {
      const sectionId = hash.replace("#", "");
      
      // Allow scrolling to contact and social sections
      if (sectionId === "contact" || sectionId === "social") {
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 0);
          return;
        }
      }
    }

    // Default behavior: scroll to top
    window.scrollTo(0, 0);
  }, [pathname, hash]); // Fires every time the URL path or hash changes

  return null;
}