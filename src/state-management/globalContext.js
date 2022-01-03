import { useState, createContext, useContext } from "react"; // import useContext
const AAA = createContext();
export const useCustomContext = () => useContext(AAA); // export custom hook

export default function GlobalContextProvider(props) {
  const [theme, setTheme] = useState("lightTheme");
  const distribution = { theme, setTheme };

  return <AAA.Provider value={distribution}>{props.children}</AAA.Provider>;
}
//^ we wrap GlobalContextProvider tags in index.js (boilerplate not shown in this soln)
//^ Now, we can access the theme or manipulate it from any React file

