import React from "react";
import logo from "./footer_image.png";
const Footer = () => {
  return (
    <footer className="bg-gray-300 body-font">
      <div className="container  py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex  gap-2 md:mx-0 mx-auto text-center md:text-left bg-gray-500">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} />
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full pl-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              Our Links
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    &gt; About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    &gt; Admission
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    &gt; Photo Gallery
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    &gt; Career
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    &gt; Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              Get in Touch
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li className="flex gap-2">
                  <svg
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <a className="text-gray-600 hover:text-gray-800">
                    GS-160, Adharkhera, Kursi Road Lucknow
                  </a>
                </li>
                <li className="flex gap-2">
                  <svg
                    className="h-8 w-8 text-blue-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                  <a className="text-gray-600 hover:text-gray-800">
                    +91-8176063900, 7054070999
                  </a>
                </li>
                <li className="flex gap-2">
                  <svg
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a className="text-gray-600 hover:text-gray-800">
                    tenderheartsschool1@gmail.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-2/4 md:w-1/2 w-full px-8">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              Our Branches
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Kursi Road: GS-160, Adharkhera, Kursi Road, Lucknow
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Jankipuram: B2/72, Sector F, Lucknow
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Senior: B-937, Mahanagar, Lucknow
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Junior: B-138, Mahanagar, Lucknow
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="py-2 px-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.4929349999347!2d80.98542537459902!3d26.951285058433452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399959df690952e1%3A0xe3c66fc428f62020!2sTender%20Hearts%20School!5e0!3m2!1sen!2sin!4v1709012714218!5m2!1sen!2sin"
          width="100%"
          height="150"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            ©2024 Powered By
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              MindcomGroup
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
          
        </div>
      </div>
    </footer>
  )
};

export default Footer;
