const postRequest = async (taskName,time,HTTPMethod) => {
    console.log("TASKNAME: ", taskName, "TIME: ", time, " HTTPMethod: ", HTTPMethod)
    await fetch('http://localhost:4000/api/todos', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: taskName,
            timeNeeded: time
        })

    }).then(function (response) {
        return response.json();
    })
        .then(data => {
            console.log(data)
            return(data)
        }).catch(err => console.log(err));
}

module.exports = postRequest