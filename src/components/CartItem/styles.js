import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  notificationContainer: {
    display: "flex",
    alignItems: "center",
  },
  containedTypography: {
    color: "white",
  },
  messageContainer: {
    display: "flex",
    marginLeft: theme.spacing(1),
    alignItems: "center",
    justifyContent: "space-between",
    flexGrow: 1,
  },
}));
