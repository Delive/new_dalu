var navBtn = document.querySelector('.nav-btn');
console.log(navBtn)
if(navBtn){
    document.querySelector('.nav-btn').onclick=function(){
        const navDom = document.querySelector('.nav-item-container')
        if(navDom.className.indexOf('active') === -1){
            navDom.className = `nav-item-container active`
        }else{
            navDom.className = `nav-item-container`
        }
    }
}