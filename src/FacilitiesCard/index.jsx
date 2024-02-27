import Card from "./Card";
import "react-multi-carousel/lib/styles.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import spssa from "./images/spssa.jpg";
import dance from "./images/dance.jpg";
import activity from "./images/activity.jpg";
import playground from "./images/playground.jpg";
import laboratories from "./images/laboratories.jpg";

import holistic from "./cardimages/holistic.jpg";
import curriculum from "./cardimages/curriculum.jpg";
import vibrant from "./cardimages/vibrant.jpg";

function FacilitiesCard() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:gap-x-4">
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Holistic Learning Environment
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              We provide an environment that nurtures all the aspects of student
              learning. This inspires our student to excel, both in academics
              and extracurricular activities, we ensure they're 'Ready for the
              World’
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-200">
              <small className="text-neutral-500 dark:text-neutral-400">
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Read More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </small>
            </p>
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-b-lg" src={holistic} alt="" />
          </div>
        </div>
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Vibrant Campus
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Our campuses garner recognition for hallmark initiatives across
              educational excellence and also provide rare opportunities to gain
              character building experiences and value-based education.
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-200">
              <small className="text-neutral-500 dark:text-neutral-400">
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Read More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </small>
            </p>
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-b-lg" src={vibrant} alt="" />
          </div>
        </div>
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              A Unique Curriculum
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              The educational approach at our school is unique we focus on the
              structural learning that prepares students to be happy, balanced,
              productive and innovative citizen of tomorrow.
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-200">
              <small className="text-neutral-500 dark:text-neutral-400">
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  Read More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </small>
            </p>
          </div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-b-lg" src={curriculum} alt="" />
          </div>
        </div>
      </div>
      <Grid container>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          px={2}
        >
          <Typography
            variant="h4"
            component="h2"
            py={4}
            fontWeight="fontWeightBold"
             color="primary"
          >
            Facilities
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
      </Grid>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
      >
        <Card
          imageUrl={spssa}
          title="Shooting Stars"
          description="Description text"
        />
        <Card
          imageUrl={activity}
          title="Shooting Stars"
          description="Description text"
        />
        <Card
          imageUrl={laboratories}
          title="Shooting Stars"
          description="Description text"
        />
        <Card
          imageUrl={playground}
          title="Shooting Stars"
          description="Description text"
        />
      </Carousel>
    </>
  );
}
export default FacilitiesCard;
