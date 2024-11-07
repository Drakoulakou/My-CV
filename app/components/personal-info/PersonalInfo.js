const PersonalInfo = ({ name, title, address, phone, email, website }) => (
  <section>
    <h2>Personal Information</h2>
    <ul>
      <li>🏠 Address: {address}</li>
      <li>📞 Phone: {phone}</li>
      <li>💌 Email: {email}</li>
      <li>🌐 Website: {website}</li>
    </ul>
  </section>
);

export default PersonalInfo;
