 function makebubble() {

    cluster=""
    
    for(i=1;i<190;i++){
        ran=Math.floor(Math.random()*10)
        cluster += ` <div class="bubble">
        ${ran}
        </div>`
    }
    
    newbubble= document.querySelector('.bottom')
    newbubble.innerHTML = cluster
}

makebubble();
timer=60;
function settimer(){
    settimer=document.querySelector('#settimer');
    
    setInterval( function() {
            if(timer > 0){
            timer--;
            settimer.innerHTML=timer;
        }
        else{
            clearInterval();
        }
        }, 1000);
}
settimer();

function onhit(){
    rn =Math.floor(Math.random()*10)
    hitter=document.querySelector('#hit');
    hitter.innerHTML=rn
}
onhit();
setInterval(function(){
    if(timer>0){
   onhit();
    }
    else{
        clearInterval();
        document.querySelector('#bt').innerHTML= `<h3>Game Over</h3>`   
    }
},5000)

sc=0;
function score(){
     sc += 10;   
     document.querySelector('#score').innerHTML=sc;
 }

 


document.querySelector('.bottom').addEventListener('click',function(e){
    
    target=(e.target.innerHTML);
    numtarger =Number(target);
    if(numtarger== document.querySelector('#hit').textContent){
        score();
        makebubble();
        onhit();
    }
    
     
    
})


