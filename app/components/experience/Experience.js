const Experience = ({
  position,
  company,
  startDate,
  endDate,
  responsibilities,
}) => (
  <div>
    <h4>{position}</h4>
    <p>{company}</p>
    <p>
      {startDate} - {endDate}
    </p>
    <ul>
      {responsibilities.map((resp, index) => (
        <li key={index}>{resp}</li>
      ))}
    </ul>
  </div>
);

export default Experience;
