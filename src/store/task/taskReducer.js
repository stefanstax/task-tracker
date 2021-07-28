import * as taskActionType from "./taskActionType";

const initialTaskState = {
  tasklist: [],
};

const taskReducer = (state = initialTaskState, { type, payload }) => {
  switch (type) {
    case taskActionType.GET_TASK:
      return {
        ...state,
        tasklist: payload
      };
    default:
      return state;
  }
};

export default taskReducer;
