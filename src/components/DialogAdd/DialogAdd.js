import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  button: {
    maxHeight: 32,
    textTransform: "none",
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  add: {
    marginRight: theme.spacing(2),
  },
}));

const DialogAdd = ({ open, setOpen }) => {
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
          <AddIcon className={classes.add} />
          <Typography variant="h6">Add new tool</Typography>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <TextField className={classes.field} label="Tool Name" fullWidth />
        <TextField className={classes.field} label="Tool Link" fullWidth />
        <TextField
          className={classes.field}
          label="Tool description"
          fullWidth
          multiline
          rows={4}
        />
        <TextField className={classes.field} label="Tags" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => setOpen(false)}
          color="primary"
        >
          Add tool
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAdd;
