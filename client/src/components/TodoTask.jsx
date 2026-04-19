
import { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa"

const TodoTask = ({id, index, todoText, isCompleted,onCompleteHandler,onEditHandler, onDeleteHandler}) => {
    const [editTodoValue, setEditTodoValue] = useState(false)
    const editTodoTextRef = useRef()

    return (
        <div className={`todoTaskContainer${isCompleted ? " isDone" : ""}${editTodoValue ? " isEditing" : ""}`}>
            <div className={`todoTask${editTodoValue ? " todoTaskEditing" : ""}`}>
                <div className={`todoTextContainer${editTodoValue ? " todoTextContainerEditing" : ""}`}>
                        
                    {editTodoValue? <>
                                    <div className="icon"><FaRegPlusSquare/></div>
                                    <div className="todoCopy todoCopyEditing">
                                        <div className="todoStatus">Edit Your Todo</div>
                                        <div className="createTaskContainer editTaskContainer">
                                            <input  
                                                type="text" 
                                                ref={editTodoTextRef} 
                                                defaultValue={todoText}
                                                placeholder="Enter the Text you want to Edit or Update" 
                                                className="createTaskText editTaskInput"/>
                                        </div>  
                                    </div>
                                    </>
                                    
                                    :
                                    <>
                                        <div className="index">{String(index).padStart(2, "0")}</div>
                                        <div className="todoCopy">
                                            <div className="todoStatus">{isCompleted ? "Completed" : "In progress"}</div>
                                            <div className="todoText">{todoText}</div>
                                        </div>
                                    </>
                    }
                        
                    
                </div>
                {!isCompleted && <div className={`editAndComplete${editTodoValue ? " editAndCompleteEditing" : ""}`}>
                                    {editTodoValue? <>
                                                        <button onClick={()=> {
                                                            if(editTodoTextRef.current.value != todoText){
                                                                onEditHandler(id, editTodoTextRef)
                                                            }
                                                            setEditTodoValue(false)
                                                        }} className="todoComplete button">Update</button>  
                                                    </>
                                                    :
                                                    <> 
                                                        <button onClick={() => setEditTodoValue(true)} className="editTodo button"><FaEdit/></button>
                                                        <button onClick={()=> onCompleteHandler(id,isCompleted)} className="todoComplete button">Done</button>  
                                                    </>
                                                    
                                    }
                                </div> 
                }
                
            </div>
            {editTodoValue? <button 
                                onClick={() => setEditTodoValue(false)} 
                                className="deleteTodo button">
                                    <MdOutlineCancel size={20}/>
                            </button> 
                            :
                            <button 
                                onClick={() => onDeleteHandler(id)} 
                                className="deleteTodo button">
                                    <RiDeleteBin6Line size={20}/>
                            </button>


            }
            
        </div>
    )
}

export default TodoTask
