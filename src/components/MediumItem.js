import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
   
  },
  media: {
    height: 200
  },
});

export default function MediaCard( props ) {
  const classes = useStyles();

  return (
   
    <Card className={classes.root}>
      <CardActionArea
      onClick="www.google.com"
      >
        <CardMedia
          className={classes.media}
          image={props.imgsrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{fontFamily: "Alata"}}  component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  href={props.url}  size="small" color="primary">
          Read the article on medium.com
        </Button>
      </CardActions>
    </Card>
    
  );
}