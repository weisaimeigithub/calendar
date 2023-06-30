//刻意练习  为什么捋一遍，看结果 不看时间
// import MyCalendar from './components/Calendar';
// (()=>{
//     console.log(MyCalendar)

//     const MyCalendar = MyCalendar(handler);
//     const oApp = document.querySelector("#app");
//     const oYear = document.querySelector('.year');
//     const oMonth = document.querySelector('.month');
//     const oYearSpan = oYear.querySelector('span');
//     const oMonthSpan = oMonth.querySelector('span');
//     const dateInfo = MyCalendar.getDateInfo();
    
//     const init = () => {
//         render(...dateInfo);
//         bindEvent();
//     }

//     function render(...args){
//         oApp.appendChild(MyCalendar.render(...args));
//     }

//     function bindEvent(){
//         oYear.addEventListener('click',setYear,false);
//         oMonth.addEventListener('click',setMonth,false);

//     }

//     function handler(date){
//         console.log(date);
//     }

//     function setYear(E){
//         const tar = e.target;
//         const className = tar.className;
//         const currentYear = Number(oYearSpan.innerText);

//         if(className === 'lt' || className === 'gt'){
//             switch(className){
//                 case 'lt':
//                     dateInfo[0] = currentYear - 1;
//                     break;
//                 case 'gt':
//                     dateInfo[0] = currentYear + 1;
//                     break;
//             }

//             oYearSpan.innerHTML = dateInfo0[0];
//             MyCalendar.update(...dateInfo);
//         }
//     }

//     function setMonth(){
//         const tar = e.target;
//         const className = tar.className;
//         const currentMonth = Number(oMonthSpan.innerText);

//         if(className === 'lt' || className === 'gt'){
//             switch(className){
//                 case 'lt':
//                     dateInfo[1] = currentYear - 1;
//                     break;
//                 case 'gt':
//                     dateInfo[1] = currentYear + 1;
//                     break;
//             }

//             oMonthSpan.innerHTML = dateInfo0[1];
//             MyCalendar.update(...dateInfo);
//         }
//     }
//     init();
// })();

import MyCalendar from './components/Calendar';
(()=>{
    // console.log(MyCalendar)

    const myCalendar = MyCalendar(handler);
    const oApp = document.querySelector("#app");
    const oYear = document.querySelector('.year');
    const oMonth = document.querySelector('.month');
    const oYearSpan = oYear.querySelector('span');
    const oMonthSpan = oMonth.querySelector('span');
    const dateInfo = myCalendar.getDateInfo();
    
    const init = () => {
        render(...dateInfo);
        bindEvent();
    }

    function render(...args){
        oApp.appendChild(myCalendar.render(...args));
    }

    function bindEvent(){
        oYear.addEventListener('click',setYear,false);
        oMonth.addEventListener('click',setMonth,false);
    }

    function handler(date){
        console.log(date);
    }

    function setYear(e){
        const tar = e.target;
        const className = tar.className;
        const currentYear = Number(oYearSpan.innerText);

        if(className === 'lt' || className === 'gt'){
            switch(className){
                case 'lt':
                    dateInfo[0] = currentYear - 1;
                    break;
                case 'gt':
                    dateInfo[0] = currentYear + 1;
                    break;
            }

            oYearSpan.innerHTML = dateInfo[0];
            myCalendar.update(...dateInfo);
        }
    }

    function setMonth(e){
        const tar = e.target;
        const className = tar.className;
        const currentMonth = Number(oMonthSpan.innerText);

        if(className === 'lt' || className === 'gt'){
            switch(className){
                case 'lt':
                    dateInfo[1] = currentMonth  - 1;
                    break;
                case 'gt':
                    dateInfo[1] = currentMonth + 1;
                    break;
            }

            oMonthSpan.innerHTML = dateInfo[1];
            myCalendar.update(...dateInfo);
        }
    }
    init();
})();