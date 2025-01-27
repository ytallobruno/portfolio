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
              className="rounded-lg bg-[var(--bg-tertiary)] p-6"
              style={{
                boxShadow: `0px -3px var(--secondary-color), 3px 5px 10px -3px rgba(0,0,0,0.2)`,
              }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary-color)]">
                  <div className="text-blue-100">
                    {iconComponents[category.icon]}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-color)]">
                  {category.name}
                </h3>
              </div>
              <ul className="list-inside list-disc">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="mb-1 text-sm text-[var(--text-color)] opacity-70"
                  >
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
