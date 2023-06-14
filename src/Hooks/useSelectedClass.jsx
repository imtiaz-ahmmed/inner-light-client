import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
const useSelectedClass = () => {
  // const { user, loading } = useContext(AuthContext);
  // const [axiosSecure] = useAxiosSecure();
  // const token = localStorage.getItem("access-token");
  // const { refetch, data: selectedClasses = [] } = useQuery({
  //   queryKey: ["selectedClasses", user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `http://localhost:5000/selectedClasses?email=${user?.email}`,
  //       {
  //         headers: {
  //           authorization: `bearer ${token}`,
  //         },
  //       }
  //     );
  //     return res.json();
  //   },
  // });

  // return [selectedClasses, refetch];
  const { user, loading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedClasses?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [selectedClasses, refetch];
};

export default useSelectedClass;
