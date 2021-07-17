import { graphql, useStaticQuery } from "gatsby";

export type SocialLinks = {
  youtube: string;
  facebook: string;
  twitter: string;
  email: string;
};

export const useSocialLinks = (): SocialLinks => {
  const { site } = useStaticQuery(graphql`
    query SocialLinksQuery {
      site {
        siteMetadata {
          socialLinks {
            youtube
            facebook
            twitter
            email
          }
        }
      }
    }
  `);

  return site.siteMetadata.socialLinks;
};

export default useSocialLinks;
