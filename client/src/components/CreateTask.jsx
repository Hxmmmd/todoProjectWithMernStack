import { FaRegPlusSquare } from "react-icons/fa"
import { useRef } from "react"

const CreateTask = ({onCreateHandler}) => {
    const createTaskText = useRef()

    return (
    <>

        <div className="createTaskContainer">

            <div className="icon">
                <FaRegPlusSquare/>
            </div>

            <input  type="text" ref={createTaskText} placeholder="Enter your todo here" className="createTaskText"/>
        </div>

        <button onClick={()=> {onCreateHandler(createTaskText)}} className="createTaskButton button">Create task</button>
        
    </>
    )
}

export default CreateTask