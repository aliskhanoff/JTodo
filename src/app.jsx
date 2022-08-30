import { useContext } from "react"
import {TodoList} from "./components"
import { TodoContext } from "./context"
import { Layout, Footer } from "./components";
import NoTodo from "./components/no-todo";

export const App = () => {
  const {state, dispatch } = useContext(TodoContext)

  return (
    <Layout className={`todo-container flex flex-col bg-gray-50 ${ !state ? "justify-center items-center": "" }`}>
        {!state.length && <NoTodo /> }
        { state.length > 0 && <TodoList />}

        <Footer />
      
    </Layout>
  )
}

export default App

