import React from "react";

export default function ProjectsButton({ href, children, type = "secondary" }) {
  const buttonClass =
    type === "primary"
      ? "bg-[var(--button-primary-color)] text-blue-50 hover:bg-[var(--button-primary-hover)]"
      : "bg-[var(--button-secondary)] text-[var(--button-text-default)] hover:bg-[var(--button-secondary-hover)]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block w-1/2 rounded border border-[var(--transparency-color)] py-2 px-4 text-center transition-colors duration-300 ${buttonClass}`}
    >
      {children}
    </a>
  );
}
