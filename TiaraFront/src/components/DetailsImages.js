import React, { useState, useContext} from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import ImageModal from './ImageModal'; // Import the ImageModal component
import { ServiceDetailsContext } from './ServiceDetailsProvider';

function DetailsImages() {

  const {images, totalPrice} = useContext(ServiceDetailsContext);

  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Image Row */}
      <Box sx={{ display: 'flex', flexGrow: 1, gap: 2, marginRight: 2 }}>
        {images.slice(0, 3).map((image, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              height: 175,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: 2,
            }}
            onClick={() => handleOpen(index)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Box with labels and button */}
      <Box
        sx={{
          border: '1px solid #ccc',
          paddingX: 2,
          paddingTop: 3.5,
          paddingBottom: 3,
          borderRadius: 5,
          width: '20%',
          boxShadow: 2,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 2
        }}
      >
        <Typography fontSize={'30px'} >Price/Rate ${totalPrice.toFixed(2)}</Typography>
        <Typography fontSize={'22px'} color="text.secondary" >Starting Price</Typography>
        <Button variant="contained" 
        sx={{ mt: 2, 
          borderRadius: 3, 
          backgroundColor: '#932F6D', 
          padding: '10px 16px',
          textTransform: 'none',
          fontSize: '15px',
          '&:hover': {
            backgroundColor: '#591C42'}}}>
          Reserve
        </Button>
      </Box>

      {/* Modal for showing the image in detail */}
      <Modal
        open={open}
        onClose={handleClose} // Clicking outside should close the modal
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div>
        <ImageModal
          open={open}
          handleClose={handleClose}
          images={images}
          selectedImageIndex={selectedImageIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
        </div>
      </Modal>
    </Box>
  );
}

export default DetailsImages;