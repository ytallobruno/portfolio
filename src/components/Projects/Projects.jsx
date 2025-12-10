import React from "react";
import { motion } from "framer-motion";
import { getProjects } from "../../model/projectsData";
import ProjectsButton from "../ProjectsButton/ProjectsButton.jsx";

export default function Projects() {
  const projects = getProjects();

  return (
    <article
      id="projects"
      className="min-h-max bg-[var(--bg-color)] py-20 pt-10"
    >
      <h2 className="mx-6 mb-10 py-2 pb-8 text-center text-4xl font-bold text-[var(--text-color)]">
        Projetos pessoais
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group flex flex-col overflow-hidden rounded-xl bg-[var(--bg-tertiary)] shadow-clean transition-all duration-300 hover:scale-105 hover:shadow-card-hover"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor:
                "color-mix(in srgb, var(--primary-color) 10%, transparent)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative mt-1 scale-95 overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className="mx-auto h-48 w-full transform object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
            <div className="flex flex-grow flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold text-[var(--text-color)]">
                {project.title}
              </h3>
              <p className="mb-4 text-[var(--text-secondary-color)]">
                {project.description}
              </p>
              <div className="mt-auto flex justify-center space-x-2">
                <ProjectsButton href={project.link} type="secondary">
                  Repositório
                </ProjectsButton>
                <ProjectsButton href={project.projectLink} type="primary">
                  Projeto
                </ProjectsButton>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </article>
  );
}
