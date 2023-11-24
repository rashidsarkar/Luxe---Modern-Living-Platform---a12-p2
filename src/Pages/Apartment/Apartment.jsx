import ApartmentBanar from "../../Components/App/ApartmentBanar/ApartmentBanar";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import SectionTitle from "../../TextEffectComponents/BannerDecpt/SectionTitle/SectionTitle";
import FeatureSection from "../Home/Feature/FeatureSection";

function Apartment() {
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
          <FeatureSection />
        </div>
      </div>
    </div>
  );
}

export default Apartment;
