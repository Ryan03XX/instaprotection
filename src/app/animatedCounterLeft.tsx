"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export const AnimatedCounterLeft = ({
  to,
  label,
  prefix = "",
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) => {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration,
        onUpdate(latest) {
          setValue(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [inView, to, duration]);

  return (
    <div ref={ref} className="text-left">
      <span className="text-4xl md:text-5xl font-bold text-[#534F85]">
        {prefix}
        {value}
        {suffix}
      </span>
      <p className="text-md md:text-lg mt-2 text-[#534F85]">{label}</p>
    </div>
  );
};
