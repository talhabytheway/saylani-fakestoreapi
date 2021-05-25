import { useState, useEffect } from 'react';

function useFetch([category, sort]) {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [apiEndPoint, setApiEndPoint] = useState(
    `https://fakestoreapi.com/products${sort ? '?sort=' + sort : ''}`
  );

  // asec/desc
  useEffect(() => {
    setApiEndPoint(`https://fakestoreapi.com/products?sort=${sort}`);
  }, [sort]);

  // filter
  // useEffect(() => {
  //   if (category === ('ele' || 'jew' || 'men' || 'wom')) {
  //     setProducts(users.filter((e) => e.category.slice(0, 3) === category));
  //     console.log(products);
  //   } else if (category === 'all') {
  //     setProducts(users);
  //   }
  // }, [category]);

  // calling api
  const callApi = async () => {
    setLoading(true);
    let responce = await fetch(apiEndPoint);
    let jsoned = await responce.json();
    setLoading(false);
    // setUsers(jsoned);
    setProducts(jsoned);

    console.log('api call after apiendpoint change');
  };
  useEffect(() => {
    callApi();
  }, [apiEndPoint]);

  return [products, isLoading, setApiEndPoint];
}

export default useFetch;
