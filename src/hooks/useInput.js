import { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const inputHandeler = (e) => {
    setValue(e.target.value);
  };

  const clearInput = (e) => {
    setValue("");
  };

  return [value, inputHandeler, clearInput];
};

export default useInput;
