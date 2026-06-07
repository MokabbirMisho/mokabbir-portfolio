import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 text-white"
    >
      {/* Background Photo */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.1),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-400"
          >
            Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-text-shadow text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
          >
            Mokabbir Miso
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-text-shadow mt-5 text-2xl font-medium text-white sm:text-3xl"
          >
            I&apos;m a{" "}
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-sky-400"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-100"
          >
            I&apos;m a passionate Full-Stack Developer based in{" "}
            <span className="font-semibold text-white">Dortmund, Germany</span>,
            I turn ideas into fast, clean, and production-ready web applications
            — from pixel-perfect frontends to robust REST APIs. Whether
            it&apos;s a startup MVP or a complex dashboard, I bring both
            technical depth and an eye for great user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer rounded-full bg-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-1 hover:bg-sky-600"
            >
              View Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="h-2 w-1 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
