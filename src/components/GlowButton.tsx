import { Link } from "react-router";
import { motion } from "motion/react";

interface GlowButtonProps {
  to?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function GlowButton({ to, children, variant = "primary", className = "", onClick }: GlowButtonProps) {
  const buttonClasses =
    variant === "primary"
      ? "bg-[#00d4d4] text-[#0f1729] hover:bg-[#33dddd] hover:shadow-[0_0_20px_rgba(0,212,212,0.6)]"
      : "bg-transparent border-2 border-[#00d4d4] text-[#00d4d4] hover:bg-[#00d4d4]/10 hover:shadow-[0_0_20px_rgba(0,212,212,0.4)]";

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${buttonClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return content;
}
