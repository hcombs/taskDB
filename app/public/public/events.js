document.querySelector('#backMonth').addEventListener('click',()=>monthChange(-1));
document.querySelector('#forwardMonth').addEventListener('click',()=>monthChange(1));
document.querySelector('#monthContainer').addEventListener('click',(e)=>{
    if(e.target.innerHTML !== ""){
        (async()=>{gotoDay(`${currentIndex+1}/${e.target.innerHTML}/${currentYear}`) })();
    }
})

window.onload = () =>{
    setMonthDisplay();
};

const setMonthDisplay = () => {
    var day = 1;
    document.querySelector('#month').innerHTML = `${months[currentIndex].month} ${currentYear}`;
    Array.from(document.querySelector('#monthContainer').children).map((e,i)=>{
        var isDay = i >= months[currentIndex].startIndex && day <= months[currentIndex].days;
        e.innerHTML = isDay ? day : "";
        day = isDay ? day + 1 : day;
        e.className = day == currentDay ? 'currentDay' : '';
    }); 
};

const monthChange = composeAll(setMonthDisplay,switchMonth);

const gotoDay = async (date)=>{
    await getTasks(date).then(formatResult);
};

const formatResult = (result) =>{
    global.todo = result[0].filter(e=>e.done == 0);
    global.done = result[0].filter(e=>e.done != 0);
    displayList();
    document.querySelector('#calendarContainer').className = "hide";
    document.querySelector('#dayContainer').className = "";
};