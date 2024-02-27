import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const App = () => {
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
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <span>
        <div>
          <div className="mt-4">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              News Event
            </h2>
            <Carousel
              autoPlay={true}
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              stopOnHover={false}
              axis="vertical"
            >
              <div>
                <p className="mt-1">Sports</p>

                <a className="block relative h-28 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/120x120"
                  />
                </a>
              </div>
              <div>
                <p className="mt-1">School Fest</p>

                <a className="block relative h-28 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/120x120"
                  />
                </a>
              </div>
              <div>
                <p className="mt-1">Students Exhibition</p>

                <a className="block relative h-28 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/120x120"
                  />
                </a>
              </div>
            </Carousel>
          </div>
        </div>
      </span>
    </div>
  );
};

export default App;
