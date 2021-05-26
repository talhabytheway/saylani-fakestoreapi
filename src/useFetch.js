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
  useEffect(() => {
    if (
      category === 'ele' ||
      category === 'jew' ||
      category === 'men' ||
      category === 'wom'
    ) {
      let newUsers = users.filter((e) => e.category.slice(0, 3) === category);
      setProducts(newUsers);
      console.log(category, newUsers, 'if ');
    } else {
      setProducts(users);
      console.log(category, 'else');
    }
  }, [category, users]);

  // calling api
  const callApi = async () => {
    setLoading(true);
    let responce = await fetch(apiEndPoint);
    let jsoned = await responce.json();
    setLoading(false);
    setUsers(jsoned);
    console.log('api call after apiendpoint change');
  };
  useEffect(() => {
    callApi();
  }, [apiEndPoint]);

  return [products, isLoading];
}

export default useFetch;
