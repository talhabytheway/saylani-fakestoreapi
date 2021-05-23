import { useState, useEffect } from 'react';

function useFetch() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [apiEndPoint, setApiEndPoint] = useState(
    'https://fakestoreapi.com/products/'
  );
  const callApi = async () => {
    setUsers([]);
    setLoading(true);
    let responce = await fetch(apiEndPoint);
    let jsoned = await responce.json();
    setLoading(false);
    setUsers(jsoned);
  };
  useEffect(() => {
    callApi();
  }, [apiEndPoint]);

  return [users, isLoading, setApiEndPoint];
}

export default useFetch;
