import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import ToolCard from "./ToolCard/ToolCard";
import API from "../api/api";
import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 600,
    maxWidth: 715,
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [tools, setTools] = useState([]);
  const [search, setSearch] = useState({
    searchQuery: "",
    searchInTagsOnly: false,
  });

  useEffect(() => {
    API.get(
      search.searchInTagsOnly
        ? `/tools?tags_like=${search.searchQuery}`
        : `/tools?q=${search.searchQuery}`
    )
      .then((response) => setTools(response.data))
      .catch((e) => console.log(e));
  }, [search]);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.content}>
          <Header />
        </Grid>

        <Grid item xs={12} className={classes.content}>
          <SearchForm search={search} setSearch={setSearch} />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} direction="column">
            {tools.map((tool) => (
              <Grid item key={tool.id}>
                <ToolCard tool={tool} search={search} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
