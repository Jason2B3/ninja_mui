import React, { useState } from "react";
import {
  Button,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

import { useCustomContext } from "../state-management/globalContext";

export default function Notes(props) {
  const { setTheme } = useCustomContext();

  return (
    <>
      <Typography variant="h3" component="h1" align="center">
        This is my app!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setTheme("darkTheme")}
      >
        Enable dark theme
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setTheme("lightTheme")}
      >
        Enable light theme
      </Button>
    </>
  );
}
