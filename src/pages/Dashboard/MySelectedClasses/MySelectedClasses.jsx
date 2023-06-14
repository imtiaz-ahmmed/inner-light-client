import React from "react";
import useSelectedClass from "../../../Hooks/useSelectedClass";

const MySelectedClasses = () => {
  const [selectedClasses] = useSelectedClass();
  return (
    <div>
      <h2>MySelectedClasses {selectedClasses.length}</h2>
    </div>
  );
};

export default MySelectedClasses;
