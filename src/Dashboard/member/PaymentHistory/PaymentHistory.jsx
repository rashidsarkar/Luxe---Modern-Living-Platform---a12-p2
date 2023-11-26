import { useQuery } from "@tanstack/react-query";
import useAxiosInstanceSecure from "../../../AxiosAPI/useAxiosInstance";
import useAuth from "../../../hooks/useAuth";
import CustomLoading from "../../../Components/CustomLoading";
import ErrorMessage from "../../../Components/ErrorMessage/ErrorMessage";

function PaymentHistory() {
  const axiosSecure = useAxiosInstanceSecure();

  const { user, loading } = useAuth();

  const {
    data: paymentData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const response = await axiosSecure.get(`/getPaymentsData/${user.email}`);
      return response.data;
    },
    queryKey: ["paymentData"],
    enabled: !loading,
  });
  console.log(paymentData);
  if (isLoading) return <CustomLoading />;
  if (isError) return <ErrorMessage error={error} />;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name & Email</th>
              <th>Block Name & Floor</th>
              <th>Pay For Month</th>
              <th>Amount & Transaction ID</th>
              <th>Agreement Accept Date</th>
              <th>Apartment No</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={payment.userImage} alt="Avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{payment.userName}</div>
                      <div className="text-sm opacity-50">
                        {payment.userEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {payment.blockName}
                  <br />
                  <span className="badge badge-ghost badge-sm text-center">
                    Floor No {payment.floor}
                  </span>
                </td>
                <td>{payment.payForMunth}</td>
                <td className="">
                  Total Bill: $ {payment.billPrice}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {payment.transactionId}
                  </span>
                </td>
                <td>{payment.agreementAcceptDate}</td>
                <td>Apartment No: {payment.apartmentNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentHistory;
