const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
})

function files(index){
    var data = ;
    return data.split("\n")[index];
}




























gsap.to("#page1",{
    scrollTrigger:{
        trigger:'#page1',
        start:'top top',
        end:'bottom top',
        markers:true,
        scroller:'#main'
    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger:'#page2',
        start:'top top',
        end:'bottom top',
        markers:true,
        scroller:'#main'
    }
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger:'#page3',
        start:'top top',
        end:'bottom top',
        markers:true,
        scroller:'#main'
    }
})

images[1].onload = render();

function render(){
    scaleImage(images[imageSeq.frame], context);
}