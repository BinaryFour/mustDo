import { DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import type { DialogProps } from "@mui/material";

export interface TaskDialogProps {
  open: boolean;
  dialogContent: React.ReactNode;
  onClose: () => void;
}

const TaskDialog = ({ open, onClose, dialogContent }: TaskDialogProps) => {
  const handleClose: DialogProps["onClose"] = (_, reason) => {
    if ((reason && reason === "backdropClick") || reason === "escapeKeyDown") {
      return;
    }
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
      <DialogContent className="bg-amber-200">{dialogContent}</DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
