
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoTask = ({id, index, todoText, isCompleted, onDeleteHandler, onCompleteHandler}) => {

    return (
        <div className="todoTaskContainer">
            <div className="todoTask">
                <div className="todoTextContainer">
                    <div className="index">{index}.</div>
                    <div className="todoText">{todoText}</div>
                </div>
                {!isCompleted && <div className="editAndComplete">
                                    <button className="editTodo button"><FaEdit/></button>
                                    <button onClick={()=> onCompleteHandler(id,isCompleted)} className="todoComplete button">Completed</button>
                                </div> 
                }
                
            </div>

            <button onClick={() => onDeleteHandler(id)} className="deleteTodo button"><RiDeleteBin6Line size={20}/></button>
        </div>
    )
}

export default TodoTask