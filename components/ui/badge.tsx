import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

const variantClasses: Record<string, string> = {
  default: "bg-slate-900 text-white",
  secondary: "bg-slate-100 text-slate-800",
  outline: "border border-slate-200 text-slate-700",
};

export function Badge({ className, variant = "secondary", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
