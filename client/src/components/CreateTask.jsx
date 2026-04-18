import { FaRegPlusSquare } from "react-icons/fa"
import { useRef } from "react"

const CreateTask = ({onCreateHandler}) => {
    const createTaskText = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreateHandler(createTaskText)
    }

    return (
    <>

        <form onSubmit={handleSubmit} className="createTaskForm">
            <div className="createTaskContainer">

                <div className="icon">
                    <FaRegPlusSquare/>
                </div>

                <input  type="text" ref={createTaskText} placeholder="Enter your todo here" className="createTaskText"/>
            </div>

            <button type="submit" className="createTaskButton button">Create task</button>
        </form>
        
    </>
    )
}

export default CreateTask
