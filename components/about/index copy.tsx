import React from 'react';
import styles from './about.module.scss';
import Footer from "../footer";
import Container from '../container';
import Layout from '../layout';
import Button from "react-bootstrap/Button";




const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div className="max-w-5xl mx-auto">
          <div class="px-4 py-5 my-5 text-center">
            <h1 class="display-5 fw-bold text-body-emphasis">John Schibelli</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">Full-Stack Engineer / Ai Specialist</p>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Button variant="outline-primary">Download Resume</Button>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <h4>Experience</h4>
            <div className="employer">
              <h5>IntraWeb Technologies</h5>
              <p>Full-Stack Developer &amp; Digital Architect</p>
              <p>November 2020 - Present</p>
              <p>
                Responsible for the development of all web applications,
                including the company's flagship product, IntraWeb Suite. Worked
                with the company's CEO to develop the product's roadmap and
                feature set. Developed and maintained the company's website and
                all marketing materials. Managed the company's social media
                presence and advertising campaigns. Provided technical support
                to clients and managed the company's hosting environment.
                Developed and maintained the company's internal network and IT
                infrastructure.
              </p>
              <ul>
                <li>
                  Proven expertise in developing and maintaining dynamic content
                  management systems such as WordPress. This includes utilizing
                  a comprehensive tech stack comprising HTML, CSS, PHP, SASS,
                  JavaScript, and React.js.
                </li>
                <li>
                  Actively collaborated on various e-commerce projects,
                  leveraging my skills in React.js to implement sophisticated
                  features such as interactive UI components. This involvement
                  significantly contributed to refining user experiences and
                  integrating complex functionalities in a seamless manner.
                </li>
                <li>
                  Proven expertise in developing and maintaining dynamic content
                  management systems such as WordPress. This includes utilizing
                  a comprehensive tech stack comprising HTML, CSS, PHP, SASS,
                  JavaScript, and React.js.
                </li>
              </ul>
            </div>
            <div className="employer">
              <h5>Executive Five Star</h5>
              <p>Full-Stack Developer</p>
              <p>April 2016 - November 2020</p>
              <p>
                Responsible for the development of all web applications,
                including the company's flagship product, IntraWeb Suite. Worked
                with the company's CEO to develop the product's roadmap and
                feature set. Developed and maintained the company's website and
                all marketing materials. Managed the company's social media
                presence and advertising campaigns. Provided technical support
                to clients and managed the company's hosting environment.
                Developed and maintained the company's internal network and IT
                infrastructure.
              </p>
              <ul>
                <li className="{styles.li}">
                  Demonstrated expertise in developing and maintaining content
                  management systems, such as WordPress using HTML, CSS, PHP,
                  SASS, and JavaScript.
                </li>
              </ul>
            </div>
            <div className="employer">
              <h5>IntraWeb Technologies</h5>
              <p>Full-Stack Developer &amp; Digital Architect</p>
              <p>2012 - Present</p>
              <p>
                Responsible for the development of all web applications,
                including the company's flagship product, IntraWeb Suite. Worked
                with the company's CEO to develop the product's roadmap and
                feature set. Developed and maintained the company's website and
                all marketing materials. Managed the company's social media
                presence and advertising campaigns. Provided technical support
                to clients and managed the company's hosting environment.
                Developed and maintained the company's internal network and IT
                infrastructure.
              </p>
              <ul>
                <li>
                  Demonstrated expertise in developing and maintaining content
                  management systems, such as WordPress using HTML, CSS, PHP,
                  SASS, and JavaScript.
                </li>
              </ul>
            </div>
            <div className="employer">
              <h5>IntraWeb Technologies</h5>
              <p>Full-Stack Developer &amp; Digital Architect</p>
              <p>2012 - Present</p>
              <p>
                Responsible for the development of all web applications,
                including the company's flagship product, IntraWeb Suite. Worked
                with the company's CEO to develop the product's roadmap and
                feature set. Developed and maintained the company's website and
                all marketing materials. Managed the company's social media
                presence and advertising campaigns. Provided technical support
                to clients and managed the company's hosting environment.
                Developed and maintained the company's internal network and IT
                infrastructure.
              </p>
              <ul>
                <li>
                  Demonstrated expertise in developing and maintaining content
                  management systems, such as WordPress using HTML, CSS, PHP,
                  SASS, and JavaScript.
                </li>
              </ul>
            </div>
            <div className="employer">
              <h5>IntraWeb Technologies</h5>
              <p>Full-Stack Developer &amp; Digital Architect</p>
              <p>2012 - Present</p>
              <p>
                Responsible for the development of all web applications,
                including the company's flagship product, IntraWeb Suite. Worked
                with the company's CEO to develop the product's roadmap and
                feature set. Developed and maintained the company's website and
                all marketing materials. Managed the company's social media
                presence and advertising campaigns. Provided technical support
                to clients and managed the company's hosting environment.
                Developed and maintained the company's internal network and IT
                infrastructure.
              </p>
              <ul>
                <li>
                  Demonstrated expertise in developing and maintaining content
                  management systems, such as WordPress using HTML, CSS, PHP,
                  SASS, and JavaScript.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutPage;
