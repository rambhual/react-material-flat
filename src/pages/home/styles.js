import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
