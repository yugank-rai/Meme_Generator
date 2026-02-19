import React, {useState , useRef } from 'react';
import Draggable from 'react-draggable';
const Text =() =>{
    const [editMode,setEditMode] = useState(false);
    const [value,setValue] = useState("double click to edit");
    const nodeRef = useRef(null);
    return(
      <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} style={{ display: 'inline-block' }}> 
                {editMode ? (
                    <input 
                        onDoubleClick={() => setEditMode(false)} 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                    />
                ) : (
                    <h1 onDoubleClick={() => setEditMode(true)} style={{ color: "black" }}>
                        {value}
                    </h1>
                )}
            </div>
        </Draggable>
    );
  };
       

export default Text;