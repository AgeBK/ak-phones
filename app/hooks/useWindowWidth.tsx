"use client";

import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // update width if the window resizes
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
