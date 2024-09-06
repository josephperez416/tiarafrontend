import { Box } from "@mui/material";
import DetailsCard from "../components/DetailsCard";
import DetailsImages from "../components/DetailsImages";
import DetailsDescription from "../components/DetailsDescription";
import ReviewsGrid from "../components/ReviewsGrid";
import ServiceDetailsProvider from "../components/ServiceDetailsProvider";


function ServiceDetails() {
  return (
    <ServiceDetailsProvider>
      <Box sx={{ width: '90%', paddingTop: '60px', margin: '0 auto' }}>
        <DetailsCard />
      </Box>
      <Box sx={{ width: '90%', margin: '0 auto', paddingTop: '20px' }}>
        <DetailsImages />
      </Box>
      <Box sx={{ width: '90%', margin: '0 auto', paddingTop: '50px', borderBottom: '1px solid #ccc'  }}>
        <DetailsDescription />
      </Box>
      <Box sx={{ width: '90%', margin: '0 auto', paddingTop: '50px', paddingBottom: '50px' }}>
        <ReviewsGrid />
      </Box>
    </ServiceDetailsProvider>
  );
}

export default ServiceDetails;