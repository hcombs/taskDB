const createTask = async (description) => {
    await addTask([description,false,currentYear,selectedMonth,selectedDay]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};

const deleteTask = async (id) => {
    await removeTask([id]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};

const revertTask = async (id) => {
    var update = global.done.filter(e=>e.dailyTaskID == id)[0];
    await updateTask([update.dailyTaskID,update.description,false,update.year,update.month,update.day]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};

const alterTask = async (id, text) => {
    var update = global.todo.filter(e=>e.dailyTaskID == id)[0];
    await updateTask([update.dailyTaskID,text,false,update.year,update.month,update.day]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};

const finishTask = async (id) => {
    var update = global.todo.filter(e=>e.dailyTaskID == id)[0];
    await updateTask([update.dailyTaskID,update.description,true,update.year,update.month,update.day]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};

const displayTodo = () => {
    document.querySelector('#todoContainer').className = '';
    document.querySelector('#doneContainer').className = 'hide';
}; 

const displayDone = () => {
    document.querySelector('#todoContainer').className = 'hide';
    document.querySelector('#doneContainer').className = '';
};

const fillTodo = (todo) => {
    document.querySelector('#todo').innerHTML = '';
    todo.map(appendTodo);
};

const fillDone = (done) => {
    document.querySelector('#done').innerHTML = '';
    done.map(appendDone);
};

const setDescription = (obj) => {
    const input = document.createElement('input');
    input.value = obj.description;
    input.setAttribute('type','text');
    input.setAttribute('dailyTaskID',obj.dailyTaskID);
    input.addEventListener('keypress',async (e)=>{
        e.key == 'Enter' ? await alterTask(e.target.getAttribute('dailyTaskID'), e.target.value):null;
    });
    return input;
};


const setDelete = (obj)=>{
    const input = document.createElement('input');
    input.value = 'Delete';
    input.setAttribute('type','button');
    input.setAttribute('dailyTaskID',obj.dailyTaskID);
    input.addEventListener('click',async (e)=> await deleteTask(e.target.getAttribute('dailyTaskID')));
    return input;
};

const setMarkDone = (obj)=>{
    const input = document.createElement('input');
    input.value = 'Finished';
    input.setAttribute('type','button');
    input.setAttribute('dailyTaskID',obj.dailyTaskID);
    input.addEventListener('click',async (e)=>await finishTask(e.target.getAttribute('dailyTaskID')));
    return input;
};

const setRevert = (obj) => {
    const input = document.createElement('input');
    input.value = 'Revert';
    input.setAttribute('type','button');
    input.setAttribute('dailyTaskID',obj.dailyTaskID);
    input.addEventListener('click',async (e)=>await revertTask(e.target.getAttribute('dailyTaskID')));
    return input;
};

const setDoneDescription = (obj)=>{
    const div = document.createElement('div');
    div.innerHTML = obj.description;
    return div;
};


const appendTodo = (todoItem)=>{
    document.querySelector('#todo').appendChild(setDescription(todoItem));
    document.querySelector('#todo').appendChild(setDelete(todoItem));
    document.querySelector('#todo').appendChild(setMarkDone(todoItem));
};

const appendDone = (doneItem)=>{
    document.querySelector('#done').appendChild(setDoneDescription(doneItem));
    document.querySelector('#done').appendChild(setRevert(doneItem));
};