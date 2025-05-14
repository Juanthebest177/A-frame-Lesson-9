AFRAME.registerComponent("game-play", {
    init:function(){
        turtlesremain=6
        this.el.addEventListener("collide", function(e) {
            e.detail.target.el.remove();
            turtlesremain=turtlesremain-1

            turtlesRemainingText= document.getElementById('turtlesRemainingText');

            turtlesRemainingText.setAttribute('text', { value: String(turtlesremain) });

            if(turtlesremain==0) {
                gameOverText= document.getElementById('gameOverText');

                gameOverText.setAttribute('text', { value: "YOU WON!"})
            }
        })
    }
})