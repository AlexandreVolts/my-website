import { useEffect, useState } from "react";

export function useScrollState(segments: number) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const [isSmallScroll, setIsSmallScroll] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [change, setChange] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const onScroll = () => {
    const height = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight,
    );
    const rawScroll = window.scrollY / height * segments;
    const s = Math.round(rawScroll);
    const delta = Math.sign(window.scrollY - lastScrollY);

    if (scroll !== s) {
      setIsSmallScroll(false);
    }
    setLastScrollY(window.scrollY);
    setChange(scroll !== s);
    setScroll(s);
    clearInterval(timer);
    if (isAutoScroll)
      return;
    setTimer(setTimeout(() => {
      setIsAutoScroll(true);
      window.scrollTo({ top: (height / segments) * (s + (isSmallScroll ? delta : 0)) });
      setTimeout(() => { setIsAutoScroll(false); setIsSmallScroll(true); }, 300);
    }, 500));
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return ({ scroll, change });
}