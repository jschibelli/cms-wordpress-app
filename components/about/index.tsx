import React from 'react';
import styles from './about.module.scss';
import Footer from "../footer";
import Container from '../container';
import Layout from '../layout';
import Button from "react-bootstrap/Button";
import { TabItem } from 'keep-react/lib/esm/components/Tabs/TabItem';




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
          <div className={styles.container}>
            <h4>Experience</h4>
            <div className="employer my-20">
              <ul className={styles.timeline}>
                <li className={styles.resumeList}>
                  <span className={styles.lineLeft}></span>
                  <div className={styles.year}>
                    <span className={styles.to}>Present</span>
                    <span className={styles.from}>November 2020</span>
                  </div>
                  <div className={styles.content}>
                    <h4 className={styles.title}>Full-Stack Engineer</h4>
                    <h5 className={styles.subtitle}>
                      IntraWeb Technologies - Montville, New Jersey
                    </h5>
                    <div className={styles.info}>
                      <p>
                        Responsible for the development of all web applications,
                        including the company's flagship product, IntraWeb
                        Suite. Worked with the company's CEO to develop the
                        product's roadmap and feature set. Developed and
                        maintained the company's website and all marketing
                        materials. Managed the company's social media presence
                        and advertising campaigns. Provided technical support to
                        clients and managed the company's hosting environment.
                        Developed and maintained the company's internal network
                        and IT infrastructure.
                      </p>
                      <ul className={styles.ul}>
                        <li className={styles.resume_list_item}>
                          Proven expertise in developing and maintaining dynamic
                          content management systems such as WordPress. This
                          includes utilizing a comprehensive tech stack
                          comprising HTML, CSS, PHP, SASS, JavaScript, and
                          React.js.
                        </li>
                        <li className={styles.resume_list_item}>
                          Actively collaborated on various e-commerce projects,
                          leveraging my skills in React.js to implement
                          sophisticated features such as interactive UI
                          components. This involvement significantly
                          contributed to refining user experiences and
                          integrating complex functionalities in a seamless
                          manner.
                        </li>
                        <li className={styles.resume_list_item}>
                          In-depth experience creating and updating reusable code libraries, with a focus on streamlining development lifecycles.
                          </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="employer my-20">
              <ul className={styles.timeline}>
                <li className={styles.resumeList}>
                  <span className={styles.lineLeft}></span>
                  <div className={styles.year}>
                    <span className={styles.to}>November 2020</span>
                    <span className={styles.from}>April 2016</span>
                  </div>
                  <div className={styles.content}>
                    <h4 className={styles.title}>Full-Stack Engineer</h4>
                    <h5 className={styles.subtitle}>
                      Executive Five Star - Montville, New Jersey
                    </h5>
                    <div className={styles.info}>
                      <p>
                        Responsible for the development of all web applications,
                        including the company's flagship product, IntraWeb
                        Suite. Worked with the company's CEO to develop the
                        product's roadmap and feature set. Developed and
                        maintained the company's website and all marketing
                        materials. Managed the company's social media presence
                        and advertising campaigns. Provided technical support to
                        clients and managed the company's hosting environment.
                        Developed and maintained the company's internal network
                        and IT infrastructure.
                      </p>
                      <ul className={styles.ul}>
                        <li className={styles.resume_list_item}>
                          Proven expertise in developing and maintaining dynamic
                          content management systems such as WordPress. This
                          includes utilizing a comprehensive tech stack
                          comprising HTML, CSS, PHP, SASS, JavaScript, and
                          React.js.
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="employer my-20">
              <ul className={styles.timeline}>
                <li className={styles.resumeList}>
                  <span className={styles.lineLeft}></span>
                  <div className={styles.year}>
                    <span className={styles.to}>Present</span>
                    <span className={styles.from}>November 2020</span>
                  </div>
                  <div className={styles.content}>
                    <h4 className={styles.title}>Full-Stack Engineer</h4>
                    <h5 className={styles.subtitle}>
                      IntraWeb Technologies - Montville, New Jersey
                    </h5>
                    <div className={styles.info}>
                      <p>
                        Responsible for the development of all web applications,
                        including the company's flagship product, IntraWeb
                        Suite. Worked with the company's CEO to develop the
                        product's roadmap and feature set. Developed and
                        maintained the company's website and all marketing
                        materials. Managed the company's social media presence
                        and advertising campaigns. Provided technical support to
                        clients and managed the company's hosting environment.
                        Developed and maintained the company's internal network
                        and IT infrastructure.
                      </p>
                      <ul className={styles.ul}>
                        <li className={styles.resume_list_item}>
                          Proven expertise in developing and maintaining dynamic
                          content management systems such as WordPress. This
                          includes utilizing a comprehensive tech stack
                          comprising HTML, CSS, PHP, SASS, JavaScript, and
                          React.js.
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container >
      </Layout >
  );
};

export default AboutPage;
