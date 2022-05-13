import fetch from 'node-fetch';

export const getApi = async (req, res) => {
  // const url="https://api.hatchways.io/assessment/blog/posts?tag=tech";
  const url=`https://fakestoreapi.com/products`;
  try {
    const response = await fetch(url)
    .then(res => res.json());
    console.log(response)
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message);
  }
}
