import React from "react";
import CorporateBannerImage from "../../assets/images/Services-images/corporate-interior-image/Corporate-image-banner.jpg";
import CorporateInteriorComponent from "../../components/service-components/corporate-interior";

import GlazingCladding from "../../assets/images/Services-images/corporate-interior-image/Glass-caddalling.jpg";
import CabinPartitions from "../../assets/images/Services-images/corporate-interior-image/Cabins.jpg";
import OfficeFurniture from "../../assets/images/Services-images/corporate-interior-image/Office-Furniture.jpg";
import OfficeFalseCeiling from "../../assets/images/Services-images/corporate-interior-image/False-Celling.jpg";
import OfficeFlooring from "../../assets/images/Services-images/corporate-interior-image/Flooring.jpg";
import OfficeWallDesigns from "../../assets/images/Services-images/corporate-interior-image/Wall-designe.jpg";
import LightsArrangement from "../../assets/images/Services-images/corporate-interior-image/Ligets-arrangements.jpg";
import ReceptionArea from "../../assets/images/Services-images/corporate-interior-image/Reception-area.jpg";
import CafeteriaArea from "../../assets/images/Services-images/corporate-interior-image/Cafeteria.jpg";
import { Helmet } from "react-helmet";
const Corporate = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kerala-based Inddecore Interior designs interiors for corporate
          offices
        </title>
        <meta
          name="description"
          content="Inddecore Interior specializes in crafting functional and inspiring corporate office interiors in Kerala. See how we can turn your workstation into a center for productivity and creativity"
        />
        <link
          rel="canonical"
          href="https://inddecoreinteriors.com/corporate-interior"
        />
      </Helmet>
      
      <section>
        <div className="relative h-96 max-md:h-[500px]">
          <img
            className="object-cover w-full h-full"
            src={CorporateBannerImage}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-10 pt-20 max-sm:px-3">
            <h2 className="text-[30px] font-medium italic font-cormorant text-white ">
            KERALA-BASED INDDECORE INTERIOR CREATES CORPORATE OFFICE INTERIORS.
            </h2>
            <h2 className="text-[65px] font-semibold font-cormorant text-white ">
              INDDECORE INTERIO
            </h2>
            <div className="w-20 h-[1px] bg-red-600"></div>
            <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-red-600 font-cormantThiner tracking-wider]">
              Hire us
            </button>
          </div>
        </div>
      </section>

      {/* ========================== Best Residential Interior Designers in Chennai ============= */}
      <section>
        <div className="mt-10">
          <h2 className="text-[38px] max-md:px-5 max-md:text-[25px] text-center text-red-600 font-medium italic font-cormorant ">
          DESIGNERS FOR CORPORATE OFFICE INTERERIORS
          </h2>

          <h2 className=" max-lg:px-10 max-sm:text-[30px] text-[40px] font-cormantThiner uppercase max-sm:px-6 max-lg:text-[45px] px-20 font-bold text-center text-gray-600   ">
          WE BELIEVES IN HARMONIZING YOUR CORPORATE IDENTITY WITH THE NATURAL BEAUTY OF KERALA'S SURROUNDINGS.
          </h2>

          <center>
            <div className="w-36 h-[2px] mt-5 bg-red-600"></div>
          </center>

          <p className="px-48 mt-5 font-bold text-center text-[25px] text-gray-600 max-md:px-10 max-sm:px-6 font-cormantThiner">
          Inddecore Interior brings to your corporate office the perfect blend of creative vision and technical expertise. We are dedicated to creating workspaces that go beyond aesthetics, contributing to your business's growth. ensuring that your office not only looks impressive but also enhances the overall work experience.
          </p>
        </div>
      </section>

      {/* ====================================================================== */}
      <section>
        <div className="px-16 mt-16 max-md:px-6">
          <section className="py-6">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                <CorporateInteriorComponent
                  img={GlazingCladding}
                  heading="
                  Glazing Cladding"
                />

                <CorporateInteriorComponent
                  img={CabinPartitions}
                  heading="
                  Cabin and Partitions"
                />

                <CorporateInteriorComponent
                  img={OfficeFurniture}
                  heading="
                  Office Furniture"
                />

                <CorporateInteriorComponent
                  img={OfficeFalseCeiling}
                  heading="
                  Office False Ceiling"
                />

                <CorporateInteriorComponent
                  img={OfficeFlooring}
                  heading="
                  Office Flooring
                  "
                />

                <CorporateInteriorComponent
                  img={OfficeWallDesigns}
                  heading="
                  Office Wall Designs"
                />

                <CorporateInteriorComponent
                  img={LightsArrangement}
                  heading="
                  Lights Arrangement"
                />

                <CorporateInteriorComponent
                  img={ReceptionArea}
                  heading="

                  Reception Area"
                />

                <CorporateInteriorComponent
                  img={CafeteriaArea}
                  heading="
                  Cafeteria Area"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
