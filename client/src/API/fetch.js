 async function APIRequest() {


    const pending = await fetch('https://todo-mock-api.herokuapp.com/api/todos')
     .then((response) => response.json())
     return pending
     }
 
export default APIRequest