AFRAME.registerComponent("movement", {

init:function(){
    window.addEventListener("keydown", (e) =>{
        researcher_rotation= this.el.setAttribute(rotation);

        if(e.key === "ArrowRight") {
            this.el.setAttribute("rotation", {
                y:90,
            });
        }

        if(e.key === "ArrowUp") {
            this.el.setAttribute("rotation", {
                y:180
            });
        }

        if(e.key === "ArrowLeft"){
            this.el.setAttribute("rotation", {
                y:270
            });
        }

        if(e.key === "ArrowDown"){
            this.el.setAttribute("rotation", {
                y:0
            });
        }

    })
},



})