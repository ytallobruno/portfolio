const skillCategories = [
  {
    icon: "Code",
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
    icon: "Globe",
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
    icon: "Cloud",
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
    icon: "Database",
    name: "Bancos de dados",
    skills: ["MySQL", "SQL", "MongoDB", "Hibernate", "DynamoDB"],
  },
  {
    icon: "GitBranch",
    name: "Controle de versão",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Gitflow"],
  },
  {
    icon: "Webhook",
    name: "Gerenciamento de API's",
    skills: ["Gravitee"],
  },
  {
    icon: "Box",
    name: "Infraestrutura & CI/CD",
    skills: ["Docker", "Terraform"],
  },
  {
    icon: "Briefcase",
    name: "Trabalho & Gestão de projeto",
    skills: ["Scrum", "Kanban", "Jira", "Confluence", "Code Review"],
  },
];

export function getSkillCategories() {
  return skillCategories;
}