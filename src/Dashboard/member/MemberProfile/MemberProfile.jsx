import useAuth from "../../../hooks/useAuth";
import UserCard from "../../UserProfile/UserCard/UserCard";
import AgreementData from "../../UserProfile/agreementData/AgreementData";

function MemberProfile() {
  const { user } = useAuth();
  return (
    <div className="flex flex-col py-20 space-y-4 lg:space-y-0 ">
      {/* User Information */}
      <div className="flex items-center justify-center ">
        <UserCard
          imageUrl={user.photoURL}
          title={user.displayName}
          description={user.email}
        ></UserCard>
      </div>
      <div className="divider py-7">Agreement Information</div>
      {/* Agreement Information */}
      <div className="flex-1 border">
        <div className="grid grid-cols-1 gap-5 p-6 bg-white rounded-md shadow-md md:grid-cols-2 ">
          <AgreementData></AgreementData>
          <AgreementData></AgreementData>
          <AgreementData></AgreementData>

          {/* <p className="text-gray-500">No Agreement Available</p> */}
        </div>
      </div>
    </div>
  );
}

export default MemberProfile;
