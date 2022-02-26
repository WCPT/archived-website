import { graphql, useStaticQuery } from "gatsby";

export type EventPost = {
  type: string;
  title: string;
  date: Date;
  duration: string;
  order: number;
  registrationDeadline: string;
  slug: string;
};

export const useEventPosts = (): EventPost[] => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query EventPostsQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
        filter: {
          frontmatter: { published: { eq: true } }
          fields: { slug: { regex: "^/events/" } }
        }
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

  return allMarkdownRemark.nodes
    .map((node) => {
      return {
        ...node.frontmatter,
        ...node.fields,
        date: new Date(node.frontmatter.date),
      };
    })
    .sort((a, b) => (a.date > b.date ? 1 : -1));
};

export default useEventPosts;
