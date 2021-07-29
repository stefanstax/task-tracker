import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../store/task/taskAction";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { taskList } from "../store/task/taskSelector";
import trashicon from "../assets/trash.svg";
const ListTask = () => {
  const dispatch = useDispatch();
  const taskListSelector = useSelector(taskList);

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = () => {
    dispatch(getTask());
  };
  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          {taskListSelector.map((task) => (
            <Col key={task.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{task.title}</Card.Title>
                  <Button variant="outline-danger" size="sm">
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
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ListTask;
