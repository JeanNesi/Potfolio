"use client";

import { Atom } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function NavbarLogo() {
  return (
    <motion.div
      whileHover={{
        rotate: [0, 10, -10, 10, -10, 0],
        transition: { duration: 0.5 },
      }}
    >
      <Link href="/">
        <Atom name="menu" size={40} />
      </Link>
    </motion.div>
  );
}
