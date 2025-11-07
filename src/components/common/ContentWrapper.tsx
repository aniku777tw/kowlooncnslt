"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        ease: [0.4, 0, 0.2, 1],
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}

