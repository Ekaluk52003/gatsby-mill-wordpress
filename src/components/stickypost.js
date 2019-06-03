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


const Stickypost = () => (
    <StaticQuery query={graphql`
   
 {
    allWordpressPost (filter:{sticky:{eq:true}})  {
      edges{
        node{
          excerpt
          sticky
          wordpress_id
          date(formatString: "Do MMM YYYY")
          title                   
          content
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 960, quality: 100){
                  src                          
                }
              }
            }
          }
          slug
        }
      }
    }
  }
  
  `} render={props =>
    (<PortfolioItemsWrapper>
   {props.allWordpressPost.edges.map(stickyPostList => (
       <PortfolioItem key={stickyPostList.node.id}>
           <h2>{stickyPostList.node.title}</h2>
           <PortfolioImage src={stickyPostList.node.featured_media.localFile.childImageSharp.fluid.src} />
           <div dangerouslySetInnerHTML={{__html: stickyPostList.node.excerpt}} />
           <Link to={`/post/${stickyPostList.node.slug}`}>
               Read More
           </Link>
       </PortfolioItem>
    ))  }
   </PortfolioItemsWrapper> )}/>
)  

  
  export default Stickypost;
  