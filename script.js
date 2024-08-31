function loaded(){
    document.querySelector('.spinner').style.display = 'none';
document.querySelector('.twrap').style.visibility = 'visible';
document.querySelector('body').style.overflow='scroll';

}

window.addEventListener('load',loaded);

function typewrite() {
    const selector=".title h4";
    const text="The astronomy_Club";
    let i = 0;
    let intervalId = setInterval(() => {
        document.querySelector(selector).innerHTML = text.substr(0, i) + "|";
        i++;
        if (i > text.length) {
            clearInterval(intervalId);
            document.querySelector(selector).innerHTML = text;
        }
    }, 80); 
}
function changefont(){
    const fonts=['font-family: "Exo 2", sans-serif;','font-family: "Orbitron", sans-serif;','font-family: "Righteous", sans-serif;',' font-family: "Nova Mono", monospace;','font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;'];
    i++;
    const bruh=document.querySelector(".title h4");
    bruh.style=fonts[i];
    if (i>4){i=0;}}

setInterval(typewrite,2000);
var i=0;
setTimeout(setInterval(changefont,1000),5000)

function resizefont(){
    const cards = document.querySelectorAll('.card');
const cardb=document.querySelectorAll(".card-back");
cardb.forEach(cb=>{
    const fs=cb.clientWidth*0.07;
    cb.style.fontSize = `${fs}px`;
})

cards.forEach(card => {
    const fontSize = card.clientWidth * 0.07;
    card.style.fontSize = `${fontSize}px`;

});
}
resizefont()
window.addEventListener('resize', resizefont);
window.addEventListener('orientationchange', resizefont);

function ultin(){
    const ult=document.querySelector(".ult"); 
    ult.style="opacity:1;-webkit-transition:1.2s ease;-o-transition:1.2s ease;transition:1.2s ease;";
    const text=document.querySelector(".ult h1");
    text.style="opacity:1;-webkit-transition:.7s ease;-o-transition:.7s ease;transition:.7s ease;-webkit-transition-delay: 1s;-o-transition-delay: 1s;transition-delay: 1s;";
}
 
