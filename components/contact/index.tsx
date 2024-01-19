import React from "react";
import Container from "../container";
import { Button } from "@nextui-org/react";
import style from "./contact.module.scss";

const ContactPage: React.FC = () => {
  return (
    <Container>
      <h1 className="h1">Contact Page</h1>
      <h3>Let's Talk: Connect With Me!</h3>
      <div className="flex gap-4">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
      </div>
      // Add more content and structure here as needed
    </Container>
  );
};

export default ContactPage;
