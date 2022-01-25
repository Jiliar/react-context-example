import React, { useContext } from "react";
import { FormContext } from "./Form";

export default (props)=>{
    const ctx = useContext(FormContext);

    const addToList = (value, list) =>{
        console.log("O");
        ctx.setLikes([value].concat(ctx.likes));
    }

    const removeFromList = (value, list)=>{
        ctx.setLikes(ctx.likes.filter(v => v !== value))
    }

    return (
        <div>
            <label>
                <input 
                    type="checkbox" 
                    name="likes[]"
                    onChange={(ev)=>ev.target.checked ? addToList("Python"):removeFromList("Python")}
                    />
                    Python
            </label>
            <label>
                <input 
                    type="checkbox" 
                    name="likes[]"
                    onChange={(ev)=>ev.target.checked ? addToList("Javascript"):removeFromList("Javascript")}
                    />
                    Javascript
            </label>
        </div>
    );
}