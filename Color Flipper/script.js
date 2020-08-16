let colors=['green', 'red', 'yellow', 'blue'];
let btn=document.getElementById('btn');
let color=document.getElementById('color');
btn.addEventListener('click', function(){
    let ran=Math.floor(Math.random()*4);
    console.log(ran)
    document.body.style.backgroundColor=colors[ran];
    color.innerText=colors[ran];
})

/*Hex*/

