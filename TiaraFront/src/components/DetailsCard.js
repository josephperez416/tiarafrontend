import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { ServiceDetailsContext } from './ServiceDetailsProvider';

function DetailsCard(){

  const {cardDetails} = useContext(ServiceDetailsContext);
  const {name, cityState, price, rating, imageUrl} = cardDetails;

  return (
    <Card sx={{ boxShadow:'3', borderRadius:'20px'}}>
      {/* Top half with text and rating */}
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', padding: '30px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography fontSize={'34px'} fontWeight='bold'>
            {name}
          </Typography>
          <Typography fontSize={'25px'} color="text.secondary">
            {cityState}
          </Typography>
          <Typography fontSize={'32px'} fontWeight='600'>
            {price}
          </Typography>
        </Box>
        {/* Star icon with rating */}
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <StarIcon sx={{ color: '#FFC107', mr: 0.5, fontSize: 40}}/>
          <Typography fontSize={'34px'} fontWeight='bold'>
            {rating}
          </Typography>
        </Box>
      </CardContent>

      {/* Bottom half with image */}
      <CardMedia
        component="img"
        sx={{
          objectFit: 'cover',
          height: 500,
        }}
        image={imageUrl}
        alt={name}
      />
    </Card>
  );
};

export default DetailsCard;