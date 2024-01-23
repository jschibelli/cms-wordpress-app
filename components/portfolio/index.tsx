import React from "react";
import Container from "../container";
import style from "./portfolio.module.scss";
import Layout from "../layout";

const PortfolioPage: React.FC = () => {
  return (
    <Layout>
    <Container>
      <div className="max-w-7xl mx-auto">
        <h1>Portfolio Page</h1>
        <p>This is the Portfolio page content.</p>
      </div>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
