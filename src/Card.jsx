import React, { useContext } from "react";
import {ThemeContext} from "./App1";

export default (props) =>{
    const context = useContext(ThemeContext);
    return (
        <div 
            style={{
                backgroundColor: context.backgroundColor,
                color: context.color
            }}>
            <p>Hello world!</p>
        </div>
    );
}