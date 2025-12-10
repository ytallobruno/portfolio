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
              className="group rounded-xl bg-[var(--bg-tertiary)] p-6 transition-all duration-300"
              style={{
                boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                border: "1px solid rgba(16, 185, 129, 0.1)",
              }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 transition-all duration-300 group-hover:from-primary-600 group-hover:to-secondary-600 group-hover:shadow-lg">
                  <div className="text-white transition-all duration-300">
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
                    <div className="bg-primary-400 mr-2 h-1.5 w-1.5 rounded-full"></div>
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
