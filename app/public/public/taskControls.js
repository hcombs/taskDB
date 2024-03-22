const createTask = async (description) => {
    await addTask([description,false,currentYear,selectedMonth,selectedDay]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};

const deleteTask = async (id) => {
    await removeTask([id]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};

const revertTask = async (id) => {
    var update = global.document.filter(e=>e.dailyTaskID == id)[0];
    await updateTask([update.dailyTaskID,update.description,false,update.year,update.month,update.day]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};

const alterTask = async (id, text) => {
    var update = global.document.filter(e=>e.dailyTaskID == id)[0];
    await updateTask([update.dailyTaskID,text,false,update.year,update.month,update.day]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};

const finishTask = async (id) => {
    var update = global.document.filter(e=>e.dailyTaskID == id)[0];
    await updateTask([update.dailyTaskID,update.description,true,update.year,update.month,update.day]).then(await gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`));
};


const displayTodo = (object) => {

}

const displayDone = (object) => {

}