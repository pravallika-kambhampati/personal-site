import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import GridTiles from './components/GridTiles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import WorkGrid from './components/WorkGrid';
import { withStyles } from '@material-ui/core/styles';
import $ from "jquery";
import ArticlesGrid from './components/ArticlesGrid';
import About from './components/About';

const useStyles = theme => ({
  coloring: {
    backgroundColor: "#8fd5db",
  },
  root: {
    flexGrow: 1,
    marginBottom: "100px"
  },
  menuButton: {
    marginRight: theme.spacing(3),
    fontSize: "20px",
    '&:hover': {
      color: "black"
  }
  },
  title: {
    color: "#364c4d",
    flexGrow: 1,
    textAlign: "left",
    fontFamily: "Pacifico",
    fontSize: "25px",
    
  },
  

});





 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }
  

 

  componentDidMount(){

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
     
    $("#one").click(function() {
      $('html,body').animate({
          scrollTop: $("#1st").offset().top},
          'slow');
   });

  $("#zero").click(function() {
    $('html,body').animate({
        scrollTop: '0px'},
        'slow');
  });

  $("#two").click(function() {
  $('html,body').animate({
      scrollTop: $("#2nd").offset().top},
      'slow');
  });

  $("#three").click(function() {
  $('html,body').animate({
      scrollTop: $("#3rd").offset().top},
      'slow');
  });
  
   $("#four").click(function() {
  $('html,body').animate({
      scrollTop: $("#4th").offset().top},
      'slow');
   });
  

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }
  
  render() {
   
    const { classes } = this.props;


   

    return (
      
      <div className="App">
      <div className={classes.root}>
     <AppBar className={classes.coloring} position="fixed">
       <Toolbar>
         <Typography id="zero" variant="h6" className={classes.title}>
           Pravallika Kambhampati
         </Typography>
      
         <Button id="four" className={classes.menuButton} color="inherit">About</Button>
         <Button id="one" className={classes.menuButton} color="inherit">Skills</Button>
         <Button id="two" className={classes.menuButton}  color="inherit">Work</Button>
         <Button id="three" className={classes.menuButton}  color="inherit">Articles</Button>
         
         
       

       </Toolbar>
     </AppBar>
   </div>
   <div id="0th" style={{}}>
   <Home/>
   </div>
   <div id="4th">
     <About />
   </div>
   
    
     <div id="1st">
     < GridTiles />
     </div>
     <div id="2nd">
     <WorkGrid />
     </div>
     <div id="3rd">
     <ArticlesGrid />  
 
     </div>
     
     
     
   </div>
 

    )
  }
}

export default withStyles(useStyles)(App);