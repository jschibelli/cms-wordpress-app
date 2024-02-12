import React, { useEffect, useState } from "react";
import styles from "./services.module.scss";



const Services: React.FC = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://schibelli.com/wp-json/wp/v2/service")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (

    <div className={styles.services}>
      {services.map((service) => (
        <div key={service.id}>
          <div className="service my-20">
            <div className={styles.content}>
              <h4 className={styles.title}>{service.title.rendered}</h4>
              <ul>
                <li>{service.acf?.description}</li>
                <li>{service.acf?.technology_stack}</li>
                <li>{service.acf?.pricing}</li>
              </ul>
            </div>
          </div>
        </div>

      ))}
    </div>

  );
};
export default Services;