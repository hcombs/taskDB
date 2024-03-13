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

const switchMonth = (i) => {
    currentIndex = currentIndex + i;
    currentIndex = currentIndex < 0 ? 11 : currentIndex > 11 ? 0 : currentIndex;
    return currentIndex;
};

const setYear = (year) => {
    months.map(e=> e.year = year);
};

const setLeapYearDay = () => {
    const isLeapYear = (months[1].year % 4 == 0 && months[1].year % 100 !== 0) || months[1].year % 400 == 0;
    months[1].days = isLeapYear ? 29 : 28;
};

const setStartDay = (month,year) => {
    return new Date(`${month}/1/${year}`).getDay();
};

