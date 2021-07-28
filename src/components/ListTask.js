import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTask } from "../store/task/taskAction";
const ListTask = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = () => {
    dispatch(getTask());
  };
  return <div></div>;
};

export default ListTask;
