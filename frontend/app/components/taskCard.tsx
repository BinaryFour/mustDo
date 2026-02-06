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
import { Dialog } from "@mui/material";
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
  const [form, setForm] = useState<TaskCardContent>(emptyForm);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setForm({ ...form, title: data.title });
    setIsTitleEditing(false);
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
        <CardContent sx={{ display: "flex", gap: 1, minBlockSize: 150 }}>
          <Typography variant="h4" gutterBottom>
            {form.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {form.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button fullWidth>Done!</Button>
      </CardActions>
    </>
  );

  const expandedCard = (
    <>
      <div className="justify-between">
        <div>
          <CardHeader
            slotProps={{
              action: {
                sx: { margin: 0 },
              },
            }}
            title={
              <div className="text-center min-h-10">
                {isTitleEditing ? (
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      autoFocus
                      size="small"
                      fullWidth
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
              <IconButton onClick={() => setIsExpanded(false)}>
                <CloseFullscreenIcon />
              </IconButton>
            }
            onDoubleClick={() => setIsTitleEditing(true)}
          />
          <CardContent>
            <TextField
              id="standard-multiline-static"
              fullWidth
              placeholder="Description"
              multiline
              rows={4}
              variant="standard"
            />
            <FormGroup>
              <CheckboxWithX />
            </FormGroup>
          </CardContent>
        </div>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button fullWidth>Done!</Button>
        </CardActions>
      </div>
    </>
  );

  return (
    <>
      {isExpanded ? (
        <TaskDialog
          open={isExpanded}
          onClose={() => setIsExpanded(false)}
          dialogContent={expandedCard}
        />
      ) : (
        <Box sx={{ maxInlineSize: 300 }}>
          <Card variant="outlined">{minimizedCard}</Card>
        </Box>
      )}
    </>
  );
};
export default TaskCard;
