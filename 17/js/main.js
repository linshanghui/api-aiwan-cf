function playMusic() {
        var audioEle = document.getElementById("audio");
      if (audioEle.paused){
        audioEle.play();
      }else {
        audioEle.pause();
      }
    }
    
    $("#music").click(function(){
      play();
    });

    var player = document.getElementById("audio");
    play();
    function play(){
    swal("欢迎浏览小雷主页\n请问是否开启音乐\n一边浏览一边听呢？\n\n有问题葫芦侠反馈给我\n谢谢！\n记得关注葫芦侠臭宝", {
            buttons: {
                cancel: "开启",
                allow: "关闭"
            }
        }).then(function(value) {
            if (value == "allow") {
                player.pause()
            } else {
                player.play();
            }
        });
    }
