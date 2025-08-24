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
        boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
        border: "1px solid rgba(99, 102, 241, 0.2)",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: `10px solid transparent` }}
      iconStyle={{
        background:
          "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
        color: "white",
        boxShadow: "0 4px 6px -1px rgba(99, 102, 241, 0.5)",
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

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="inline-block cursor-default rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-3 py-1 text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            title={item}
          >
            {item}
          </span>
        ))}
      </div>
    </VerticalTimelineElement>
  );
}
