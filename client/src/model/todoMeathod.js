import axios from "axios"

const buildRequestError = (error, fallbackMessage) => {
    const requestError = new Error(
        error.response?.data?.message ||
        error.response?.data?.error ||
        fallbackMessage
    )

    requestError.status = error.response?.status || 500
    requestError.details = error.response?.data || null

    return requestError
}

class Crud{
    constructor(URL){
        this.URL = URL
    }
    async getTodos() {
        try {
            const response = await axios.get(this.URL)
            return response.data
            
        } catch (error) {
            console.error("some error happened while fetching todos via GetTodos", error)
            throw buildRequestError(error, "Failed to fetch todos")
        }

    }
    async PostTodo(obj){
        try {
            const response = await axios.post(this.URL,obj)
            return response.data
        } catch (error) {
            console.error("some error happened while creating todo", error)
            throw buildRequestError(error, "Failed to create todo")
        }
    }
    
    async PatchTodo(id,obj){
        try {
            let route = `${this.URL}/${id}`
            const response = await axios.patch(route, obj)
            return response.data
        } catch (error) {
            console.error("some error happened while updating todo", error)
            throw buildRequestError(error, "Failed to update todo")
        }
    }
    
    async DeleteTodo(id){
        try {
            let route = `${this.URL}/${id}`
            const response = await axios.delete(route)
            return response.data
        } catch (error) {
            console.error("some error happened while deleting todo", error)
            throw buildRequestError(error, "Failed to delete todo")
        }
    }
    

}
export default Crud
