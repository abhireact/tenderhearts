import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpeg";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //first image url
  {
    url: image3,
  },
  //second image url
  {
    url: image2,
  },

  //third image url

  {
    url: image1,
  },
  //fourth image url

  {
    url: image4,
  },
];
const Slider = () => {
  return (
    <div>
      <Carousel
        responsive={responsive}
    
        autoPlay={true}
        swipeable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style1"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div
              className="object-cover object-center w-100 h-80 block overflow-visible"
              key={index}
            >
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
