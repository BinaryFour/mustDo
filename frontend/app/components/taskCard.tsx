"use client";

import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import invariant from "tiny-invariant";
import TaskDialog from "./dialog";
import dayjs from "dayjs";
import TimeRange from "../lib/clientLocalizationProvider";

interface ChecklistItem {
  text: string;
  isCompleted: boolean;
}

interface TaskCardContent {
  title: string;
  description: string;
  checklist: ChecklistItem[];
  deadline: Date | null;
}

type Inputs = {
  title: string;
  description: string;
};

type TaskCardProps = {
  id: number;
  closeTask: (id: number) => void;
};

const emptyForm: TaskCardContent = {
  title: "New Title",
  description: "",
  checklist: [],
  deadline: null,
};

const TaskCard = ({ id, closeTask }: TaskCardProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [isTitleEditing, setIsTitleEditing] = useState<boolean>(false);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [form, setForm] = useState<TaskCardContent>(emptyForm);
  const [dragging, setDragging] = useState<boolean>(false);

  // const dayjs = require("dayjs");
  const taskCardRef = useRef(null);

  useEffect(() => {
    const el = taskCardRef.current;
    invariant(el);

    return draggable({
      element: el,
      onDragStart: () => setDragging(true),
      onDrop: () => setDragging(false),
    });
  }, []);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newTitle = data.title ? data.title : "Task Title";
    setForm({ ...form, title: newTitle });
    setIsTitleEditing(false);
  };

  const onChange: SubmitHandler<Inputs> = (data) => {
    setForm({ ...form, description: data.description });
  };

  const minimizedCard = (
    <>
      <CardActionArea onClick={() => setIsExpanded(true)}>
        <CardContent className="flex flex-col gap-1">
          <Typography variant="h4" gutterBottom>
            {form.title}
          </Typography>
          <TextField
            className="pointer-events-none"
            id="standard-multiline-static"
            fullWidth
            placeholder="Description"
            multiline
            rows={4}
            variant="standard"
            disabled
            value={form.description}
          />
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button onClick={() => closeTask(id)} fullWidth>
          Task Finished!
        </Button>
      </CardActions>
    </>
  );

  const expandedCard = (
    <>
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <CardHeader
            slotProps={{
              action: {
                sx: { margin: 0 },
              },
            }}
            title={
              <div className="text-center min-h-10 border-2 border-solid">
                {isTitleEditing ? (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    onBlur={handleSubmit(onSubmit)}
                  >
                    <TextField
                      autoFocus
                      size="small"
                      fullWidth
                      placeholder="Task Title"
                      {...register("title")}
                    />
                  </form>
                ) : (
                  <div className="hover:bg-slate-100 active:bg-slate-200 min-h-10 text-2xl/10 cursor-pointer">
                    {form.title}
                  </div>
                )}
              </div>
            }
            action={
              <>
                <IconButton
                  className="border-2 border-solid"
                  onClick={() => setIsExpanded(false)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  className="border-2 border-solid"
                  onClick={() => setIsExpanded(false)}
                >
                  <CloseFullscreenIcon />
                </IconButton>
              </>
            }
            onClick={() => setIsTitleEditing(true)}
          />
          <CardContent className="flex flex-col gap-4">
            <form
              className="border-2 border-solid"
              onChange={handleSubmit(onChange)}
            >
              <TextField
                id="standard-multiline-static"
                fullWidth
                placeholder="Description"
                multiline
                rows={2}
                variant="standard"
                {...register("description")}
              />
            </form>
            <form>
              <div className="flex flex-row gap-4">
                <TimePicker defaultValue={dayjs()} />
                <TimePicker defaultValue={dayjs().add(1, "h")} />
              </div>
            </form>
          </CardContent>
        </div>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button onClick={() => closeTask(id)} fullWidth>
            Task Finished!
          </Button>
        </CardActions>
      </div>
    </>
  );

  return (
    <>
      <Box
        ref={taskCardRef}
        className={`${dragging ? "opacity-50" : "opacity-100"}`}
      >
        <Card variant="outlined">{minimizedCard}</Card>
      </Box>
      {isExpanded ? (
        <TaskDialog
          open={isExpanded}
          onClose={() => setIsExpanded(false)}
          dialogContent={expandedCard}
        />
      ) : null}
    </>
  );
};
export default TaskCard;
