import React, { useContext } from "react";
import { FormContext } from "./Form";

export default(props)=>{
    const ctx = useContext(FormContext);
    return(
        <div>
            <label>
                Email:
                <input 
                    onChange={(ev)=>ctx.setEmail(ev.target.value)}
                    type="email"
                    value={ctx.email}/>
            </label>
            <label>
                Password:
                <input type="password"/>
            </label>
        </div>
    );
}