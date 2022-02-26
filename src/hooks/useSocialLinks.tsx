import { graphql, useStaticQuery } from "gatsby";

export type SocialLinks = {
  youtube: string;
  facebook: string;
  twitter: string;
  email: string;
};

export const useSocialLinks = (): SocialLinks => {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      allMarkdownRemark(filter: { fields: { slug: { eq: "/site/social/" } } }) {
        nodes {
          frontmatter {
            twitter
            facebook
            youtube
            email
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes[0].frontmatter;
};

export default useSocialLinks;
