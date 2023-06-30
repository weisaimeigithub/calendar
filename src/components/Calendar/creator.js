import { WEEK_DAYS } from "./config";
import { getLastMonthRestDay, getMonthDayCount, getNextMonthRestDays,getDateInfo, getFormatDate } from "./utils";
export  function createWeekDayNode(){
    const oTr = document.createElement('tr');
    oTr.className = 'week-day';
    oTr.innerHTML = WEEK_DAYS.map(item => {
        `<th>${item}</th>`
    }).join('');
    return oTr;
}

export function createDateNode(year,month){
    // debugger
    const lastMonthRestDays = getLastMonthRestDay(year,month);
    const currentMonthDayCount = getMonthDayCount(year,month);
    const nextMonthRestDays = getNextMonthRestDays(year,month);
    const dateTrArr = createDateTrs(6);
    const lastMonthRestDaysTD = creatRestDaysTD(lastMonthRestDays);
    const currentMonthDaysTD = createCurrentDaysTD(currentMonthDayCount,year,month);
    const nextMonthRestDaysTD = creatRestDaysTD(nextMonthRestDays);
    const tdArr = [
        ...lastMonthRestDaysTD,
        ...currentMonthDaysTD,
        ...nextMonthRestDaysTD
    ];

    let index = 0;
    dateTrArr.forEach(tr => {
        for(var i = 0;i<7;i++){
            tr.appendChild(tdArr[index]);
            index++;
        }
    });

    return dateTrArr;
}

function createDateTrs(count){
    const trArr = [];

    for(var i = 0;i < count;i++){
        const oTr = document.createElement('tr');
        trArr.push(oTr);
    }

    return trArr;
}

function creatRestDaysTD(restDays){
     return restDays.map(item => {
        const oTd = document.createElement('td');
        oTd.className = 'day  rest-day';
        oTd.innerHTML = item;
        return oTd;
     })
}

function createCurrentDaysTD(currentDayCount,year,month){
    let tdArr = [];
    const [
        currentYear,
        currentMonth,
        currentDate
    ] = getDateInfo();

    for(let i = 1;i <= currentDayCount;i++){
        const oTd = document.createElement('td');
        if(currentDate === year && currentmonth === month && currentDate === i){
            oTd.className = 'day  current-day current';
        }else{
            oTd.className = 'day  current-day';
        }

        oTd.innerHTML = i;
        oTd.setAttribute('data-date',getFormatDate(year,month,i));
        tdArr.push(oTd);
    }

    return tdArr;
}