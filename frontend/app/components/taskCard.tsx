import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function TaskCard() {

  //TODO: Add draggable component
  //TODO: Add deadline/date picker component
  //TODO: Add check list capability to description.  Need a design
  //TODO: Button removes task from workarea and archives it in completedarea w/ timestamp of completion

  const ariaLabel = { "aria-label": "description" };
  const card = (
    <>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.primary", fontSize: 14 }}>
          <Input placeholder="Title" inputProps={ariaLabel} fullWidth />
        </Typography>
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
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
