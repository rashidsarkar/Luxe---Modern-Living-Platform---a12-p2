import useApartmentRoom from "../../API/useApartmentRoom";
import ApartmentBanar from "../../Components/App/ApartmentBanar/ApartmentBanar";
import CustomLoading from "../../Components/CustomLoading";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import SectionTitle from "../../TextEffectComponents/BannerDecpt/SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";
import FeatureSection from "../Home/Feature/FeatureSection";

function Apartment() {
  const { user } = useAuth();
  const { roomsData, isLoading, isError, error } = useApartmentRoom();
  // console.log(singleRoomData);

  if (isLoading) return <CustomLoading></CustomLoading>;
  if (isError) return <ErrorMessage error={error}></ErrorMessage>;
  // console.log(roomsData);

  return (
    <div>
      <ApartmentBanar
        image="https://i.ibb.co/HCDxqkm/pexels-vecislavas-popa-813692.jpg"
        title="Luxurious Apartments"
        decpt="Discover a new level of luxury living in our exquisite apartments. Unmatched comfort and style await you."
      />
      <div className="">
        <SectionHeading>Explore Our Rooms</SectionHeading>
        {/* //TODO -  room databse teke ante hobe */}
        {/* //TODO -  pagination koira dekate hobe */}
        <div className="grid grid-cols-3 py-9">
          {roomsData.map((room) => {
            return <FeatureSection key={room._id} room={room}></FeatureSection>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Apartment;
