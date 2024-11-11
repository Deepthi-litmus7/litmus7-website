import Link from "next/link";
import Button from "../atoms/Button";

export default function Header() {
  return (
    <div class="flex items-center justify-between w-[1007px] h-[56px] mt-8 mx-auto bg-white shadow-lg border border-gray-300 rounded-[30px] px-6 gap-[60px]">
      <div class="flex items-center gap-2">
        <img src="/litmus7-white-logo.svg" alt="Logo" />
      </div>

      <div class="flex gap-[60px] text-center">
        <a
          href="#"
          class="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Who we are
        </a>
        <a
          href="#"
          class="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          What we do
        </a>
        <a
          href="#"
          class="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Future of Retail
        </a>
      </div>

      <div class="flex items-center gap-4">
        <button class="flex items-center px-5 py-2 bg-gray-800 text-white rounded-full gap-2 font-medium">
          <span class="material-icons text-base">
            {" "}
            <img src="/ArrowUpRight.svg" alt="Logo" />
          </span>{" "}
          Get In Touch
        </button>

        <button class="text-gray-700 hover:text-gray-900">
          <img src="/MagnifyingGlass.png" alt="Logo" />
        </button>

        <div class="flex items-center justify-center w-[60px] h-[43px] bg-gray-200 border-t border-gray-300 rounded-[40px]">
          <button class="text-gray-700 hover:text-gray-900">
            <img src="/Vector.png" alt="Logo" />
          </button>
        </div>
      </div>
    </div>
  );
}
