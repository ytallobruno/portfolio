const experienceData = [
  {
    company: "Calindra Tech",
    position: "Software Developer II",
    startDate: "09/2024",
    endDate: "atual",
    description: [
      "- Participação em projeto internacional (stakkd.tech), contribuindo para o desenvolvimento de soluções inovadoras.",
      "- Desenvolvimento full stack com Express, TypeScript, TSOA, React, Next.js, Tailwind, Axios, e AWS (RDS, S3, Security groups).",
      "- Implementação de testes automatizados com Jest e Cypress para garantir a robustez e a confiabilidade das aplicações.",
    ],
    tech: [
      "Express",
      "TypeScript",
      "TSOA",
      "React",
      "Next.js",
      "Tailwind",
      "Axios",
      "AWS",
      "Git",
      "Kanban"
    ],
  },

  {
    company: "Calindra Tech",
    position: "Software Developer I",
    startDate: "01/2023",
    endDate: "09/2024",
    description: [
      "- Desenvolvimento de soluções back-end em projetos críticos como Pix e Open Finance na Ame Digital, utilizando Java 17 e Spring Boot.",
      "- Aplicação de princípios de programação reativa com WebFlux e desenvolvimento de testes unitários com JUnit e Mockito.",
      "- Integração e manutenção de serviços em nuvem com AWS (SQS, CloudWatch, CodeBuild, CodePipeline) e monitoramento de performance com DataDog e Kibana.",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "WebFlux",
      "JUnit",
      "Mockito",
      "AWS",
      "DataDog",
      "Git",
      "Scrum",
      "Kanban",
    ],
  },
  {
    company: "Calindra Tech",
    position: "Software Developer Trainee",
    startDate: "05/2022",
    endDate: "01/2023",
    description: [
      "- Participação em uma formação intensiva de desenvolvimento de software, combinando teoria e prática para aprimorar habilidades técnicas e resolver desafios reais.",
      "- Estudo intensivo de oito semanas focado em lógica de programação, estrutura de dados e orientação a objetos, seguido de um estágio rotativo de seis semanas.",
      "- Desenvolvimento e apresentação de um protótipo de produto em duas semanas utilizando React.js e Spring Framework, além de execução de testes estruturais e funcionais.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React.js",
      "SQL",
      "Scrum",
      "Git",
    ],
  },
  {
    company: "Resilia Educação",
    position: "Estudante WebDev Full Stack",
    startDate: "12/2021",
    endDate: "06/2022",
    description: [
      "- Formação intensiva de mais de 440 horas focadas em Desenvolvimento Web Full Stack e Soft Skills, além de contato com profissionais da área através da mentoria mensal.",
    ],
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "Git",
      "Node",
      "React",
      "Scrum",
      "Kanban",
    ],
  },
];

export function getExperienceData() {
  return experienceData;
}
