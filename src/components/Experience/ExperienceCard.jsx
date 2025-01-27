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
        boxShadow: `0px -3px var(--secondary-color), 3px 5px 10px -3px rgba(0,0,0,0.2)`,
      }}
      contentArrowStyle={{ borderRight: `10px solid var(--bg-tertiary)` }}
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

      <div className="flex flex-wrap gap-2 mt-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="inline-block rounded-full border border-[var(--transparency-color)] bg-[var(--primary-color)] px-3 py-1 text-center text-blue-50"
            title={item}
          >
            {item}
          </span>
        ))}
      </div>
    </VerticalTimelineElement>
  );
}
