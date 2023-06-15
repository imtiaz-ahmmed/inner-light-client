import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useAddClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const fetchClasses = async () => {
    const res = await axiosSecure(`/add-classes`);
    return res.data;
  };

  const { data: allClasses = [], refetch } = useQuery(
    "allClasses",
    fetchClasses,
    {
      enabled: !!user?.email,
    }
  );

  const filteredClasses = allClasses.filter(
    (classItem) => classItem.instructorEmail === user?.email
  );

  return [filteredClasses, refetch];
};

export default useAddClasses;
