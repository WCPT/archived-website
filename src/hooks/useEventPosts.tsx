import { graphql, useStaticQuery } from "gatsby";

export type EventPost = {
  frontmatter: {
    type: string;
    title: string;
    date: Date;
    duration: string;
    order: number;
    registrationDeadline: string;
  };
  fields: {
    slug: string;
  };
};

export const useEventPosts = (): EventPost[] => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query EventPostsQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___order], order: ASC }
        limit: 3
      ) {
        nodes {
          frontmatter {
            type
            title
            date
            duration
            order
            registrationDeadline
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  return allMarkdownRemark.nodes;
};

export default useEventPosts;
