import React from "react";
import styles from "./about.module.scss";
import Footer from "../footer";
import Container from "../container";
import Layout from "../layout";
import Button from "react-bootstrap/Button";
import Testimonials from "../Testimonials/testimonials";
import Employers from "../Employer";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div className={styles.resume}>
          <div className="max-w-7xl mx-auto">
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold text-body-emphasis">
                John Schibelli
              </h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Full-Stack Engineer / Ai Specialist</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Button variant="outline-primary">Download Resume</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Employers />
        <Testimonials />
      </Container>
    </Layout>
  );
};

export default AboutPage;
