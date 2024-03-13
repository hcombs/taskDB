const months = [
    {
        month:'January',
        days:31,
        year:0,
        startIndex:0
    },
    {
        month:'February',
        days:28,
        year:0,
        startIndex:0
    },    
    {
        month:'March',
        days:31,
        year:0,
        startIndex:0
    },
    {
        month:'April',
        days:30,
        year:0,
        startIndex:0
    },
    {
        month:'May',
        days:31,
        year:0,
        startIndex:0
    },
    {
        month:'June',
        days:30,
        year:0,
        startIndex:0
    },
    {
        month:'July',
        days:31,
        year:0,
        startIndex:0
    },
    {
        month:'August',
        days:31,
        year:0,
        startIndex:0
    },
    {
        month:'September',
        days:30,
        year:0,
        startIndex:0
    },
    {
        month:'October',
        days:31,
        year:0,
        startIndex:0
    },
    {
        month:'November',
        days:30,
        year:0,
        startIndex:0
    },
    {
        month:'December',
        days:31,
        year:0,
        startIndex:0
    }
];

var currentIndex = 0;
var currentYear;
var currentDay;

const checkMonth = (i) => {
    currentIndex = currentIndex + i;
    currentIndex = currentIndex < 0 ? 11 : currentIndex > 11 ? 0 : currentIndex;
    return currentIndex;
};

const checkYear = (i) => {
    let year = currentIndex + i < 0 ? currentYear + i  : currentIndex + i > 11 ? currentYear + i : currentYear;
    if(currentYear !== year){
        currentYear = year;
        switchYear();
    }
    return i;
};


const setMonth = ()=>{
    currentIndex = new Date().getMonth();
};

const setYear = (year) => {
    months.map(e=> e.year = currentYear);
};

const setDay = () => {
    currentDay = new Date().getDate();
}

const setLeapYearDay = () => {
    const isLeapYear = (months[1].year % 4 == 0 && months[1].year % 100 !== 0) || months[1].year % 400 == 0;
    months[1].days = isLeapYear ? 29 : 28;
};

const getStartDay = (month,year) => {
    return new Date(`${month}/1/${year}`).getDay();
};

const setStartDay = ()=> {
    months.map((e,i)=>{
        months[i].startIndex = getStartDay(i+1,months[i].year);
    });
};

const getCurrentYear = () => {
    currentYear = new Date().getFullYear();
};

const initializeMonths = composeAll(setLeapYearDay,setStartDay,setYear,getCurrentYear,setDay, setMonth)();

const switchYear = composeAll(setLeapYearDay,setStartDay,setYear);

const switchMonth = composeAll(checkMonth,checkYear);