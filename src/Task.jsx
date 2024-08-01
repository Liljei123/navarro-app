import React from "react";
import "./styles.css";

const Task = ({ index, task, toggleStatus }) => (
  <tr className={task.status === "Completed" ? "status-inactive" : ""}>
    <td>{index + 1}</td>
    <td>{task.description}</td>
    <td>{task.assignee}</td>
    {task.status === "Pending" && <td>{task.deadline}</td>}
    {task.status === "Completed" && <td>{task.deadline}</td>}
    <td>{task.status}</td>
    <td>
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </td>
  </tr>
);

export default Task;
