const experienceData = [
  {
    company: "Calindra Tech",
    position: "Desenvolvedor de software Trainee",
    startDate: "05/2022",
    endDate: "09/2022",
    description: [
      "- Programa de formação de 3 meses com 8 semanas de estudos intensivos em desenvolvimento de software, seguido de 6 semanas de rotação nos times da empresa para aplicar o conhecimento na prática.",
      "- Desenvolvimento e apresentação de um protótipo de produto em duas semanas utilizando as tecnologias aprendidas no programa.",
    ],
    tech: [
      "#Java",
      "#Spring",
      "#React",
      "#JavaScript",
    ]
  },
  {
    company: "Calindra Tech",
    position: "Desenvolvedor de software",
    startDate: "09/2022",
    endDate: "atual",
    description: [
      "- Atuo como desenvolvedor back-end na equipe responsável pelos projetos Pix e Open Finance na Ame Digital, utilizando tecnologias como Java, Spring Boot, programação reativa, WebFlux e testes unitários com JUnit.",
      "- Trabalho em equipe utilizando metodologias ágeis e ferramentas de versionamento de código",
    ],
    tech: [
      "#Java",
      "#Spring",
      "#Webflux",
      "#JUnit",
    ]
  },
];

export function getExperienceData() {
  return experienceData;
}