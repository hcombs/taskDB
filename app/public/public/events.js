var selectedDay, selectedMonth;

document.querySelector('#backMonth').addEventListener('click',()=>monthChange(-1));
document.querySelector('#forwardMonth').addEventListener('click',()=>monthChange(1));
document.querySelector('#monthContainer').addEventListener('click',(e)=>{
    if(e.target.innerHTML !== ""){
        selectedMonth = currentIndex+1;
        selectedDay = e.target.innerHTML;
        (async()=>{gotoDay(`${selectedMonth}/${selectedDay}/${currentYear}`) })();
    }
});
document.querySelector('#backToCalendar').addEventListener('click',()=>backToMonth());

document.querySelector('#task').addEventListener('keypress',(e)=>{
    e.keycode == 13 ? (async()=>await createTask(e.target.value))():null;
});

document.querySelector('#add').addEventListener('click',()=>{
    (async()=>await createTask(document.querySelector('#task').value))();
});

window.onload = () =>{
    setMonthDisplay();
};
