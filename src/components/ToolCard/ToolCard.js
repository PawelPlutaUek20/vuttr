import {
  Box,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import DialogRemove from "../DialogRemove/DialogRemove";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
  tag: {
    marginRight: theme.spacing(0.5),
  },
  inTag: {
    backgroundColor: "rgb(255,229,153)",
  },
  delete: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  paper: {
    position: "relative",
  },
}));

const ToolCard = ({ tool, search, update }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  return (
    <Paper className={classes.paper}>
      <IconButton
        onClick={() => setOpen(true)}
        className={classes.delete}
        aria-label="delete"
      >
        <ClearIcon />
      </IconButton>
      <DialogRemove open={open} setOpen={setOpen} tool={tool} update={update} />
      <Grid container direction="column" className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h6">
            <Link
              target={tool.link ? "_blank" : "_self"}
              underline="always"
              href={tool.link || "#"}
            >
              {tool.title}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="body1">
            {tool.description}
          </Typography>
        </Grid>
        <Grid item container xs={12}>
          {tool.tags.map((tag, tagIdx) => (
            <Grid item key={tagIdx} className={classes.tag}>
              <Typography component="div">
                <Box
                  className={search.searchQuery === tag ? classes.inTag : ""}
                  fontWeight="fontWeightBold"
                >{`#${tag}`}</Box>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToolCard;
