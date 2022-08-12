 async function APIRequest() {


    const pending = await fetch('http://localhost:4000/api/todos')
     .then((response) => response.json())
     return pending
     }
 
export default APIRequest