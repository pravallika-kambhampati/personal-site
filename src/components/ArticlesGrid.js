import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediumItem from './MediumItem';
import Img1 from '../assets/a1.png';
import Img2 from '../assets/Img2_cropped.jpg';
import Img3 from '../assets/a3.png';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(30)
    
  },
 title : {
    fontFamily: "Pacifico", 
    paddingBottom :theme.spacing(5), 
    fontSize: "47px", 
    textAlign: "center" ,
   
 },
 

}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Typography 
      className={classes.title}
     > 
        recent articles

     </Typography>
     
      <Grid 
       container
       
       justify="center"
       
      >
        <Grid item style={{display: 'flex', padding: "10px"}} xs={6} sm={3}>
          <MediumItem  imgsrc={Img1}  title="Learning the great “Gatsby JS” — a tutorial for beginners — Part I" url="https://medium.com/@pravallika13kambhampati/learning-the-great-gatsby-js-a-tutorial-for-beginners-part-i-1735307c7bc7" description="So, here we are. Before we get started, I know it’s been a while since I sat down and wrote something meaningful, but yeah, here we are…" />
        </Grid>
        <Grid item style={{display: 'flex', padding: "10px"}} xs={6} sm={3}>
          <MediumItem  imgsrc={Img2}  title="How quarantining and self-isolation can actually do you good ?" url="https://medium.com/@pravallika13kambhampati/how-quarantining-and-self-isolation-can-actually-do-you-good-807849d7cfc7" description="We all have been in isolation for almost 8-weeks or so. Away from our friends, family, partners or colleages at work and maybe our own…" />
        </Grid>
        <Grid item style={{display: 'flex', padding: "10px"}} xs={6} sm={3}>
         <MediumItem   imgsrc={Img3}  title="Flask, a micro framework, for (absolute) Beginners !                               " url="https://medium.com/analytics-vidhya/flask-for-absolute-beginners-64ed0d81f19a" description="If you’re a beginner like me who has no idea where to go after learning frontend technologies like HTML, CSS and JavaScript or even…" />
        </Grid>
      </Grid>
    </div>
  );
}