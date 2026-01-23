import { useEffect, useState } from "react";
import { getPageConfig } from "../api/pageconfig.api";

export default function usePageConfig() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPageConfig()
      .then((res) =>{console.log(res); console.log(''), setData(res.data)})
      .catch(setError)
      .finally(() => setLoading(false));
  }, {});

  return { data, loading, error };
}
