import React, { useEffect, useState } from "react";

const Employers = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    fetch("https://schibelli.com/wp-json/wp/v2/employer")
      .then((response) => response.json())
      .then((data) => {
        setEmployers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {employers.map((employer) => (
        <div key={employer.id}>
          <h4>{employer.acf.position}</h4>
          {/* Assuming 'employer' is an object with a 'name' field */}
          <p>{employer.title.rendered} - {employer.acf.location}</p>
          <p>{employer.acf.start_date} - {employer.acf.end_date}</p>
          <p>{employer.acf.job_description}</p>
        </div>
      ))}
    </div>
  );
};

export default Employers;
