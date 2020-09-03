import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 content : {

marginTop: "300px",
marginLeft: "200px",
marginRight: "200px",
  fontFamily: "Satisfy", 
  paddingBottom :theme.spacing(5), 
  fontSize: "32px", 
  textAlign: "center" ,
  
 }

}));

const Content = () => {
  const classes = useStyles();
  return(
    <Typography className={classes.content}>
        Hey, there. I am Pravallika. I'm Computer Science 'n' Engg student from India, who loves developing websites, pizza, cats and oh, Taylor Swift. I also write "technical blogs" when I'm free. And draw when I feel like it.  

    </Typography>
  )


}

export default Content;
