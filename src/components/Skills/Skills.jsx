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

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      name: "Tecnologias de programação",
      skills: [
        "Java 17",
        "Spring Boot",
        "API",
        "REST",
        "Reactive Programming",
        "Webflux",
        "OOP",
        "Quarkus",
        "Unit Testing",
        "JUnit",
        "Mockito",
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      name: "Desenvolvimento web",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Bootstrap",
        "Tailwind",
        "Material UI",
        "Chakra UI",
      ],
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      name: "Nuvem & Monitoramento",
      skills: [
        "AWS",
        "SQS",
        "CloudWatch",
        "CodeBuild",
        "CodePipeline",
        "Secrets Manager",
        "IAM",
        "RDS",
        "ECS",
        "ECR",
        "Kibana",
        "DataDog",
      ],
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: "Bancos de dados",
      skills: ["MySQL", "SQL", "MongoDB", "Hibernate", "DynamoDB"],
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      name: "Controle de versão",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Gitflow"],
    },
    {
      icon: <Webhook className="h-8 w-8" />,
      name: "Gerenciamento de API's",
      skills: ["Gravitee"],
    },
    {
      icon: <Box className="h-8 w-8" />,
      name: "Infraestrutura & CI/CD",
      skills: ["Docker", "Terraform"],
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      name: "Trabalho & Gestão de projeto",
      skills: ["Scrum", "Kanban", "Jira", "Confluence", "Code Review"],
    },
  ];

  return (
    <article
      id="skills"
      className="bg-[var(--bg-color)] bg-gradient-to-b py-20 px-4"
    >
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
              className="rounded-lg bg-[var(--bg-tertiary)] p-6 shadow-md"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary-color)]">
                  <div className="text-[var(--primary-color)]">
                    {category.icon}
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
