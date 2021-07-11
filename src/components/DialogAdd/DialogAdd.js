import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import API from "../../api/api";

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

const initialFormState = {
  title: "",
  link: "",
  description: "",
  tags: "",
};

const DialogAdd = ({ open, setOpen, update }) => {
  const classes = useStyles();

  const [formState, setFormState] = useState(initialFormState);

  const handleInput = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const addTool = () => {
    API.post("/tools", {
      title: formState.title,
      link: formState.link,
      description: formState.description,
      tags: formState.tags ? formState.tags.split(" ") : [],
    })
      .then(() => {
        update();
        setOpen(false);
        setFormState({ ...initialFormState });
      })
      .catch((e) => console.log(e));
  };

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
        <TextField
          name="title"
          onChange={handleInput}
          value={formState.title}
          className={classes.field}
          label="Tool Name"
          fullWidth
        />
        <TextField
          name="link"
          onChange={handleInput}
          value={formState.link}
          className={classes.field}
          label="Tool Link"
          fullWidth
        />
        <TextField
          name="description"
          onChange={handleInput}
          value={formState.description}
          className={classes.field}
          label="Tool description"
          fullWidth
          multiline
          rows={4}
        />
        <TextField
          name="tags"
          onChange={handleInput}
          value={formState.tags}
          className={classes.field}
          label="Tags"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.button}
          variant="contained"
          onClick={addTool}
          color="primary"
        >
          Add tool
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAdd;
