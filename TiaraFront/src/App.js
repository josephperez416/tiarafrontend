import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import {styled} from '@mui/material/styles';

const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',  // Ensures the container takes up the full height of the viewport
});

const ContentWrapper = styled('div')({
  flexGrow: 1,  // Makes this area grow to fill available space
});

class App extends Component {
render() {
  return (
    <PageContainer>
      <Header/>
      <ContentWrapper>
        {/* Future content goes here */}
      </ContentWrapper>
      <Footer/>
    </PageContainer>        
  );
}
}
export default App;