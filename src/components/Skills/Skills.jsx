import React from "react";
import {
  Code,
  Database,
  Cloud,
  Webhook,
  Box,
  GitBranch,
  Globe,
  Briefcase,
} from "lucide-react";
import { getSkillCategories } from "../../model/skillData";

export default function Skills() {
  const skillCategories = getSkillCategories();

  const iconComponents = {
    Code: <Code className="h-8 w-8" />,
    Database: <Database className="h-8 w-8" />,
    Cloud: <Cloud className="h-8 w-8" />,
    Webhook: <Webhook className="h-8 w-8" />,
    Box: <Box className="h-8 w-8" />,
    GitBranch: <GitBranch className="h-8 w-8" />,
    Globe: <Globe className="h-8 w-8" />,
    Briefcase: <Briefcase className="h-8 w-8" />,
  };

  return (
    <article id="skills" className="bg-[var(--bg-color)] py-20 px-4">
      <section className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-5xl font-bold text-[var(--text-color)]">
          Habilidades técnicas e metodologias
        </h2>
        <p className="mb-12 text-center text-xl text-[var(--text-secondary-color)]">
          Aqui estão algumas tecnologias e metodologias nas quais sou
          proficiente.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group rounded-xl border border-neutral-300 bg-[var(--bg-tertiary)] p-6 shadow-md transition-all duration-300 hover:border-primary-400 dark:border-neutral-700 dark:shadow-gray-800/50 dark:hover:border-primary-900"
            >
              <div className="mb-4 flex items-center">
                <div className="relative mr-4 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary-400 to-secondary-600">
                  <div className="mouse-pointer absolute inset-0 rounded-full bg-gradient-to-br from-primary-600 to-secondary-400 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
                  <div className="absolute inset-0 rounded-full opacity-0 shadow-lg transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
                  <div className="relative z-10 text-white">
                    {iconComponents[category.icon]}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-color)]">
                  {category.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-sm text-[var(--text-secondary-color)]"
                  >
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary-400"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
