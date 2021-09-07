import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask, deleteTask, updateTask } from "../store/task/taskAction";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import {
  getTaskLoading,
  taskList,
  deleteTaskLoading,
  updateTaskLoading,
} from "../store/task/taskSelector";

const ListTask = () => {
  const dispatch = useDispatch();
  const taskListSelector = useSelector(taskList);
  const getTaskLoadingSelector = useSelector(getTaskLoading);
  const deleteTaskLoadingSelector = useSelector(deleteTaskLoading);
  const updateTaskLoadingSelector = useSelector(updateTaskLoading);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [updateTaskId, setUpdateTaskId] = useState(null);

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = () => {
    dispatch(getTask());
  };

  const removeTask = (task) => {
    setDeleteTaskId(task.id);
    dispatch(deleteTask(task.id));
  };

  const updateTaskStatus = (task) => {
    setUpdateTaskId(task.id);
    dispatch(
      updateTask({
        ...task,
        isCompleted: true,
      })
    );
  };

  return (
    <div>
      <Container>
        {!getTaskLoadingSelector && taskListSelector.length === 0 && (
          <h1>Task List Empty</h1>
        )}
        {getTaskLoadingSelector ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading data. Please wait...
            </Button>
          </div>
        ) : (
          <Row className="justify-content-center mt-5 flex-column">
            {taskListSelector.map((task) => (
              <Col key={task.id}>
                <li
                  className={`${
                    task.isCompleted ? "task-completed" : "task-pending"
                  } mb-3 list-group-item d-flex justify-content-between align-items-center`}
                >
                  <span>{task.title}</span>
                  <div className="">
                    {!task.isCompleted === true ? (
                      <Button
                        variant="outline-secondary"
                        onClick={() => updateTaskStatus(task)}
                        size="sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-check-all"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                        </svg>
                        {updateTaskLoadingSelector &&
                        task.id === updateTaskId ? (
                          <Spinner animation="border" size="sm" />
                        ) : null}
                      </Button>
                    ) : null}

                    <Button
                      variant="outline-danger"
                      className="mx-2"
                      onClick={() => removeTask(task)}
                      size="sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash2-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                      </svg>
                      {deleteTaskLoadingSelector && task.id === deleteTaskId ? (
                        <Spinner animation="border" size="sm" />
                      ) : null}
                    </Button>
                  </div>
                </li>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ListTask;
