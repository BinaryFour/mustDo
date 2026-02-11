"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { colors } from "../constants/colors";
import { useState } from "react";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import { useForm, SubmitHandler } from "react-hook-form";
import TaskDialog from "./dialog";

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

const emptyForm: TaskCardContent = {
  title: "New Title",
  description: "",
  checklist: [],
  deadline: null,
};

const TaskCard = () => {
  /*
    I want there to be two layouts for the card.  One minimized and one expanded.
    Minimized will just show the title and a small portion of the description.
    Expanded will show the full description and any additional details like deadline, checklist, etc.
    Clicking on the card will toggle between the two states.

    Because there will be shared state between the two layouts, I need to create two views.

    For now, The minimized view is read-only and the expanded view is editable.
    Later, I can add edit capability to the minimized view as well for quick edits.
  */

  /*
    TODO:
    1.  structure the HTML/CSS for the two views
    2.  implement the toggle between minimized and expanded views by clicking on the minimize/maximize icon in the top right corner of respective views
    3.  Put the expanded view in a modal so that the task takes up the entire screen when expanded
    4.  Add form capabilities w/ react-hook-form in order to input data
  */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isTitleEditing, setIsTitleEditing] = useState<boolean>(false);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [form, setForm] = useState<TaskCardContent>(emptyForm);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newTitle = data.title ? data.title : "Task Title";
    setForm({ ...form, title: newTitle });
    setIsTitleEditing(false);
  };

  const onChange: SubmitHandler<Inputs> = (data) => {
    setForm({ ...form, description: data.description });
  };

  const CheckboxWithX = () => {
    return (
      <div
        className="list-item-wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="checkbox-label-wrapper"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Checkbox />
          <TextField
            size="small"
            placeholder="Checklist item"
            variant="standard"
          />
        </div>
        <IconButton size="small">
          <AddIcon />
        </IconButton>
      </div>
    );
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
        <Button fullWidth>Task Finished!</Button>
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
              <IconButton
                className="border-2 border-solid"
                onClick={() => setIsExpanded(false)}
              >
                <CloseFullscreenIcon />
              </IconButton>
            }
            onDoubleClick={() => setIsTitleEditing(true)}
          />
          <CardContent className="flex flex-col gap-6">
            <form
              className="border-2 border-solid"
              onChange={handleSubmit(onChange)}
            >
              <TextField
                id="standard-multiline-static"
                fullWidth
                placeholder="Description"
                multiline
                rows={4}
                variant="standard"
                {...register("description")}
              />
            </form>
            <FormGroup className="border-2 border-solid">
              <CheckboxWithX />
            </FormGroup>
          </CardContent>
        </div>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button fullWidth>Task Finished!</Button>
        </CardActions>
      </div>
    </>
  );

  return (
    <>
      <Box>
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
