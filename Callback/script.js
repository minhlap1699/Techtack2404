let time = 15;
const id = setInterval(function(){
    time--;
    document.getElementById('countdown').innerHTML = time;
    if(time === 0 ){
    document.getElementById('countdown').innerHTML = 'Hello AE';
    clearInterval(id);
    }
}, 1000);
