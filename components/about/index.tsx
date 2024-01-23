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
            <p>
              John Schibelli is the kind of Full-Stack Developer and Digital
              Architect who really knows how to make his mark in the web
              development world. Based out of Northern New Jersey, he's not just
              coding; he's creating art. At IntraWeb Technologies, John blends a
              deep knowledge of HTML, CSS, JavaScript, PHP, Node.js, and a
              special knack for React.js to craft digital experiences that are
              as seamless as they are engaging.
            </p>
            <p>
              In the office, John is more than just a developer. He's the go-to
              guy for turning complex coding challenges into elegantly designed
              solutions. His daily grind involves a bit of everything – coding,
              design, troubleshooting – and he tackles each task with the kind
              of enthusiasm that only comes from someone who truly loves what
              they do.
            </p>
            <p>
              John's journey in tech started back in 2004 after he graduated
              from The Chubb Institute's "Web Development &amp; Design" program.
              He first dipped his toes in the world of television as a Graphic
              Artist at CNBC, adding his creative touch to shows like "Morning
              Call" and "Squawk Box." But the web world called him back, and by
              2006, he was deep into web development, climbing the ladder at
              Anthem Institute and eventually leading as a Program Director by
              2009.
            </p>
            <p>
              A stint in Florida as a Web Developer with Level Nine Creative was
              exciting, but New Jersey's siren call was too strong to ignore.
              Since 2012, back in his home turf, John has been living his dream,
              pushing the limits of web applications and turning each project
              into a digital masterpiece. For John, the tech world's constant
              evolution isn't just a challenge; it's an adventure. He's always
              upskilling, always on the lookout for the next big thing, ensuring
              his work stays at the cutting edge. It's this mix of passion,
              skill, and a constant thirst for knowledge that makes John not
              just a great developer, but a true architect of the digital age.
              He's not just writing code; he's writing the future, one line at a
              time.
            </p>

            <h4>Experience</h4>
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

                <li className="li">
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
