import React from "react";
import Design from './Design';
import Title from './Title';
import Content from './Content';
import Socials from './Socials';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 fullbody : {


marginLeft: "200px",
marginRight: "200px",
marginBottom: "200px",
  
 }

}));


export default function About() {

    const classes = useStyles();

  return (
    <div className={classes.fullbody}>
      <Title />
     <Design />
    <Content />
    <Socials />
    </div>
  );
}
