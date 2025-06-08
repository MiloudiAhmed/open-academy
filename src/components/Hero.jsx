import { motion } from "framer-motion";
import Container from "./Container"; // adapte le chemin selon ta structure

export const Hero = () => {
  return (
    <section className="relative w-full bg-white py-16 z-10">
      <Container>
        <div className="w-full px-6 py-16 lg:px-16 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-16 shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-gray-200 rounded-xl">
          {/* Texte animé */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
              Quel que soit votre niveau,
              <br />
              <span className="text-blue-700">
                OpenAcademy s’adapte à vous.
              </span>
            </h1>
            <p className="text-lg font-semibold mt-4 text-gray-800">
              Commencez{" "}
              <span className="text-black font-bold">gratuitement !</span>
            </p>
          </motion.div>

          {/* Illustration animée */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/illustration-hero.jpg"
              alt="Illustration éducation"
              className="w-full max-w-md h-auto object-contain"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
