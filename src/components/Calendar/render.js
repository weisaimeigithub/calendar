import { createWeekDayNode , createDateNode} from "./creator";

export function render(container){
    const oTHead = document.createElement('thead');
    const oTBody = document.createElement('tbody');
    const weekDayNode = createWeekDayNode();

    oTBody.className = 'my-calendar-body';
    return function(year,month){
        // debugger
        const dateTrs = createDateNode(year,month);
        //  oTHead.appendChild(oTHead);

         dateTrs.forEach(tr => {
            oTBody.appendChild(tr);
         })
         container.appendChild(oTHead);

         container.appendChild(oTBody);
         return container;
    }
}

export function update(year,month){
  const oTBody = document.querySelector('.my-calendar-body');
  const dateTrs = createDateNode(year,month);
  oTBody.innerHTML = '';
  dateTrs.forEach(tr => {
    oTBody.appendChild(tr);
  })
}

//得达到随手写就能写出来的程度才可以  没有任何准备写的东西，目标