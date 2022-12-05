import { useTranslation } from "react-i18next";
import { NavLink } from "./NavLink";

export function Header()
{
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between mx-10 border-b-2 border-gray-400 max-lg:flex-col">
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