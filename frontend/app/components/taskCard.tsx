"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { colors } from "../constants/colors";
import { useState } from "react";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

interface ChecklistItem {
  text: string;
  isCompleted: boolean;
}

interface TaskCardState {
  isExpanded: boolean;
  title: string;
  description: string;
  checklist: ChecklistItem[];
  deadline: Date | null;
}

const emptyForm: TaskCardState = {
  isExpanded: false,
  title: "",
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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [form, setForm] = useState<TaskCardState>(emptyForm);

  const minimizedCard = (
    <>
      <CardActionArea>
        <CardContent sx={{ minBlockSize: 150 }}>
          <Typography variant="h4" gutterBottom>
            Task Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a sample task description.
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
      <CardContent>
        <Input placeholder="Title" fullWidth />
        <TextField
          id="standard-multiline-static"
          fullWidth
          placeholder="Description"
          multiline
          rows={4}
          variant="standard"
        />
      </CardContent>
      <CardActions>
        <Button size="small">Done!</Button>
      </CardActions>
    </>
  );

  return (
    <>
      {isExpanded ? (
        <Box sx={{ maxInlineSize: 275 }}>
          <Card variant="outlined">{expandedCard}</Card>
        </Box>
      ) : (
        <Box sx={{ maxInlineSize: 300 }}>
          <Card variant="outlined">{minimizedCard}</Card>
        </Box>
      )}
    </>
  );
};
export default TaskCard;
