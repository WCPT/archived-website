import { graphql, useStaticQuery } from "gatsby";

export type Extras = {
  videoURL: string;
  signInLink: string;
  signUpLink: string;
};

export const useExtras = (): Extras => {
  const data = useStaticQuery(graphql`
    query ExtrasQuery {
      allMarkdownRemark(filter: { fields: { slug: { eq: "/site/extras/" } } }) {
        nodes {
          frontmatter {
            videoURL
            signInLink
            signUpLink
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes[0].frontmatter;
};

export default useExtras;
