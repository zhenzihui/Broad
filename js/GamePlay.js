/**
 * Created by Administrator on 2017/8/23.
 */
width=window.screen.width;
height=window.screen.height*0.9;

class Board{
    constructor(ctx)
    {
this.ctx=ctx;
    document.onmousedown=function (event) {
        event=event||window.event;

        let x=event.clientX;
        let y=event.clientY;
        let offsetLeft=event.offsetLeft;
        let offsetTop=event.offsetTop;
        this.ctx.moveTo(x-offsetLeft,y-offsetTop);
    };
    document.onmousemove=function(event){
        event=event||window.event;
        let x=event.clientX;
        let y=event.clientY;
        let offsetLeft=event.offsetLeft;
        let offsetTop=event.offsetTop;
        this.ctx.lineTo(x-offsetLeft,y-offsetTop);
        this.ctx.stroke();
    };
    document.onmouseup=function () {
        document.onmousemove=null;
        document.onmousedown=null;
    }
    }




}

function init(ctx) {
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,width,height);

}
function draw(ctx,x,y) {
    ctx.fillStyle="#dddddd";
    ctx.fillRect(x,y,1,1);


}

function play() {

}

