import TaskCard from "./components/taskCard";

export default function Page() {
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
      <div className="header" style={{ backgroundColor: "gray" }}>
        <h1>Must Do: The App that keeps up with your life</h1>
      </div>
      <div
        className="dashboard-container"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          backgroundColor: "gainsboro",
        }}
      >
        <h1>Today's Tasks</h1>
        <div
          className="priority1"
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            backgroundColor: "lightcoral",
          }}
        >
          <h1 style={{ flex: 1 }}>Must Do</h1>
          <div
            className="task-container"
            style={{
              display: "flex",
              flex: 6,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TaskCard />
          </div>
        </div>
        {/* <div
          className="priority2"
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            backgroundColor: "lightyellow",
          }}
        >
          <h1 style={{ flex: 1 }}>Should Do</h1>
          <div
            className="task-container"
            style={{
              display: "flex",
              flex: 6,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TaskCard />
          </div>
        </div>
        <div
          className="priority3"
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            backgroundColor: "lightblue",
          }}
        >
          <h1 style={{ flex: 1 }}>Can Do</h1>
          <div
            className="task-container"
            style={{
              display: "flex",
              flex: 6,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TaskCard />
          </div>
        </div> */}
      </div>
    </div>
  );
}
