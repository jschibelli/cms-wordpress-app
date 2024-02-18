import React, { useEffect, useState } from "react";
import styles from "./maintanence.module.scss";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

const Maintanence: React.FC = () => {
  const [maintanence, setMaintanence] = useState([]);

  useEffect(() => {
    // Replace '123' with the actual ID of your "Maintenance" category
    const maintenanceCategoryId = 91;
    fetch(
      `https://schibelli.com/wp-json/wp/v2/service?categories=${maintenanceCategoryId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMaintanence(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.maintanence}>
      {maintanence.map((service) => (
        <div key={service.id}>
          <div className="my-20">
            <div>
              <div className="row row-cols-1 row-cols-md-1 mb-3 text-center">
                <div className="col">
                  <div
                    className="card mb-4 rounded-3 shadow-sm"
                    className={styles.cardBody}
                  >
                    <div className="card-header py-3">
                      <h4 className="my-0 fw-normal">
                        {service.title.rendered}
                      </h4>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        {service.acf?.pricing}
                        <small className="text-muted fw-light">/mo</small>
                      </h1>
                      <div
                        className="mt-3 mb-4"
                        dangerouslySetInnerHTML={{
                          __html: service.content.rendered || "",
                        }}
                      ></div>
                      <Button variant="outline-secondary" size="lg">
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
export default Maintanence;
