import Button from "@mui/material/Button";
import TaskCard from "./components/taskCard";
import { colors } from "./constants/colors";

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
    <div
      className="main-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "98vh",
      }}
    >
      <header className="header" style={{ backgroundColor: "gray" }}>
        <h1>Must Do: The App that keeps up with your life</h1>
      </header>
      <main
        className="dashboard-container"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          backgroundColor: "gainsboro",
        }}
      >
        <div
          className="in-progress-column"
          style={{
            flex: 2,
            backgroundColor: colors.inProgressRed,
            padding: "1rem",
          }}
        >
          <div
            className="column-header"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingBlockEnd: "1rem",
            }}
          >
            <Button variant="contained">+ New Task</Button>
          </div>
          <TaskCard />
        </div>
        <div
          className="done-column"
          style={{ flex: 1, backgroundColor: colors.doneBlue, padding: "1rem" }}
        >
          <div
            className="column-header"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: colors.doneBlue,
            }}
          >
            <h2>Done!</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
