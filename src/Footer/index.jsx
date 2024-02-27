import React from "react";

const Footer = () => {
  return (
    <footer className="text-grey-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tender Hearts</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Tender Hearts School (Kursi Road), Affiliated to CBSE Board, New
            Delhi
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full pl-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Our Links
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Admission</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Career</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Get in Touch
            </h2>
            <nav className="list-none mb-10">
              <ul>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    GS-160, Adharkhera, Kursi Road Lucknow
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    +91-8176063900, 7054070999
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    tenderheartsschool1@gmail.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lg:w-2/4 md:w-1/2 w-full px-8">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
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
          ;
        </div>
      </div>
    </footer>
  );
};

export default Footer;