function bruh(){
    const project =document.querySelector(".project");
    const py=project.offsetTop;
    var scroll_pos=parseInt(window.scrollY);
    const rocket=document.querySelector(".rocket");
    const insiderocket=document.querySelector(".beh");
    const ph=(project.clientHeight)*0.4; 
    if(scroll_pos>py && runt==0){
            var meh=py+ph;
            $(".rocket").appendTo($(".project"));
            rocket.style='-webkit-animation: landrocket 1.5s ease-out forwards;animation: landrocket 1.5s ease-out forwards;';
            insiderocket.style='pointer-events: all;'
            runt=1
            setTimeout(ultin,800);
        }  
        
}
var runt=0
$(document).ready(function(){
    window.addEventListener("scroll",bruh)
    setTimeout(loadpage,5000)
})
var tdistance=0;
var itdistance=0;
function go_right(){
    const slider=document.querySelector(".slider");
    const sliderindex=document.querySelector(".sliderindex");
    if (tdistance>60){
        tdistance=0;
        itdistance=0;
        slider.style='-webkit-transform: translate('+tdistance.toString()+'vw);-ms-transform: translate('+tdistance.toString()+'vw);transform: translate('+tdistance.toString()+'vw);-webkit-transition:0.8s ease-out;-o-transition:0.8s ease-out;transition:0.8s ease-out;'; 
        sliderindex.style='-webkit-transform: translate('+itdistance.toString()+'vw);-ms-transform: translate('+itdistance.toString()+'vw);transform: translate('+itdistance.toString()+'vw);-webkit-transition:0.8s ease-out;-o-transition:0.8s ease-out;transition:0.8s ease-out;';
    }
    else{
    itdistance=itdistance-10;
    tdistance=tdistance+36;
    slider.style='-webkit-transform: translate('+tdistance.toString()+'vw);-ms-transform: translate('+tdistance.toString()+'vw);transform: translate('+tdistance.toString()+'vw);-webkit-transition:0.8s ease-out;-o-transition:0.8s ease-out;transition:0.8s ease-out;'; 
    sliderindex.style='-webkit-transform: translate('+itdistance.toString()+'vw);-ms-transform: translate('+itdistance.toString()+'vw);transform: translate('+itdistance.toString()+'vw);-webkit-transition:0.8s ease-out;-o-transition:0.8s ease-out;transition:0.8s ease-out;';
}

}
function go_left(){
    const slider=document.querySelector(".slider");
    const sliderindex=document.querySelector(".sliderindex");
    if (tdistance<-60){
        itdistance=0;
        tdistance=0;
        slider.style='-webkit-transform: translate('+tdistance.toString()+'vw);-ms-transform: translate('+tdistance.toString()+'vw);transform: translate('+tdistance.toString()+'vw);-webkit-transition:0.8s ease-out;-o-transition:0.8s ease-out;transition:0.8s ease-out;'; 
        sliderindex.style='-webkit-transform: translate('+itdistance.toString()+'vw);-ms-transform: translate('+itdistance.toString()+'vw);transform: translate('+itdistance.toString()+'vw);-webkit-transition:0.8s ease-out;-o-transition:0.8s ease-out;transition:0.8s ease-out;';
    }
    else{
        itdistance=itdistance+10;
        tdistance=tdistance-36;
        slider.style='-webkit-transform: translate('+tdistance.toString()+'vw);-ms-transform: translate('+tdistance.toString()+'vw);transform: translate('+tdistance.toString()+'vw);-webkit-transition:0.8s ease-out;-o-transition:0.8s ease-out;transition:0.8s ease-out;'; 
        sliderindex.style='-webkit-transform: translate('+itdistance.toString()+'vw);-ms-transform: translate('+itdistance.toString()+'vw);transform: translate('+itdistance.toString()+'vw);-webkit-transition:0.8s ease-out;-o-transition:0.8s ease-out;transition:0.8s ease-out;';

}

}
function  loadmedia(foldername,imgfile,chosendiv){
    restdivs=document.querySelectorAll(".c");
    restdivs.forEach(restdiv=>{
        restdiv.style='border:none;-webkit-box-shadow:none;box-shadow:none'
    });
    chosendiv.style='-webkit-box-shadow: 0 0 15px var(--color2);box-shadow: 0 0 15px var(--color2);border: 2px solid var(--color2);-webkit-transition:.5s ease;-o-transition:.5s ease;transition:.5s ease;';
    const del=document.querySelector('.photocontainerwrap');
    if (del){
        del.remove();
    }
    fetch(imgfile) 
        .then(response => response.json())
        .then(data => {
            const container = document.createElement('div');
            container.classList.add("photocontainerwrap");
            const gallery=document.querySelector(".gallery");
            gallery.appendChild(container)
            data.forEach(filename => {
                const ext = filename.split('.').pop();
                const pc = document.createElement('div');
                pc.classList.add("photocontainer");
                if (ext === 'jpg'  || ext === 'png') {
                    const img = document.createElement('img');
                    img.src = `${foldername}/${filename}`; 
                    pc.appendChild(img);
                } else if (ext === 'mp4') {
                    const video = document.createElement('video');
                    video.controls = true;
                    const source = document.createElement('source');
                    source.src = `${foldername}/${filename}`; 
                    source.type = 'video/mp4';
                    video.appendChild(source);
  
                    pc.appendChild(video);
                }
                pc.onclick = function() {
                    if (pc.requestFullscreen) {
                        pc.requestFullscreen();
                    } else if (pc.mozRequestFullScreen) { 
                        pc.mozRequestFullScreen();
                    } else if (pc.webkitRequestFullscreen) { 
                        pc.webkitRequestFullscreen();
                    } else if (pc.msRequestFullscreen) { 
                        pc.msRequestFullscreen();
                    }
                };

                container.appendChild(pc);
            });
        })
        .catch(error => console.error('Error fetching media:', error));
  };
loadmedia("ast","images6.json",false)



