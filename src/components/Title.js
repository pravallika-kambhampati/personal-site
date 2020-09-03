import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 title : {
    fontFamily: "Pacifico", 
    paddingBottom :theme.spacing(5), 
    fontSize: "47px", 
    textAlign: "center" ,
    paddingTop: theme.spacing(25)
 },
 

}));


const Title = () => {
  const classes = useStyles();
  return (
      <Typography className={classes.title}> 
        About Me 
      </Typography>
  )

}

export default Title;