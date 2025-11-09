"use client";
import { useEffect, useState } from "react";
import { FaArrowUpLong as ArrowUp } from "react-icons/fa6";

const ScrollToTopButton = ({
  showAfter = 300, 
  smooth = true,
}: {
  showAfter?: number;
  smooth?: boolean;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-primary text-white p-3 shadow-lg transition-all duration-300 hover:bg-primary1/90
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
