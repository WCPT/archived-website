import { graphql, useStaticQuery } from "gatsby";

export type SiteMetadata = {
  title: string;
  author: {
    name: string;
    summary: string;
  };
  description: string;
  siteUrl: string;
  socialLinks: {
    youtube: string;
    facebook: string;
    twitter: string;
    email: string;
  };
  stats: {
    engagements: string;
    registered: string;
    participants: string;
    launched: string;
  };
};

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          author {
            name
            summary
          }
          description
          siteUrl
          socialLinks {
            youtube
            facebook
            twitter
            email
          }
          stats {
            engagements
            registered
            participants
            launched
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};

export default useSiteMetadata;
