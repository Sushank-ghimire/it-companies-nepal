"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

const links = [
  {
    label: "Companies",
    href: "/companies",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function NavLinks() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full p-1 md:flex"
      onMouseLeave={() => setHovered(null)}
    >
      {links.map((link) => {
        const isHovered = hovered === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHovered(link.href)}
            className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            {isHovered && (
              <motion.span
                layoutId="nav-hover"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.7,
                }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
