
let btnhex=document.getElementById('btnhex');
let colorhex=document.getElementById('colorhex');
let codes=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']


function ran(){
    let ran=Math.floor(Math.random()*16);
    console.log(ran)
    return ran;
}
btnhex.addEventListener('click', function(){
    let code="";
    for(let i=0;i<6;i++){
        code+=codes[ran()];
    }
    console.log(code)
    
    document.body.style.backgroundColor='#'+code;
    colorhex.innerText='#'+code;
})