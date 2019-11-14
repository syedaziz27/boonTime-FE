/*
  -------Developer Notes---------
  To use this card you need to pass in 7 props.
  The following props are:
  vidTitle, views, date, vidImage, length, userIcon, userName
  PASS IN THESE ABOVE PROPS EXACTLY AS THEY ARE SPELLED
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import sampleIcon from "../sampleImages/erik-unsplash.jpg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    maxHeight: 372,
    position: "relative"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  heading: {
    color: "#A08112",
    font: "Helvetica"
  },
  overlay: {
    position: "absolute",
    top: "10px",
    left: "80%",
    color: "white",
    backgroundColor: "#C4C4C4",
    padding: "5px",
    borderRadius: "15%"
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { vidTitle, views, date, vidImage, length, userIcon, userName } = props;
  dayjs.extend(relativeTime);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          vidImage ||
          "https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/D11A27E565444933B943287409D52EF9/kylie-cosmetics_D11A27E565444933B943287409D52EF9.jpg"
        }
        title="cardImage"
      />
      <div className={classes.overlay}>
        <small>{length || "2hr 12min"}</small>
      </div>
      <CardContent>
        <Typography variant="h5" component="h2">
          {vidTitle || "Smoking daring makeup tutorial"}
        </Typography>
      </CardContent>
      <CardHeader
        className={classes.heading}
        avatar={<Avatar src={userIcon || sampleIcon} />}
        title={userName || "Miss Beauty Queen23"}
        subheader={
          <>
            <small>{views || "11.5 k views"}</small>
            <div style={{ float: "right" }}>
              {date ? (
                <small>{dayjs(date).fromNow()}</small>
              ) : (
                //sample date
                <small>{dayjs("2009").fromNow()}</small>
              )}
            </div>
          </>
        }
      />
    </Card>
  );
}
