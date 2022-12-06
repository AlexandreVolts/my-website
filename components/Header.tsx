import { useTranslation } from "next-i18next";
import { NavLink } from "./NavLink";

export function Header()
{
  const { t } = useTranslation();

  return (
    <header className="fixed flex items-center justify-between w-11/12 -translate-x-1/2 border-b-2 border-gray-400 left-1/2 max-lg:flex-col">
      <h1 className="py-4 text-4xl font-bold">{t("name")}</h1>
      <nav className="lg:place-self-end">
        <ul className="flex md:space-x-5 max-md:flex-col">
          <NavLink text={t("websites")} url="" /> 
          <NavLink text={t("games")} url="" />
          <NavLink text={t("experiments")} url="" />
          <NavLink text={t("articles")} url="" />
          <NavLink text={t("about")} url="" />
        </ul>
      </nav>
    </header>
  );
}