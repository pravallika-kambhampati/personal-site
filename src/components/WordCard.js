import React, { Component }  from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { SocialLink, SocialProvider } from '@mui-treasury/components/socialLink';



const styles = muiBaseTheme => ({
  card: {
    width: "1000px",
    
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -8px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});



class App extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className="App">
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                  { this.props.title }
                </Typography>
                <Typography
                  className={"MuiTypography--subheading"}
                  variant="h7"
                >
                  { this.props.description }
                 
                </Typography>
                <Divider className={classes.divider} light />
                <Typography  style={{fontSize: "17px"}} >
                  <a style={{textDecoration: "none"}} href={this.props.url} > View Source Code </a>
                  
                  <SocialProvider>
            <SocialLink
              brand="GithubCircle"
              href= {this.props.url}
            />
          </SocialProvider>
                </Typography>
                
                
              </CardContent>
            </Card>
          </div>
        )
    }
}


const WrappedApp = withStyles(styles)(App);

export default WrappedApp