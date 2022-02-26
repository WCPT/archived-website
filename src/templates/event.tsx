import React from "react";
import { Link, graphql } from "gatsby";

import { Navbar, Footer, Layout } from "../components";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title?: string;
      };
    };
    markdownRemark: {
      id: string;
      html: string;
      frontmatter: {
        title: string;
        type: string | null;
        duration: string;
        registrationUrl: string;
        registrationDeadline: string | null;
      };
    };
    previous: any;
    next: any;
  };
}

const Event = ({ data }: Props) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || ``;
  const { previous, next } = data;

  return (
    <Layout title={siteTitle}>
      <div className="flex flex-col min-h-screen">
        <Navbar className="py-6 border-b border-gray-200" />
        <div className="px-8">
          <section className="container mx-auto mt-12 mb-16 text-lg prose text-gray-900">
            {post.frontmatter.type && (
              <h2 className="mb-0 text-gray-500 font-normal text-2xl">
                {post.frontmatter.type}
              </h2>
            )}
            <h1 className="text-4xl leading-tight text-bahamaBlue">
              {post.frontmatter.title}
            </h1>

            <div>
              <div className="text-xl text-gray-900">
                {post.frontmatter.duration}
              </div>
              <div className="text-xl text-gray-500">
                {post.frontmatter.registrationDeadline}
              </div>

              <div className="pt-2">
                <a
                  href={post.frontmatter.registrationUrl}
                  target="_blank"
                  className="text-white no-underline"
                >
                  <button className="my-2 mr-2 px-4 py-2 bg-bahamaBlue hover:bg-bahamaBlue-300 rounded shadow-md hover:shadow-sm transition-all">
                    Register
                  </button>
                </a>
              </div>
            </div>

            <div
              className="pt-4"
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />

            <nav className="grid grid-cols-2 gap-8 mt-16 py-8 border-t border-gray-200">
              <div>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </div>
              <div className="ml-auto">
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </div>
            </nav>

            <div>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Return to home page
              </a>
            </div>
          </section>
        </div>

        <Footer className="mt-auto" />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query EventPageQuery(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        type
        duration
        registrationUrl
        registrationDeadline
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default Event;
