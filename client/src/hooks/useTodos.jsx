import { useState, useEffect, useCallback } from "react"
import Crud from "../model/todoMeathod"

const URL = "http://localhost:3000/todos"
const CRUD = new Crud(URL)

const useTodos = () => {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        const fetchData = async ()=>{
            try {
                const data = await CRUD.getTodos()
                console.log("current location useEffect",data)
                setTodoList(data)
            } catch (error) {
                console.error(error.message)
                setTodoList([])
            }
        }
        fetchData()
    }, [])

    const createTodo = useCallback( async(ref) => {
        const valObj = ref.current.value
        if(valObj){
            try {
                const obj = {
                    todoText: valObj,
                    isCompleted: false
                }
                let data = await CRUD.PostTodo(obj)
                console.log(data)
                setTodoList( prev => [...prev, {_id: data._id, todoText: data.todoText, isCompleted: false}])

                ref.current.value = ""
            } catch (error) {
                console.error(error.message)
            }
        }
    },[])

    const completeTodo = useCallback( async(id, isCompleted, setState) => {
        try {
            let obj = {
            isCompleted : !isCompleted
            }
            let data = await CRUD.TaskCompleted(id, obj)
            console.log(data)
            setState((!isCompleted))
        } catch (error) {
            console.error(error.message)
        }
    },[])




    const deleteTodo = useCallback( async(id) => {
        try {
            const data = await CRUD.DeleteTodo(id)
            console.log(data)
            setTodoList( prev => prev.filter(todo => todo._id !== id) )
        } catch (error) {
            console.error(error.message)
        }
    } ,[])

    return {
        todoList,
        createTodo,
        completeTodo,
        deleteTodo
    }
} 

export default useTodos
