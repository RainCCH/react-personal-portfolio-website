import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Pui Ching Middle School, Macau
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Tsinghua University, Beijing, China
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>Automation Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shanghai Artificial Intelligence Laboratory, Beijing, China
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Research Intern
          </h4>
          <p>Completed the debugging of Temporal Action Localization part of INTERN 2.0.</p>
          <a href="https://github.com/OpenGVLab/InternVideo/tree/main/InternVideo1/Downstream/Temporal-Action-Localization" 
            style={{ textDecoration: "underline", color: "#007bff" }} // This line applies the underscore and color styling
            target="_blank" 
            rel="noopener noreferrer">
            GitHub Link
          </a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Waterloo, Waterloo, Canada
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h4>
          <p>
            Electrical and Computer Engineering
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
