import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import {styled} from '@mui/material/styles';


const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',  
});

const ContentWrapper = styled('div')({
  flexGrow: 1,  
});

function App() {
  return (
      <HashRouter>
        <PageContainer>
        <Header/>
        <ContentWrapper>
          {/* Future content goes here */}
        </ContentWrapper>
        <Footer/>
      </PageContainer>  
      </HashRouter>
  );
}

export default App;