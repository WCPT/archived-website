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
        metaInfo?: string;
        duration: string;
        registrationUrl: string;
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
              {post.frontmatter.metaInfo && (
                <h2 className="mb-0 text-gray-400 font-normal">
                  {post.frontmatter.metaInfo}
                </h2>
              )}
              <h1 className="text-4xl leading-tight text-bahamaBlue">
                {post.frontmatter.title}
              </h1>

              <div>
                <div className="text-gray-900">{post.frontmatter.duration}</div>
                <div>
                  <a
                    href={post.frontmatter.registrationUrl}
                    target="_blank"
                    className="text-bahamaBlue-400"
                  >
                    Register here
                  </a>
                </div>
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />

              <nav className="flex justify-between mt-16 py-8 border-t border-gray-200">
                <div>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </div>
                <div>
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
        metaInfo
        duration
        registrationUrl
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
