import React from "react"
import Layout from '../components/layout';
import styled from 'styled-components';

const FeaturedImage = styled.img`
margin : 20px 0;
max-width :100%;
`

export default ({pageContext} ) => (
               
    <Layout>
        <h1>{pageContext.title}</h1>
        <small>
            {pageContext.date}
        </small>
        
        <div><FeaturedImage src={pageContext.featured_media.localFile.childImageSharp.fluid.src}/></div> 
                    
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />    
     </Layout>

);
