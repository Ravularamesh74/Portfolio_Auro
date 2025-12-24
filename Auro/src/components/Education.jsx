import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const EducationCard = ({ Education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111522",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={Education.date}
      iconStyle={{ background: Education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={Education.icon}
            alt={Education.institution}
            className="object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#8eadff] text-[24px] font-bold">
          {Education.degree}
        </h3>
        <p
          className="text-white text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {Education.institution}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {Education.points.map((point, index) => (
          <li
            key={`Education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Educational Background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard
              key={`Education-${index}`}
              Education={edu}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
