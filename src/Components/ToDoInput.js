import { useState } from "react"


const ToDoInput = ( props ) => { 
    const [addToDo,setAddToDo] = useState('');

    
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" value={addToDo} onChange={(e) => setAddToDo(e.target.value)}/>
            <button type="submit">+</button>
        </form>
    )
}

export default ToDoInput;