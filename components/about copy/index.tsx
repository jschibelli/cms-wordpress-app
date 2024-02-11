import React from 'react';
import styles from './about.module.scss';
import Footer from "../footer";
import Container from '../container';
import Layout from '../layout';
import Button from "react-bootstrap/Button";
import Testimonials from '../Testimonials/testimonials';





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

                        <ul className={styles.ul}>
                          <li className={styles.resume_list_item}>
                            Proven expertise in developing and maintaining
                            dynamic content management systems such as
                            WordPress. This includes utilizing a comprehensive
                            tech stack comprising HTML, CSS, PHP, SASS,
                            JavaScript, and React.js.
                          </li>
                          <li className={styles.resume_list_item}>
                            Actively collaborated on various e-commerce
                            projects, leveraging my skills in React.js to
                            implement sophisticated features such as interactive
                            UI components. This involvement significantly
                            contributed to refining user experiences and
                            integrating complex functionalities in a seamless
                            manner.
                          </li>
                          <li className={styles.resume_list_item}>
                            In-depth experience creating and updating reusable
                            code libraries, with a focus on streamlining
                            development lifecycles.
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
                        <ul className={styles.ul}>
                          <li className={styles.resume_list_item}>
                            Developed company website using WordPress REST API
                            as a headless CMS that would allow for custom
                            integration of online booking and reservations into
                            the reservations back-office and dispatch.
                          </li>
                          <li className={styles.resume_list_item}>
                            Designed and developed a custom fleet management
                            plug-in with an Admin dashboard using HTML, CSS PHP,
                            and JavaScript.
                          </li>
                          <li className={styles.resume_list_item}>
                            Assisted in wireframe concepts and produced HTML and
                            CSS design mockups and prototypes to strengthen
                            designs, enhance user experiences and improve site
                            interactions to create a seamless user journey.
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
                      <span className={styles.to}>April 2016</span>
                      <span className={styles.from}>March 2013</span>
                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.title}>Sr. Front-End Developer</h4>
                      <h5 className={styles.subtitle}>
                        Robert Half - Parsippany, New Jersey
                      </h5>
                      <div className={styles.info}>
                        <ul className={styles.ul}>
                          <li className={styles.resume_list_item}>
                            Coordinated within a team of 10 internal developers
                            including developers overseas to create a financial
                            web application in an agile scrum development
                            lifecycle utilizing HTML, Sass, JavaScript, and
                            AngularJS.
                          </li>
                          <li className={styles.resume_list_item}>
                            Developed iOS sales aids using HTML, CSS, and
                            JavaScript within the Veeva framework.
                          </li>
                          <li className={styles.resume_list_item}>
                            Collaborated with the UX team to create wireframes
                            and prototypes to enhance the user experience.
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
                      <span className={styles.to}>February 2013</span>
                      <span className={styles.from}>July 2009</span>
                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.title}>Front-End Developer</h4>
                      <h5 className={styles.subtitle}>
                        Level Nine - Merritt Island, Florida
                      </h5>
                      <div className={styles.info}>
                        <ul className={styles.ul}>
                          <li className={styles.resume_list_item}>
                            Developed and maintained content management systems
                            such as WordPress, including installation,
                            configuration, troubleshooting, bug fixes, and other
                            updates and upgrades to ensure the system remains
                            secure and reliable.
                          </li>
                          <li className={styles.resume_list_item}>
                            Developed comprehensive client website projects
                            utilizing HTML, CSS, and JavaScript to create
                            dynamic, user-friendly websites.
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
                      <span className={styles.to}>July 2009</span>
                      <span className={styles.from}>January 2005</span>
                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.title}>Program Director</h4>
                      <h5 className={styles.subtitle}>
                        Anthem Institute - Pasrsippany, New Jersey
                      </h5>
                      <div className={styles.info}>
                        <ul className={styles.ul}>
                          <li className={styles.resume_list_item}>
                            Instructed classes of dedicated subjects of HTML,
                            CSS, PHP, JavaScript, and MySQL to technical
                            post-secondary adult learners
                          </li>
                          <li className={styles.resume_list_item}>
                            Facilitated partnerships with outside organizations
                            including PearsonVUE for trade certification exams
                            for both faculty and students.
                          </li>
                          <li className={styles.resume_list_item}>
                            Oversaw campus compliance with Federal institutions
                            and accrediting agencies, including ACCSCT that was
                            required to allow financial aid to students.
                          </li>
                          <li className={styles.resume_list_item}>
                            Managed multiple teams of eight web development
                            instructors across four campuses in the New Jersey
                            Tri-State area.
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
        <Testimonials />
      </Container>
    </Layout>
  );
};

export default AboutPage;
