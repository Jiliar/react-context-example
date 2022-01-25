import Button from "./Button";
import Card from "./Card";
import React, {useState} from "react";

const themes ={
  'dark':{
    backgroundColor: 'black',
    color:'white'
  },
  'light':{
    backgroundColor: 'white',
    color:'black'
  }
}
export const ThemeContext = React.createContext();

function App1() {
  const [theme, setTheme]= useState(themes.dark);
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Button/>
        <Card/>
        <button onClick={()=>setTheme(themes.dark)}>Dark mode!</button>
        <button onClick={()=>setTheme(themes.light)}>White mode!</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App1;
