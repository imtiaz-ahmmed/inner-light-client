import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
const useSelectedClass = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClasses?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [selectedClasses, refetch];
};

export default useSelectedClass;
