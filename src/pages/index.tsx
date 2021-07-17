import React from "react";
import { graphql } from "gatsby";

import { Layout, Navbar, Footer } from "../components";
import {
  HeroSection,
  IntroSection,
  StatSection,
  EventsSection,
  ContactSection,
} from "../page-components/index";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title?: string;
      };
    };
  };
}

export const IndexPage = ({ data: { site } }: Props) => {
  return (
    <Layout title={site.siteMetadata.title}>
      <Navbar theme="light" className="absolute top-0 z-50" />
      <HeroSection />
      <IntroSection />
      <StatSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
