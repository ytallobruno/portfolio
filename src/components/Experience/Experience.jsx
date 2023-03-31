import React from "react";
import ExperienceCard from "./ExperienceCard";
import { getExperienceData } from "../../model/ExperienceData";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const experienceData = getExperienceData();

  return (
    <>
      <div
        id="experience"
        className="h-max bg-gradient-to-b from-slate-800 to-slate-600"
      >
        <section className="pt-10 pb-10">
          <h2 className="py-2 mx-6 pb-8 text-center text-5xl font-bold text-slate-100">
            Experiências profissionais & Estudos
          </h2>

          <VerticalTimeline className="max-lg:mx-auto">
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
