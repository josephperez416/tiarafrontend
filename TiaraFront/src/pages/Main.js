import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {styled} from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import ListingCard from "../components/ListingCard"; 


const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',  
});

const ContentWrapper = styled('div')({
  flexGrow: 1,  
});

const ListingsContainer = styled('div')({
  paddingLeft: '8%',
  paddingRight: '8%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: '20px',
  width: '100%'
  

});



export default function Main() {
  return (
    <PageContainer>
      <Header/>
      <ContentWrapper>
        <Outlet />
        {<ListingsContainer>
          <ListingCard
            image="https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg"
            title="Mariachi San Luis"
            location="San Luis Obispo, CA"
            rating="4.9"
            price="$800 / Day"
          />
          <ListingCard
            image="https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg"
            title="Mariachi San Luis"
            location="San Luis Obispo, CA"
            rating="4.9"
            price="$800 / Day"
          /><ListingCard
          image="https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg"
          title="Mariachi San Luis"
          location="San Luis Obispo, CA"
          rating="4.9"
          price="$800 / Day"
        />
          <ListingCard
            image="https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg"
            title="Mariachi San Luis"
            location="San Luis Obispo, CA"
            rating="4.9"
            price="$800 / Day"
          />
          <ListingCard
            image="https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg"
            title="Mariachi San Luis"
            location="San Luis Obispo, CA"
            rating="4.9"
            price="$800 / Day"
          />
          <ListingCard
            image="https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg"
            title="Mariachi San Luis"
            location="San Luis Obispo, CA"
            rating="4.9"
            price="$800 / Day"
          />
          <ListingCard
            image="https://media.self.com/photos/5e70f72443731c000882cfe7/4:3/w_2560%2Cc_limit/GettyImages-125112134.jpg"
            title="Mariachi San Luis"
            location="San Luis Obispo, CA"
            rating="4.9"
            price="$800 / Day"
          />
        
        </ListingsContainer> }
      </ContentWrapper>
      <Footer/>
    </PageContainer>
  );
}