import axios from "axios";

const LoadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserBegin",
    });
    const { data } = await axios.get("http://localhost:5000/api/v1/get-user", {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserError",
      payload: error.response.data.message,
    });
  }
};

export { LoadUser };
