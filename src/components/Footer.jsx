import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 lg:px-16 py-12">
      <div className="max-w-[1440px] mx-auto grid gap-10 lg:grid-cols-4 text-sm">
        {/* Bloc Logo + Description */}
        <div>
          <img src="/logo-icon.png" alt="Logo" className="h-10 mb-4" />
          <p className="text-gray-400 mb-4">
            Plateforme marocaine de soutien scolaire 100% en ligne.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Liens Navigation */}
        <div>
          <h4 className="text-base font-bold mb-4 tracking-wide">
            OpenAcademy
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/courses">Tous les cours</Link>
            </li>
            <li>
              <Link to="/register">Créer un compte</Link>
            </li>
            <li>
              <Link to="/login">Connexion</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-base font-bold mb-4 tracking-wide">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/faq">Centre d’aide</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/terms">Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-base md:text-lg font-bold mb-4 tracking-wide text-white">
            Recevoir les actus
          </h4>

          <p className="text-sm text-gray-400 mb-5 leading-relaxed">
            Inscrivez-vous à notre newsletter mensuelle{" "}
            <br className="hidden sm:block" />
            pour rester informé des nouveaux cours et quiz.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Inscription en attente de mise en place.");
            }}
            className="relative flex flex-col sm:flex-row items-stretch gap-3"
          >
            <div className="relative flex-1 group">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 transition-all duration-300 group-focus-within:scale-110 group-focus-within:text-blue-700" />
              <input
                type="email"
                placeholder="Entrez votre adresse e-mail"
                required
                className="w-full pl-10 pr-4 py-2.5 text-sm text-black bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 rounded-md text-sm shadow-sm transition"
            >
              S’inscrire
            </button>
          </form>

          {/* <p className="text-xs text-gray-500 mt-2">
            Aucun spam, promesse de scout ✌️
          </p> */}
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} OpenAcademy. Tous droits réservés.
      </div>
    </footer>
  );
};
