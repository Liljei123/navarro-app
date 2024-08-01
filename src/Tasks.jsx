import React, { useState } from "react";
import Task from "./Task";
import SearchFilter from "./SearchFilter";
import "./styles.css";

const Tasks = () => {
  const initialTasks = [
    {
      description: "Identify and document defects and issues.",
      assignee: "Jei",
      deadline: "2025-04-01",
      status: "Pending",
    },
    {
      description: "Develop and execute test plans and test cases.",
      assignee: "Allen",
      deadline: "2025-01-01",
      status: "Pending",
    },
    {
      description: "Monitor product performance and iterate based on feedback.",
      assignee: "Mike",
      deadline: "2024-10-01",
      status: "Pending",
    },
    {
      description:
        "Collaborate with development teams to bring products to market.",
      assignee: "John",
      deadline: "2024-07-01",
      status: "Pending",
    },
    {
      description: "Gather and prioritize product requirements.",
      assignee: "Japhzel",
      deadline: "2024-04-01",
      status: "Pending",
    },
    {
      description: "Define product vision and strategy.",
      assignee: "Edwin",
      deadline: "2024-01-01",
      status: "Pending",
    },
    {
      description: "Advise management on financial decisions.",
      assignee: "Rodel",
      deadline: "2023-10-01",
      status: "Completed",
    },
    {
      description: "Evaluate investment opportunities and risks.",
      assignee: "Rey",
      deadline: "2023-07-01",
      status: "Completed",
    },
    {
      description: "Prepare financial forecasts and reports.",
      assignee: "Ardon",
      deadline: "2023-04-01",
      status: "Completed",
    },
    {
      description: "Analyze financial data and trends.",
      assignee: "Anna",
      deadline: "2023-01-01",
      status: "Completed",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStatus = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status =
      newTasks[index].status === "Pending" ? "Completed" : "Pending";
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task Description</th>
            <th>Assignee</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <Task
              key={index}
              index={index}
              task={task}
              toggleStatus={toggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
