import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import DialogAdd from "../DialogAdd/DialogAdd";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: "auto",
    maxHeight: 32,
    textTransform: "none",
  },
  checkbox: {
    marginLeft: theme.spacing(0.5),
  },
}));

const SearchForm = ({ search, setSearch, update }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Grid container spacing={2} justifyContent="space-between">
      <FormControl>
        <Input
          name="searchQuery"
          value={search.searchQuery}
          onChange={(e) =>
            setSearch({ ...search, [e.target.name]: e.target.value })
          }
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControlLabel
        className={classes.checkbox}
        control={
          <Checkbox
            name="searchInTagsOnly"
            checked={search.searchInTagsOnly}
            onChange={(e) => {
              setSearch({ ...search, [e.target.name]: e.target.checked });
            }}
            color="primary"
          />
        }
        label="search in tags only"
      />
      <Button
        startIcon={<AddIcon />}
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
      >
        Add
      </Button>
      <DialogAdd update={update} open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default SearchForm;
