import React, { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    const currentRef = ref.current;

    return () => {
      if (currentRef) {
        scrollObserver.unobserve(currentRef);
      }
    };
  }, []);

  const className = `transition-all duration-2000 ${ isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" }`;

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}