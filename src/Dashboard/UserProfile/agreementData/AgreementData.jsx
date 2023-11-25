/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";

function AgreementData({ argument }) {
  const { image, agreementRequestDate, floorNo, blockName, apartmentNo, rent } =
    argument;
  return (
    <>
      <div className="flex flex-wrap items-center mb-4 space-x-4 border gap-x-3">
        <div className="rounded-md md:max-w-sm  lg:w-[300px]">
          {/* <img src={agreementData.image} alt="Agreement" /> */}
          <LazyLoadImage
            effect="blur"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
            src={image}
          />
        </div>

        <div>
          <p className="text-gray-500">Floor No: {floorNo}</p>
          <p className="text-gray-500">Block: {blockName}</p>
          <p className="text-gray-500">Apartment No: {apartmentNo}</p>
          <p className="text-gray-500">Rent: {rent}</p>
          <p className="text-gray-500">Req. Date: {agreementRequestDate}</p>
        </div>
      </div>
    </>
  );
}

export default AgreementData;
