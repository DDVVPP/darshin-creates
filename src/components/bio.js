/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <section>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <h2>Hi!</h2>
            <p>
              I'm an Architectural Designer turned
              <strong> Fullstack Software Developer</strong> who likes to eat
              delicious food, workout, and
              dabble in ceramics, illustration, and dance.
              <p></p>
              <p>
                Feel free to email me at{" "}
                <a href="mailto:darshin@gmail.com">darshinvp@gmail.com</a> !
              </p>
              <p></p>
              <p>
                This website is built with Gatsby, GraphQL, and deployed on
                Netlify.{" "}
              </p>
            </p>
          </section>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/Me.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
