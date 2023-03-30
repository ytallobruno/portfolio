import React from "react";
import ExperienceCard from "./ExperienceCard";
import { getExperienceData } from "../../model/experienceData";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const experienceData = getExperienceData();

  return (
    <>
      <div
        id="experience"
        className="h-full bg-gradient-to-b from-slate-900 to-slate-500"
      >
        <section className="pt-14">
          <h2 className="py-2 pb-8 text-center text-5xl font-bold text-slate-100">
            Experiências profissionais
          </h2>

          <VerticalTimeline>
            {experienceData.map((experience, index) => {
              return (
                <ExperienceCard
                  key={index}
                  company={experience.company}
                  position={experience.position}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  description={experience.description}
                  tech={experience.tech}
                />
              );
            })}
          </VerticalTimeline>
        </section>
      </div>
    </>
  );
}
