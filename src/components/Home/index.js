import Products from '../Products';

import useFetch from '../../useFetch';

function Home() {
  const [users, isLoading, setApiEndPoint] = useFetch();
  console.log(users, 'users');
  return (
    <>
      <button
        onClick={() => setApiEndPoint('https://fakestoreapi.com/products')}
      >
        asec
      </button>
      <button
        onClick={() =>
          setApiEndPoint('https://fakestoreapi.com/products?sort=desc')
        }
      >
        desc
      </button>
      <Products payload={users} isLoading={isLoading} />
    </>
  );
}

export default Home;
