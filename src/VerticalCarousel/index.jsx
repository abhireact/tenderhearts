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
            <h2 className="text-gray-900 title-font text-lg font-bold flex gap-2">
              <svg
                class="h-8 w-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
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
                <div className="flex py-2">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/80x80"
                    />
                  </a>
                  <p className="p-2">Sports Event</p>
                </div>
                <div className="flex py-2">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/80x80"
                    />
                  </a>
                  <p className="p-2">School Fest</p>
                </div>
                <div className="flex py-2">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/80x80"
                    />
                  </a>
                  <p className="p-2">Students Exhibition</p>
                </div>
              </Carousel>
            
          </div>
        </div>
      </span>
    </div>
  );
};

export default App;
