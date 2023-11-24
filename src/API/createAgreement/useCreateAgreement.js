import Swal from "sweetalert2";
import axiosInstancePublic from "../../AxiosAPI/axiosInstance";
import { useMutation } from "@tanstack/react-query";

function useCreateAgreement() {
  const { mutateAsync: createAgreement } = useMutation({
    mutationFn: async (postData) => {
      const result = await axiosInstancePublic.post(
        `/api/user/createAgreement`,
        postData
      );
      console.log(result.data);

      return result.data;
    },
    mutationKey: ["create-agreement"],
    onSuccess: () => {
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
