import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    minHeight: 350,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "black",
  },
  pos: {
    marginBottom: 12,
  },
  buttongroup: {
    margin: 12,
  },
  submit: {
    display: "flex",
    justifyContent: "center",
  },
});

let postData = {
  mood: "good",
  description: "",
};

export default function Log() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  // TODO : "clicked" state to change
  function changeMood(chosen) {
    if (chosen === 0) {
      postData.mood = "good";
    } else if (chosen === 1) {
      postData.mood = "soso";
    } else {
      postData.mood = "bad";
    }
    console.log(postData.mood);
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Today's Mood
        </Typography>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          className={classes.buttongroup}
        >
          <Button onClick={() => changeMood(0)}>Good</Button>
          <Button color="secondary" onClick={() => changeMood(1)}>
            Soso
          </Button>
          <Button onClick={() => changeMood(2)}>Angry</Button>
        </ButtonGroup>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Description
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows={4}
          placeholder="Write Here"
          variant="outlined"
        />
      </CardContent>
      <CardActions className={classes.submit}>
        <Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
