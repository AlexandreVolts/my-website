import { ReactNode, useEffect, useRef, useState } from "react";
import { App } from "../canvas/App";
import { FadeParticule } from "../canvas/FadeParticule";

interface SectionProps
{
  color?: "primary"|"secondary"|"tertiary";
  display?: boolean;
  children: ReactNode;
}
export function Section(props: SectionProps)
{
  const [app, setApp] = useState<App>();
  const ref = useRef<HTMLCanvasElement>(null);
  const theme = {
    primary: "bg-indigo-900",
    secondary: "bg-gray-800",
    tertiary: "bg-rose-900",
  };

  useEffect(() => {
    props.display ? app?.render(0) : app?.stop();
  }, [app, props.display]);
  useEffect(() => {
    if (ref.current) {
      setApp(new App(ref.current, FadeParticule, 100));
    }
  }, [ref]);

  return (
    <section className={`relative h-screen overflow-hidden ${theme[props.color || 'primary']}`}>
      <canvas ref={ref} className="absolute filters blur-sm"></canvas>
      {props.display ? props.children : ''}
    </section>
  );
}