import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineServer,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { Link } from "react-scroll";
import { personalInfo } from "../data/portfolioData";

const navItems = [
  { id: "home",     label: "Home",     icon: <HiOutlineHome /> },
  { id: "projects", label: "Projects", icon: <HiOutlineBriefcase /> },
  { id: "skills",   label: "Skills",   icon: <HiOutlineUser /> },
  { id: "services", label: "Services", icon: <HiOutlineServer /> },
  { id: "contact",  label: "Contact",  icon: <HiOutlineEnvelope /> },
];

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers = [];

    // Track which sections are currently visible and how much
    const visibility = {};

    const pickMostVisible = () => {
      let best = ids[0];
      let bestRatio = -1;
      for (const id of ids) {
        if ((visibility[id] ?? 0) > bestRatio) {
          bestRatio = visibility[id];
          best = id;
        }
      }
      setActive(best);
    };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          visibility[id] = entry.intersectionRatio;
          pickMostVisible();
        },
        {
          // Use multiple thresholds for smooth tracking
          threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
          rootMargin: "0px 0px -20% 0px",
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((n) => n.id);

function Sidebar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  const socials = [
    { href: personalInfo.linkedin, icon: <FaLinkedinIn />, label: "LinkedIn" },
    { href: personalInfo.github,   icon: <FaGithub />,     label: "GitHub"   },
    { scrollTo: "contact",         icon: <FaEnvelope />,   label: "Contact"  },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg lg:hidden"
        aria-label="Toggle sidebar"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-[280px] overflow-y-auto px-6 py-8 text-white shadow-2xl transition-transform duration-300 sm:w-[300px] lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
        style={{
          background: "linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
          borderRight: "1px solid rgba(148,163,184,0.08)",
        }}
      >
        {/* Profile */}
        <div className="text-center">
          {/* Avatar with glow ring */}
          <div className="relative mx-auto h-28 w-28">
            <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-xl" />
            <img
              src="/profile.jpg"
              alt="profile"
              className="relative h-full w-full rounded-full object-cover ring-2 ring-sky-500/50 ring-offset-2 ring-offset-slate-900 transition duration-300 hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="relative hidden h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-slate-700 text-3xl font-bold"
              style={{ display: "none" }}
            >
              MM
            </div>
          </div>

          <h1 className="mt-4 text-xl font-bold tracking-wide">
            Mokabbir Miso
          </h1>
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-sky-400">
            Full-Stack Developer
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {socials.map(({ href, scrollTo, icon, label }) =>
              scrollTo ? (
                <Link
                  key={label}
                  to={scrollTo}
                  smooth={true}
                  duration={400}
                  offset={-50}
                  aria-label={label}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 transition hover:bg-sky-500 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {icon}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 transition hover:bg-sky-500 hover:text-white"
                >
                  {icon}
                </a>
              )
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={400}
                offset={-50}
                className={`group flex cursor-pointer items-center gap-3.5 rounded-xl px-4 py-2.5 transition-all duration-200
                  ${
                    isActive
                      ? "bg-sky-500/15 text-sky-400 shadow-[inset_3px_0_0_#38bdf8]"
                      : "text-slate-200 hover:bg-slate-700/50 hover:text-white"
                  }`}
                onClick={() => setOpen(false)}
              >
                <span className={`text-[19px] transition-transform duration-200 ${isActive ? "" : "group-hover:scale-110"}`}>
                  {item.icon}
                </span>
                <span className="text-[15px] font-medium">{item.label}</span>
                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400" />
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
