import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function ExperienceCard(props) {
  const { company, position, startDate, endDate, description, tech } = props;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "var(--bg-tertiary)",
        color: "var(--text-color)",
        boxShadow: `0px -3px var(--secondary-color), 3px 10px 15px rgba(0,0,0,0.2)`,
      }}
      contentArrowStyle={{ borderRight: `14px solid var(--bg-tertiary)` }}
      iconStyle={{
        background: "var(--bg-tertiary)",
        color: "var(--secondary-color)",
      }}
      icon={<MdOutlineWorkOutline />}
      date={[startDate, " ~ ", endDate]}
    >
      <h3 className="mb-2 text-xl font-bold text-[var(--text-color)]">
        {position}
      </h3>
      <h4 className="vertical-timeline-element-subtitle text-[var(--text-tertiary-color)]">
        {company}
      </h4>
      <ul className="text-[var(--text-secondary-color)]">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="grid grid-cols-4 gap-2 align-bottom max-lg:grid-cols-4 max-sm:grid-cols-2">
        {tech.map((item, index) => (
          <div
            key={index}
            className="mx-auto w-auto cursor-pointer max-sm:w-max"
          >
            <p
              key={index}
              className="rounded-md border border-[var(--transparency-color)] bg-[var(--bg-secondary)] px-3 py-1 text-[var(--text-secondary-color)] transition duration-300 ease-in-out hover:bg-[var(--bg-primary)] hover:text-[var(--text-color)]"
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
}
