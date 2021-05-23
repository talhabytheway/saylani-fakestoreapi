import { useState, useEffect } from 'react';

function useFetch(id) {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const callApi = async () => {
    setLoading(true);
    let responce = await fetch(`https://fakestoreapi.com/products/${id}`);
    let jsoned = await responce.json();
    setLoading(false);
    setProduct(jsoned);
  };
  useEffect(() => {
    callApi();
  }, []);

  return [product, isLoading];
}

export default useFetch;
