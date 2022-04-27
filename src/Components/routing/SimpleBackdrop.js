import * as React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({

  Backdrop: {
    color: '#fff',
    zIndex: theme.zIndex.drawer + 1,
  }

}));

export default function SimpleBackdrop() {

  const classes = useStyles()

  return (
    <div>

      <Backdrop className={classes.Backdrop}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}