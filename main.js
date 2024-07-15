var typed= new  Typed(".text",{
        strings:["Frontend Developer","Coder","website Designer","Learner"],
        typespeed:80,
        backspeed:60,
        backdelay:1000,
        loop:true
})
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");
function opentab(tabname){
        for( tablink of tablinks){
        tablink.classList.remove("active-link");

        }
        for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
        
        }
                event.currentTarget.classList.add("active-link");
                document.getElementById(tabname).classList.add("active-tab");
}
document.addEventListener("DOMContentLoaded",function(_event){
        let circle = document.querySelectorAll('.circle');
        circle.forEach(function(progress){
                let degree= 0;
                var targetDegree=parseInt(progress.getAttribute('data-degree'));
                let color = progress.getAttribute('data-color');
                let  number= progress.querySelector('.number');
                var interval = setInterval(function(){
                        degree += 1;
                        if(degree > targetDegree){
                                clearInterval(interval);
                                return;
                        }
                        progress.style.background = `conic-gradient( ${color} ${degree}%, #333 0%)`;
                        number.innerHTML = degree + '<span>%</span>';
                        number.style.color = color;
                },50)
        })
});

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider= document.querySelector('.slider');

next.addEventListener('click',function(){
        let slides =document.querySelectorAll('.slides');
        slider.appendChild(slides[0]);       
})
prev.addEventListener('click',function(){
        let slides =document.querySelectorAll('.slides');
        slider.prepend(slides[slides.length-1]);       
})

