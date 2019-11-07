
var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;

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

    $('.file-wrap .del-btn').click(function(){
        $(this).parent().remove();
     })

    $('.toggle-search-type').click(function(){
        $('.mixin-wrap,.simple-search-wrap,.mobile-simple-search').toggle();
        $('.toggle-search-type span').toggleClass('ismixin');
    })

    var treeDom = document.querySelector('#tree');

    treeDom && setTreeDom();

    function setTreeDom(){
           layui.use(["treeSelect"], function () {
            var treeSelect = layui.treeSelect;
            var treeD = is_mobi ? '#tree2' : '#tree';
            treeSelect.render({
                // 选择器
                elem: is_mobi ? '#tree2' : '#tree',
                // 数据
                data: 'data/data3.json',
                // 异步加载方式：get/post，默认get
                type: 'get',
                // 占位符
                placeholder: '请选择',
                // 是否开启搜索功能：true/false，默认false
                search: true,
                // 一些可定制的样式
                style: {
                    folder: {
                        enable: false
                    },
                    line: {
                        enable: false
                    }
                },
                // 点击回调
                click: function(d){
                    console.log(d);
                },
                // 加载完成后的回调函数
                success: function (d) {
                    console.log(d);
        //                选中节点，根据id筛选
                    console.log($(treeD).val());
        //                获取zTree对象，可以调用zTree方法
                   var treeObj = treeSelect.zTree('tree');
                   console.log(treeObj);
        //                刷新树结构
                   treeSelect.refresh('tree');
                }
            });
        });
    }
}