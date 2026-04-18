import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TodoTask from './components/TodoTask'
import { useState, useEffect } from 'react'
import Crud from './model/fetching'
import './App.css'
import { RiH1 } from 'react-icons/ri'


let URL = "http://localhost:3000/todos"
let CRUD = new Crud(URL)




function App() {
  
  const [todolist, setTodolist] = useState([{}])
  
  useEffect(() => {
    const fetchData = async ()=>{
      const data = await CRUD.getTodos()
      console.log("current location useEffect",data)
      setTodolist(data)
    }
    fetchData()
  }, [])
  
  async function onCreateHandler(ref){
    const valObj = ref.current.value
    if(valObj){
      const obj = {
        todoText: valObj,
        isCompleted: false
      }
      let data = await CRUD.PostTodo(obj)
      console.log(data)
      setTodolist( prev => [...prev, {_id: data._id, todoText: data.todoText, isCompleted: false}])

      ref.current.value = ""
    }
  }
  
  async function onDeleteHandler(id) {
    const data = await CRUD.DeleteTodo(id)
    console.log(data)
    setTodolist( prev => prev.filter(todo => todo._id !== id) )

  }
  async function onCompleteHandler(id, isCompleted, setState) {
    let obj = {
      isCompleted : !isCompleted
    }
    let data = await CRUD.TaskCompleted(id, obj)
    console.log(data)
    setState((!isCompleted)) 
  }
  return (
    <>
      <div className="main">

        <div className="heading ">
          <Heading/>
        </div>

        <div className="create">
          <CreateTask onCreateHandler={onCreateHandler}/>
        </div>

        <div className="todo ">
          {todolist? todolist.map((todo, index)=> <TodoTask  key={index} id={todo._id} index={index} isCompleted={todo.isCompleted} todoText={todo.todoText} onCompleteHandler={onCompleteHandler} onDeleteHandler={onDeleteHandler}/>): <h1>no todos avaliable</h1>}
        </div>

      </div>
      
    </>
  )
}

export default App
