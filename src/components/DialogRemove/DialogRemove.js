import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  button: {
    maxHeight: 32,
    textTransform: "none",
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  remove: {
    marginRight: theme.spacing(2),
  },
  bold: {
    fontWeight: "bold",
  },
  dialogContentText: {
    marginBottom: theme.spacing(1.5),
  },
}));

const DialogRemove = ({ open, setOpen, tool }) => {
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>
        <Grid container alignItems="center">
          <ClearIcon className={classes.remove} />
          <Typography variant="h6">Remove Tool</Typography>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Typography className={classes.dialogContentText} component="p">
          Are you sure you want to remove <b>{tool}</b>?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => setOpen(false)}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => setOpen(false)}
          color="primary"
        >
          Yes, remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogRemove;
