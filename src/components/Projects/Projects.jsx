import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Gasosa Justa",
    description: "A brief description of Project 1",
    image: "../../../public/images/placeholder.jpg",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "../../../public/images/placeholder.jpg",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "../../../public/images/placeholder.jpg",
    link: "#",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <article
      id="projects"
      className="min-h-max bg-[var(--bg-color)] bg-gradient-to-b py-20 pt-10"
    >
      <h2 className="mx-6 mb-10 py-2 pb-8 text-center text-4xl font-bold text-[var(--text-color)]">
        Projetos pessoais
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg bg-[var(--bg-tertiary)] shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative mt-1 scale-95 overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.title}
                className="mx-auto h-48 w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-[var(--text-color)]">
                {project.title}
              </h3>
              <p className="mb-4 text-[var(--text-secondary-color)]">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block rounded border border-[var(--transparency-color)] bg-[var(--bg-secondary)] py-2 px-4 text-[var(--text-secondary-color)] transition-colors duration-200 hover:bg-[var(--bg-primary)] hover:text-[var(--text-color)]"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </article>
  );
}
