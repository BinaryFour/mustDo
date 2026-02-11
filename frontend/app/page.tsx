import Button from "@mui/material/Button";
import TaskCard from "./components/taskCard";

type Task = {
  title: string;
  description: string;
};

const Page = () => {
  const tasks: Task[] = [
    { title: "Task 1", description: "Description for Task 1" },
    { title: "Task 2", description: "Description for Task 2" },
    { title: "Task 3", description: "Description for Task 3" },
  ];

  return (
    <div className="flex flex-col h-screen justify-evenly">
      <header className="bg-gray-400">
        <h1>Must Do: The App that keeps up with your life</h1>
      </header>
      <main className="flex flex-row flex-1 bg-red-400">
        <div className="flex flex-col flex-2 p-6 gap-6">
          <div className="flex justify-start">
            <Button variant="contained">+ New Task</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6 bg-blue-500">
          <div className="flex justify-center">
            <h2>Done!</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
