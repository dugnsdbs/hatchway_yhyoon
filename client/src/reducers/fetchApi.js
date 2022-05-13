const getApi = (api=[], action) => {
  switch (action.type) {
    case "GET_API":
      return action.payload;
    default:
      return api;
  }
}

export default getApi