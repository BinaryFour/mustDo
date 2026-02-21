import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

const CheckboxList = () => {
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

export default CheckboxList