import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout/Layout";

const About = ({ data }) => {
  const {
    markdownRemark: { html },
  } = data;
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 lg:py-24">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <div className="pb-24"></div>
        <Link to="/">Back to the homepage</Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    markdownRemark(frontmatter: { type: { eq: "bio" } }) {
      html
    }
  }
`;

export default About;
