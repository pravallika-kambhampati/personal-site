import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tile from '../components/Tile';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(45),
   
  },
  tile: {
    padding: theme.spacing(10),
    textAlign: 'center',
    
  },
  TextHeading : {
    fontFamily: "Pacifico", 
    paddingBottom :theme.spacing(5), 
    fontSize: "47px", 
    textAlign: "center" ,
    marginLeft: "-445px",
  } 
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <div className={classes.TextHeading}>
               <br />
                A few of my skills
                <br />
          </div>
      <Grid  container spacing={5}>
        <Grid item xs={6} sm={3}>
          <Tile className={classes.tile} body="Git is a distributed version control system. Every dev has a working copy of the code and..." url="https://en.wikipedia.org/wiki/Git" name="Git" imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png" />
        </Grid>
        <Grid item xs={6} sm={3}>
         <Tile className={classes.tile} body="Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser ..." url="https://en.wikipedia.org/wiki/HTML" name="HTML" imgsrc="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png" />
        </Grid>
        <Grid item xs={3} sm={3}>
         <Tile className={classes.tile} url="https://en.wikipedia.org/wiki/CSS" name="CSS" body="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a ..." imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/180px-CSS3_logo_and_wordmark.svg.png" />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={6} sm={3}>
          <Tile className={classes.tile} body="JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript ..." url="https://en.wikipedia.org/wiki/JavaScript" name="JavaScipt" imgsrc="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png" />
          </Grid>
        <Grid item xs={6} sm={3}>
         <Tile className={classes.tile} body="React is an open-source JavaScript library for building user interfaces or UI components...." url="https://en.wikipedia.org/wiki/React_(web_framework)" name="React" imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/330px-React-icon.svg.png" />
        </Grid>
        <Grid item xs={6} sm={3}>
         <Tile className={classes.tile} body="Gatsby is a React-based, GraphQL powered, static site generator. ..." url="https://www.gatsbyjs.com/" name="GatsbyJs" imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTH395X3PWHxfztU_IuEPiqVzAtsnxDrHh1A&usqp=CAU" />
        </Grid>
      </Grid>
    </div>
  );
}
