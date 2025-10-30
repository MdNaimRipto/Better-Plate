"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, ReactElement } from "react";

const ScrollAnimation = ({ children }: { children: ReactElement }) => {
  const { scrollYProgress } = useScroll(); // Track scroll progress
  const [hasScrolled, setHasScrolled] = useState(false);

  // Interpolate width based on scroll progress (from 50% to 100%)
  const width = useTransform(scrollYProgress, [0, 0.001], ["60%", "100%"]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.001],
    ["50px", "0px"]
  );

  // Animate vertical movement from 0px to a larger value (like 200px)
  const y = useTransform(scrollYProgress, [0, 0.001], [0, 20]);

  // Detect if user has started scrolling (just to trigger animation)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      style={{
        width: hasScrolled ? width : "60%", // Initial width is 50%
        y: y, // Vertical movement based on scroll
        transition: "width 0.5s ease-out, y 0.5s ease-out", // Smooth transition
        position: "absolute",
        bottom: 20,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
