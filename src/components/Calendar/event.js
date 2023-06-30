
let target = null;
export default (container,handler) => {
   container.addEventListener('click',function(e){
        const tar = e.target;
        const className = tar.className;

        if(className.includes('current-day')){
            if(target){
                target.className = target.className.replace(' selecte ','');
            }
    
            target = tar;
            tar.className += 'selected';
            handler && handler(tar.dataset.date);
        }
   },false);
}