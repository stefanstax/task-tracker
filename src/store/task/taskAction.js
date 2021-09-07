import axios from "axios";
import apiConfig from "../../config/api";
import * as taskActionType from "./taskActionType";
import { toast } from "react-toastify";

export const getTask = () => async (dispatch) => {
  try {
    dispatch({ type: taskActionType.GET_TASK_BEGINS });
    const result = await axios.get(`${apiConfig.API_BASE_URL}/tasks`);
    setTimeout(() => {
      dispatch({
        type: taskActionType.GET_TASK_SUCCESS,
        payload: result.data,
      });
    }, 3000);
  } catch (error) {
    dispatch({
      type: taskActionType.GET_TASK_FAILURE,
    });
    toast.error(error.message);
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    dispatch({ type: taskActionType.ADD_TASK_BEGINS });
    const result = await axios.post(`${apiConfig.API_BASE_URL}/tasks`, taskData);
    setTimeout(() => {
      dispatch({
        type: taskActionType.ADD_TASK_SUCCESS,
        payload: result.data,
      });
    });
    toast.success('Task Added Successfully');
  } catch (error) {
    dispatch({
      type: taskActionType.ADD_TASK_FAILURE,
    });
    toast.error(error.message);
    throw error;
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: taskActionType.DELETE_TASK_BEGINS });
    const result = await axios.patch(`${apiConfig.API_BASE_URL}/tasks/${id}`);
    setTimeout(() => {
      dispatch({
        type: taskActionType.DELETE_TASK_SUCCESS,
        payload: id,
      });
    });
    toast.success('Task Deleted Successfully');
  } catch (error) {
    dispatch({
      type: taskActionType.DELETE_TASK_FAILURE,
    });
    toast.error(error.message);
    throw error;
  }
};

export const updateTask = (taskData) => async (dispatch) => {
  try {
    dispatch({ type: taskActionType.UPDATE_TASK_BEGINS });
    const result = await axios.patch(`${apiConfig.API_BASE_URL}/tasks/${taskData.id}`, taskData);
    setTimeout(() => {
      dispatch({
        type: taskActionType.UPDATE_TASK_SUCCESS,
        payload: result.data,
      });
    });
    toast.success('Task Updated Successfully');
  } catch (error) {
    dispatch({
      type: taskActionType.UPDATE_TASK_FAILURE,
    });
    toast.error(error.message);
    throw error;
  }
};
