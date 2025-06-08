import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LanguageSelector } from "./LanguageSelector";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="w-full py-4 flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo-icon.png" alt="Logo" className="h-10 w-10" />
          <img src="/logo-text.png" alt="OpenAcademy" className="h-8" />
        </div>

        {/* Barre de recherche */}
        <div className="hidden lg:flex items-center relative w-[460px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Recherchez une matière, un exercice…"
            className="w-full border border-blue-700 rounded-lg py-2 pl-9 pr-4 text-sm placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/login"
            className="border border-blue-700 text-blue-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-50 shadow-sm transition"
          >
            Se connecter
          </Link>
          <Link
            to="/register"
            className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-800 shadow-md transition"
          >
            S’inscrire
          </Link>
          <LanguageSelector />
        </div>

        {/* Menu Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Drawer Mobile Animé */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md px-6 pt-4 pb-6 flex flex-col gap-3 overflow-hidden"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Recherchez une matière, un exercice…"
                className="w-full border border-blue-700 rounded-lg py-2 pl-9 pr-4 text-sm placeholder-gray-500 focus:outline-none"
              />
            </div>
            <Link
              to="/login"
              className="border border-blue-700 text-blue-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-50 shadow-sm transition"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-800 shadow-md transition"
            >
              S’inscrire
            </Link>
            <LanguageSelector />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
