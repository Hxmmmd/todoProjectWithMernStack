import axios from "axios"


class Crud{
    constructor(URL){
        this.URL = URL
    }
    async getTodos() {
        try {
            const response = await axios.get(this.URL)
            return response.data
            
        } catch (error) {
            console.log("some error happened while fetching todos via GetTodos", error)
        }

    }
    async PostTodo(obj){
        try {
            const response = await axios.post(this.URL,obj)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    async DeleteTodo(id){
        try {
            let route = `${this.URL}/${id}`
            const response = await axios.delete(route)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    async TaskCompleted(id,obj){
        try {
            let route = `${this.URL}/${id}`
            const response = await axios.patch(route, obj)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

}
export default Crud