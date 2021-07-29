import axios from "axios";
import apiConfig from "../../config/api";
import * as taskActionType from "./taskActionType";

export const getTask = () => async (dispatch) => {
  try {
    const result = await axios.get(`${apiConfig.API_BASE_URL}/tasks`);
    setTimeout(() => {
      dispatch({
        type: taskActionType.GET_TASK,
        payload: result.data,
      });
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};
