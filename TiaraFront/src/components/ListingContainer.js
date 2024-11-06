import { Box, Grid } from "@mui/material";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const { listings } = props;
  return (
    <Box sx={{ flexGrow: 1, height: '10000px', width:'95%'}}>
      <Grid container justifyContent="space-between">
        {listings.map((listing, index) => (
          <Grid >
            <ListingCard {...listing} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListingsContainer;