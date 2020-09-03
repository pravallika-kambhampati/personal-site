import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WorkCard from './WordCard';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 200,
    flexGrow: 1,
  },
  title: {
    padding: theme.spacing(10),
    textAlign: 'center',
    fontFamily: "Pacifico", 
    fontSize: "47px", 
  },
 
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography className={classes.title}>
            my projects 
        </Typography>
      <Grid container spacing={3}>

        <Grid item xs={12}>
         <WorkCard title="Micro Blog" description="A flask app with postgresql that lets you make an account and make a blog post once a day!" url="https://github.com/pravzzyy/flask-micro-blog" />
        </Grid>
        <Grid item xs={12}>
        <WorkCard title="URL Shortner" description="A nice URL Shortner using Flask and Postgres" url="https://github.com/pravzzyy/flask-url-shortener" />
        </Grid>
        <Grid item xs={12}>
        <WorkCard title="WordOfTheDay" description="A simple twitter bot that tweets a word with it's definition once a day, using Words API." url="https://github.com/pravzzyy/wordoftheday" />
        </Grid>
        <Grid item xs={12}>
        <WorkCard title="Pokedex" description="Uses PokeAPI to display various pokemons with corresponding info using ReactJs with a search bar :)" url="https://github.com/pravzzyy/pokedex" />
        </Grid>
      </Grid>
    </div>
  );
}
