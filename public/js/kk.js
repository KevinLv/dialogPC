$(function(){
    $(".submit").click(function(event) {

        /*加载中……*/
        var dialog =  new Dialog();


        /*警告*/
        /*var dialog =  new Dialog({
                maskOpacity:"0.6",
                closeBtn:true,
                type:"warn",
                header:" ",
                message:"你输入的你输入的信息有误！",
                buttons: [{
                    type: "netColor",
                    text: "确认",
                    callBack: function(){
                       console.log(1)
                    }
                }, {
                    type: "grey",
                    text: "取消",
                    callBack: function(){

                    }
                }],
                effect:true,
                maskClick:true,
                delay:null
            });*/

        /*提示*/
       /* var dialog =  new Dialog({
                maskOpacity:"0.6",
                closeBtn:true,
                type:"note",
                header:" ",
                message:"你输入的信息有误！",
                buttons: [{
                    type: "netColor",
                    text: "确认",
                    callBack: function(){
                       console.log(1)
                    }
                }, {
                    type: "grey",
                    text: "取消",
                    callBack: function(){

                    }
                }],
                effect:true,
                maskClick:true,
                delay:null
            });*/
            /*带标题*/
            /*var dialog =  new Dialog({
                maskOpacity:"0.6",
                closeBtn:true,
                type:"",
                header:"充值",
                message:"",
                buttons: [{
                    type: "netColor",
                    text: "充值成功",
                    callBack: function(){
                       console.log(1)
                    }
                }, {
                    type: "grey",
                    text: "充值失败",
                    callBack: function(){

                    }
                }],
                effect:true,
                maskClick:true,
                delay:null
            });*/

    });

})