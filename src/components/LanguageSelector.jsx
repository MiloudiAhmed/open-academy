import { Menu as DropdownMenu, Transition } from "@headlessui/react";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
];

export const LanguageSelector = () => {
  return (
    <DropdownMenu as="div" className="relative inline-block text-left">
      <DropdownMenu.Button className="flex items-center gap-1 border border-blue-700 px-3 py-2 rounded-lg hover:bg-blue-50 shadow-sm transition">
        <Globe className="w-4 h-4 text-blue-700" />
        <span className="text-blue-700 font-semibold text-sm">FR</span>
        <ChevronDown className="w-4 h-4 text-blue-700" />
      </DropdownMenu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <DropdownMenu.Items className="absolute right-0 mt-2 w-36 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none z-50">
          {languages.map((lang) => (
            <DropdownMenu.Item key={lang.code}>
              {({ active }) => (
                <button
                  onClick={() => console.log(`Switch to: ${lang.code}`)}
                  className={`${
                    active ? "bg-blue-50" : ""
                  } text-sm text-gray-800 px-4 py-2 w-full text-left`}
                >
                  {lang.label}
                </button>
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Items>
      </Transition>
    </DropdownMenu>
  );
};
