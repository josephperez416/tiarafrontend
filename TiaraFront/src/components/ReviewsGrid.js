import React, { useContext } from 'react';
import { Avatar, Box, Button, Grid, Rating, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ServiceDetailsContext } from './ServiceDetailsProvider';

// Review component
function Review ({ profileImage, rating, name, date, review }) {

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 2}}>
      {/* Profile Image */}
      <Avatar alt={name} src={profileImage} sx={{ width: 56, height: 56, mr: 2 }} />
      
      {/* Review Content */}
      <Box sx={{ flex: 1 }}>
        {/* Rating */}
        <Rating name='read-only' value={rating} precision={0.5} readOnly />
        
        {/* Name and Date */}
        <Typography variant='body1'>
          {name} • {date}
        </Typography>
        
        {/* Review Text */}
        <Typography variant='body1' color='text.secondary' sx={{ mt: 1 }}>
          {review}
        </Typography>
      </Box>
    </Box>
  );
};

function ReviewsGrid() {
  
  const { reviews } = useContext(ServiceDetailsContext);

  return (
    <Box sx={{ p: 4, border: '1px solid #e0e0e0', borderRadius: 4, alignContent: 'center' }}>
      {/* Title */}
      <Typography fontSize={'40px'} fontWeight='bold' align='center' sx={{marginBottom: 4}} >
        Reviews
      </Typography>

      {/* Reviews Grid (2x2 layout) */}
      <Grid container spacing={2}>
        {reviews.slice(0, 4).map((review, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Review {...review} />
          </Grid>
        ))}
      </Grid>

      {/* More Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button 
          variant="contained" 
          sx={{
            borderRadius: 3, 
            backgroundColor: '#932F6D', 
            padding: '7px 20px',
            textTransform: 'none',
            fontSize: '15px',
            '&:hover': {
              backgroundColor: '#591C42'}
          }}
          endIcon={<ChevronRightIcon />}
        >
          More
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewsGrid;