import { graphql, useStaticQuery } from "gatsby";

export type Stats = {
  engagements: string;
  registered: string;
  participants: string;
  launched: string;
};

export const useStats = (): Stats => {
  const data = useStaticQuery(graphql`
    query StatsQuery {
      allMarkdownRemark(filter: { fields: { slug: { eq: "/site/stats/" } } }) {
        nodes {
          frontmatter {
            engagements
            registered
            participants
            launched
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes[0].frontmatter;
};

export default useStats;
