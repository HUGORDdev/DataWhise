import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
interface NavDropdownProps {
  title: string;
  items: string[];
}

const NavDropdown = ({ title, items }:NavDropdownProps) => {
  return (
    <div className="relative group inline-block sm:w-full md:w-full ">
      <button className="flex items-center gap-2 cursor-pointer outline-none">
        <span className="text-brand-dark dark:text-text-color body-base font-medium group-hover:text-brand-green transition-colors">
          {title}
        </span>
        <ChevronDownIcon className="w-4 h-4 block group-hover:hidden dark:text-text-color" />
        <ChevronUpIcon className="w-4 h-4 text-brand-green hidden group-hover:block" />
      </button>

      <div className="lg:absolute lg:top-full lg:left-0 lg:pt-2 hidden 
      relative group-hover:block z-50">
        <ul className="w-full lg:w-64  dark:bg-black lg:border border-border-color lg:rounded-2xl lg:shadow-2xl lg:dark:shadow-brand-green/30 overflow-hidden  bg-transparent  ">
          {items.map((item, index) => (
            <li
              key={index}
              className={`py-3 px-4 text-sm text-brand-dark hover:bg-gray-50 dark:text-text-color cursor-pointer transition-colors
                ${index !== items.length - 1 ? 'border-b border-border-color' : ''}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavDropdown;