"use client";

import { useEffect, useState } from "react";

export const useMediaQuery = ({ query }: { query: string }) => {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !query) return;

    const [filter, width] = query.split(":");
    const trimmedWidth = width.includes("px")
      ? Number(width.replace("px", ""))
      : Number(width);

    const matchQuery = () => {
      if (filter === "max") return window.innerWidth < trimmedWidth;
      if (filter === "min") return window.innerWidth > trimmedWidth;
      return false;
    };

    const handleResize = () => {
      setMatches(matchQuery());
    };

    setMatches(matchQuery());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [query]);

  return matches;
};
