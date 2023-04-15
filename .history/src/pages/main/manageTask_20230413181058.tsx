import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTask, editTask } from "../store/tasksSlice";

const ManageTask = ({ match }) => {
  const taskId = match.params.id;
  const taskToEdit = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );

  const [taskName, setTaskName] = useState(taskToEdit ? taskToEdit.name : "");
  const [taskDescription, setTaskDescription] = useState(
    taskToEdit ? taskToEdit.description : ""
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskToEdit) {
      dispatch(editTask({ id: taskId, name: taskName, description: taskDescription }));
    } else {
      dispatch(addTask({ name: taskName, description: taskDescription }));
    }

    history.push("/");
  };

  return (
    <div>
      <h2>{taskToEdit ? "Edit Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task-name">Name:</label>
          <input
            type="text"
            id="task-name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="task-description">Description:</label>
          <textarea
            id="task-description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <button type="submit">{taskToEdit ? "Save" : "Add"}</button>
      </form>
    </div>
  );
};

export default ManageTask;