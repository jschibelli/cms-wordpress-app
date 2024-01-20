import React from "react";
import Container from "../container";
import { Button } from "@nextui-org/react";
import styles from "./contact.module.css";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      <h3 className={styles.center}>Let's Talk: Connect With Me!</h3>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email*:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <Button color="primary" variant="ghost" type="submit">
          Ghost
        </Button>
      </form>
      </div>
      </div>
  );
};

export default ContactPage;
