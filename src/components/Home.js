import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Animated } from "react-animated-css";


export default function Home() {


const useStyles = makeStyles((theme) => ({
    home : {
        marginTop: "9rem",  
        fontFamily: 'Alata',
        fontSize: "170px",
        textAlign: "center",
        backgroundImage: `url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")`,
        backgroundSize: "100% 100%", 
        color: "transparent",
        WebkitBackgroundClip: "text",

    },
    sectionbro: {
        marginBottom: "200px",
    },
 

  }));



    const classes = useStyles();
    return(
        <div>
          
        <div   className={classes.sectionbro} >
        <Animated isVisible={true} animationIn="animate__bounceIn">
            <Typography className={classes.home}>
                Pravallika Kambhampati
                <br/>
            </Typography>
          </Animated>  
            <div style={{fontFamily: "Pacifico", fontSize: "47px"}}>
                budding web developer
                </div>
        </div>
        
        </div>
       
    )
}  


