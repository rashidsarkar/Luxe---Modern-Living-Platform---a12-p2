import { LazyLoadImage } from "react-lazy-load-image-component";

function AgreementData() {
  // Sample agreement data
  const agreementData = {
    image: "https://i.ibb.co/ZXqR10L/pexels-pixabay-271614.jpg",
    floorNo: 2,
    blockName: "B Block",
    apartmentNo: "202",
    rent: "$1300",
    date: "2023-12-01", // Sample date
  };
  return (
    <>
      <div className="flex flex-wrap items-center mb-4 space-x-4 border gap-x-3">
        {/* <LazyLoadImage
          effect="blur"
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
          src="https://i.ibb.co/bW5nJ82/pexels-tirachard-kumtanom-347141.jpg"
        /> */}
        <div className="rounded-md md:max-w-sm  lg:w-[300px]">
          {/* <img src={agreementData.image} alt="Agreement" /> */}
          <LazyLoadImage
            effect="blur"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
            src="https://i.ibb.co/bW5nJ82/pexels-tirachard-kumtanom-347141.jpg"
          />
        </div>

        <div>
          <p className="text-gray-500">Floor No: {agreementData.floorNo}</p>
          <p className="text-gray-500">Block: {agreementData.blockName}</p>
          <p className="text-gray-500">
            Apartment No: {agreementData.apartmentNo}
          </p>
          <p className="text-gray-500">Rent: {agreementData.rent}</p>
          <p className="text-gray-500">Date: {agreementData.date}</p>
        </div>
      </div>
    </>
  );
}

export default AgreementData;
