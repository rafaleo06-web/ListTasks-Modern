import { Divider } from "@mui/material";
import { InsertForm } from "./components/InsertForm";
import { ListTasks } from "./components/ListTasks";
import { useState } from "react";

const data = [
  { skills: ["html", "javascript", "css"], state: "todo", task: "task 1" },
  { skills: ["html", "javascript"], state: "todo", task: "task 2" },
  { skills: ["html", "javascript"], state: "doing", task: "task 3" },
];

export const AppTodoList = () => {
  const [tasks, setTasks] = useState(data);

  const onAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const onDeleteTask = (task) => {
    const filterTasks = tasks.filter((ta) => ta.task.toLowerCase().trim() !== task.task.toLowerCase().trim());
    setTasks(filterTasks);
  };

  const validTaskNotRepeat = (task) => {
    const taskFound = tasks.find((ta) => ta.task.toLowerCase().trim() === task.toLowerCase().trim());
    return taskFound;
  };

  return (
    <>
      <InsertForm onAddTask={onAddTask} validTaskNotRepeat={validTaskNotRepeat}></InsertForm>
      <Divider />
      <ListTasks tasks={tasks} onDeleteTask={onDeleteTask}></ListTasks>
    </>
  );
};
