import React from "react";
import Container from "../container";
import style from "./portfolio.module.scss";
import Layout from "../layout";
import Maintanence from "./Maintanence";

const PortfolioPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div className="max-w-7xl mx-auto">
          <h1>Service</h1>
          <Maintanence />
        </div>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
