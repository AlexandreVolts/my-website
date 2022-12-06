import { ReactNode } from "react";

interface SectionProps
{
  color?: "primary"|"secondary"|"tertiary";
  children: ReactNode;
}
export function Section(props: SectionProps)
{
  const theme = {
    primary: "bg-indigo-900",
    secondary: "bg-white text-black",
    tertiary: "bg-rose-900",
  }

  return (
    <section className={`p-48 h-screen ${theme[props.color || 'primary']}`}>
      {props.children}
    </section>
  );
}