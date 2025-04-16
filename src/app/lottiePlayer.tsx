"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie with ssr: false to ensure it runs only on the client side
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

interface LottiePlayerProps {
  path: string;
  height?: number;
  width?: number;
  loop?: boolean;
}

export default function LottiePlayer({
  path,
  height = 400,
  width = 400,
  loop = true,
}: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, [path]);

  if (!animationData) return null;

  const defaultOptions = {
    loop,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="overflow-hidden relative" style={{ height, width }}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}
