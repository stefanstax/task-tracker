import * as taskActionType from "./taskActionType";

const initialTaskState = {
  taskList: [],
  getTaskLoading: false,
};

const taskReducer = (state = initialTaskState, { type, payload }) => {
  switch (type) {
    case taskActionType.GET_TASK_BEGINS:
      return {
        ...state,
        getTaskLoading: true,
      };

    case taskActionType.GET_TASK_SUCCESS:
      return {
        ...state,
        getTaskLoading: false,
        taskList: payload,
      };

    case taskActionType.GET_TASK_FAILURE:
      return {
        ...state,
        getTaskLoading: false,
      };

    default:
      return state;
  }
};

export default taskReducer;
