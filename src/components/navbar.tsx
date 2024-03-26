import React from "react";

export function Navbar({ children }: { children?: React.ReactNode }) {
  return <div className="w-full px-8 flex gap-4 py-4">{children}</div>;
}

export function NavItem({ label, to }: { label: string; to: string }) {
  return (
    <a href={to} className="font-semibold">
      {label}
    </a>
  );
}
