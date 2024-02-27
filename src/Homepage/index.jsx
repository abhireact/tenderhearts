import Carousel from "../Carousel";
import Footer from "../Footer";
import Header from "../Header";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacilitiesCard from "../FacilitiesCard";
import VerticalCarousel from "../VerticalCarousel";
const Homepage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Grid container>
        <Grid
          item
          sm={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          px={2}
        >
          <Typography
            variant="h4"
            py={4}
            fontWeight="fontWeightBold"
            color="primary"
          >
            Welcome To Tender Hearts School
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            Tender Hearts School was started on 12th September 1986 by Sri Ram
            Memorial Society for the promotion of education. The founder
            Principal of T.H.S. is Mrs. Roopa Khanna. Mrs. Khanna has
            specialization of more than 40 years in child psychology and in
            methods of childhood adaption to academics. Her contribution to the
            cause of education has been immense.
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <VerticalCarousel />
        </Grid>
      </Grid>
      <FacilitiesCard />
      <Footer />
    </>
  );
};

export default Homepage;
