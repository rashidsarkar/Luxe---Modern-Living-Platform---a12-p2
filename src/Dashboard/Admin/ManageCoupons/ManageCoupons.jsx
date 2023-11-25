import useGetCoupon from "../../../API/Home/useGetCoupon";
import CustomLoading from "../../../Components/CustomLoading";
import ErrorMessage from "../../../Components/ErrorMessage/ErrorMessage";
import { IoMdAdd } from "react-icons/io";
import ModalCopon from "./ModalCopon";

function ManageCoupons() {
  const { error, getCoupon, isError, isLoading } = useGetCoupon();
  if (isLoading) return <CustomLoading></CustomLoading>;
  if (isError) return <ErrorMessage error={error}></ErrorMessage>;
  console.log(getCoupon);
  return (
    <div>
      <p className="font-bold p-8"> Manage Coupons</p>
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Coupon Code</th>
              <th>Discount Percentage</th>
              <th>Coupon Description</th>
            </tr>
          </thead>
          <tbody>
            {getCoupon.map((coupon, idx) => {
              return (
                <tr key={coupon._id}>
                  <th>{++idx}</th>
                  <td>{coupon.couponCode}</td>
                  <td>{coupon.discountPercentage} %</td>
                  <td>{coupon.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => document.getElementById("my_modal_5").showModal()}
        className="btn btn-info my-4 mb-14 mx-auto text-center flex justify-center"
      >
        <IoMdAdd className="inline-block w-4 h-4 mr-2" /> Add Coupons
      </button>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <ModalCopon id={"my_modal_5"} />
    </div>
  );
}

export default ManageCoupons;
