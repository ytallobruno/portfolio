import React from "react";
import ExperienceCard from "./ExperienceCard";
import { getExperienceData } from "../../model/experienceData";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const experienceData = getExperienceData();

  return (
    <div
      id="experience"
      className="h-max bg-[var(--bg-color)] bg-gradient-to-b"
    >
      <section className="pt-10 pb-10">
        <h2 className="mx-6 py-2 pb-8 text-center text-4xl font-bold text-[var(--text-color)]">
          Experiências profissionais & Estudos
        </h2>

        <VerticalTimeline className="max-lg:mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              company={experience.company}
              position={experience.position}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              tech={experience.tech}
            />
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
}
