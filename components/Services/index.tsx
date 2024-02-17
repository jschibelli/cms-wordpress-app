import React, { useEffect, useState } from "react";
import styles from "./services.module.scss";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

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
      <h3>Services</h3>
      {services.map((service) => (
        <div key={service.id}>
          <div className="my-20">
            <div className={styles.service}>
              <div class="row row-cols-1 row-cols-md-1 mb-3 text-center">
                <div class="col">
                  <div class="card mb-4 rounded-3 shadow-sm " className={styles.cardBody}>
                    <div class="card-header py-3">
                      <h4 class="my-0 fw-normal">{service.title.rendered}</h4>
                    </div>
                    <div class="card-body">
                      <h1 class="card-title pricing-card-title">
                        {service.acf?.pricing}
                        <small class="text-body-secondary fw-light">/mo</small>
                      </h1>
                      <div
                        class=" mt-3 mb-4"
                        dangerouslySetInnerHTML={{
                          __html: service.content.rendered || "",
                        }}
                      ></div>
                      <Button
                        radius="full"
                        variant="outline-secondary"
                        disableRipple
                        className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                        size="lg"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Services;








