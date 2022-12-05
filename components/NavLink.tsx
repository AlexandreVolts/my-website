interface NavLinkProps
{
  text: string;
  url: string;
  active?: boolean;
}
export function NavLink(props: NavLinkProps)
{
  return (
    <li className="flex flex-col w-32 text-center transition-all md:text-right group hover:text-sky-500">
      <a>{props.text}</a>
      <span className="w-0 h-0.5 md:mt-5 transition-all bg-sky-500 group-hover:w-full place-self-end"></span>
    </li>
  );
}