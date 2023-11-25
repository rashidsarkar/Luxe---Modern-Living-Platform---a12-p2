import Swal from "sweetalert2";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosInstanceSecure from "../../AxiosAPI/useAxiosInstance";

function useCreateAgreement() {
  const axiosSecure = useAxiosInstanceSecure();
  const queryClient = useQueryClient();

  const { mutateAsync: createAgreement } = useMutation({
    mutationFn: async (postData) => {
      const result = await axiosSecure.post(
        `/api/user/createAgreement`,
        postData
      );
      console.log(result.data);

      return result.data;
    },
    mutationKey: ["create-agreement"],
    onSuccess: () => {
      queryClient.invalidateQueries(["create-agreement"]);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Agreement has been successfully done.",
      });
    },
  });
  return { createAgreement };
}

export default useCreateAgreement;
