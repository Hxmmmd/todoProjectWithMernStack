import useTodos from './hooks/useTodos'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TodoTask from './components/TodoTask'
import { RiH1 } from 'react-icons/ri'
import './App.css'



function App() {

  const {todoList, createTodo,completeTodo,deleteTodo} = useTodos()

  return (
    <>
      <div className="main">

        <div className="heading ">
          <Heading/>
        </div>

        <div className="create">
          <CreateTask onCreateHandler={createTodo}/>
        </div>

        <div className="todo ">
          {todoList? todoList.map((todo, index)=> <TodoTask  
                                                    key={index} 
                                                    index={index} 
                                                    id={todo._id} 
                                                    isCompleted={todo.isCompleted} 
                                                    todoText={todo.todoText} 
                                                    onCompleteHandler={completeTodo} 
                                                    onDeleteHandler={deleteTodo}/>): <h1>no todos avaliable</h1>}
        </div>

      </div>
      
    </>
  )
}

export default App
