import useTodos from './hooks/useTodos'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TodoTask from './components/TodoTask'
import './App.css'



function App() {

  const {todoList, createTodo,completeTodo,deleteTodo} = useTodos()
  const activeTodos = todoList?.filter((todo) => !todo.isCompleted) || []
  const completedTodos = todoList?.filter((todo) => todo.isCompleted) || []

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
          <div className="todoHeader">
            <p className="todoEyebrow">Today&apos;s list</p>
            <p className="todoMeta">{todoList?.length || 0} task{todoList?.length === 1 ? '' : 's'}</p>
          </div>

          {!todoList?.length ? <h1>no todos avaliable</h1> : (
            <>
              <div className="todoSection">
                <div className="todoSectionHeader">
                  <p className="todoSectionTitle">Pending tasks</p>
                  <p className="todoSectionMeta">{activeTodos.length}</p>
                </div>

                {activeTodos.length ? activeTodos.map((todo, index)=> <TodoTask
                                                                      key={todo._id}
                                                                      index={index + 1}
                                                                      id={todo._id}
                                                                      isCompleted={todo.isCompleted}
                                                                      todoText={todo.todoText}
                                                                      onCompleteHandler={completeTodo}
                                                                      onDeleteHandler={deleteTodo}/>) : <p className="todoSectionEmpty">No pending tasks right now.</p>}
              </div>

              <div className="todoSection">
                <div className="todoSectionHeader">
                  <p className="todoSectionTitle">Completed tasks</p>
                  <p className="todoSectionMeta">{completedTodos.length}</p>
                </div>

                {completedTodos.length ? completedTodos.map((todo, index)=> <TodoTask
                                                                            key={todo._id}
                                                                            index={index + 1}
                                                                            id={todo._id}
                                                                            isCompleted={todo.isCompleted}
                                                                            todoText={todo.todoText}
                                                                            onCompleteHandler={completeTodo}
                                                                            onDeleteHandler={deleteTodo}/>) : <p className="todoSectionEmpty">Completed todos will appear here.</p>}
              </div>
            </>
          )}
        </div>

      </div>
      
    </>
  )
}

export default App
