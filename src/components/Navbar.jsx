import { headerLogo } from "../assets/images";

import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className=" padding-x flex justify-between items-center p-4 fixed w-full bg-slate-100 shadow-lg">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-monts errat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
