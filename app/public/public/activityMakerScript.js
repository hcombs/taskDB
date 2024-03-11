var global = {
    todo:[],
    done:[]
};

document.querySelector('#add').addEventListener('click',(e)=>{
    displayTask();
});

document.querySelector('#task').addEventListener('keypress',(e)=>{
    if(e.keyCode === 13){
        displayTask();
    }
});

const displayTask = ()=>{
    if(document.querySelector('#task').value !== ''){
        global.todo.push(document.querySelector('#task').value);
        displayList();
        document.querySelector('#task').value = '';
    }
}

const displayList = ()=>{
    clear();
    global.todo.map(e=>composeAll(addTodo,addListener,createDiv)(e));
    global.done.map(e=>composeAll(addDone,createDiv)(e));
};

const clear = ()=>{
    document.querySelector('#todo').innerHTML = "";
    document.querySelector('#done').innerHTML = "";
}

const createDiv = (text) =>{
    const div = document.createElement('div');
    div.innerHTML = text;
    return div;
};

const addListener = (element) => {
    element.onclick = moveToDone;
    return element;
}

const addTodo = (element) => {
    document.querySelector('#todo').appendChild(element);
};

const addDone = (element) =>{
    document.querySelector('#done').appendChild(element);
}

const compose = (a,b) =>{
    return (...args) =>{
        return a(b(...args));
    }
};

const composeAll =(...fns) => fns.reduce(compose);

const moveToDone = (e) => {
    const done = e.target.innerHTML;
    global.todo = global.todo.filter(e=> e !== done);
    global.done.push(done);
    displayList();
};

const getTasksForDay = (data) => getTasks(data).then((response)=>{
    global = response;
    displayList();
});