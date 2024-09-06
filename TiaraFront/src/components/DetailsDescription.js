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
          {locationHours.map((point, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={point} primaryTypographyProps={{fontSize:'20px', color:'text.secondary'}}/>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Products and Services */}
      {(productsServices && productsServices.length > 0) && (
        <Box sx={{ paddingBottom: 3 }}>
        <Typography fontSize={'35px'} fontWeight='bold' gutterBottom>Products and Services</Typography>
          <ProductList products={productsServices} />
        </Box>
      )}

      {/* Important Details */}
      <Box sx={{ paddingBottom: 3 }}>
        <Typography fontSize={'35px'} fontWeight='bold' gutterBottom>Important Details</Typography>
        <List>
          {importantDetails.map((point, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={point} primaryTypographyProps={{fontSize:'20px', color:'text.secondary'}}/>
            </ListItem>
          ))}
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