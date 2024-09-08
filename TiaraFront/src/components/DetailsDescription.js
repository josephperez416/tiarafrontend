import React, { useContext } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import ProductList from './ProductList';
import { ServiceDetailsContext } from './ServiceDetailsProvider';

function DetailsDescription() {

  const {description, locationHours, productsServices, importantDetails, offeredBy} = useContext(ServiceDetailsContext);
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Description */}
      <Box sx={{ paddingBottom: 3 }}>
        <Typography fontSize={'35px'} fontWeight='bold' gutterBottom>Description</Typography>
        <Typography fontSize={'20px'} color="text.secondary" >
          {description}
        </Typography>
      </Box>

      {/* Location and Hours */}
      <Box sx={{ paddingBottom: 3 }}>
        <Typography fontSize={'35px'} fontWeight='bold' gutterBottom>Location & Hours</Typography>
        <List>
          <Typography fontSize={'25px'} fontWeight='bold'>Location: </Typography>
          <ListItem>
            <ListItemText primary={locationHours.location} primaryTypographyProps={{fontSize:'20px', color:'text.secondary'}}/>
          </ListItem>
          <Typography fontSize={'25px'} fontWeight='bold'>Hours: </Typography>
          {locationHours.hours.map((point, index) => (
            <ListItem key={index} >
              <ListItemText primary={point} primaryTypographyProps={{fontSize:'20px', color:'text.secondary'}}/>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Products and Services */}
      {(productsServices && productsServices.length > 1) && (
        <Box sx={{ paddingBottom: 3 }}>
        <Typography fontSize={'35px'} fontWeight='bold' gutterBottom>Products and Services</Typography>
          <ProductList products={productsServices} />
        </Box>
      )}

      {/* Important Details */}
      <Box sx={{ paddingBottom: 3 }}>
        <Typography fontSize={'35px'} fontWeight='bold' gutterBottom>Important Details</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText primary={'Willing to Travel: ' + importantDetails.travel} primaryTypographyProps={{fontSize:'20px', color:'text.secondary'}}/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={'Clients Must Book: ' + importantDetails.minTime + ' in advance'} primaryTypographyProps={{fontSize:'20px', color:'text.secondary'}}/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary={'Max Event Size: ' + importantDetails.eventSize} primaryTypographyProps={{fontSize:'20px', color:'text.secondary'}}/>
          </ListItem>
        </List>
      </Box>

      {/* Offered By */}
      <Box sx={{ paddingBottom: 10 }}>
        <Typography fontSize={'35px'} fontWeight='bold' gutterBottom>Offered By</Typography>
        <Typography fontSize={'20px'} color="text.secondary">
          {offeredBy}
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsDescription;