import { useEffect } from "react";
import { useState } from "react";

function useCustomHooks(currency) {
  let [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((response) => response.json())
      .then((value) => setData(value["rates"]));
    // console.log(data);
  }, [currency]);
  // console.log(data);
  return data;
}

export default useCustomHooks;
