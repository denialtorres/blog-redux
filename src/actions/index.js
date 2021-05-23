import jsonPlaceholder from "../apis/jsonPlaceholder";

// THIS IS AN ACTION CREATOR

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POST", payload: response });
};
