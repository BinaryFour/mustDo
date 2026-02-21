"use client";

import Button from "@mui/material/Button";
import TaskCard from "./components/taskCard";
import { ButtonGroup } from "@mui/material";
import { useRef, useState } from "react";

type Task = {
  id: number;
};

const Page = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskCounter = useRef(0);

  const onClick = () => {
    if (tasks.length >= 8) {
      alert(
        "You have reached the maximum number of tasks!  I will handle infinite tasks in the future!",
      );
      return;
    }
    setTasks([...tasks, { id: taskCounter.current }]);
    taskCounter.current += 1;
  };

  const closeTask = (id: number) => {
    console.log("close task called with id: ", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  console.log("tasks", tasks);
  return (
    <div className="flex flex-col h-screen justify-evenly">
      <main className="flex flex-col flex-1 bg-green-300">
        <header className="flex flex-2 items-center justify-center">
          <h1 className="font-bold text-center text-white text-5xl">
            Hello,
            <br /> Here are the tasks you Must Do!
          </h1>
        </header>
        <div className="flex-6 flex flex-col gap-4 p-4">
          <div className="grid grid-cols-4 grid-rows-2 gap-4 ">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                closeTask={() => closeTask(task.id)}
              />
            ))}
          </div>
        </div>
        <footer className="flex flex-1 flex-col sticky bottom-0 gap-4">
          <div className="flex justify-end px-4">
            <Button variant="contained" onClick={() => onClick()}>
              + New Task
            </Button>
          </div>
          <div className="flex flex-1 justify-center bg-blue-50">
            <ButtonGroup variant="text" className="">
              <Button className="flex-1 basis-auto" variant="text" size="large">
                Accomplishments
              </Button>
              <Button className="flex-1 basis-auto" variant="text" size="large">
                I'm Overwhelmed!
              </Button>
              <Button className="flex-1 basis-auto" variant="text" size="large">
                About
              </Button>
            </ButtonGroup>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Page;
function invariant(el: null) {
  throw new Error("Function not implemented.");
}
