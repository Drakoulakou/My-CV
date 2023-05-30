const PersonalInfo = ({ name, title, address, phone, email, website }) => (
  <section>
    <h3>Personal Information</h3>
    <ul>
      <li>Address: {address}</li>
      <li>Phone: {phone}</li>
      <li>Email: {email}</li>
      <li>Website: {website}</li>
    </ul>
  </section>
);

export default PersonalInfo;
