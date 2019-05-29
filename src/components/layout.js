import React from 'react'
import MainMenu from './MainMenu'
import Header from './header'
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles  = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
body {
  font-family :'Roboto Mono', monospace;
  margin : 0;
  padding :0;
}
`
const LayoutWrapper = styled.div`
max-width : 960px;
margin :0 auto;`



const Layout = ({children}) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
     {children}  
    </LayoutWrapper>
   
  </div>
 )

export default Layout;