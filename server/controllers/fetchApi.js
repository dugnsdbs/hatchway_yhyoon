import fetch from 'node-fetch';

export const getApi = async (req, res) => {
  // const url="https://api.hatchways.io/assessment/blog/posts?tag=tech";
  // const url=`https://fakestoreapi.com/products`;
  const url=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=80905b7d4db44e5eaedd9c871ea1811c`
  try {
    const response = await fetch(url)
    .then(res => res.json());
    console.log(response)
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message);
  }
}
