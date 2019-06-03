import React from 'react'
import {graphql, StaticQuery, Link}  from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const PortfolioItemsWrapper = styled.div`

@media (min-width: 700px) {
  display : flex;
}

justify-content :center;
`
const PortfolioItem = styled.div`
width : 300px;
border 1px solid #efefefef;
padding: 16px;
margin: 16px;
`
const PortfolioImage = styled.img`
max-width : 100%;
`


const PortfolioItems = () => (
    <StaticQuery query={graphql`
    {
      allWordpressWpPortfolio {
        edges {
          node{
            title
            slug
            excerpt
            content
            featured_media {
              localFile {
                childImageSharp {
                  resolutions(width:210 height:210 ){
                    src
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
      
    }
  
  `} render={props =>
     (<PortfolioItemsWrapper>
    {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
        <PortfolioItem key={portfolioItem.node.id}>
            <h2>{portfolioItem.node.title}</h2>
            <PortfolioImage src={portfolioItem.node.featured_media.localFile.childImageSharp.resolutions.src} />
            <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
            <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                Read More
            </Link>
        </PortfolioItem>
     ))  }
    </PortfolioItemsWrapper> )}/>
 )  

  
  export default PortfolioItems;
  