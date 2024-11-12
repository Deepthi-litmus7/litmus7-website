import Link from "next/link";
import Menu from "@/components/atoms/Menu";
import Button from "@/components/atoms/Button";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full max-w-screen-xl h-auto mt-8 mx-auto bg-white shadow-lg border border-gray-300 rounded-[30px] px-6 py-4">
      <div className="mr-[3.75rem] flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-2">
          <img
            src="/litmus7-white-logo.svg"
            alt="Logo"
            className="w-[9.276125rem] h-8 md:h-10"
          />
        </div>

        <div className="flex items-center md:hidden">
          <Button
            className="text-gray-700 hover:text-gray-900"
            image={<img src="/menu.svg" alt="Menu Icon" className="w-6 h-6" />}
          />
        </div>
      </div>

      <div className="mr-[3.75rem] hidden md:flex flex-nowrap gap-4 md:gap-8 justify-center text-center">
        <Menu
          href="#"
          className="mr-[2.5rem] text-sm md:text-base font-medium text-gray-700 hover:text-gray-900"
          text="Who we are"
        />
        <Menu
          href="#"
          className="mr-[2.5rem] text-sm md:text-base font-medium text-gray-700 hover:text-gray-900"
          text="What we do"
        />
        <Menu
          href="#"
          className="mr-[2.5rem] text-sm md:text-base font-medium text-gray-700 hover:text-gray-900"
          text="Future of Retail"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button
          className="mr-[3.75rem] hidden md:flex items-center px-5 py-2 bg-gray-800 text-white rounded-full gap-2 font-medium"
          text="Get In Touch"
          image={
            <span className="material-icons text-base">
              <img
                src="/ArrowUpRight.svg"
                alt="Arrow Icon"
                className="w-4 h-4"
              />
            </span>
          }
        />

        <Button
          className="mr-[0.75rem] hidden md:flex text-gray-700 hover:text-gray-900"
          image={<img src="/MagnifyingGlass.png" alt="Search Icon" />}
        />

        <div className="hidden md:flex items-center justify-center w-[3.75rem] h-[2.6875rem] bg-gray-200 border-t border-gray-300 rounded-[40px]">
          <Button
            className="text-gray-700 hover:text-gray-900"
            image={<img src="/menu.svg" alt="Menu Icon" />}
          />
        </div>
      </div>
    </div>
  );
}
