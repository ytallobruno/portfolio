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
  const bgColor = "rgba(0,0,0,0.4)";

  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: bgColor,
          color: textColor,
          boxShadow: `0px -3px ${lightGrey}, 3px 10px 15px rgba(0,0,0,0.4)`,
        }}
        contentArrowStyle={{ borderRight: `14px solid ${bgColor}` }}
        iconStyle={{ background: darkBlue, color: lightGrey }}
        icon={<MdOutlineWorkOutline />}
        date={[startDate, " ~ ", endDate]}
      >
        <h3 className="mb-2 text-xl font-bold">{position}</h3>
        <h4 className="vertical-timeline-element-subtitle text-gray-400">
          {company}
        </h4>
        <ul className="text-neutral-100 ">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="grid grid-cols-4 gap-2 align-bottom max-lg:grid-cols-4 max-sm:grid-cols-2">
          {tech.map((item, index) => (
            <div key={index} className="mx-auto w-auto max-sm:w-max">
              <p
                key={index}
                className="rounded-full bg-slate-200 px-3 py-1 text-slate-900 transition duration-300 ease-in-out hover:bg-slate-500 hover:text-slate-100"
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </VerticalTimelineElement>
    </>
  );
}
