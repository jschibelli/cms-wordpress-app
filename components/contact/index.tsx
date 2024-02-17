import {React, useState} from "react";
import Container from "../container";
import { Button, Input, Textarea, Spacer } from "@nextui-org/react";

import styles from "./contact.module.css";
import Footer from "../footer";
import Layout from "../layout";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <div className="max-w-1xl mx-auto">
      <Layout>
        <Container>
          <div className={styles.resume}>
            <div className="max-w-7xl mx-auto">
              <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">
                  Let's Connect
                </h1>
                <div className="col-lg-6 mx-auto">
                  <p className="lead mb-4">
                    Hey there! Thanx for stopping by. Do you have an interest in
                    colaborating on a project, Got a question, or just want to
                    say hi? I'm all ears! Your thoughts and feedback are super
                    impportant. So go ahead, drop me a line, and let’s have a
                    chat like old friends
                  </p>
                  <p>
                    <cite>- John</cite>
                  </p>
                  <form onSubmit={handleSubmit}>
                    <Input
                      width="100%"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Spacer y={1} />
                    <Input
                      width="100%"
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Spacer y={1} />
                    <Textarea
                      width="100%"
                      placeholder="Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Spacer y={1} />
                    <Button
                      type="success"
                      htmlType="submit"
                      radius="full"
                      variant="outline-secondary"
                      disableRipple
                      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default ContactPage;
