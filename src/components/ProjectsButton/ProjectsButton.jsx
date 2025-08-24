import React from "react";

export default function ProjectsButton({ href, children, type = "secondary" }) {
  const buttonClass =
    type === "primary"
      ? "relative bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl overflow-hidden before:absolute before:inset-0 before:bg-black before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-300"
      : "bg-[var(--button-secondary)] text-[var(--button-text-default)] hover:bg-[var(--button-secondary-hover)] border border-neutral-200 dark:border-neutral-700";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block w-1/2 rounded-lg py-2.5 px-4 text-center font-medium transition-all duration-300 ${buttonClass}`}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
