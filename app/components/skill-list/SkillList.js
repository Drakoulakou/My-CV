const SkillList = ({ skills }) => (
  <section>
    <h3>Skills</h3>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default SkillList;
