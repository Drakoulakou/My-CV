import React from "react";
import "./CV.css";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import SkillList from "./components/skill-list/SkillList";

const CV = () => {
  const personalInfo = {
    name: "Eleftheria Drakoulakou",
    title: "Frontend Developer",
    address: "Agiou Nikolaou 5, Alimos Greece",
    phone: "6978524096",
    email: "drakelef@gmail.com",
    website: "https://github.com/Drakoulakou",
  };

  const education = [
    {
      degree: "Degree Name",
      school: "School Name",
      year: "Year",
    },
    // Add more education entries if needed
  ];

  const experience = [
    {
      position: "Position",
      company: "Company Name",
      startDate: "Start Date",
      endDate: "End Date",
      responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        // Add more responsibilities if needed
      ],
    },
    // Add more experience entries if needed
  ];

  const skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"];

  return (
    <div>
      <header>
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
      </header>

      <PersonalInfo {...personalInfo} />

      <section>
        <h3>Education</h3>
        {education.map((edu, index) => (
          <Education key={index} {...edu} />
        ))}
      </section>

      <section>
        <h3>Experience</h3>
        {experience.map((exp, index) => (
          <Experience key={index} {...exp} />
        ))}
      </section>

      <SkillList skills={skills} />
    </div>
  );
};

export default CV;
