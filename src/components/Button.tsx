import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  icon?: ReactNode;
}

const VARIANT_CLASSES: Record<string, string> = {
  primary:
    "bg-line text-base-deep hover:bg-line-soft border border-line font-semibold",
  secondary:
    "bg-transparent text-ink border border-surface-border hover:border-line/50 hover:text-white",
  ghost: "bg-transparent text-ink-dim hover:text-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  icon,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-150 ${VARIANT_CLASSES[variant]}`;

  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
