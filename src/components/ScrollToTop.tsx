import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to the element
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Fires on path or hash change

  return null;
}