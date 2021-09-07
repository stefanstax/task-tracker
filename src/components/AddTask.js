import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addTask } from '../store/task/taskAction';
import { addTaskLoading } from '../store/task/taskSelector';

export default function AddTask() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskStatus,setTaskStatus] = useState(null);
  const addTaskLoadingSelector = useSelector(addTaskLoading);
  const onHide = () => {
    clearState();
    setShowModal(false);
  }

  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setTaskStatus(e.target.value);
  }

  const handleTaskNameChange = (e) => {
    console.log(e.target.value);
    setTaskName(e.target.value);
  }

  const clearState = () => {
    setTaskName('');
    setTaskStatus('pending');
  }

  const handleSubmit = async () => {
    try {
      await dispatch(addTask({
        title: taskName,
        isCompleted: taskStatus === 'completed'
      }));
      setShowModal(false);
      clearState();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 2, offset: 10 }}>
          <Button
            variant="secondary"
            onClick={() => setShowModal(true)}>
            <i className="fas fa-plus"></i>
            Add Task
            </Button>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={() => onHide()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Task
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete="off" noValidate>
            <Form.Group controlId="taskname">
              <Form.Label>Task Name</Form.Label>
              <Form.Control type="text" value={taskName} onChange={handleTaskNameChange} placeholder="Enter task name"/>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row} onChange={handleRadioChange}>
                <Form.Label as="legend" column sm={2}>
                  Task Status
                 </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Pending"
                    name="taskstatus"
                    id="pending"
                    value="pending" 
                    defaultChecked
                  />
                  <Form.Check
                    type="radio"
                    label="Completed"
                    name="taskstatus"
                    value="completed"
                    id="completed"
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => onHide()}>Cancel</Button>
          <Button variant="secondary" onClick={() => handleSubmit()}>Submit {addTaskLoadingSelector && <Spinner animation="border" size="small" />}</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
