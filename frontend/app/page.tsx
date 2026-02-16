import Button from "@mui/material/Button";
import TaskCard from "./components/taskCard";
import { ButtonGroup } from "@mui/material";

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
      <main className="flex flex-col flex-1 bg-green-200">
        <header className="flex flex-2 items-center justify-center">
          <h1 className="font-bold text-center text-white text-5xl">
            Hello,
            <br /> Here are the tasks you Must Do!
          </h1>
        </header>
        <div className="flex flex-col flex-8 gap-6">
          <div className="flex justify-start">
            <Button variant="contained">+ New Task</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
        </div>
        <footer className="flex flex-1 justify-center bg-blue-50">
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
        </footer>
      </main>
    </div>
  );
};

export default Page;
