const getTasks = async (date) => {
    const response = await fetch(`${window.location.href}task/${date}`);
    return response.json();
}

const postRequest = async (data) => {
    const response = await fetch(window.location.href, {
        method:'POST',
        headers:{"Content-Type":"application/JSON"},
        body:JSON.stringify(data)
    });

    return response.json();
};

const removeTask = async (id)=>{
    await postRequest({
        key:'deleteDayTask',
        params:id
    })
};

const updateTask = async (paramArray) => {
    await postRequest({
        key:'updateDayTask',
        params:paramArray
    });
};

const addTask = async (newTask) => {
    await postRequest({
        key:'insertDayTask',
        params:newTask
    });
};

const formatTasks = (result) =>{
    global.todo = result[0].filter(e=>e.done == 0);
    global.done = result[0].filter(e=>e.done != 0);
    document.querySelector('#calendarContainer').className = "hide";
    document.querySelector('#dayContainer').className = "";
    fillTodo(global.todo);
    fillDone(global.done);
};

