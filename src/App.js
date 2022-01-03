import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useCustomContext } from "./state-management/globalContext";

function App() {
  // Decide on a theme based on the theme variable set in our globalConext.js file
  const { theme } = useCustomContext(); // declare theme first
  const lightTheme = createTheme({}); // original setup
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      // Change the palette colors as well (2/7 to keep this ex. short)
      primary: {
        main: "#FFA500", // yellow
      },
      secondary: {
        main: "#e389b9", // pink
      },
    },
  });
  let selectedTheme;
  if (theme === "lightTheme") selectedTheme = lightTheme;
  if (theme === "darkTheme") selectedTheme = darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline>
        <Router>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
