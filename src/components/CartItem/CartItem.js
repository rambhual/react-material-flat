import React from "react";
import Avatar from "@material-ui/core/Avatar";
import classnames from "classnames";
import useStyles from "./styles";
import { Typography } from "../Wrappers/Wrappers";
export default function CartItem({ variant, ...props }) {
  var classes = useStyles();

  return (
    <div
      className={classnames(classes.notificationContainer, props.className, {
        [classes.notificationContained]: variant === "contained",
        [classes.notificationContainedShadowless]: props.shadowless,
      })}
    >
      <Avatar src={props.imageUrl} alt={props.name} />
      <div className={classes.messageContainer}>
        <Typography>{props.name}</Typography>
      </div>
    </div>
  );
}
