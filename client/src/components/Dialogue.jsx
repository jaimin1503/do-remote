import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import axios from "axios";
import { toast } from "react-hot-toast";

const Dialogue = ({ open, handleClose, jId }) => {
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/job/deletejob/${jId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.message);
        handleClose();
        window.location.replace("/db");
      })
      .catch((err) => {
        console.log(err);
      });
    toast.success("Job deleted successfully");
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this job?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            <span className=" text-red-500">Delete</span>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Dialogue;
