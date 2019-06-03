import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const LogoImage = styled.img`
margin-right: 0.5rem;
width: 54px;
height: 40px;
`

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
      {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
      `}
      render={props => (
        <LogoImage
          alt="logo"
          src={props.allWordpressWpLogo.edges[0].node.url.source_url}
        />
      )}
    />
  )
}

export default Logo