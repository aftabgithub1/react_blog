import { useState, useEffect } from "react";
import axios from "axios";

 const useAxiosFetch = dataUrl => {
  const [ data, setData ] = useState([]);
  const [ fetchError, setFetchError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const sourse = axios.CancelToken.source();

    const fetchData = async url => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: sourse.token
        });
        if(isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch(err) {
        if(isMounted) {
          // console.log(err.message);
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        if(isMounted) {
          setTimeout(() => setIsLoading(false), 2000);
        }
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      console.log("Cleanup completed");
      isMounted = false;
      sourse.cancel();
    };

    return cleanUp;
  }, [dataUrl]);
  
  return { data, fetchError, isLoading };
 }

 export default useAxiosFetch;