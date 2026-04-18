
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoTask = ({id, index, todoText, isCompleted, onDeleteHandler, onCompleteHandler}) => {

    return (
        <div className={`todoTaskContainer${isCompleted ? " isDone" : ""}`}>
            <div className="todoTask">
                <div className="todoTextContainer">
                    <div className="index">{String(index).padStart(2, "0")}</div>
                    <div className="todoCopy">
                        <div className="todoStatus">{isCompleted ? "Completed" : "In progress"}</div>
                        <div className="todoText">{todoText}</div>
                    </div>
                </div>
                {!isCompleted && <div className="editAndComplete">
                                    <button className="editTodo button"><FaEdit/></button>
                                    <button onClick={()=> onCompleteHandler(id,isCompleted)} className="todoComplete button">Done</button>
                                </div> 
                }
                
            </div>

            <button onClick={() => onDeleteHandler(id)} className="deleteTodo button"><RiDeleteBin6Line size={20}/></button>
        </div>
    )
}

export default TodoTask
