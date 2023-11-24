import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../FireBase/useAuthProvider";
import useAxiosInstanceSecure from "../AxiosAPI/useAxiosInstance";

function useRole() {
  const { user } = useAuthProvider();
  const axiosInstanceSecure = useAxiosInstanceSecure();
  const {
    data: userRole,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: async () => {
      const res = await axiosInstanceSecure.get(
        `/api/user/userRole/${user.email}`
      );
      // console.log(res.data)
      return res.data.userRole;
    },
    queryKey: [user?.email, "userRole"],
  });
  return { userRole, isLoading, isError, error };
}

export default useRole;
