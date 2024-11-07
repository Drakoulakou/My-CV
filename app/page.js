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
    address: "Alimos, Greece",
    phone: "6978524096",
    email: "drakelef@gmail.com",
    website: "https://github.com/Drakoulakou",
  };

  const education = [
    {
      degree: "Udemy The Complete 2022 Web Development Bootcamp",
      school:
        "HTML5, CSS3, Bootstrap, JavaScript(ES6), ReactJS, DOM, jQuery,git, Design",
      year: "2021-2022",
    },
    {
      degree: "Professional Licence - Pharmacy Assistant",
      year: "2017",
    },
    {
      degree: "Professional School - Pharmacy Assistant",
      year: "2012-2014",
    },
    {
      degree:
        "Vocational Training Institute Preschool management of creation and expression activities",
      year: "2008-2011",
    },
    {
      degree: "3rd Athletic High School of Argyroupoli",
      year: "2008",
    },
    // Add more education entries if needed
  ];

  const experience = [
    {
      position: "Frontend developer",
      company: "Kotsovolos | Frontend Developer",
      startDate: "October 2022",
      endDate: "November 2024",
      responsibilities: [
        "JavaScript, React, Redux, Redux Observable, RxJS, Azure,Material UI, CSS3, Git and debugging",
        "Projects: kotsovolos.gr (React), K-Retail (React)",
        "Development of enterprise scale retail software project controlling 95+ physical and online stores with complex event-driven functionality over hundreds of code modules.",
        "Fast paced environment in a team of 50+ internal and external developers",
        "Agile work culture (Scrum)",
        "Induction of new developers on the company's projects",
      ],
    },
    {
      position: "Junior Frontent developer",
      company: "Evalest",
      startDate: "August 2021",
      endDate: "September 2022",
      responsibilities: [
        "JavaScript, React, HTML5, CSS3, Sass, Bootstrap, JavaScript (ES6+), JQuery, Git and debugging",
        "Projects: Nesea Sifnos (WordPress), Circel (React), Insurance aggregator platform (React)",
        "WordPress website development",
        "Introduced to modern programming and front end development",
      ],
    },
    {
      position: "Pharmacy assistant",
      company: "Pharmacy",
      startDate: "October 2008",
      endDate: "April 2022",
      responsibilities: [
        "Responsible for all software systems (e-shop, servers, CRM)",
        "Customer service in the pharmaceutical and parapharmaceutical departments",
        "Daily solving customers and patients problems",
        "Sales and promotion of beauty products",
      ],
    },
  ];

  const skills = [
    "Javascript (ES6+)",
    "NextJS",
    "React",
    "Redux,",
    "RXJS",
    "Redux Observable",
    "HTML 5, CSS 3, Material UI,Bootstrap",
    "Azure Devops, Vercel",
    "Figma, Git, Wordpress",
    "Agile Methodology (Scrum)",
  ];

  return (
    <div>
      <header>
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
      </header>

      <PersonalInfo {...personalInfo} />

      <section>
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <Experience key={index} {...exp} />
        ))}
      </section>

      <SkillList skills={skills} />
      <section>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <Education key={index} {...edu} />
        ))}
      </section>
    </div>
  );
};

export default CV;
