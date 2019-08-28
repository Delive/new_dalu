window.onload = function (){
    $('#header').load('../compontents/header.html',function(){
        var navBtn = document.querySelector('.nav-btn');
        if(navBtn){
            document.querySelector('.nav-btn').onclick=function(){
                var navDom = document.getElementsByClassName('nav-item-container')[0];
                if(navDom.className.indexOf('active') === -1){
                    navDom.className = "nav-item-container" + " active" 
                }else{
                    navDom.className = "nav-item-container"
                }
            }
        }
    });
    $('#footer').load('../compontents/footer.html');
}