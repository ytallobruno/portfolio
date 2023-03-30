import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function ExperienceCard(props) {
  const { company, position, startDate, endDate, description, tech } = props;

  const lightGrey = "#E5E5E5";
  const lightTeal = "#99F6E4";
  const darkBlue = "#0F1729";
  const yellowColor = "#FFD700";
  const textColor = "#F5F5F5";
  const bgColor = "rgba(0,0,0,0.2)";

  return (
    <>
      <VerticalTimelineElement
        animate={true}
        className="vertical-timeline-element--work"
        contentStyle={{
          background: bgColor,
          color: textColor,
          boxShadow: `0px -4px ${lightGrey},3px 10px 15px -5px rgba(0,0,0,0.4)`,
        }}
        contentArrowStyle={{ borderRight: `18px solid ${bgColor}` }}
        iconStyle={{background: darkBlue, color: lightGrey }}
        icon={<MdOutlineWorkOutline />}
        date={[startDate, " - ", endDate]}
      >
        <h3 className="mb-2 text-xl font-bold">{position}</h3>
        <h4 className="vertical-timeline-element-subtitle text-gray-400">
          {company}
        </h4>
        <ul className="text-neutral-100">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="flex justify-center pb-2 align-bottom ">
          {tech.map((item, index) => (
            <div key={index} className="mx-2">
              <p key={index} className="rounded-full bg-gray-200 px-3 py-1 text-slate-900">
                {item}
              </p>
            </div>
          ))}
        </div>
      </VerticalTimelineElement>
    </>
  );
}
